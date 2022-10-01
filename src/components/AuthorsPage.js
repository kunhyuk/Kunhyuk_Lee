import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
function AuthorsPage(props) {
    const {userId} = useParams()
    const [post, setPost] = useState("")
    useEffect(() => {
		props.sameAuthors.then(setPost)}, [props.sameAuthors])
        if(!post){
            return null
        }
        return(
			<>
			Title: {post[userId].title}<br />

			</>
	)	
}
export default AuthorsPage