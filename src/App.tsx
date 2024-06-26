import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import HomePage from "./page/HomePage";
import ProjectDetailPage from "./page/projects/ProjectDetailPage";
import projectsLoader from "./page/projects/projectsLoader";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/projects/:name',
                element: <ProjectDetailPage />,
                loader: projectsLoader
            },

        ]
    }
],{ basename: "/portfolio2024" })
function App() {
    return <RouterProvider router={router} />
}

export default App
