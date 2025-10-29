"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-[30px] flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Hussain Abbas</h1>
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden border border-gray-400 px-2 py-1 rounded"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-14 left-0 bg-gray-800 w-full flex flex-col items-center md:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="py-2">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2">
            About
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="py-2">
            Projects
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
