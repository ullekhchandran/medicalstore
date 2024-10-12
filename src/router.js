import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";

import Create from "./components/create";
import Read from "./components/read";

const router =createBrowserRouter([

    {path:'/', element: <App/>},
    {path:'signup', element: <SignUp/>},
    {path:'login/', element: <Login/>},
    {path: 'create/', element:<Create/>},
    {path: 'read/', element:<Read/>}
   
  
])

export default router;