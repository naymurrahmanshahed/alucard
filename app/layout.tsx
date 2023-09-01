import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';
const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Alucard | Home',
  description: 'A beauty salon and spa website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#D14338',
          colorSuccess: '#439158',
          colorDanger: '#D14338',
          colorWarning: '#FF7A42',
          colorBackground: '#fdfdfb',
          colorText: '#1b1b1d',
          colorTextSecondary: '#918e8d',
          colorTextOnPrimaryBackground: '#f1bfbc',
        },
      }}
    >
      <html lang='en'>
        <body
          className={cn(
            baiJamjuree.className,
            'bg-light text-dark  antialiased'
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
