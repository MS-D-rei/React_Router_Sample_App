import React from 'react';
import MainNavigation from '@/components/layout/MainNavigation';
import { LayoutMain } from '@/components/layout/LayoutStyle';
import { Outlet } from 'react-router-dom';

// interface LayoutProps {
//   children: React.ReactNode;
// }

function Layout() {
  return (
    <>
      <MainNavigation />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </>
  );
}

export default Layout;
