import React from "react";
import ServicesMenu from "./servicemenu";

export const DigitalServices = () => (
  <>
    <ServicesMenu />
    <div className="w-full bg-white item-center justify-center">
      {/* Digital Service Section */}
      <section
        className="w-full flex flex-col items-center justify-center text-center px-4 pt-12 mb-0 pb-0"
        style={{
          backgroundImage: "url('/digitalservice_bg_img_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 472,
        }}
      >
        {/* Icon */}
        <div className="mb-2 flex justify-center">
          <img
            src="/digitalservice_icon_1.svg"
            alt="Digital Services"
            className="w-16 h-16"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mt-2 flex justify-center items-center gap-1">
          <span className="text-[#023ED6]">Digital</span>
          <span className="bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent font-bold">
            Services
          </span>
        </h1>

        {/* Headline + Paragraph */}
        <div className="px-4 md:px-8 py-4 max-w-3xl mt-4 flex flex-col items-center text-center">
          <h2 className="text-lg md:text-[24px] font-extrabold text-[#161616] leading-[38px] mb-4">
            Accelerating Business Outcomes Through Tailored
            <br />
            Technology Solutions
          </h2>

          <p className="text-lg md:text-[16px] text-center text-[#161616] leading-[32px] font-normal max-w-2xl">
            In today’s fast-evolving digital landscape, technology must deliver
            measurable impact. Our digital services are designed to{" "}
            <strong>align with your strategic goals,</strong>{" "}
            <strong>
              driving operational efficiency, innovation, and growth.
            </strong>
          </p>
        </div>
      </section>

      {/* Digital Service Row Section */}
      <div className="relative items-center justify-center px-26">
        {/* Application Development Section */}
        <section className="w-full bg-white px-6 md:px-10 py-16 relative">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex mb-6 flex-col items-start">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src="/digitalservice_icon_2.svg"
                  alt="App Icon"
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                Application Development
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                We deliver high-performance enterprise and mobile applications
                that support
                <span className="font-bold text-[#161616]">
                  {" "}
                  business agility, improve customer engagement, and scale{" "}
                </span>
                with your enterprise across platforms and devices.
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/digitalservice_img_1.svg"
                alt="Application Dev"
                className="w-full max-w-[585px] h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Product Engineering Section */}
        <section className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/digitalservice_icon_3.svg"
                    alt="Product Engineering Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Product Engineering
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  From ideation to market launch, we partner with you to
                  engineer innovative digital products that create
                  <span className="font-bold text-[#161616]">
                    {" "}
                    competitive advantage and future-proof your business.
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative z-10">
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/digitalservice_img_2.svg"
                alt="Product Engineering"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Custom Software Section */}
        <section className="w-full bg-white px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/digitalservice_icon_4.svg"
                    alt="Custom Software Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Custom Software
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  We build purpose-driven software solutions tailored to your
                  <span className="font-bold text-[#161616]">
                    {" "}
                    operational workflows and industry requirements
                  </span>
                  , enhancing{" "}
                  <span className="font-bold text-[#161616]">
                    productivity and enabling seamless digital transformation.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/digitalservice_img_3.svg"
                alt="Custom Software"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Intelligent Automation Section */}
        <section className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/digitalservice_icon_5.svg"
                    alt="Intelligent Automation Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Intelligent Automation
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  By automating manual and repetitive processes, we help you
                  unlock
                  <span className="font-bold text-[#161616]">
                    {" "}
                    workforce capacity, reduce operational costs, and improve
                    turnaround time{" "}
                  </span>
                  across departments.
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/digitalservice_img_5.svg"
                alt="Intelligent Automation"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);
