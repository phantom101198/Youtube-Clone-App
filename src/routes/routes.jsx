import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VideoPage from "../components/VideoPage";
import MainBody from "../components/MainBody";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainBody />
            },
            {
                path: "watch",
                element: <VideoPage />,
            },
        ],
        // erroeElement: <div className="bg-amber-400">Error 404 Not Found.</div>
    },
])

export default routes;