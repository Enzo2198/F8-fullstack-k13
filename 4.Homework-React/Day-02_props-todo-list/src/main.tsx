// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Components from "./Components";
// import App from './App.tsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "/Components",
        element: <Components/>
    }
])

const root = document.getElementById("root");

createRoot(root!).render(
    <RouterProvider router={router} />
)

