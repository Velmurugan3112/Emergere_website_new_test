"use client";
import Image from "next/image";
import Link from "next/link";
import { AboutUsHeader } from "./about_us_header";
import React, { useRef, useEffect, useState } from "react";

type CardProps = {
  icon: string;
  bg: string;
  title: string;
  desc: string;
  inView?: boolean;
  index?: number;
};

const Card = ({
  icon,
  bg,
  title,
  desc,
  inView = true,
  index = 0,
}: CardProps) => {
  // Animation: from translateY(120px), opacity 0 to translateY(0), opacity 1
  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(120px)",
    transition: `opacity 0.9s cubic-bezier(0.4,0,0.2,1) ${
      index * 0.18
    }s, transform 0.9s cubic-bezier(0.4,0,0.2,1) ${index * 0.18}s`,
  };
  return (
    <div
      className="bg-white rounded-[32px] p-6 shadow-sm text-left flex flex-col h-full transform transition-transform duration-300"
      style={style}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
        style={{ backgroundColor: bg }}
      >
        <img src={icon} alt={title} />
      </div>
      <h3 className="font-extrabold text-[18px] mb-2 leading-snug">{title}</h3>
      <p className="text-[#3E3E59] text-md leading-relaxed flex-grow">{desc}</p>
    </div>
  );
};

export default function AboutUs() {
  // Animation logic for Core Values section
  const coreValuesRef = useRef<HTMLDivElement>(null);
  const [coreValuesInView, setCoreValuesInView] = useState(false);

  useEffect(() => {
    const section = coreValuesRef.current;
    if (section) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCoreValuesInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <AboutUsHeader />

      {/* Main Section */}
      <section
        className="relative bg-white overflow-hidden px-6 md:px-20 pt-20 pb-50"
        style={{
          backgroundImage: "url('/About-Us-Bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "-150px",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center relative z-10">
          {/* Left Content */}
          <div className="basis-[50%] space-y-6 px-6 text-left">
            <div className="inline-flex flex-col items-start mb-7">
              <span className="text-md text-[#023ED6] font-extrabold tracking-[0.19em] uppercase mb-1">
                ABOUT US
              </span>
              {/* Line icon or SVG under the text */}
              <Image
                src="/aboutus_Line_34.svg" // Replace with your actual SVG path
                alt="line icon"
                width={40} // Adjust width/height as needed
                height={6}
                className="ml-20"
              />
            </div>

            <h3 className="text-[28px] md:text-[28px] font-semibold leading-[1.2] tracking-tight text-left text-gray-900 text-left mb-2">
              <span className="text-[#023ED6] font-black">Emergere</span>
              <span className="font-black"> is a technology solutions</span>
              <br />
              <span className="font-black">partner built for the </span>
              <span className="font-black bg-gradient-to-r from-[#023ED6] to-[#E29400] text-transparent bg-clip-text">
                data-driven era
              </span>
            </h3>
            <div className="justify-center pr-24">
              <p className="text-gray-700 leading-relaxed font-medium text-justify">
                We specialize in transforming complex IT ecosystems into agile,
                intelligent platforms that drive measurable business value.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed font-medium text-justify mt-[-20]">
                Our expertise spans:
              </p>
              {/* Bullet Points with yellow star icon, 2-column structure */}
              <div className="text-[16px] font-bold text-gray-800 text-left mt-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-2">
                    {/* 1. Data,AI & Analytics */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Data, AI & Analytics
                      </span>
                    </div>
                    {/* 2. Data Governance */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Data Governance
                      </span>
                    </div>
                    {/* 3. Cloud Services */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Cloud Services
                      </span>
                    </div>
                    {/* 4. ERP */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Enterprise Resource Planning (ERP)
                      </span>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="flex flex-col gap-2">
                    {/* 5. Modern Technology platforms */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Modern Technology Platforms
                      </span>
                    </div>
                    {/* 6. Managed Services */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Managed Services
                      </span>
                    </div>
                    {/* 7. Technology Staffing */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <Image
                        src="/aboutus_bullet_1.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <span className="leading-[2.3] font-black">
                        Technology Staffing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed font-medium text-justify">
                We ensure systems are not only smart, but secure, compliant, and
                future-ready!
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative w-full max-w-[490px]">
            {/* Main image */}
            <Image
              src="/aboutUs_a1.svg"
              width={600}
              height={400}
              alt="Tech"
              className="rounded-3xl shadow-xl w-full"
            />

            {/* Floating Info Box */}
            <div
              className="absolute z-30"
              style={{
                width: "262px",
                height: "200px",
                bottom: "-20px",
                left: "-40px",
              }}
            >
              {/* Outer blue card with shadow */}
              <div
                className="bg-[#030E4D] flex flex-col items-center shadow-2xl shadow-gray-400/40"
                style={{
                  width: "252px",
                  height: "235px",
                  borderRadius: "32px",
                  position: "relative",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
                {/* White floating content fully inside blue */}
                <div
                  className="bg-white shadow-lg flex flex-col gap-5 z-10"
                  style={{
                    width: "240px",
                    height: "153px",
                    borderRadius: "24px",
                    position: "absolute",
                    top: "7px",
                    left: "6px",
                    padding: "24px 18px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {[
                    { text: "Secure", icon: "/aboutus_bottom_icon.svg" },
                    { text: "Compliant", icon: "/aboutus_bottom_icon.svg" },
                    { text: "Future-ready", icon: "/aboutus_bottom_icon.svg" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-left pl-4 items-left gap-4"
                    >
                      <Image
                        src={item.icon}
                        width={32}
                        height={24}
                        alt="arrow"
                        className="w-[32px] h-[24px]"
                      />
                      <span className="text-[#101B5A] font-semibold text-lg tracking-tight">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Logo at the bottom, on blue */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Image
                    src="/aboutus_bottom_logo.svg"
                    width={104}
                    height={48}
                    alt="footer icon"
                    className="w-[104px] h-[48px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final quote */}
        <div className="mt-30 mb-2 text-center max-w-4xl mx-auto px-4">
          <p className="text-lg md:text-2xl font-semibold leading-relaxed text-center">
            <span className="text-[#535353]">“ At every step,</span>
            <span className="text-[#010360] font-bold">
              we bring experience, precision, and a passion
            </span>
            <br />
            <span className="text-[#010360] font-bold">
              {" "}
              for solving real-world challenges —
            </span>
            <span className="text-[#535353]">helping businesses move</span>
            <br />
            <span className="text-[#010360] font-bold">
              {" "}
              faster, think smarter, and scale up confidently. ”
            </span>
          </p>
        </div>
      </section>
      {/* Founder Section */}
      <section
        className="relative bg-[#F4F8FF] px-6 md:px-20 py-16 mb-0 overflow-hidden"
        style={{
          backgroundImage: "url('/aboutus_bg_img3.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Founder Image - responsive */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 flex items-start md:-mt-16 mb-8 md:mb-0">
            <Image
              src="/aboutus_profile.png"
              alt="Gowri Shanker Viswanathan"
              width={540}
              height={650}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
          {/* Content right side - responsive */}
          <div className="flex-1 w-full flex flex-col justify-between h-full px-0 sm:px-2 md:px-0">
            <div>
              <span className="text-[#023ED6] tracking-[.11em] uppercase font-bold text-xs md:text-md block mb-2">
                Our Founder
              </span>
              {/* Underline icon directly under "Our Founder" */}
              <div className="h-2 mb-3 ml-10 md:ml-20 flex items-start">
                <Image
                  src="/aboutus_Line_34.svg"
                  alt="underline icon"
                  width={54}
                  height={8}
                />
              </div>

              {/* Founder paragraphs */}
              <div className="mb-6 text-left">
                <p className="text-[#535353] text-base md:text-lg leading-[1.7] mb-3 text-left">
                  At Emergere,
                  <span className="text-[#161616] font-semibold">
                    {" "}
                    our journey began in 2018{" "}
                  </span>
                  with a vision far greater than simply building technology—we
                  set out to solve with purpose and lead with heart. As a small
                  team fueled by big ambitions, we believed that
                  <span className="text-[#161616] font-semibold">
                    {" "}
                    meaningful progress comes from quiet, consistent action and
                    a genuine commitment to those we serve.
                  </span>{" "}
                  The partnerships and trust we develop have served as both our
                  inspiration and our guiding principle from the start.
                </p>
                <p className="text-[#161616] text-base md:text-lg leading-[1.7] mb-3 text-left">
                  Today, we are a{" "}
                  <span className="text-[#161616] font-semibold">
                    global team
                  </span>{" "}
                  of much larger size, partnering across{" "}
                  <span className="text-[#161616] font-semibold">
                    Data & AI, Digital Modernization, Cloud, ERP, and Managed
                    Services focusing digital customer experience{" "}
                  </span>
                  as an objective in every step we progress. Even as we’ve
                  grown, we continue to measure our success by the trust we
                  build and the lives we impact.{" "}
                  <span className="text-[#161616] font-semibold">
                    We believe that your growth fuels our own!
                  </span>
                </p>
              </div>
            </div>
            {/* Signature right/bottom aligned, italic and normal weight */}
            <div className="w-full flex flex-row justify-end mb-4">
              <span
                className="italic font-bold text-[#535353] text-base md:text-lg"
                style={{ fontFamily: "Evolventa" }}
              >
                – Gowrishanker Viswanathan
              </span>
            </div>
            {/* LinkedIn button */}
            <div className="flex flex-row items-center gap-4 mt-3">
              <Link
                href="https://www.linkedin.com/in/gowri-shanker-viswanathan-4a946116/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#023ED6] shadow-lg px-6 py-2 text-white font-bold text-base gap-3 bg-[#023ED6] hover:bg-[#0056d6] focus:outline-none focus:ring-2 focus:ring-[#023ED6] transition-colors transition-transform duration-200 min-w-[140px] min-h-[44px] hover:scale-105"
                style={{ minHeight: "54px", minWidth: "120px" }}
              >
                Get in Touch
                <Image
                  src="/aboutus_linkedin_1.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  style={{ marginLeft: 4 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* OUR VISION & MISSION Section */}
      <section
        className="w-full relative bg-white px-4 md:px-10 py-20 mt-0"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center mb-2">
              <span className="uppercase text-[16px] font-black tracking-[0.15em] text-[#023ED6] block">
                Our Vision & Mission
              </span>
              <div className="h-2 flex items-start justify-end w-full mt-1">
                <Image
                  src="/aboutus_Line_34.svg"
                  alt="underline icon"
                  width={54}
                  height={8}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[30px] md:text-[38px] font-bold text-[#222222] text-center leading-tight mb-1">
                <span
                  style={{
                    background: "#222222",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Our Commitment:
                </span>{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #023ED6 50%, #F5B037 92.76%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vision and Mission
                </span>
              </h2>
              <p className="text-[#535353] text-base md:text-lg text-center max-w-2xl font-medium mb-10">
                Guiding Principles That Shape Our Strategy and Service Delivery
              </p>
            </div>
          </div>

          {/* OUR VISION SECTION (left text, right image, vertically centered) */}
          <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-10 md:gap-20 px-24 py-10">
            {/* Left: Vision Content */}
            <div className="w-full md:basis-1/2 flex flex-col justify-center items-start md:pr-8">
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <Image
                  src="/aboutus_our_vision.svg"
                  alt="Vision Icon"
                  width={56}
                  height={56}
                />
              </div>
              <h2 className="text-[28px] text-[#000000] md:text-[30px] font-extrabold mb-4">
                Our Vision
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                To be the most trusted partner for organizations seeking real,
                results-driven digital transformation — by delivering
                <span className="font-bold text-[#161616]">
                  {" "}
                  intelligent, scalable, and future-ready technology solutions
                  through innovation, integrity, and excellence.
                </span>
              </p>
            </div>
            {/* Right: Vision Image */}
            <div className="w-full md:basis-1/2 flex items-center justify-center">
              <Image
                src="/aboutus_ourvision_1.svg"
                alt="Technology Vision"
                width={400}
                height={260}
                className="w-full max-w-[500px] h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* OUR MISSION SECTION (right text, left image, vertically centered) */}
          <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20 px-24 py-10">
            {/* Right: Mission Content */}
            <div className="w-full md:basis-1/2 flex flex-col justify-center items-start ">
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <Image
                  src="/aboutus_ourmission_icon.svg"
                  alt="Mission Icon"
                  width={56}
                  height={56}
                />
              </div>
              <h2 className="text-[28px] text-[#000000] md:text-[30px] font-extrabold mb-4">
                Our Mission
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                To help businesses unlock their full potential by delivering
                tailored digital solutions — from
                <span className="font-bold text-[#161616]">
                  {" "}
                  ideation to execution — across data, cloud, ERP, and emerging
                  technologies.
                </span>{" "}
                We solve real challenges through strategic thinking, expert
                execution, and a customer-first mindset.
              </p>
            </div>
            {/* Left: Mission Image */}
            <div className="w-full md:basis-1/2 flex items-center justify-center">
              <Image
                src="/aboutus_ourmission_1.svg"
                alt="Mission Target"
                width={400}
                height={260}
                className="w-full max-w-[500px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/*CORE VALUES SECTION*/}
      <section className="bg-[#f4f5f7] py-16 px-4 md:px-24" ref={coreValuesRef}>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-left mb-12">
            <p className="text-blue-700 font-bold uppercase tracking-widest text-md">
              Core Values
            </p>
            <div className="h-2 mt-1 ml-20 mb-3">
              <Image
                src="/aboutus_Line_34.svg"
                alt="underline icon"
                width={45}
                height={8}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
              Vision-Led. Mission-Focused. <br />
              Customer-Centric.{" "}
              <span className="bg-gradient-to-r from-[#023ED6] via-[#6B7AD7] to-[#F5B037] bg-clip-text text-transparent">
                The Emergere Way
              </span>
            </h2>
          </div>

          {/* Grid Section with staggered layout */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                icon="/aboutus_core_icon_1.svg"
                bg="#023ED6"
                title="Integrity: Build with Trust"
                desc="We uphold the highest standards of honesty, ethics, and accountability in every engagement — from managing sensitive data to delivering enterprise solutions. Trust is the foundation of every client relationship we build."
                inView={coreValuesInView}
                index={0}
              />
              <Card
                icon="/aboutus_core_icon_2.svg"
                bg="#F5B037"
                title="Customer-Centricity: Solutions that Fit, not just Work"
                desc="We align every solution to real business goals. By understanding our clients’ unique challenges, we deliver measurable value, on time and on budget."
                inView={coreValuesInView}
                index={1}
              />
              <Card
                icon="/aboutus_core_icon_3.svg"
                bg="#023ED6"
                title="Innovation: Think ahead, Build ahead"
                desc="We leverage cutting-edge tech — AI, cloud, and platforms — to design intelligent, scalable solutions. Innovation means anticipating future needs and building future-ready systems."
                inView={coreValuesInView}
                index={2}
              />
              <Card
                icon="/aboutus_core_icon_4.svg"
                bg="#F5B037"
                title="Excellence: Deliver with Precision"
                desc="We maintain relentless focus on quality, reliability, and efficiency across every engagement — from architecture to support."
                inView={coreValuesInView}
                index={3}
              />
            </div>

            {/* Row 2 - Staggered Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-3 gap-6">
              <Card
                icon="/aboutus_core_icon_5.svg"
                bg="#023ED6"
                title="Agility: Built for Change"
                desc="We adapt quickly to evolving business environments and tech landscapes. Whether scaling a cloud environment, managing change in ERP, or responding to shifting client needs — we stay flexible and responsive."
                inView={coreValuesInView}
                index={4}
              />
              <Card
                icon="/aboutus_core_icon_6.svg"
                bg="#F5B037"
                title="Teamwork & Collaboration: Together, we solve"
                desc="We believe the best solutions come from shared insights. Our cross-functional teams work closely with clients and each other to co-create value, solve complex challenges, and deliver successful outcomes."
                inView={coreValuesInView}
                index={5}
              />
              <Card
                icon="/aboutus_core_icon_7.svg"
                bg="#023ED6"
                title="Continuous Learning: Grow up with the Tech"
                desc="In a fast-paced tech world, we stay curious and committed to learning. From upskilling in the latest AI tools to refining governance strategies, we invest in growth — for our people, our clients, and our solutions."
                inView={coreValuesInView}
                index={6}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
