import { Routes, Route} from "react-router";
import { CreatePost } from "./CreatePost";
import { FeedPage } from "./FeedPage";

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
        </Routes>
    );
}

export default App;