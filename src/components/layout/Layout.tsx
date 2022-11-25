import React from 'react';
import MainNavigation from '@/components/layout/MainNavigation';
import { LayoutMain } from '@/components/layout/LayoutStyle';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      <LayoutMain>{children}</LayoutMain>
    </>
  );
}

export default Layout;
