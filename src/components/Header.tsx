"use client";

import Link from "next/link";
import { useState } from "react";
import { HeaderLogo } from "./HeaderLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Our Mission" },
  { href: "/impact", label: "Our Impact" },
  { href: "/services", label: "Services" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b-4 border-hope-red">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <HeaderLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              className="bg-hope-red text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-hope-red/90 transition-colors min-h-[44px] flex items-center"
            >
              Donate
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-3 -mr-2 rounded-lg hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
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

        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-slate-300 hover:bg-slate-800 hover:text-white font-medium rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/get-involved#donate"
                  className="block py-3 px-4 bg-hope-red text-white font-semibold rounded-lg text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
