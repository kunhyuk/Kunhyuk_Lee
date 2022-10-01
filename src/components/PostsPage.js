import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function PostsPage(props) {
	console.log(props)
	const [post, setPost] = useState("")
	useEffect(() => {
		props.posts.then(setPost)}, [props.posts])

	function loaded() {
		const mapped = post.map((posts, i) => { 
			const title = posts.title
            const author = posts.userId
            const body = posts.body
			
			return(
				<>
                <Link to={`/authors/${author}`}><p>Author: {author}</p></Link>
					<Link to={`/${i}`} key={i}>
						<h2>{i+1}. {title}</h2>
					</Link>
                Body: {body}
				</>
			)
		})
		return(
			<>
			{mapped}
			</>
		)
	}
	function loading() {
		return <h1>Loading...</h1>
	}
	return post ? loaded () : loading()
}

export default PostsPage;