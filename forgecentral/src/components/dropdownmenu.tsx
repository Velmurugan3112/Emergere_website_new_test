"use client";

import React, { useEffect, useState, useRef, RefObject } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  icon?: string;
  href?: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  anchorRef: RefObject<HTMLDivElement | null>;
  positionClass?: string;
  isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  anchorRef,
  isOpen,
}) => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (anchorRef.current && menuRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollX = window.scrollX || document.documentElement.scrollLeft;

      setPosition({
        left: rect.left + scrollX,
        top: rect.bottom + scrollY + 90,
      });
    }
  }, [anchorRef, isOpen]);
  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        left: position.left,
        top: position.top,
      }}
      className="bg-[#FBFBFB]/80 backdrop-blur-md rounded-[20px] shadow-xl py-1 w-[250px] z-[9999]"
    >
      {items.map(({ label, icon, href = "" }, index) => (
        <div key={label}>
          <Link href={href} passHref>
            <div
              className={`flex items-center gap-3 px-5 py-[8px] rounded-[14px] ml-7.5 
    justify-start transition-all duration-200
    text-[#1a1a1a] hover:text-[#023ED6]`}
            >
              {icon && (
                <img src={icon} alt={label} className="w-[15px] h-[15px]" />
              )}
              <span className="text-[11.5px] font-semibold transition-colors duration-200">
                {label}
              </span>
            </div>
          </Link>

          {/* Gradient Divider (except after last item) */}
          {index !== items.length - 1 && (
            <div className="mx-6 h-[1px] bg-gradient-to-r from-[#D3D3D300] via-[#FFFFFF] to-[#D3D3D300] my-1"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
