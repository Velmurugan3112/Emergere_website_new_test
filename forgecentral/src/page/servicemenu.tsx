"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  {
    label: "Data, AI & Analytics",
    href: "/data-ai-analytics",
  },
  {
    label: "Digital Services",
    href: "/digital-services",
  },
  {
    label: "Modern Technology",
    href: "/modern-technology",
  },
  {
    label: "Managed Services",
    href: "/managed-services",
  },
  {
    label: "ERP",
    href: "/erp-services",
  },
  {
    label: "Technology Staffing",
    href: "/technology-staffing",
  },
];

const ServicesMenu: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <section className="mt-[-10px]">
      {/* Banner Section */}
      <div
        className="relative w-full h-[280px] bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: "url('/our_service_cover_img.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#042474] to-[#023ED6] opacity-75"></div>
        <div className="relative z-10 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-md text-white/80">
            <Link href="/" className="text-[#6490FE]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/our-services" className="text-[#EFEFEF]">
              Our Services
            </Link>
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="bg-white px-4 md:px-8 py-6">
        <div className="container mx-auto flex justify-between items-center gap-2">
          {/* Title */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-blue-800 tracking-wider">
              OUR SERVICES
            </h2>
            <div className="w-12 h-1 bg-amber-400 rounded self-end mt-2"></div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {services.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-6 py-2 rounded-full font-medium text-md transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-[#B7B7B7] border border-gray-300 hover:bg-gray-100 hover:text-black"
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger Icon (mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-7 h-1 bg-[#023ED6] rounded transition-all duration-300 mb-1 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-[#023ED6] rounded transition-all duration-300 mb-1 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-[#023ED6] rounded transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-4 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#023ED6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            </button>
            {services.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-md transition-all duration-200 mb-1
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-[#B7B7B7] border border-gray-300 hover:bg-gray-100 hover:text-black"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesMenu;
