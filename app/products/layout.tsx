import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alucard | Products',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}