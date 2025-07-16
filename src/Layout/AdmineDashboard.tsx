import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

const AdmineDashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AdmineDashboard;
