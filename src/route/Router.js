import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CheckOut from "../components/CheckOut";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Errorpage from "../components/Errorpage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import Singup from "../components/Singup";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/course',
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
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
        
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Singup></Singup>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/FAQ',
                element:<Faq></Faq>
            }
        ]
    }
])