import React from "react";
import ServicesMenu from "./servicemenu";

const ModernTech: React.FC = () => {
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
            src="/modern_technology_icon.png"
            alt="Modern Technology icon"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent leading-tight">
            Modern Technology
          </h1>
          <p className="text-base md:text-lg text-[#535353] max-w-3xl">
            Today’s business leaders seek to harness technology as a strategic
            enabler of{" "}
            <strong className="text-black font-semibold">
              growth, innovation, and resilience.
            </strong>{" "}
            From navigating complexity and managing costs to strengthening
            cybersecurity and aligning IT with business goals, organizations
            face numerous challenges on their digital transformation journey. By{" "}
            <strong className="text-black font-semibold">
              adopting the right technology solutions, businesses can drive
              profitability, foster innovation, enhance risk resilience, and
              make informed, data-driven decisions for long-term success.
            </strong>
          </p>
        </div>
      </div>

      {/* Low-Code Development Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/low_code_dev_icon.png"
                  alt="Low Code Development icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Low-Code Development
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Our low-code expertise empowers{" "}
            <span className="font-bold text-[#161616]">
              rapid application delivery, enabling businesses
            </span>{" "}
            to respond faster to evolving demands.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/low_code_dev_banner.jpg"
              alt="Low Code Development"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cybersecurity & Technology Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/cyber_tech_banner.jpg"
              alt="Cyber Technology"
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
                  src="/cyber_tech_icon.png"
                  alt="Cyber Technology icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Cybersecurity & Technology Risk
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Security is embedded across all our solutions through{" "}
            <span className="font-bold text-[#161616]">
              {" "}
              robust DevSecOps practices and comprehensive risk management
              frameworks.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            We proactively address threats,{" "}
            <span className="font-bold text-[#161616]">
              {" "}
              ensure compliance, and safeguard data thus enabling resilient,
              secure digital operations.
            </span>
          </p>
        </div>
      </div>

      {/* Cloud Services Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/cloud_services_icon.png"
                  alt="Cloud Services icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Cloud Services
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            We enable organizations to modernize their IT infrastructure with{" "}
            <span className="font-bold text-[#161616]">
              scalable, secure, and cost-efficient cloud solutions.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Leveraging platforms like{" "}
            <span className="font-bold text-[#161616]">
              Microsoft Azure and AWS, our services cover cloud migration,
              cloud-native development,
            </span>{" "}
            and infrastructure automation to drive agility and innovation.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/cloud_service_banner.jpg"
              alt="Cloud Services"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTech;
