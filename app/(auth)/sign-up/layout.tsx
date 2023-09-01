import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alucard | Sign Up',
};

const signUpLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default signUpLayout;
