import { createBrowserRouter } from "react-router";
import Root from "./Root";
import App from "./App";
import Clothes from "./pages/Clothes";
import Health from "./pages/Health";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />,
            },
             {
                path: "/clothes",
                element: <Clothes/>,
            },
             {
                path: "/health",
                element: <Health/>,
            },
             {
                path: "/about",
                element: <About/>,
            },
             {
                path: "/contact",
                element: <Contact/>,
            }
        ],
    },
]);
export default router
