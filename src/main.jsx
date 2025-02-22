import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllBooks from './compo/AllBooks.jsx';
import AddBooks from './compo/AddBooks.jsx';
import BorrowedBooks from './compo/BorrowedBooks.jsx';
import Home from './compo/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/all_books",
        element: <AllBooks/>,
      },
      {
        path: "/all_books",
        element: <AllBooks/>,
      },
      {
        path: "/add_books",
        element: <AddBooks/>,
      },
      {
        path: "/borrowed_books",
        element: <BorrowedBooks/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
