import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componets/Root/Root';
import HOme from './Componets/Home/HOme';
import Applied from './Componets/AppliedJobs/Applied';
import ErrorPage from './Componets/ErrorPage/ErrorPage';
import JobDetails from './Componets/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <HOme></HOme>,
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
