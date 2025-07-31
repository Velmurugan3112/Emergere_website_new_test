"use client";

import React, { useState, useRef, useEffect } from "react";
import DropdownMenu from "./dropdownmenu";
import Link from "next/link";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const servicesItems = [
    {
      label: "Data, AI & Analytics",
      icon: "/data_ai_analytics_dd_icon.png",
      href: "/data-ai-analytics",
    },
    {
      label: "Digital Services",
      icon: "/digital_services_dd_icon.png",
      href: "/digital-services",
    },
    {
      label: "Modern Tecchnology",
      icon: "/modern_technology_dd_icon.png",
      href: "/modern-technology",
    },
    {
      label: "Managed Services",
      icon: "/managed_services_dd_icon.png",
      href: "/managed-services",
    },
    { label: "ERP", icon: "/erp_dd_icon.png", href: "/data-ai-analytics" },
    {
      label: "Technology Staffing",
      icon: "/technology_staffing_dd_icon.png",
      href: "/technology-staffing",
    },
  ];

  const industriesItems = [
    {
      label: "Consumer & Retail",
      icon: "/consumer_retail_dd_icon.png",
    },
    {
      label: "Financial Services",
      icon: "/financial_services_dd_icon.png",
    },
    {
      label: "Healthcare & Lifesciences",
      icon: "/hc_ls_dd_icon.png",
    },
    {
      label: "Banking & Capital Markets",
      icon: "/banking_capital_dd_icon.png",
    },
    {
      label: "Industrial Manufacturing",
      icon: "/industrial_manufacturing_dd_icon.png",
    },
    {
      label: "Technology, Media & Telecom",
      icon: "/tech_media_telecom_dd_icon.png",
    },
  ];

  const insightsItems = [
    { label: "Case studies" },
    { label: "Blogs" },
    { label: "Whitepapers" },
    { label: "Newsletters" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElements = [
        servicesRef.current,
        industriesRef.current,
        insightsRef.current,
      ];

      const clickedInside = dropdownElements.some((ref) =>
        ref?.contains(event.target as Node)
      );

      if (!clickedInside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="sticky top-[20px] z-[9999] bg-white/30 backdrop-blur-sm shadow-lg px-6 py-3 w-[85%] mx-auto mt-3 mb-3 rounded-[14px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Nav_Emg_Logo.svg"
            alt="Emergere Logo"
            className="w-full mr-3 mt-3"
          />
        </div>

        <nav className="flex gap-10 whitespace-nowrap overflow-x-auto">
          <Link href="/home" className="text-[#0047ff] font-semibold">
            Home
          </Link>
          <Link href="/about-us" className="text-[#1e1e1e] font-medium">
            About Us
          </Link>

          <div
            className="relative"
            ref={servicesRef}
            onClick={() => toggleDropdown("services")}
          >
            <button className="text-[#1e1e1e] font-medium flex items-center gap-1">
              Our Services{" "}
              <img src="arrow-down.png" alt="" className="w-4 h-2" />
            </button>
          </div>

          <div
            className="relative"
            ref={industriesRef}
            onClick={() => toggleDropdown("industries")}
          >
            <button className="text-[#1e1e1e] font-medium flex items-center gap-1">
              Industries <img src="arrow-down.png" alt="" className="w-4 h-2" />
            </button>
          </div>

          <div
            className="relative"
            ref={insightsRef}
            onClick={() => toggleDropdown("insights")}
          >
            <button className="text-[#1e1e1e] font-medium flex items-center gap-1">
              Insights <img src="arrow-down.png" alt="" className="w-4 h-2" />
            </button>
          </div>

          <Link href="/careers" className="text-[#1e1e1e] font-medium">
            Careers
          </Link>
        </nav>

        <div>
          <button className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] text-white py-2 px-5 rounded-full font-bold shadow-md text-sm transition-transform duration-200 hover:scale-105">
            Get in Touch →
          </button>
        </div>
      </header>

      {/* DropDowns anchored to the correct button */}
      {openDropdown === "services" && (
        <DropdownMenu
          items={servicesItems}
          anchorRef={servicesRef}
          isOpen={openDropdown === "services"}
        />
      )}
      {openDropdown === "industries" && (
        <DropdownMenu
          items={industriesItems}
          anchorRef={industriesRef}
          isOpen={openDropdown === "industries"}
        />
      )}
      {openDropdown === "insights" && (
        <DropdownMenu
          items={insightsItems}
          anchorRef={insightsRef}
          isOpen={openDropdown === "insights"}
        />
      )}
    </>
  );
};

export default NavBar;
