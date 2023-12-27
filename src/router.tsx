import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Skill from "./pages/skill";
import Projects from "./pages/projects";
import Error from "./pages/error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/skill',
                element: <Skill />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/error',
                element: <Error />
            },

        ]
    }
])