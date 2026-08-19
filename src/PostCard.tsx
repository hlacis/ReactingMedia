interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

interface PostCardProps {
    post: IPost;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <div className="tags">
                {post.tags.map(tag => (
                    <span key={tag}>#{tag}</span>
                ))}
            </div>
        </div>
    );
}