import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import "./index.css";
import {Link } from "react-router";
import { useLocation } from "react-router";

interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

export function FeedPage() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                if (location.state?.newPost) {
                    setPosts([location.state.newPost, ...data.posts]);
                } else {
                    setPosts(data.posts);
                }
            });
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

            <h1>React(ing) Feed</h1>
            <Link to="/create">Create Post</Link>

            <br />
            <br />

            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}

        </div>
    );
}