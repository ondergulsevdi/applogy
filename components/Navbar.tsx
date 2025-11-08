"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/apps", label: "Our Apps" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0612]/80 backdrop-blur-xl border-b border-orange-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/images/logo.png" 
              alt="Applogy Logo" 
              width={48} 
              height={48} 
              className="rounded-xl group-hover:scale-105 transition-transform"
            />
            <span className="inline-block text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform leading-tight pb-1">
              Applogy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/developer/onder-gulsevdi/id1495105773"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all"
            >
              App Store
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-orange-500/10 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-semibold transition-all px-4 py-3 rounded-lg ${
                    pathname === link.href
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://apps.apple.com/developer/onder-gulsevdi/id1495105773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-3 rounded-lg text-center"
              >
                App Store
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

