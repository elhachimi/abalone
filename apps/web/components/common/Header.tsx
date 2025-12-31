"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Villas", page: "/villas" },
  { name: "For Sale", page: "Villas?type=sale" },
  { name: "For Rent", page: "Villas?type=rent" },
  { name: "Contact", page: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg =
    isScrolled || !isHomePage ? "bg-white shadow-sm" : "bg-transparent";

  const textColor = isScrolled || !isHomePage ? "text-[#1A3A52]" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"} className={`text-2xl font-semibold ${textColor}`}>
            Lombok <span className="text-[#C17E61]">Pearl</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.page}
                className={`${textColor} hover:text-[#C17E61] transition-colors font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link href={""}>
              <Button className="bg-[#C17E61] hover:bg-[#a86a50] text-white rounded-full px-6">
                Inquire Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href=""
                  className="py-3 text-[#1A3A52] hover:text-[#C17E61] transition-colors font-medium border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={""}
                className="mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-[#C17E61] hover:bg-[#a86a50] text-white rounded-full">
                  Inquire Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
