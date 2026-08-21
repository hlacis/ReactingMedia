import { useState } from "react";
import { Link, useNavigate } from "react-router";
export function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: body,
                tags: tags.split(/[\s,.]+/).filter(tag => tag !== ""),
                userId: 1,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate("/", { state: { newPost: data } });
            });
    }
    return (
        <div>

            <h1>Create Post</h1>
            <Link to="/">React(ing) Feed</Link>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <label>Body</label>
                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />

                <label>Tags</label>
                <input
                    type="text"
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                />

                <button type="submit">Create Post</button>
            </form>

        </div>


    );
}