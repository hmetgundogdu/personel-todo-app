import { ReactNode } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Head from 'next/head';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <AppHeader />
      <main>{children}</main>
    </div>
  );
}
