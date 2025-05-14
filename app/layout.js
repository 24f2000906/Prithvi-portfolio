import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import DotBg from "@/components/DotBg";
import dotenv from 'dotenv';

dotenv.config();

export const metadata = {
  title: "Prithvi",
  description: "Prithvi Bansal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`antialiased relative bg-slate-900`} 
      >
        <DotBg />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
