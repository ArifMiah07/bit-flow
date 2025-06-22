import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";



// react router v6 for routing 
// 

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <div>Something went wrong</div>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage> ,
            },
            {
                path: '/about',
                element: <div>this is about page</div>
            },
            {
                path: '/works',
                element: <div>this is our works page</div>
            }
        ]
    }
])


export default router;