import classNames from "classnames";
import { useState } from "react";


function Task(props) {

  const Checkbox = () => (
    <div>
        <input type="checkbox" checked={props.status} onClick={() => props.onClick(props.id)} className={checkClass} />
    </div>
  );
  


  const checkClass = classNames('appearance-none rounded w-4 h-4 border', 
    {
      'bg-green-600 border-green-800': props.status === true,
      'bg-white border-gray-400': props.status === false,
    }
  )

  const boxClass = classNames("w-full border rounded-md border-gray-200 flex flex-row p-2 gap-2 items-center",
    {
      'bg-green-100': props.status === true,
    }
  )



  return (
    <div className={boxClass}>
      <Checkbox/>
        <div>
          <div className="font-normal">{props.title}</div>
          <div className="text-gray-500">{props.description}</div>
        </div>
    </div>
  )
};

const initialTasks = [
  {
    id:0,
    title: "Dishwashing",
    description: "Get under the cabinets, do a good job",
    status: false,
  },
  {
    id:1,
    title: "Laundry",
    description: "Get under the cabinets, do a good job",
    status: true,
  },
  {
    id:2,
    title: "Vacumming",
    description: "Get under the cabinets, do a good job",
    status: false,
  },
  {
    id:3,
    title: "Dusting",
    description: "Get under the cabinets, do a good job",
    status: true,
  },

];


function TaskList() {

    const [tasks, setTasks] = useState(initialTasks)
 
    
    function onTaskClick(taskId){
      const newTasks = structuredClone(tasks);
      const taskIdx = newTasks.findIndex(x =>x.id === taskId);
      newTasks[taskIdx].status = !tasks[taskIdx].status;

      newTasks.sort((a,b)=> Number(b.status) - Number(a.status));
      console.log(newTasks);
      setTasks(newTasks);
  }

  

    return (
      <div className="max-w-md mx-auto flex flex-col items-center  gap-6">
        {tasks.map(({id,title,description,status}) => {
          return(
            <Task 
            id = {id}
            title ={title}
            description = {description}
            status={status}
            onClick={onTaskClick}
            />

          );

        })}
        </div>
    );
  };
  
  export default TaskList
  