import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import DotBg from "@/components/DotBg";
import dotenv from 'dotenv';

dotenv.config();

export const metadata = {
  title: "Prithvi Bansal | Data Scientist | Developer ",
  description: "Portfolio of Prithvi Bansal, a Data Scientist and full-stack developer specializing in Python, Flask, React, Next.js, Node.js, and UI/UX design. Contact for freelance or full-time opportunities.",
  keywords: [
    "Prithvi Bansal",
    "Portfolio",
    "Data Scientist",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Machine Learning",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer"
  ],
  authors: [{ name: "Prithvi Bansal", url: "https://prithvi-bansal.vercel.app" }],
  creator: "Prithvi Bansal",
  openGraph: {
    title: "Prithvi Bansal | Data Scientist | Full-Stack Developer",
    description: "Explore my projects, achievements and contact details.",
    url: "https://prithvi-bansal.vercel.app",
    siteName: "Prithvi Bansal Portfolio",
    images: [
      {
        url: "/prithvi.jpg",
        width: 930,
        height: 1240,
        alt: "Prithvi Bansal Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prithvi Bansal | Data Scientist | Full-Stack Developer",
    description: "Explore my portfolio website.",
    images: ["/prithvi.jpg"],
  },
  metadataBase: new URL("https://prithvi-bansal.vercel.app"),
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
