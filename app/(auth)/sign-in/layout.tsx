import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alucard | Sign In',
};

const signInLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default signInLayout;
