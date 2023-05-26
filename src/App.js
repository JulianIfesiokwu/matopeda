import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
