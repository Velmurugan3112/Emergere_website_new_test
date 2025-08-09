import React from "react";
import Link from "next/link";
export const AboutUsHeader = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative max-w-full h-[319px] bg-cover bg-center mt-[0px] mx-auto"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #042474 0%, rgba(2, 62, 214, 0) 47.03%), url('/aboutUs_banner.png')",
        }}
      >
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white z-10 w-full px-4">
          <h1 className="text-2xl md:text-3xl font-bold relative inline-block tracking-wide">
            About <span className="relative z-10">Us</span>
          </h1>
          <p className="text-xs md:text-sm mt-1 font-medium">
            <Link href="/">
              <span className="text-[#6490FE] hover:scale-105">Home</span>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold hover:scale-105">
              About Us
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
