import React from "react";
import ServicesMenu from "./servicemenu";

const benefits = [
  {
    icon: "/erp_benefit_icon.png",
    text: "Expertise across multiple ERP platforms",
  },
  {
    icon: "/solution_benefit_icon.png",
    text: "Industry-specific solutions and configurations",
  },
  {
    icon: "/roi_benefit_icon.png",
    text: "Faster ROI with agile delivery models",
  },
  {
    icon: "/managed_benefits_icon.png",
    text: "Reduced operational overhead with managed services",
  },
  {
    icon: "/growing_benefit_icon.png",
    text: "Scalable solutions for growing business needs",
  },
];

const ERPServices: React.FC = () => {
  return (
    <div>
      <ServicesMenu />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#0047ab] to-blue-900 text-white py-20 px-6 md:px-20">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/data_ai_analytics_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-6 py-16">
          <img
            src="/erp_icon.png"
            alt="ERP Services icon"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent leading-tight">
            ERP Services
          </h1>
          <h2 className="text-black font-bold text-sm md:text-base leading-relaxed mb-3">
            Streamlining Business Operations with Scalable ERP Solutions
          </h2>
          <p className="text-base md:text-lg text-[#535353] max-w-3xl">
            In today’s competitive business environment, seamless integration of
            processes and data is crucial to achieving operational excellence.
            At Emergere, our{" "}
            <strong className="text-black font-semibold">
              ERP (Enterprise Resource Planning)
            </strong>{" "}
            services are designed to unify your core{" "}
            <strong className="text-black font-semibold">
              business functions, from finance and HR to supply chain,
              procurement, and customer service under
            </strong>{" "}
            one intelligent system. 
          </p>
          <p className="text-base md:text-lg text-[#535353] max-w-3xl">
            We help organizations across industries modernize their legacy
            systems,{" "}
            <strong className="text-black font-semibold">
              implement leading ERP platforms, and optimize business performance
              through automation, analytics, and real-time visibility.
            </strong>
          </p>
        </div>
      </div>

      {/* Workday & Support Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[80px] h-[40px] mr-[-34px] mb-1">
                <img
                  src="/workday_icon.png"
                  alt="Workday icon"
                  className="w-20 h-10"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#0A6DAE] text-left">
                Workday Implementation and Support
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Our Workday experts manage everything from implementation to
            day-to-day operations, helping you{" "}
            <span className="font-bold text-[#161616]">
              streamline HR, finance, and talent functions.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            We ensure that your Workday environment evolves with your{" "}
            <span className="font-bold text-[#161616]">
              business, enabling data-driven decisions and seamless user
              experiences.
            </span>
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#0A6DAE] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/workday_banner.jpg"
              alt="Workday Implementation and Support"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* UKG- Kronos Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#005857] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/UKG_Kronos.jpg"
              alt="UKG Kronos"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[80px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/ukg_icon.png"
                  alt="UKG Kronos icon"
                  className="w-20 h-14"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#005857] text-left">
                UKG - Kronos: <br />
                Maximizing efficiency with solutions
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            We offer end-to-end support for Kronos workforce{" "}
            <span className="font-bold text-[#161616]">
              management solutions, including configuration, integration, and
              maintenance.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Our services ensure{" "}
            <span className="font-bold text-[#161616]">
              accurate timekeeping, scheduling, and labor compliance improving
              workforce
            </span>{" "}
            efficiency and reducing administrative burden.
          </p>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/erp_implementation_icon.png"
                  alt="ERP Implementation icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#023ED6] text-left">
                ERP Implementation
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            We offer end-to-end implementation of industry-leading ERP platforms
            such as{" "}
            <span className="font-bold text-[#161616]">
              SAP, People soft, Oracle, Microsoft Dynamics, and Workday.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            From requirement gathering and process mapping to{" "}
            <span className="font-bold text-[#161616]">
              configuration, testing, and deployment,
            </span>{" "}
            we ensure a smooth transition with minimal disruption to your
            business.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/erp_implementation_banner.jpg"
              alt="ERP Implementation"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Customization & Integration Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/erp_custom_banner.jpg"
              alt="ERP Customization & Integration"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/erp_custom_icon.png"
                  alt="ERP Customization & Integration icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#E29400] text-left">
                ERP Customization & Integration
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Every business is unique. We tailor ERP systems to suit your
            specific{" "}
            <span className="font-bold text-[#161616]">
              workflows, compliance requirements, and industry needs.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Our integration services ensure your ERP system communicates
            seamlessly with existing applications such as{" "}
            <span className="font-bold text-[#161616]">
              CRM, payroll, and inventory management tools.
            </span>
          </p>
        </div>
      </div>

      {/* Migration & Upgrades Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/erp_migration_icon.png"
                  alt="ERP Migration icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#023ED6] text-left">
                ERP Migration & Upgrades
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Planning to move from legacy systems or outdated versions?
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            We help you migrate to modern ERP environments—cloud,{" "}
            <span className="font-bold text-[#161616]">
              on-premise, or hybrid safely and efficiently,
            </span>{" "}
            while preserving data integrity and business continuity.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/erp_migration_banner.jpg"
              alt="ERP Migration & Upgrades"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Support & Maintenance Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/erp_support_banner.jpg"
              alt="ERP Support & Maintenance"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/erp_support_icon.png"
                  alt="ERP Support & Maintenance icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#E29400] text-left">
                ERP Support & Maintenance
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Our support services include
          </p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-gray-900 font-bold mb-4">
            {[
              "Performance monitoring",
              "Issue resolution",
              "User training",
              "Periodic system audits",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <img
                  src="/star.png"
                  alt="Star"
                  className="w-5 h-5 object-contain"
                />
                {item}
              </div>
            ))}
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            We proactively manage and maintain your ERP environment to ensure
            optimal uptime, data security, and scalability.
          </p>
        </div>
      </div>

      {/* Consulting & Strategy Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/erp_consulting_icon.png"
                  alt="ERP Consulting & Strategy icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[14px] mt-4 text-[#023ED6] text-left">
                ERP Consulting & Strategy
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            We work closely with your leadership team to align ERP capabilities
            with your{" "}
            <span className="font-bold text-[#161616]">
              long-term business goals.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            From process reengineering to change management, we provide{" "}
            <span className="font-bold text-[#161616]">
              strategic guidance that drives digital transformation.
            </span>
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/erp_consulting_banner.jpg"
              alt="ERP Consulting & Strategy"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits of Partnering Section */}
      <div
        className="bg-cover bg-center bg-no-repeat py-16 px-4 md:px-20 text-[#262626]"
        style={{
          backgroundImage: "url('/benefits_of_partnering_bg.png')",
          opacity: 15,
        }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img
              src="/relationship_icon.png"
              alt="Handshake"
              className="w-16 h-12"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Benefits of Partnering with{" "}
            <span className="bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent">
              Emergere
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full px-4 py-10 flex flex-col items-center justify-center">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 w-full max-w-6xl place-items-center">
            {benefits.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.05)] px-6 py-8 w-full max-w-[280px] text-center"
                style={{ backgroundImage: "url('partnering_card_bg.png')" }}
              >
                <img
                  src={item.icon}
                  alt="Benefit Icon"
                  className="w-10 h-10 mx-auto mb-4"
                />
                <p className="text-sm font-medium text-[#1a1a1a]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl place-items-center">
            {benefits.slice(3).map((item, idx) => (
              <div
                key={idx}
                className="rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.05)] px-6 py-8 w-full max-w-[280px] text-center"
                style={{ backgroundImage: "url('partnering_card_bg.png')" }}
              >
                <img
                  src={item.icon}
                  alt="Benefit Icon"
                  className="w-10 h-10 mx-auto mb-4"
                />
                <p className="text-sm font-medium text-[#1a1a1a]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          At Emergere, we don’t just deploy ERP systems,{" "}
          <strong className="text-black">
            we deliver business transformation
          </strong>
          ! <br />
          Whether you’re embarking on your first ERP journey or optimizing an
          existing system, we help you{" "}
          <strong className="text-black">
            unlock the full potential of enterprise automation
          </strong>
          .
        </p>
      </div>
    </div>
  );
};

export default ERPServices;
