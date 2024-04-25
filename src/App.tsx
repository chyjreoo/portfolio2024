import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import HomePage from "./page/HomePage";
import ProjectDetailPage from "./page/projects/ProjectDetailPage";
import projectsLoader from "./page/projects/projectsLoader";

const router = createHashRouter([
    {
        path: '/portfolio2024/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/portfolio2024/projects/:name',
                element: <ProjectDetailPage />,
                loader: projectsLoader
            },

        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App
