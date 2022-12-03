import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './components/mainForms/Login/Login';
import Register from './components/mainForms/Register/Register';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Login />,
   },
   {
      path: '/register',
      element: <Register />,
   },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
