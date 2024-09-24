import classNames from "classnames"

const getRandomElement = <T,>(arr: T[]): T => {
    const length = arr.length
    const randInt = Math.random() // number between 0 -> 1
    const randIndex = Math.floor(randInt*length) // integer between 0 -> length - 1 (an index)
    return arr[randIndex]
}

const colors = ['bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500']

const days = ['Mon', 'Tues', 'Wed','Thurs','Fri','Sat','Sun']

const HeatMapSquare = () => {
    const bgColor = getRandomElement(colors)
    
    return (
        <div className={classNames("w-16 aspect-square", bgColor)}></div>
    )
}

const Grid = () => {
    return (
        <div className="max-w-md mx-auto flex gap-3">
            {days.map((element, index, array) =>
                    <div className="flex-col gap-4">
                        <div className="text-center">{element}</div>
                        <div className="flex-col flex gap-3">
                            <HeatMapSquare />
                            <HeatMapSquare />
                            <HeatMapSquare />
                            <HeatMapSquare />
                            <HeatMapSquare />
                        </div>
                    </div>
            )}
        </div>
    )
}




export default Grid;