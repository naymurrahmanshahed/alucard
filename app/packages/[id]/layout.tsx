import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alucard | Package Details',
};

export default function PackageDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
