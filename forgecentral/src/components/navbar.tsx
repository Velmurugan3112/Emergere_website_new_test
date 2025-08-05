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
      href: "/data-ai-analytics",
    },
    {
      label: "Digital Services",
      icon: "/digital_services_dd_icon.svg",
      href: "/digital-services",
    },
    {
      label: "Modern Tecchnology",
      icon: "/modern_technology_dd_icon.svg",
      href: "/modern-technology",
    },
    {
      label: "Managed Services",
      icon: "/managed_services_dd_icon.svg",
      href: "/managed-services",
    },
    {
      label: "ERP",
      icon: "/erp_dd_icon.svg",
      href: "/erp-services",
    },
    {
      label: "Technology Staffing",
      icon: "/technology_staffing_dd_icon.svg",
      href: "/technology-staffing",
    },
  ];

  const industriesItems = [
    {
      label: "Consumer & Retail",
      icon: "/consumer_retail_dd_icon.svg",
      href: "/industries",
    },
    {
      label: "Financial Services",
      icon: "/financial_services_dd_icon.svg",
      href: "/industries",
    },
    {
      label: "Healthcare & Lifesciences",
      icon: "/hc_ls_dd_icon.svg",
      href: "/industries",
    },
    {
      label: "Banking & Capital Markets",
      icon: "/banking_capital_dd_icon.svg",
      href: "/industries",
    },
    {
      label: "Industrial Manufacturing",
      icon: "/industrial_manufacturing_dd_icon.svg",
      href: "/industries",
    },
    {
      label: "Technology, Media & Telecom",
      icon: "/tech_media_telecom_dd_icon.svg",
      href: "/industries",
    },
  ];

  const insightsItems = [
    { label: "Case studies", href: "https://blogs.emergertech.com/" },
    { label: "Blogs", href: "https://blogs.emergertech.com/" },
    { label: "Whitepapers", href: "https://blogs.emergertech.com/" },
    { label: "Newsletters", href: "https://blogs.emergertech.com/" },
  ];

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const dropdownElements = [
  //       servicesRef.current,
  //       industriesRef.current,
  //       insightsRef.current,
  //     ];

  //     const clickedInside = dropdownElements.some((ref) =>
  //       ref?.contains(event.target as Node)
  //     );
  //     if (!clickedInside) setOpenDropdown(null);
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // Determine active parent menu
  const isActiveParent = (routes: string[]) =>
    routes.some((r) => pathname.startsWith(r));

  return (
    <>
      <header className="sticky top-[20px] z-[9999] bg-[#FBFBFB]/80 backdrop-blur-md px-6 py-3 w-[85%] mx-auto mt-3 mb-3 rounded-[14px] shadow-lg flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Nav_Emg_Logo.svg"
            alt="Emergere Logo"
            className="w-full mr-3 mt-3"
          />
        </div>

        <nav className="flex gap-10 whitespace-nowrap overflow-x-auto">
          <Link
            href="/"
            className={`font-medium hover:text-[#023ED6] ${
              pathname === "/"
                ? "text-[#0047ff] font-semibold"
                : "text-[#1e1e1e]"
            } `}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`font-medium hover:text-[#023ED6] ${
              pathname === "/about-us"
                ? "text-[#0047ff] font-semibold"
                : "text-[#1e1e1e]"
            }`}
          >
            About Us
          </Link>

          <div
            ref={servicesRef}
            className="relative"
            onClick={() => toggleDropdown("services")}
          >
            <button
              className={`font-medium flex items-center gap-1 hover:text-[#023ED6] ${
                isActiveParent(servicesItems.map((i) => i.href!))
                  ? "text-[#0047ff] font-semibold"
                  : "text-[#1e1e1e]"
              }`}
            >
              Our Services{" "}
              <img src="/arrow-down.png" alt="" className="w-4 h-2" />
            </button>
          </div>

          <div
            ref={industriesRef}
            className="relative"
            onClick={() => toggleDropdown("industries")}
          >
            <button
              className={`font-medium flex items-center gap-1 hover:text-[#023ED6] ${
                isActiveParent(industriesItems.map((i) => i.href!))
                  ? "text-[#0047ff] font-semibold"
                  : "text-[#1e1e1e]"
              }`}
            >
              Industries{" "}
              <img src="/arrow-down.png" alt="" className="w-4 h-2" />
            </button>
          </div>

          <div
            ref={insightsRef}
            className="relative"
            onClick={() => toggleDropdown("insights")}
          >
            <button
              className={`font-medium flex items-center gap-1 hover:text-[#023ED6] ${
                openDropdown === "insights"
                  ? "text-[#0047ff] font-semibold"
                  : "text-[#1e1e1e]"
              }`}
            >
              Insights <img src="/arrow-down.png" alt="" className="w-4 h-2" />
            </button>
          </div>

          <Link
            href="/careers"
            className={`font-medium hover:text-[#023ED6] ${
              pathname === "/careers"
                ? "text-[#0047ff] font-semibold"
                : "text-[#1e1e1e]"
            }`}
          >
            Careers
          </Link>
        </nav>

        <div>
          <Link href="/contact-us">
            <button className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] text-white py-3.5 px-5 rounded-full font-bold shadow-md text-sm transition-transform duration-200 hover:scale-105">
              Get in Touch →
            </button>
          </Link>
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
