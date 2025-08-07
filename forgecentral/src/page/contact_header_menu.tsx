import React from "react";
import Link from "next/link";

const ContactHeaderMenu: React.FC = () => {
  return (
    <section>
      <div
        className="relative w-full h-[280px] bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: "url('/our_service_cover_img.jpg')" }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#042474] to-[#023ED6] opacity-75"></div>

        {/* Heading & Breadcrumb */}
        <div className="relative z-10 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm text-white/80">
            <Link href="/home" className="text-[#6490FE]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/" className="text-[#EFEFEF]">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeaderMenu;
// tested
