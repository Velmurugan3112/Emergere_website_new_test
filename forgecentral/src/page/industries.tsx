import React from "react";
import Link from "next/link";

const Industries: React.FC = () => {
  return (
    <section className="bg-white">
      <div
        className="relative w-full h-[280px] bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: "url('/our_service_cover_img.jpg')" }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#042474] to-[#023ED6] opacity-75"></div>

        {/* Heading & Breadcrumb */}
        <div className="relative z-10 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Industries</h1>
          <p className="text-md text-white/80">
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
          <div className="px-4 md:px-8 py-4 max-w-3xl mt-4 flex flex-col items-center text-center">
            <h2 className="text-md md:text-[20px] font-extrabold text-[#161616] leading-[38px] mb-4">
              Tailored Solutions for Your Unique Challenges
            </h2>

            <p className="text-md md:text-[16px] text-center text-[#161616] leading-[32px] font-normal max-w-2xl">
              Emergere provides experienced experts from many industries. We aim
              to build long-term relationships with our clients by offering{" "}
              <span className="font-bold text-[#161616]">
                quality, complete solutions and innovative business consulting
                to improve their projects.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Industries Row Section */}
      <div className="relative items-center justify-center px-26">
        {/* Customer & Retail Section */}
        <div className="w-full px-6 md:px-10 py-16 relative">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex mb-6 flex-col items-start">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src="/consumer_retail_icon y.png"
                  alt="Consumer Retail Icon"
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                Consumer & Retail
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Empowering retailers and consumer brands to optimize operations,
                enhance customer experiences, and drive growth through digital
                innovation and data-driven insights
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/customer_retail_banner.jpg"
                alt="Consumer Retail"
                className="w-full max-w-[585px] h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Financial Services Section */}
        <div className="w-full px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/financial_services_icon b.png"
                    alt="Financial Services Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Financial Services
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Delivering tailored technology and analytics solutions to{" "}
                  <span className="font-bold text-[#161616]">
                    banks, insurers, and financial institutions for improved
                    efficiency, compliance, and customer trust
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative z-10">
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/financial_services_banner.jpg"
                alt="Financial Services"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Healthcare & Lifesciences Section */}
        <div className="w-full px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/hc_ls_icon y.png"
                    alt="Healthcare & Lifesciences icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Healthcare & Lifescience
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Enabling healthcare providers and life sciences organizations
                  to accelerate{" "}
                  <span className="font-bold text-[#161616]">
                    innovation, ensure regulatory compliance, and improve
                    patient outcomes.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/hc_ls_banner.jpg"
                alt="Healthcare & Lifesciences"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Banking & Capital Markets Section */}
        <div className="w-full px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/banking_capital_icon b.png"
                    alt="Banking Capital icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Banking & Capital Markets
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Supporting banks and capital market firms with robust digital{" "}
                  <span className="font-bold text-[#161616]">
                    platforms, risk analytics, and regulatory technology for
                    sustainable growth.
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/banking_capital_banner.jpg"
                alt="Banking & Capital"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Industrial Manufacturing Section */}
        <div className="w-full px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/industrial_manufacturing_icon y.png"
                    alt="Industrial Manufacturing icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Industrial Manufacturing
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Transforming manufacturing operations with{" "}
                  <span className="font-bold text-[#161616]">
                    smart automation and data analytics to boost productivity
                    and reduce costs.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/industrial_manufacturing_banner.jpg"
                alt="Industrial Manufacturing"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Technology, Media & Telecom Section */}
        <div className="w-full px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/tech_media_telecom_icon b.png"
                    alt="Tech Media Telecom Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Technology, Media & Telecom
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Driving digital transformation for{" "}
                  <span className="font-bold text-[#161616]">
                    technology, media, and telecom companies with scalable
                    platforms and advanced analytics.
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/tech_media_telecom_banner.jpg"
                alt="Tech Media Telecom"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
// tested
