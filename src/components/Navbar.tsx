"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu();
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const hash = href.substring(1); // e.g. "#services"
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth" });
    } else if (href === "/about" && pathname === "/about") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href === "/services" && pathname === "/services") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const mobileMenu =
    menuOpen && mounted
      ? createPortal(
          <div
            id="mobile-nav-panel"
            className="fixed inset-0 z-[9998] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/40 cursor-pointer"
              aria-label="Close menu"
              onClick={closeMenu}
            />

            <nav className="absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-2xl pt-6 pb-8 px-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-border/40">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Nischay Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="text-sm font-serif font-black tracking-tighter uppercase">Nischay</span>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-11 h-11 -mr-2 cursor-pointer"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <X className="w-6 h-6 pointer-events-none" strokeWidth={1.5} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-4 text-base font-medium tracking-wide border-b border-gray-border/40 hover:text-gray-500 transition-colors cursor-pointer"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className="mt-auto px-5 py-3.5 bg-black text-white text-sm tracking-wide font-medium text-center hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, "/#contact")}
              >
                Get in Touch
              </a>
            </nav>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] md:z-50 isolate">
        <nav className="relative w-full flex items-center justify-between px-5 sm:px-6 md:px-8 py-4 md:py-6 bg-white md:bg-white/95 md:backdrop-blur-md border-b border-gray-border/50">
          <a
            href="/"
            className="flex items-center gap-3 shrink-0"
            onClick={(e) => {
              closeMenu();
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/logo.png"
              alt="Nischay Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-2xl font-serif font-black tracking-tighter uppercase">
              Nischay
              <span className="font-sans font-light tracking-normal text-sm ml-1.5 text-gray-500 lowercase">
                consultancy
              </span>
            </span>
          </a>

          <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-10 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-500 transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="/#contact"
              className="hidden md:inline-block px-5 py-2.5 bg-black text-white text-sm tracking-wide font-medium hover:bg-gray-800 transition-colors duration-300"
              onClick={(e) => handleNavClick(e, "/#contact")}
            >
              Contact
            </a>
            <button
              type="button"
              className="md:hidden relative z-10 flex items-center justify-center w-12 h-12 -mr-2 text-black cursor-pointer select-none [-webkit-tap-highlight-color:transparent]"
              style={{ touchAction: "manipulation" }}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <X className="w-6 h-6 pointer-events-none" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6 pointer-events-none" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileMenu}
    </>
  );
}
