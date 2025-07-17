import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Random from '../components/Random';
import AdmineDashboard from '../Layout/AdmineDashboard';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
         <Route path='/register' element={<RegisterPage/>}/>
        <Route path="/" element={<AdmineDashboard />}>
          <Route path="dashboard" element={<Random />} />
          <Route path="doctors" element={<Random />} />
          <Route path="patients" element={<Random />} />
          <Route path="appointments" element={<Random />} />
          <Route path="pharmacy" element={<Random />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
