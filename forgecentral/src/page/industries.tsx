import React from "react";
import Link from "next/link";

const Industries: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Industries</h1>
          <p className="text-sm text-white/80">
            <Link href="/home" className="text-[#6490FE]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/" className="text-[#EFEFEF]">
              Industries
            </Link>
          </p>
        </div>
      </div>
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
            src="/industries_icon.png"
            alt="Data, AI & Analytics icon"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent leading-tight">
            Industries
          </h1>
          <h2 className="text-base font-bold md:text-lg text-black max-w-3xl">
            Tailored Solutions for Your Unique Challenges
          </h2>
          <p className="text-base md:text-lg text-[#535353] max-w-3xl">
            Data, AI, and analytics form the backbone of digital transformation.
            By harnessing vast amounts of data through{" "}
            <strong className="text-black font-semibold">
              advanced analytics and AI-driven insights, organizations can
              unlock new opportunities, streamline operations, and deliver
              personalized customer experiences.
            </strong>{" "}
            These technologies enable faster, smarter decision-making and foster
            continuous innovation, ensuring businesses remain competitive in a
            rapidly evolving landscape.
          </p>
        </div>
      </div>

      {/* Customer & Retail Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/consumer_retail_icon y.png"
                  alt="Customer & Retail icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Customer & Retail
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Emergere provides experienced experts from many industries. We aim
            to build long-term relationships with our clients by offering{" "}
            <span className="font-bold text-[#161616]">
              quality, complete solutions and innovative business consulting to
              improve their projects.
            </span>
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/customer_retail_banner.jpg"
              alt="Customer & Retail"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Financial Services Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/financial_services_banner.jpg"
              alt="Financial Services"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/financial_services_icon b.png"
                  alt="Financial Services icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Financial Services
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Delivering tailored technology and analytics solutions to{" "}
            <span className="font-bold text-[#161616]">
              banks, insurers, and financial institutions for improved
              efficiency, compliance, and customer trust
            </span>
          </p>
        </div>
      </div>

      {/* Healthcare & Lifesciences Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/hc_ls_icon y.png"
                  alt="Healthcare & Lifesciences icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Healthcare & Lifescience
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Enabling healthcare providers and life sciences organizations to
            accelerate{" "}
            <span className="font-bold text-[#161616]">
              innovation, ensure regulatory compliance, and improve patient
              outcomes.
            </span>
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/hc_ls_banner.jpg"
              alt="Healthcare & Lifesciences"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Banking & Capital Markets Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/banking_capital_banner.jpg"
              alt="Banking & Capital"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/banking_capital_icon b.png"
                  alt="Banking Capital icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Banking & Capital Markets
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Supporting banks and capital market firms with robust digital{" "}
            <span className="font-bold text-[#161616]">
              platforms, risk analytics, and regulatory technology for
              sustainable growth.
            </span>
          </p>
        </div>
      </div>

      {/* Industrial Manufacturing Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/industrial_manufacturing_icon y.png"
                  alt="Industrial Manufacturing icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Industrial Manufacturing
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Transforming manufacturing operations with{" "}
            <span className="font-bold text-[#161616]">
              smart automation and data analytics to boost productivity and
              reduce costs.
            </span>
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] right-[-80px] z-0" />
            <img
              src="/industrial_manufacturing_banner.jpg"
              alt="Industrial Manufacturing"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Technology, Media & Telecom Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/tech_media_telecom_banner.jpg"
              alt="Tech Media Telecom"
              className="rounded-[20px] w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/tech_media_telecom_icon b.png"
                  alt="Tech Media Telecom Icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Technology, Media & Telecom
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Driving digital transformation for{" "}
            <span className="font-bold text-[#161616]">
              technology, media, and telecom companies with scalable platforms
              and advanced analytics.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
// tested
