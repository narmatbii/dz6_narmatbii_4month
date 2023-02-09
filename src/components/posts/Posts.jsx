import { useEffect, useState } from "react"
import Comments from "../comments/Comments.jsx";

 function Posts(){
    const [posts,setPosts] = useState([])
     const [click, setClick] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

     const handleClick = (e) => {
        setClick(click === e ? null : e)
     }


    return(
        <div>
            {
                posts.map(p => (
                    <>
                        <p key={p.id}>Title:  {p.title}</p>
                        <button onClick={() => handleClick(p.id)}>coments</button>
                        {click === p.id && <Comments c={p}/>}
                    </>
                ))
            }
        </div>
    )
}

export default Posts;