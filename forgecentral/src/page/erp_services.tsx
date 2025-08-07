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
    <div className="bg-white">
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
          <h2 className="text-xs md:text-[24px] font-extrabold text-[#161616] leading-[38px] mb-4">
            Streamlining Business Operations with Scalable ERP Solutions
          </h2>
          <p className="text-lg md:text-[16px] text-between text-[#161616] leading-[32px] font-normal max-w-2xl">
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
          <p className="text-lg md:text-[16px] text-between text-[#161616] leading-[32px] font-normal max-w-2xl">
            We help organizations across industries modernize their legacy
            systems,{" "}
            <strong className="text-black font-semibold">
              implement leading ERP platforms, and optimize business performance
              through automation, analytics, and real-time visibility.
            </strong>
          </p>
        </div>
      </div>

      {/* ERP Services Row Section */}
      <div className="relative items-center justify-center px-26">
        {/* Workday & Support Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex mb-6 flex-col items-start">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/workday_icon.png"
                  alt="App Icon"
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#0A6DAE] mb-4">
                Workday Implementation and <br />
                Support
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Our Workday experts manage everything from implementation to
                day-to-day operations, helping you{" "}
                <span className="font-bold text-[#161616]">
                  streamline HR, finance, and talent functions.
                </span>
              </p>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                We ensure that your Workday environment evolves with your
                <span className="font-bold text-[#161616]">
                  {" "}
                  business, enabling data-driven decisions and seamless user
                  experiences.
                </span>
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#0A6DAE] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/workday_banner.jpg"
                alt="Workday Implementation"
                className="w-full max-w-[585px] h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* UKG- Kronos Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="flex items-start justify-start mb-4">
                  <img
                    src="/ukg_icon.png"
                    alt="UKG Kronos Icon"
                    className="w-40 h-20"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#005857] mb-4">
                  UKG - Kronos: <br />
                  Maximizing efficiency with solutions
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  We offer end-to-end implementation of industry-leading ERP
                  platforms such as{" "}
                  <span className="font-bold text-[#161616]">
                    {" "}
                    management solutions, including configuration, integration,
                    and maintenance.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Our services ensure
                  <span className="font-bold text-[#161616]">
                    {" "}
                    accurate timekeeping, scheduling, and labor compliance
                    improving workforce{" "}
                  </span>
                  efficiency and reducing administrative burden.
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative z-10">
              <div className="absolute w-[200px] h-[200px] bg-[#005857] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/UKG_Kronos.jpg"
                alt="UKG Kronos"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/erp_implementation_icon.png"
                    alt="ERP Implementation Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  ERP Implementation
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  We offer end-to-end implementation of industry-leading ERP
                  platforms such as
                  <span className="font-bold text-[#161616]">
                    {" "}
                    SAP, People soft, Oracle, Microsoft Dynamics, and Workday.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  From requirement gathering and process mapping to
                  <span className="font-bold text-[#161616]">
                    {" "}
                    configuration, testing, and deployment,{" "}
                  </span>
                  we ensure a smooth transition with minimal disruption to your
                  business.
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/erp_implementation_banner.jpg"
                alt="ERP Implementation"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Customization & Integration Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/erp_custom_icon.png"
                    alt="ERP Custom Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  ERP Customization & Integration
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Every business is unique. We tailor ERP systems to suit your
                  specific
                  <span className="font-bold text-[#161616]">
                    {" "}
                    workflows, compliance requirements, and industry needs.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Our integration services ensure your ERP system communicates
                  seamlessly with existing applications such as
                  <span className="font-bold text-[#161616]">
                    {" "}
                    CRM, payroll, and inventory management tools.
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/erp_custom_banner.jpg"
                alt="ERP Custom"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Migration & Upgrades Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/erp_migration_icon.png"
                    alt="ERP Migration Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  ERP Migration & Upgrades
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Planning to move from legacy systems or outdated versions?
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  We help you migrate to modern ERP environments—cloud,
                  <span className="font-bold text-[#161616]">
                    {" "}
                    on-premise, or hybrid safely and efficiently,{" "}
                  </span>
                  while preserving data integrity and business continuity.
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/erp_migration_banner.jpg"
                alt="ERP Migration"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Support & Maintenance Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/erp_support_icon.png"
                    alt="ERP Support Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  ERP Support & Maintenance
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Our approach is anchored in the FUSE Framework—
                </p>
                <div className="grid grid-cols-2 text-[#161616] text-lg md:text-[18px]  font-bold leading-relaxed font-bold mb-4 text-left">
                  {[
                    "Performance monitoring",
                    "Issue resolution",
                    "User training",
                    "Periodic system audits",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 justify-start"
                    >
                      <img
                        src="/star.png"
                        alt="Star"
                        className="w-5 h-5 object-contain"
                      />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  We proactively manage and maintain your ERP environment to
                  ensure optimal uptime, data security, and scalability.
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/erp_support_banner.jpg"
                alt="ERP Support"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Consulting & Strategy Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/erp_consulting_icon.png"
                    alt="ERP Consulting Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  ERP Consulting & Strategy
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  We work closely with your leadership team to align ERP
                  capabilities with your
                  <span className="font-bold text-[#161616]">
                    {" "}
                    long-term business goals.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  From process reengineering to change management, we provide
                  <span className="font-bold text-[#161616]">
                    {" "}
                    strategic guidance that drives digital transformation.
                  </span>
                  our team works with you to build scalable, data-driven
                  solutions.
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/erp_consulting_banner.jpg"
                alt="ERP Consulting"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
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
