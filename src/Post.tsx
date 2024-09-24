function PostMeta(){
    return(
            <div className="flex-col">
                <div className="flex gap-1">
                    <div className="font-normal">Helena</div> 
                    <div className="text-gray-500">in Group name </div> 
                </div>
                <div className="text-gray-500">3 min ago</div>
            </div>
           
    )
}

function Avatar(){
    return(
        <img src='avatar.png' className="rounded-full size-10 "/>
    )

}
function Feedback(){
    return(
        <div className="flex gap-6">
            <div className="flex gap-2">
                <img src='like.png'/>
                <div className="flex gap-1"> <p>21</p> <p>likes</p> </div>
            </div>
            <div className="flex gap-2">
                <img src='message-square.png'/>
                <div> 4 comments </div>
            </div>
        </div>
    )
}

function PostContent(){
    return(
        <div className="max-w-md mx-auto flex-col flex gap-3">
            <img src='post.jpeg' className="w-96 h-96"/>
            <div className="text-lg">Post description</div>
        </div>
    )
}

function Post(){
    return(
        <div className="max-w-md mx-auto flex gap-3">
            <Avatar/>
            <div className="flex-col flex gap-3">
                <PostMeta/>
                <PostContent/>
                <Feedback/>
            </div>
        </div>
         
    )
}

export default Post;