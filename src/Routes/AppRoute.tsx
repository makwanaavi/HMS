import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Random from '../components/Random';
import AdmineDashboard from '../Layout/AdmineDashboard';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
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
