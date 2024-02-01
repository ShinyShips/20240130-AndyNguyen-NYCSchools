import type { ReactNode } from 'react';


import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="min-h-svh">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
