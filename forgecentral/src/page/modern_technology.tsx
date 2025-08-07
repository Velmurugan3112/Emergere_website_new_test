import React from "react";
import ServicesMenu from "./servicemenu";

const ModernTech: React.FC = () => {
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
            src="/modern_technology_icon.png"
            alt="Modern Technology icon"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent leading-tight">
            Modern Technology
          </h1>
          <p className="text-lg md:text-[16px] text-center text-[#161616] leading-[32px] font-normal max-w-2xl">
            Today’s business leaders seek to harness technology as a strategic
            enabler of <strong>growth, innovation, and resilience.</strong> From
            navigating complexity and managing costs to strengthening
            cybersecurity and aligning IT with business goals, organizations
            face numerous challenges on their digital transformation journey. By{" "}
            <strong>
              adopting the right technology solutions, businesses can drive
              profitability, foster innovation, enhance risk resilience, and
              make informed, data-driven decisions for long-term success.
            </strong>
          </p>
        </div>
      </div>

      {/* Modern technology Row Section */}
      <div className="relative items-center justify-center px-26">
        {/* Low-Code Development Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex mb-6 flex-col items-start">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src="/low_code_dev_icon.png"
                  alt="Low Code Dev Icon"
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                Low-Code Development
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Our low-code expertise empowers
                <span className="font-bold text-[#161616]">
                  {" "}
                  rapid application delivery, enabling businesses{" "}
                </span>
                to respond faster to evolving demands.
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/low_code_dev_banner.jpg"
                alt="Low Code Dev"
                className="w-full max-w-[585px] h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Cybersecurity & Technology Risk Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/cyber_tech_icon.png"
                    alt="Cyber Tech Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Cybersecurity & Technology Risk
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Security is embedded across all our solutions through
                  <span className="font-bold text-[#161616]">
                    {" "}
                    robust DevSecOps practices and comprehensive risk management
                    frameworks.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  We proactively address threats,
                  <span className="font-bold text-[#161616]">
                    {" "}
                    ensure compliance, and safeguard data thus enabling
                    resilient, secure digital operations.
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative z-10">
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/cyber_tech_banner.jpg"
                alt="Cyber Tech"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Cloud Services Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/cloud_services_icon.png"
                    alt="Cloud Services Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Cloud Services
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  We enable organizations to modernize their IT infrastructure
                  with
                  <span className="font-bold text-[#161616]">
                    {" "}
                    scalable, secure, and cost-efficient cloud solutions.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Leveraging platforms like
                  <span className="font-bold text-[#161616]">
                    {" "}
                    Microsoft Azure and AWS, our services cover cloud migration,
                    cloud-native development, and infrastructure automation{" "}
                  </span>
                  to drive agility and innovation.
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/cloud_service_banner.jpg"
                alt="Cloud Services"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTech;
