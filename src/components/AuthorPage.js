import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function AuthorPage(props) {
    const {userId} = useParams()
    const [post, setPost] = useState("")
    useEffect(() => {
		props.posts.then(setPost)}, [props.posts])
        if(!post){
            return null
        }
        return(
			<>
			Title: {post[userId].title}<br />
            Author: {post[userId].userId}<br />
            Body: {post[userId].body}<br />
            Post Id: {post[userId].id}<br />
			</>
	)	
}

export default AuthorPage