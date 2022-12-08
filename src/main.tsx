import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './components/mainForms/Login/Login';
import Register from './components/mainForms/Register/Register';
import Requests from './components/pages/requests/Requests';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Login />,
   },
   {
      path: '/register',
      element: <Register />,
   },
   {
      path: '/requests',
      element: <Requests />,
   },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
