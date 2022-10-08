import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Content from './pages/mycontent';
import Admin from './pages/myadmin';





const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/admin", element: <Admin /> },
  { path: "/Signin", element: <Signin /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/mycontent", element: <Content /> },
  { path: "/myadmin", element: <Admin /> },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
