import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/CheckOut";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Errorpage from "../components/Errorpage";
import Login from "../components/Login";
import Singup from "../components/Singup";
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
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
                
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
        
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Singup></Singup>
            }
        ]
    }
])