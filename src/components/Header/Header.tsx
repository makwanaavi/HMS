import React from 'react';
import ProfileMenu from './ProfileMenu';
import { ActionIcon } from '@mantine/core';
import { IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react';

const Header = () => {
  return (
    <div className="bg-red-200 w-full h-16 flex items-center justify-between px-5">
      <ActionIcon variant="transparent" aria-label="Settings" size="xl">
        <IconLayoutSidebarLeftCollapseFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>

      <ProfileMenu />
    </div>
  );
};

export default Header;
