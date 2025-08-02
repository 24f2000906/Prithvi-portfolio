"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="absolute w-full h-29.5 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,1)_-20%,_rgba(15,23,42,1)_40%)]"></div>
      <nav className="md:flex md:justify-between px-4 md:px-15 text-blue-200">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src="me-animated-logo.png" className="h-auto w-40" />
          </Link>
          {/* Hamburger */}
          <button className="md:hidden cursor-pointer" onClick={() => setMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`md:flex md:gap-10 md:relative absolute top-0 md:left-auto left-0 md:w-auto w-full
           bg-slate-900/50 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none text-lg font-semibold p-4 md:p-0 flex flex-col z-100 md:flex-row
           items-center ${(!menu) ? "hidden" : "block"}`}>
          {/* Cross */}
          <button className={`md:hidden cursor-pointer absolute right-0 top-0 m-4`} onClick={() => setMenu(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          </button>
          <li><Link onClick={() => setMenu(false)} href="/" className={`block p-2 transform duration-300 hover:scale-150 ${(pathname === '/') ? 'scale-150 underline' : ''}`}>Home</Link></li>
          <li><Link onClick={() => setMenu(false)} href="/about" className={`block p-2 transform duration-300 hover:scale-150 ${(pathname === '/about') ? 'scale-150 underline' : ''}`}>About</Link></li>
          <li><Link onClick={() => setMenu(false)} href="/work" className={`block p-2 transform duration-300 hover:scale-150 ${(pathname === '/work') ? 'scale-150 underline' : ''}`}>Work</Link></li>
          <li><Link onClick={() => setMenu(false)} href="/contact" className={`block p-2 transform duration-300 hover:scale-150 ${(pathname === '/contact') ? 'scale-150 underline' : ''}`}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
