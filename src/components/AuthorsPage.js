import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//Authors page I couldn't finish
//I think I should send data from index.js after making function
//that can find same user Id as param
//I think I could do it better if I had an API that stores same author
//Also, it is little challenging.
//I might be able to do it if I make it again from beginning.
//Thank you
function AuthorsPage(props) {
    
    console.log(props)
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
            Author: {post[userId].userId}<br />
            Body: {post[userId].body}<br />
            Post Id: {post[userId].id}<br />
            
			</>
	)	
}
export default AuthorsPage