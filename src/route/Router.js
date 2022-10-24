import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import Errorpage from "../components/Errorpage";
import Main from "../layout/Main";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses')
            }
        ]
    }
])