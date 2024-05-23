import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "MMMML",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // const items = [{ title: 'Sobre', url: '/about' }];
  
  return (
    <html lang="pt-br">
      <body>
      <Navbar logo={{ title: 'home', url: '/' }} items={[{ title: 'Sobre', url: '/about' }]} />
      {children}</body>
    </html>
  );
}
