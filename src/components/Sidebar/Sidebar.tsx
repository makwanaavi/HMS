import { Avatar, Text } from '@mantine/core';
import {
  IconCalendarCheck,
  IconHeartbeat,
  IconLayoutGrid,
  IconMoodHeart,
  IconStethoscope,
  IconVaccine,
} from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: <IconLayoutGrid stroke={1.5} />,
  },
  {
    name: 'Doctors',
    url: '/doctors',
    icon: <IconStethoscope stroke={1.5} />,
  },
  {
    name: 'Patients',
    url: '/patients',
    icon: <IconMoodHeart stroke={1.5} />,
  },
  {
    name: 'Appointments',
    url: '/appointments',
    icon: <IconCalendarCheck stroke={1.5} />,
  },
  {
    name: 'Pharmacy',
    url: '/pharmacy',
    icon: <IconVaccine stroke={1.5} />,
  },
];
const Sidebar = () => {
  return (
    <div className="bg-dark w-[288px] h-screen overflow-y-auto flex flex-col gap-7 items-center ">
      <div className="fixed z-[500] bg-dark text-primary-400 py-3 flex gap-1 items-center">
        <IconHeartbeat size={40} stroke={2.5} />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>

      <div className='flex flex-col gap-5 mt-20'>
      <div className="flex flex-col gap-1 items-center">
        <div className="p-1 bg-primary-400 rounded-full shadow-lg">
          <Avatar variant="filled" src="avatar.png" alt="it's me" size="xl" />
        </div>
        <span className="font-medium text-light">Makwana</span>
        <Text c="dimmed" size="xs">
          Admin
        </Text>
      </div>

      <div className="flex flex-col gap-2">
        {links.map((link) => {
          return (
            <NavLink
              to={link.url}
              key={link.url}
              className={({ isActive }) =>
                `flex items-center gap-3 w-full font-medium text-light px-6 py-5 rounded-lg ${
                  isActive ? 'bg-primary-400 text-light' : 'hover:bg-gray-100 hover:text-dark'
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
