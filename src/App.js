import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ALL_ROUTES from "./routes";

import "react-big-calendar/lib/css/react-big-calendar.css";
const routerMap = ALL_ROUTES.map((route) => ({
  path: route?.path,
  element: route?.element,
}));

const router = createBrowserRouter(routerMap);

const App = () => <RouterProvider router={router} />;
export default App;
