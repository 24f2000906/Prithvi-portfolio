"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:flex md:justify-between bg-slate-900 px-4 md:px-15 text-blue-200 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,1)_-20%,_rgba(15,23,42,1)_40%)]">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="me-animated-logo.png" className="h-auto w-40" />
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`md:flex md:gap-10 md:relative absolute md:top-0 top-29 md:left-auto left-0 md:w-auto w-full
           bg-slate-900 md:bg-transparent p-4 md:p-0 flex flex-col z-100 md:flex-row 
           items-center transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <li><Link onClick={() => setIsOpen(!isOpen)} href="/" className="block p-2 hover:underline">Home</Link></li>
        <li><Link onClick={() => setIsOpen(!isOpen)} href="/about" className="block p-2 hover:underline">About</Link></li>
        <li><Link onClick={() => setIsOpen(!isOpen)} href="/work" className="block p-2 hover:underline">Work</Link></li>
        <li><Link onClick={() => setIsOpen(!isOpen)} href="/contact" className="block p-2 hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}
