import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter(routes);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);