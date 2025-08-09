"use client";

import React, { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import DropdownMenu from "./dropdownmenu";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      href: "#",
    },
    {
      label: "Blogs",
      icon: "/blogs_dd_icon.svg",
      hoverIcon: "/blogs_dd_hicon.svg",
      href: "https://blogs.emergertech.com/category/blogs/",
    },
    {
      label: "Whitepapers",
      icon: "/whitepaper_dd_icon.svg",
      hoverIcon: "/whitepaper_dd_hicon.svg",
      href: "https://blogs.emergertech.com/category/white-paper/",
    },
    {
      label: "Newsletters",
      icon: "/newsletter_dd_icon.svg",
      hoverIcon: "/newsletter_dd_hicon.svg",
      href: "https://blogs.emergertech.com/category/newsletter/",
    },
  ];

  const isActiveParent = (routes: string[]) =>
    routes.some((r) => pathname.startsWith(r));

  return (
    <>
      <header className="sticky top-[20px] z-[9999] bg-[#FBFBFB]/80 backdrop-blur-md px-4 py-4 sm:w-[90%] lg:w-[85%] mx-auto mt-3 mb-3 rounded-[14px] shadow-lg">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Nav_Emg_Logo.svg"
              alt="Emergere Logo"
              className="w-full max-w-[240px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-md">
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

          {/* CTA Button (desktop) */}
          <div className="hidden md:flex items-center">
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
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-4/5 max-w-xs min-h-screen bg-[#FBFBFB] shadow-lg p-6 flex flex-col gap-6 animate-slide-in"
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
            <Link
              href="/"
              className={`font-semibold py-2 ${
                pathname === "/" ? "text-[#023ED6]" : "text-[#555555]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`font-semibold py-2 ${
                pathname === "/about-us" ? "text-[#023ED6]" : "text-[#555555]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            {/* Services Dropdown (mobile) */}
            <details className="group">
              <summary
                className={`font-semibold py-2 flex items-center cursor-pointer group-open:text-[#023ED6] ${
                  servicesItems.some((item) => pathname === item.href)
                    ? "text-[#023ED6]"
                    : "text-[#555555]"
                }`}
              >
                Our Services
                <span className="relative w-4 h-2 ml-2">
                  <img
                    src="/arrow-down.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-open:rotate-180 group-open:opacity-0 opacity-100"
                  />
                  <img
                    src="/arrow-down-blue.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-open:rotate-180 group-open:opacity-100 opacity-0"
                  />
                </span>
              </summary>
              <div className="flex flex-col pl-4">
                {servicesItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={`py-2 flex items-center gap-2 font-semibold group ${
                      pathname === item.href
                        ? "text-[#023ED6]"
                        : "text-[#555555] hover:text-[#023ED6]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative w-5 h-5">
                      <img
                        src={
                          pathname === item.href ? item.hoverIcon : item.icon
                        }
                        alt=""
                        className={
                          `absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ` +
                          (pathname === item.href
                            ? "opacity-100"
                            : "group-hover:opacity-0 opacity-100")
                        }
                      />
                      <img
                        src={item.hoverIcon}
                        alt=""
                        className={
                          `absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ` +
                          (pathname === item.href
                            ? "opacity-0"
                            : "opacity-0 group-hover:opacity-100")
                        }
                      />
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            {/* Industries Dropdown (mobile) */}
            <details className="group">
              <summary
                className={`font-semibold py-2 flex items-center cursor-pointer group-open:text-[#023ED6] ${
                  industriesItems.some((item) => pathname === item.href)
                    ? "text-[#023ED6]"
                    : "text-[#555555]"
                }`}
              >
                Industries
                <span className="relative w-4 h-2 ml-2">
                  <img
                    src="/arrow-down.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-open:rotate-180 group-open:opacity-0 opacity-100"
                  />
                  <img
                    src="/arrow-down-blue.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-open:rotate-180 group-open:opacity-100 opacity-0"
                  />
                </span>
              </summary>
              <div className="flex flex-col pl-4">
                {industriesItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="py-2 flex items-center gap-2 text-[#555555] hover:text-[#023ED6] group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative w-5 h-5">
                      <img
                        src={item.icon}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                      />
                      <img
                        src={item.hoverIcon}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      />
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            {/* Insights Dropdown (mobile) */}
            <details className="group">
              <summary
                className={`font-semibold py-2 flex items-center cursor-pointer group-open:text-[#023ED6] ${
                  insightsItems.some((item) => pathname === item.href)
                    ? "text-[#023ED6]"
                    : "text-[#555555]"
                }`}
              >
                Insights
                <span className="relative w-4 h-2 ml-2">
                  <img
                    src="/arrow-down.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-open:rotate-180 group-open:opacity-0 opacity-100"
                  />
                  <img
                    src="/arrow-down-blue.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-open:rotate-180 group-open:opacity-100 opacity-0"
                  />
                </span>
              </summary>
              <div className="flex flex-col pl-4">
                {insightsItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="py-2 flex items-center gap-2 text-[#555555] hover:text-[#023ED6] group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative w-5 h-5">
                      <img
                        src={item.icon}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                      />
                      <img
                        src={item.hoverIcon}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      />
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              href="/careers"
              className={`font-semibold py-2 ${
                pathname === "/careers" ? "text-[#023ED6]" : "text-[#555555]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#4568dc] to-[#ffb03a] text-white py-4 px-6 rounded-full font-bold shadow-md text-md transition-transform duration-200 hover:scale-105 outline outline-2 outline-[#FFFFFF] mt-4">
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
      )}

      {/* DropDowns anchored to the correct button (desktop only) */}
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
