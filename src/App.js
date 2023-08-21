import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index path="/" element={<Homepage />} />
      </Route>
    )
  )

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
