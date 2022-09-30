// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"

// function SingleBlog(props) {
// 	const {userId} = useParams()
    
// 	const [post, setPost] = useState("")
// 	useEffect(() => {
// 		props.posts.then(setPost)}, [props.posts])
// 	if(!post){
// 		return null
// 	}	


// 	return(
// 			<>
//             Author: {post[userId].userId}<br/>
//             Title: {post[userId].title}<br/>
//             Body: {post[userId].body}<br/>

// 			</>
// 	)
    
// }


// export default SingleBlog;