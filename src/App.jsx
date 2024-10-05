import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboard';
import React from 'react'
import './index.css'



const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className='bg-white'>
      <button 
        className="bg-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        onClick={handleButtonClick}>Welcome to the Home Page</button>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
