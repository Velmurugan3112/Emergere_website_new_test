"use client";

import React, { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import DropdownMenu from "./dropdownmenu";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const servicesItems = [
    {
      label: "Data, AI & Analytics",
      icon: "/data_ai_analytics_dd_icon.svg",
      hoverIcon: "/data_ai_analytics_dd_hicon.svg",
      href: "/data-ai-analytics",
    },
    {
      label: "Digital Services",
      icon: "/digital_services_dd_icon.svg",
      hoverIcon: "/digital_services_dd_hicon.svg",
      href: "/digital-services",
    },
    {
      label: "Modern Technology",
      icon: "/modern_technology_dd_icon.svg",
      hoverIcon: "/modern_technology_dd_hicon.svg",
      href: "/modern-technology",
    },
    {
      label: "Managed Services",
      icon: "/managed_services_dd_icon.svg",
      hoverIcon: "/managed_services_dd_hicon.svg",
      href: "/managed-services",
    },
    {
      label: "ERP",
      icon: "/erp_dd_icon.svg",
      hoverIcon: "/erp_dd_hicon.svg",
      href: "/erp-services",
    },
    {
      label: "Technology Staffing",
      icon: "/technology_staffing_dd_icon.svg",
      hoverIcon: "/technology_staffing_dd_hicon.svg",
      href: "/technology-staffing",
    },
  ];

  const industriesItems = [
    {
      label: "Consumer & Retail",
      icon: "/consumer_retail_dd_icon.svg",
      hoverIcon: "/consumer_retail_dd_hicon.svg",
      href: "/industries",
    },
    {
      label: "Financial Services",
      icon: "/financial_services_dd_icon.svg",
      hoverIcon: "/financial_services_dd_hicon.svg",
      href: "/industries",
    },
    {
      label: "Healthcare & Lifesciences",
      icon: "/hc_ls_dd_icon.svg",
      hoverIcon: "/hc_ls_dd_hicon.svg",
      href: "/industries",
    },
    {
      label: "Banking & Capital Markets",
      icon: "/banking_capital_dd_icon.svg",
      hoverIcon: "/banking_capital_dd_hicon.svg",
      href: "/industries",
    },
    {
      label: "Industrial Manufacturing",
      icon: "/industrial_manufacturing_dd_icon.svg",
      hoverIcon: "/industrial_manufacturing_dd_hicon.svg",
      href: "/industries",
    },
    {
      label: "Technology, Media & Telecom",
      icon: "/tech_media_telecom_dd_icon.svg",
      hoverIcon: "/tech_media_telecom_dd_hicon.svg",
      href: "/industries",
    },
  ];

  const insightsItems = [
    {
      label: "Case studies",
      icon: "/case_studies_dd_icon.svg",
      hoverIcon: "/case_studies_dd_hicon.svg",
      href: "/insights",
    },
    {
      label: "Blogs",
      icon: "/blogs_dd_icon.svg",
      hoverIcon: "/blogs_dd_hicon.svg",
      href: "/insights",
    },
    {
      label: "Whitepapers",
      icon: "/whitepaper_dd_icon.svg",
      hoverIcon: "/whitepaper_dd_hicon.svg",
      href: "/insights",
    },
    {
      label: "Newsletters",
      icon: "/newsletter_dd_icon.svg",
      hoverIcon: "/newsletter_dd_hicon.svg",
      href: "/insights",
    },
  ];

  const isActiveParent = (routes: string[]) =>
    routes.some((r) => pathname.startsWith(r));

  return (
    <>
      <header className="sticky top-[20px] z-[9999] bg-[#FBFBFB]/80 backdrop-blur-md px-9 py-6 w-[85%] mx-auto mt-3 mb-3 rounded-[14px] shadow-lg">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Nav_Emg_Logo.svg"
              alt="Emergere Logo"
              className="w-full"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-10 text-md">
            <Link
              href="/"
              className={`font-semibold hover:text-[#023ED6] ${
                pathname === "/" ? "text-[#023ED6]" : "text-[#555555]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`font-semibold hover:text-[#023ED6] ${
                pathname === "/about-us" ? "text-[#023ED6]" : "text-[#555555]"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onClick={() => toggleDropdown("services")}
            >
              <button
                className={`group font-semibold flex items-center gap-1 transition-colors ${
                  isActiveParent(servicesItems.map((i) => i.href!))
                    ? "text-[#023ED6]"
                    : "text-[#555555] hover:text-[#023ED6]"
                }`}
              >
                Our Services
                <span className="relative w-4 h-2">
                  <img
                    src="/arrow-down.svg"
                    alt=""
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                      openDropdown === "services"
                        ? "rotate-180 opacity-0"
                        : "opacity-100"
                    }`}
                  />
                  <img
                    src="/arrow-down-blue.svg"
                    alt=""
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                      openDropdown === "services"
                        ? "rotate-180 opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </span>
              </button>
            </div>

            {/* Industries Dropdown */}
            <div
              ref={industriesRef}
              className="relative"
              onClick={() => toggleDropdown("industries")}
            >
              <button
                className={`group font-semibold flex items-center gap-1 transition-colors ${
                  isActiveParent(industriesItems.map((i) => i.href!))
                    ? "text-[#023ED6]"
                    : "text-[#555555] hover:text-[#023ED6]"
                }`}
              >
                Industries
                <span className="relative w-4 h-2">
                  <img
                    src="/arrow-down.svg"
                    alt=""
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                      openDropdown === "industries"
                        ? "rotate-180 opacity-0"
                        : "opacity-100"
                    }`}
                  />
                  <img
                    src="/arrow-down-blue.svg"
                    alt=""
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                      openDropdown === "industries"
                        ? "rotate-180 opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </span>
              </button>
            </div>

            {/* Insights Dropdown */}
            <div
              ref={insightsRef}
              className="relative"
              onClick={() => toggleDropdown("insights")}
            >
              <button
                className={`group font-semibold flex items-center gap-1 transition-colors ${
                  openDropdown === "insights"
                    ? "text-[#023ED6]"
                    : "text-[#555555] hover:text-[#023ED6]"
                }`}
              >
                Insights
                <span className="relative w-4 h-2">
                  <img
                    src="/arrow-down.svg"
                    alt=""
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                      openDropdown === "insights"
                        ? "rotate-180 opacity-0"
                        : "opacity-100"
                    }`}
                  />
                  <img
                    src="/arrow-down-blue.svg"
                    alt=""
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ${
                      openDropdown === "insights"
                        ? "rotate-180 opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </span>
              </button>
            </div>

            <Link
              href="/careers"
              className={`font-semibold hover:text-[#023ED6] ${
                pathname === "/careers" ? "text-[#023ED6]" : "text-[#555555]"
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="/contact-us">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#4568dc] to-[#ffb03a] text-white py-4 px-6 rounded-full font-bold shadow-md text-md transition-transform duration-200 hover:scale-105 outline outline-2 outline-[#FFFFFF]">
                Get in Touch
                <img
                  src="/arrow-right-white.svg"
                  alt="arrow right"
                  className="w-5 h-5 object-cover"
                />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* DropDowns anchored to the correct button */}
      {openDropdown === "services" && (
        <DropdownMenu items={servicesItems} anchorRef={servicesRef} isOpen />
      )}
      {openDropdown === "industries" && (
        <DropdownMenu
          items={industriesItems}
          anchorRef={industriesRef}
          isOpen
        />
      )}
      {openDropdown === "insights" && (
        <DropdownMenu items={insightsItems} anchorRef={insightsRef} isOpen />
      )}
    </>
  );
};

export default NavBar;
