import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alucard | Sign up',
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
