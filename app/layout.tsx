import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/style.css";
import "./css/stylea.css";
import "./css/stylec.css";


 


import Nav from './nav';
import Footer from './footer';



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <Nav/> {children}<Footer/> </body>
    </html>
  );
}
