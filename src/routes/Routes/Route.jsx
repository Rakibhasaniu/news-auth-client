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
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },


        ]
    }
])