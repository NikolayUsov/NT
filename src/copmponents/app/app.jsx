import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Table from '../table/table';
import Traiding from '../traiding/traiding';
import './app.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Traiding />,
  },
  {
    path: '/archive',
    element: <Table />,
  },
])

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}
