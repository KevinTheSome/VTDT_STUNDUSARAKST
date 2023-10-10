import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllClasses from "./AllClasses.jsx";

const rauter = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/:kurss",
            element: <AllClasses />
        }
    ]
);

export default rauter;