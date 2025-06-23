import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import OurWorksPage from "../pages/OurWorksPage/OurWorksPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



// react router v6 for routing 
// 

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage> ,
            },
            {
                path: '/about-us',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/our-works',
                element: <OurWorksPage></OurWorksPage>
            }
        ]
    }
])


export default router;