'use client';

import Footer from '@/components/shared/Footer';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';
import NavbarMini from '@/components/shared/NavbarMini';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (
    (children as ReactElement)?.props?.childProp?.segment.at(0) === 'notfound'
  ) {
    return <>{children}</>;
  }
  switch (pathname) {
    case '/':
      return (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      );

    case '/user/sign-in':
    case '/user/sign-up':
      return (
        <>
          <NavbarMini />
          {children}
          <FooterMini />
        </>
      );
    default:
      return (
        <>
          <Navbar />
          {children}
          <FooterMini />
        </>
      );
  }
};

export default MasterProvider;
