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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body
        className={`antialiased relative bg-slate-900`}
      >
        <DotBg />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
