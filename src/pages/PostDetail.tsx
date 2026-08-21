import {useState, useEffect} from "react"
import {useNavigate,useParams} from "react-router"


export function PostDetail() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [post,setPost] = useState(null)
    const [comments,setComments] = useState([])
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1)
            setLiked(true)
        } else {
            setLikes(likes - 1)
            setLiked(false)
        }
    }


    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
            .then(data => {
                setPost(data)
                setLikes(data.reactions.likes)
            })


        fetch(`https://dummyjson.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data.comments))


    }, []);

    if (!post) {
        return null;
    }

    const deletePost = () => {
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate("/")
            })
    }

    return (
        <div className="post-detail">
            <div className="post-card">
                <h1>{post.title}</h1>

                <p>{post.body}</p>

                <div className="post-actions">
                    <div className="like-section">
                        <span>{likes} likes</span>

                        <button onClick={handleLike}>
                            {liked ? "Liked" : "Like"}
                        </button>
                    </div>

                    <button onClick={deletePost}>
                        Delete post
                    </button>
                </div>
            </div>

            <h2>All comments</h2>

            <div className="comments">
                {comments.map((comment: Comment) => (
                    <div className="comment" key={comment.id}>
                        <small>{comment.user.username}</small>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}