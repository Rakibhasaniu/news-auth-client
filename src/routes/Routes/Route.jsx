import { createBrowserRouter } from "react-router-dom";
import Root from "../../layotu/Root";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home/Home";
import News from "../../Pages/Home/News/News";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])