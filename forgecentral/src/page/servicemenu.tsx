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

  return (
    <section>
      {/* Banner Section */}
      <div
        className="relative w-full h-[280px] bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: "url('/our_service_cover_img.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#042474] to-[#023ED6] opacity-75"></div>
        <div className="relative z-10 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-sm text-white/80">
            <Link href="/home" className="text-[#6490FE]">
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
      <div className="bg-white  px-4 md:px-8 py-6">
        <div className="container mx-auto flex justify-between items-center gap-2">
          {/* Title */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-blue-800 tracking-wider">
              OUR SERVICES
            </h2>
            <div className="w-12 h-1 bg-amber-400 rounded self-end mt-2"></div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-3">
            {services.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200
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
        </div>
      </div>
    </section>
  );
};

export default ServicesMenu;
