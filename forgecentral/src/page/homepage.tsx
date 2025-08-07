"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
type ServiceCardProps = {
  icon: string;
  bg: string;
  title: string;
  desc: string;
  href: string;
  inView?: boolean;
  index?: number;
};

type IndustryCardProps = {
  background: string;
  icon: string;
  title: string;
  href: string;
  inView?: boolean;
  index?: number;
};

type Testimonial = {
  rating: number;
  message: string;
  role: string;
  company: string;
  inView?: boolean;
  index?: number;
};

const ServiceCard = ({
  icon,
  bg,
  title,
  desc,
  href,
  inView = true,
  index = 0,
}: ServiceCardProps) => {
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
      className="bg-white rounded-[32px] p-6 shadow-sm text-left flex flex-col h-full transform transition-transform shadow-sm hover:shadow-xl"
      style={style}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
        style={{ backgroundColor: bg }}
      >
        <img src={icon} alt={title} />
      </div>
      <h3 className="text-[#393939] font-extrabold text-[18px] mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[#3E3E59] text-sm leading-relaxed flex-grow">{desc}</p>
      <Link href={href}>
        <button className="inline-flex items-center gap-2 text-md font-semibold text-gray-700 border border-gray-200 rounded-full px-5 py-2 hover:scale-105">
          Know more
          <img
            src="/arrow-right-black.svg"
            alt="arrow right"
            className="w-5 h-5 object-cover"
          />
        </button>
      </Link>
    </div>
  );
};

const IndustryCard = ({
  background,
  icon,
  title,
  href,
  inView = true,
  index = 0,
}: IndustryCardProps) => {
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
      className="bg-white rounded-[40px] shadow-md hover:shadow-lg transition flex flex-col items-center text-center overflow-hidden p-6 h-[250px] w-full"
      style={style}
    >
      {/* Banner Image with Icon Overlay */}
      <div className="relative w-full h-46 rounded-2xl overflow-hidden">
        <img
          src={background}
          alt={`${title} background`}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-18 h-18 object-contain"
          />
        </div>
      </div>

      <br />

      {/* Title */}
      <h3 className="font-extrabold text-2xl text-gray-900 mb-6">{title}</h3>

      {/* Know More Button */}
      <Link href={href}>
        <button className="inline-flex items-center gap-2 text-md font-semibold text-gray-700 border border-gray-200 rounded-full px-5 py-2 hover:scale-105">
          Know more
          <img
            src="/arrow-right-black.svg"
            alt="arrow right"
            className="w-5 h-5 object-cover"
          />
        </button>
      </Link>
    </div>
  );
};

const TestimonialCard = ({
  rating,
  message,
  role,
  company,
  inView = true,
  index = 0,
}: Testimonial) => {
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
      className="bg-[#F2F2F2] rounded-[20px] shadow-sm hover:shadow-xl p-6 flex flex-col justify-between transition-shadow duration-300"
      style={style}
    >
      {/* Star Rating */}
      <div
        className="flex gap-1 text-yellow-400 text-2xl font-bold mb-4"
        aria-label={`Rating: ${rating} out of 5`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} aria-hidden>
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-start text-md text-[#505050] mb-6 leading-relaxed">
        {message}
      </p>

      {/* User Info */}
      <div className="flex text-start gap-3 mt-auto">
        <div>
          <p className="font-semibold text-md text-gray-900">{role}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    index: 1,
    title: "Data, AI & Analytics",
    description:
      "Unlock strategic insights and drive innovation by transforming your data into actionable intelligence.",
    icon: "/data_ai_analytics_icon.png",
    href: "/data-ai-analytics",
    color: "bg-gradient-to-b from-[#215EF8]-600 to-[#023ED6]-400",
  },
  {
    index: 2,
    title: "Digital Services",
    description:
      "Enhance your digital footprint and user experiences with bespoke strategies and seamless execution.",
    icon: "/digital_services_icon.png",
    href: "/digital-services",
    color: "bg-#F5B037-400",
  },
  {
    index: 3,
    title: "Modern Technology",
    description:
      "Embrace cutting-edge solutions to modernize your infrastructure and drive digital transformation.",
    icon: "/modern_technology_icon.png",
    href: "/modern-technology",
    color: "bg-gradient-to-b from-[#215EF8]-600 to-[#023ED6]-400",
  },
  {
    index: 4,
    title: "Managed Services",
    description:
      "Optimize your IT operations and ensure continuous system performance with our expert oversight.",
    icon: "/managed_services_icon.png",
    href: "/managed-services",
    color: "bg-#F5B037-400",
  },
  {
    index: 5,
    title: "ERP",
    description:
      "Empower businesses to streamline operations and boost performance with scalable ERP solutions that unify processes, modernize legacy systems, and enable real-time insights.",
    icon: "/erp_icon.png",
    href: "/erp-services",
    color: "bg-gradient-to-b from-[#215EF8]-600 to-[#023ED6]-400",
  },
  {
    index: 6,
    title: "Technology Staffing",
    description:
      "Source top-tier technology talent to meet your specialized project demands and overcome skill gaps.",
    icon: "/technology_staffing_icon.png",
    href: "/technology-staffing",
    color: "bg-#F5B037-400",
  },
];

const industries = [
  {
    index: 1,
    title: "Consumer & Retail",
    icon: "/consumer_retail_icon.png",
    background: "/consumer_retail.jpg",
    href: "/industries",
  },
  {
    index: 2,
    title: "Financial Services",
    icon: "/financial_services_icon.png",
    background: "/financial_services.jpg",
    href: "/industries",
  },
  {
    index: 3,
    title: "Healthcare & Lifesciences",
    icon: "/hc_ls_icon.png",
    background: "/hc_ls.jpg",
    href: "/industries",
  },
  {
    index: 4,
    title: "Banking & Capital Markets",
    icon: "/banking_capital_icon.png",
    background: "/banking_capital.jpg",
    href: "/industries",
  },
  {
    index: 5,
    title: "Industrial Manufacturing",
    icon: "/industrial_manufacturing_icon.png",
    background: "/industrial_manufacturing.jpg",
    href: "/industries",
  },
  {
    index: 6,
    title: "Technology, Media & Telecom",
    icon: "/tech_media_telecom_icon.png",
    background: "/tech_media_telecom.jpg",
    href: "/industries",
  },
];

const testimonials = [
  {
    index: 1,
    role: "Senior Director- Enterprise Data & Analytics",
    company: "US based Supply Chain industry",
    message:
      "Emergere built a seamless ingestion pipeline that cut our data availability time from days to hours and it’s been a game-changer for decision-making.",
    rating: 5,
  },
  {
    index: 2,
    role: "SVP-Data Science & Engineering",
    company: "A Fortune 500 company",
    message:
      "Their proof-of-concept models not only validated our ideas quickly but also uncovered opportunities we hadn’t even considered.",
    rating: 5,
  },
  {
    index: 3,
    role: "CTO",
    company: "US Healthcare Company",
    message:
      "With Emergere’s data quality framework, our analytics went from ‘good enough’ to consistently reliable which turned out be a huge win for the business.",
    rating: 4,
  },
  {
    index: 4,
    role: "Software engineering leader",
    company: "US Retail Enterprise",
    message:
      "From development to ongoing support, Emergere delivered a rock-solid application that runs flawlessly and scales with our needs.",
    rating: 4,
  },
  {
    index: 5,
    role: "CIO",
    company: "US Logistics Industry",
    message:
      "Our data insights being instant and actionable now, Emergere's solution has transformed how we monitor and optimize our logistics operations for our entire supply chain.",
    rating: 5,
  },
  {
    index: 6,
    role: "People Strategist",
    company: "US based Fintech",
    message:
      "Every specialist you placed was a true force-multiplier, lifting our capabilities from day one and helping us achieve milestones ahead of schedule",
    rating: 5,
  },
];

const HERO_HEIGHT = 700; // px, adjust as needed for your hero section height

const HeroSection = () => {
  const videos = ["/BN1-C.mp4", "/BN2-C.mp4", "/BN3-C.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showHero, setShowHero] = useState(true);
  // Animation logic for Core Values section
  const serviceValuesRef = useRef<HTMLDivElement>(null);
  const [serviceValuesInView, setServiceValuesInView] = useState(false);
  const industryValuesRef = useRef<HTMLDivElement>(null);
  const [industryValuesInView, setIndustryValuesInView] = useState(false);
  const testimonialValuesRef = useRef<HTMLDivElement>(null);
  const [testimonialValuesInView, setTestimonialValuesInView] = useState(false);

  {
    /* Service Animation */
  }
  useEffect(() => {
    const section = serviceValuesRef.current;
    if (section) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setServiceValuesInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  {
    /* Industry Animation */
  }
  useEffect(() => {
    const section = industryValuesRef.current;
    if (section) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIndustryValuesInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  {
    /* Testimonial Animation */
  }
  useEffect(() => {
    const section = testimonialValuesRef.current;
    if (section) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTestimonialValuesInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= HERO_HEIGHT) {
        setShowHero(false);
      } else {
        setShowHero(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ET_Service_offerings-2025.pdf"; // path to your PDF in public folder
    link.download = "ET_Service_offerings-2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative">
      {/* Fixed Hero Section: only visible at the top */}
      {showHero && (
        <div
          className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none"
          style={{ minHeight: "500px", maxHeight: "900px", overflow: "hidden" }}
        >
          <div className="relative text-white px-0 md:px-0 h-full min-h-[500px] flex items-stretch overflow-hidden pointer-events-auto">
            {/* Background Video */}
            <video
              key={currentVideoIndex}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-1000"
              src={videos[currentVideoIndex]}
              autoPlay
              muted
              playsInline
              style={{ objectFit: "cover" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[#032773]/20 to-[#222222]/40 z-10 pointer-events-none" />
            {/* Hero Content */}
            <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full py-10 px-6 md:px-20 h-full">
              <div className="md:w-1/2">
                <h1 className="md:text-[35px] font-bold leading-tight">
                  Future-Ready IT Solutions <br />
                  Across{" "}
                  <span className="text-[#FFA700]">Data, AI & Cloud</span>
                </h1>
                <p className="text-md text-[#FFFFFF] mb-8">
                  Emergere delivers comprehensive IT services across Data, AI &
                  Analytics, Cloud, ERP, and Modern Technology, with strong
                  capabilities in Data Governance, Managed Services, and
                  Technology Staffing to support seamless digital
                  transformation.
                </p>
                <Link href="#what-we-do">
                  <button className="flex items-center gap-x-2 bg-white text-[#023ED6] font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition outline outline-2 outline-[#023ED6]">
                    Explore More
                    <img
                      src="/arrow-right-blue.svg"
                      alt="arrow right"
                      className="w-5 h-5 object-cover"
                    />
                  </button>
                </Link>
              </div>
            </div>
            {/* Video Slider Dots */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
              {videos.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentVideoIndex
                      ? "bg-white opacity-80 scale-110"
                      : "bg-white/50"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Wrapper: starts after hero height, scrolls over hero */}
      <div
        style={{
          position: "relative",
          zIndex: 30,
          marginTop: "100vh",
          background: "#fff",
        }}
      >
        {/* Who We Are Section */}
        <div className="relative px-6 md:px-10 z-10">
          {/* Background */}
          <div
            className="absolute inset-0 w-full h-full rounded-t-[40px] pointer-events-none"
            style={{
              backgroundImage: "url('/who_we_are_bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
            }}
          />

          <div className="max-w-7xl mx-auto py-10 md:py-30 flex flex-col md:flex-row items-center md:items-start gap-40 z-1 relative">
            {/* Image Stack */}
            <div className="relative w-full md:w-1/2 flex justify-center md:justify-start z-10">
              <div className="rounded-[32px] overflow-hidden w-[340px] h-[340px] shadow-xl">
                <img
                  src="/team.jpg"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-[180px] top-[180px] w-[280px] h-[280px] rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="/handshake.jpg"
                  alt="Handshake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full md:w-1/2 text-left z-10">
              <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
                WHO WE ARE
                <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-[#FFA700] rounded mt-1"></span>
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What Makes Us Your <br />
                Ideal{" "}
                <span className="bg-gradient-to-r from-[#215EF8] to-[#E29401] bg-clip-text text-transparent">
                  Tech Partner
                </span>
              </h2>

              <p className="text-[#535353] text-lg mb-4">
                At Emergere, we empower businesses through end-to-end digital
                transformation and technology services from ideation to
                execution. We blend deep domain expertise with a culture rooted
                in
              </p>

              <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-[#000000] text-md font-bold mb-4">
                {["Teamwork", "Enthusiasm", "Excellence", "Customer focus"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <img
                        src="/star.png"
                        alt="Star"
                        className="w-5 h-5 object-contain"
                      />
                      {item}
                    </div>
                  )
                )}
              </div>

              <p className="text-[#535353] text-lg mb-8">
                Our teams work as an extension of yours: collaborative, agile,
                and aligned to your goals to deliver solutions that are not only
                technically sound but also business-smart.
              </p>

              <Link href="/about-us">
                <button className="flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg transition font-semibold w-fit text-md hover:scale-105">
                  Know More
                  <img
                    src="/arrow-right-white.svg"
                    alt="arrow right"
                    className="w-5 h-5 object-cover"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Transforming Insights Section */}
        <div className="relative bg-gradient-to-r from-[#023ED6] to-[#002FA7] overflow-hidden py-0 px-0">
          {/* Optional: SVG or PNG pattern overlay for the right-side lines */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "url('/transforming_insights_bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              opacity: 0.1,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-25 px-6 md:px-20 py-16">
            {/* Left: Icon + Heading */}
            <div className="flex flex-row items-end gap-6 pl-50 md:w-1/2">
              <img
                src="/transforming_insights_icon.png"
                alt="Insight Icon"
                className="w-20 h-20 md:w-24 md:h-24"
              />
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                Transforming <br />
                Insights into <br />
                Impact
              </h2>
            </div>
            <div
              className="hidden md:block h-32 border-l-2 mx-10"
              style={{
                background:
                  "linear-gradient(to bottom, #0028B0, #7E94D9, #002BB4)",
                width: "2px",
                border: "none",
              }}
            />
            {/* Right: Paragraphs */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-start">
              <h3 className="text-[#FFFFFF] text-lg font-semibold mb-2">
                At Emergere, it’s not just what we <br />
                deliver—it’s how we deliver it.
              </h3>
              <p className="text-[#FFFFFF] text-md">
                Partner with us to turn challenges into opportunities
                <br />
                and drive meaningful change.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div
          id="what-we-do"
          className="bg-[#F2F3F5] py-10 px-6 md:px-24 text-center"
        >
          <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
            WHAT WE DO
            <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-[#FFA700] rounded mt-1"></span>
          </p>
          <br />
          <br />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Elevate Your Enterprise: Our <br />
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#215EF8] to-[#E29401] bg-clip-text text-transparent">
              Suite of Solutions
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            From data strategy to seamless execution, we provide the expertise
            to
            <br />
            navigate your digital transformation.
          </p>

          {/* Services Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            ref={serviceValuesRef}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                bg={service.color}
                title={service.title}
                desc={service.description}
                href={service.href}
                inView={serviceValuesInView}
                index={service.index}
              />
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-[#f7f7f7] py-10 px-6 md:px-24 text-center">
          <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
            INDUSTRIES
            <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-[#FFA700] rounded mt-1"></span>
          </p>
          <br />
          <br />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Tailored Solutions for Your <br />
            <span className="bg-gradient-to-r from-[#215EF8] to-[#E29401] bg-clip-text text-transparent">
              Unique Challenges
            </span>
          </h2>
          <p className="text-gray-600 font-md max-w-3xl mx-auto mb-12">
            Our IT services cater to a diverse range of industries, delivering
            tailored <br />
            solutions that drive innovation and efficiency.
          </p>

          {/* Industries Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            ref={industryValuesRef}
          >
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                background={industry.background}
                icon={industry.icon}
                title={industry.title}
                href={industry.href}
                inView={industryValuesInView}
                index={industry.index}
              />
            ))}
          </div>

          {/* Brochure Section */}
          <div className="mt-20 relative rounded-[40px] overflow-hidden px-20 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-5 bg-[#F2F2F2]">
            {/* Background overlay pattern image */}
            <div className="absolute inset-0 z-0 bg-[#F2F2F2]">
              <img
                src="/get_our_brochure.jpg" // pattern image
                alt="Background Pattern"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Content */}
            <div className="z-10 flex-1 text-center flex flex-col items-center">
              <p className="text-md uppercase font-bold text-blue-700 mb-2 tracking-wider relative">
                GET OUR BROCHURE
                <span className="absolute right-0 bottom-0 translate-y-full w-10 h-1 bg-[#FFA700] rounded mt-1"></span>
              </p>
              <br />
              <h2 className="text-3xl text-start md:text-4xl font-bold text-black leading-snug mb-6">
                Discover Who We Are and <br />
                <span className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] bg-clip-text text-transparent">
                  What We Do
                </span>
              </h2>
              <button
                onClick={handleDownload}
                className="bg-[#0047ff] text-white font-semibold rounded-full px-6 py-3 flex items-center gap-2 shadow-md hover:scale-105 transition"
              >
                Download
                <img
                  src="/download_icon.png"
                  alt="Download"
                  className="w-5 h-5"
                />
              </button>
            </div>

            {/* Right Icon */}
            <div className="z-10 flex-1 flex justify-center relative">
              <div className="relative w-40 md:w-52 z-10">
                <img
                  src="/brochure.jpg"
                  alt="Brochure Icon"
                  width={208}
                  height={208}
                  className="z-10 relative"
                />
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-10 px-6 md:px-24 text-center">
            <p className="text-md uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
              TESTIMONIALS
              <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-[#FFA700] rounded mt-1"></span>
            </p>
            <br />
            <br />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
              See why people like you choose <br />
              <span className="bg-gradient-to-r from-[#215EF8] to-[#E29401] bg-clip-text text-transparent">
                EMERGERE !
              </span>
            </h2>

            {/* Testimonials Cards */}
            <div
              className="grid gap-10 px-10 sm:grid-cols-2 lg:grid-cols-3"
              ref={testimonialValuesRef}
            >
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard
                  key={idx}
                  rating={testimonial.rating}
                  message={testimonial.message}
                  role={testimonial.role}
                  company={testimonial.company}
                  inView={testimonialValuesInView}
                  index={testimonial.index}
                />
              ))}
            </div>
          </div>
        </div>

        {/*Get In Touch Section */}
        <div
          className="bg-[#002FA7] py-20 px-6 md:px-24 text-white "
          style={{
            backgroundImage: `url('/get_in_touch.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side: Contact CTA */}
            <div className="text-left space-y-6">
              <button className="bg-white/10 border border-white rounded-full px-4 py-2 text-md tracking-wide">
                <span className="text-xl text-yellow-400">●</span> GET IN TOUCH
              </button>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
                Contact us for more <br />
                information & get started
              </h2>
              <p className="text-[#98B2F5] text-md">
                Have questions or need help? We’re here for you
              </p>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-[#0C3FC0] rounded-3xl p-10 space-y-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <img
                  src="/headset_icon.png"
                  alt="Support Icon"
                  className="w-18 h-18"
                />
                We’d love to help! Let us <br />
                know how
              </h3>

              {/* Form Inputs */}
              <form className="space-y-10">
                <div className="flex items-center border-b border-white/30 py-4">
                  <img
                    src="/user_icon.png"
                    alt="user Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent w-full text-white placeholder text-sm outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-white/30 py-2">
                  <img
                    src="/sms_icon.png"
                    alt="sms Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent w-full text-white placeholder text-sm outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-white/30 py-2">
                  <img
                    src="/call_icon.png"
                    alt="call Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="bg-transparent w-full text-white placeholder text-sm outline-none"
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    rows={4}
                    placeholder="Type your message here"
                    className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-sm text-white placeholder outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 relative inline-flex items-center rounded-full border border-white/50 bg-[#1E51D2] px-6 py-2.5 text-white text-sm pr-12 hover:scale-105"
                >
                  <span className="z-10">Submit</span>
                  <span className="absolute right-1.5 rounded-full flex items-center justify-center">
                    <img
                      src="/submit_icon.png"
                      alt="submit Icon"
                      className="w-8 h-8"
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
