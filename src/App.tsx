import { Routes, Route} from "react-router";
import { CreatePost } from "./pages/CreatePost.tsx";
import { FeedPage } from "./pages/FeedPage.tsx";
import {PostDetail} from "./pages/PostDetail.tsx";

interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];

}

export function App() {

    return (
        <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetail/>} />
        </Routes>
    );
}

export default App;