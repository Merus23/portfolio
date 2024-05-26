import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'MMMML',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="px-10 lg:px-28 xl:px-40">
        <Navbar
          logo={{ title: 'home', url: '/' }}
          item={{ title: 'Sobre', url: '/about' }}
        />
        {children}
      </body>
    </html>
  );
}
