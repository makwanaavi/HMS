import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Random from '../components/Random';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <div className="flex ">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Header />
          <Routes>
            <Route path="**" element={<Random />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;
