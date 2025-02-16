"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, WifiIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "SATIN AL", href: "#purchase" },
  { name: "NASIL BAĞLANIRIM", href: "#how-to-connect" },
  { name: "ÖZELLİKLER", href: "#features" },
  // { name: "EKİBİMİZ", href: "#team" },
  { name: "SIK SORULAN SORULAR", href: "#faq" },
  { name: "BİZE ULAŞIN", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed  w-full backdrop-blur-sm z-50 shadow-sm transition-colors duration-500 ${
        isScrolled ? "bg-primary-900/95" : "bg-primary-100/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="cursor-pointer pt-4">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex flex-col"
            >
              <span
                className={`text-3xl font-extrabold tracking-wider transition-colors duration-300 relative ${
                  isScrolled ? "text-white" : "text-primary-900"
                }`}
              >
                WiraSp
                <span className="relative">
                  o
                  <WifiIcon
                    className={`w-5 h-5 absolute -top-0 left-1/2 -translate-x-1/2 ${
                      isScrolled ? "text-blue-500" : "text-blue-700"
                    }`}
                  />
                </span>
                t
              </span>
              <span
                className={`text-sm text-right font-medium tracking-wide transition-colors duration-300 -mt-0.5 ${
                  isScrolled ? "text-white" : "text-primary-900"
                }`}
              >
                güvenli bağlan
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`hover:text-primary-200 cursor-pointer transition-colors ${
                  isScrolled ? "text-white" : "text-primary-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon
                className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-primary-900"
                }`}
              />
            ) : (
              <Bars3Icon
                className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-primary-900"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 absolute top-20 left-0 right-0 bg-primary-900 shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white hover:text-primary-200 cursor-pointer transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
