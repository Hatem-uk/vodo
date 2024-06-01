import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
import { RouteObject } from "react-router-dom";
const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: ":explore",
                element: <ExplorePage />
            },
            {
                path: ":explore/:id",
                element: <DetailsPage />
            },
            {
                path: "search",
                element: <SearchPage />
            }
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;
