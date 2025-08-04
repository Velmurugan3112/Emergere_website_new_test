import React from "react";
import ServicesMenu from "./servicemenu";
import Link from "next/link";

const DataAIAnalytics: React.FC = () => {
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
            src="/data_ai_analytics_icon.png"
            alt="Data, AI & Analytics icon"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent leading-tight">
            Data, AI & Analytics
          </h1>
          <p className="text-base md:text-lg text-[#535353] max-w-3xl">
            Data, AI, and analytics form the backbone of digital transformation.
            By harnessing vast amounts of data through{" "}
            <strong className="text-black font-semibold">
              advanced analytics and AI-driven insights , organizations can
              unlock new opportunities, streamline operations, and deliver
              personalized customer experiences.
            </strong>{" "}
            These technologies enable faster, smarter decision-making and foster
            continuous innovation, ensuring businesses remain competitive in a
            rapidly evolving landscape.
          </p>
        </div>
      </div>

      {/* Data Management Solutions Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-strart items-strart rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] mb-8 md:mb-0 h-full">
          <div className="flex items-strart mb-4">
            <div className="flex flex-col items-strart">
              <div className="flex justify-center items-center w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/dms_icon.png"
                  alt="Data management icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Data Management Solutions
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Unlock the full potential of your data assets with our comprehensive
            data management solutions.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            We help organizations{" "}
            <span className="font-bold text-[#161616]">
              organize, store, secure, and optimize data across the entire
              lifecycle, ensuring accessibility, integrity, and compliance.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Whether you're modernizing legacy systems or building cloud-native
            architectures, our tailored approach delivers scalable, future-ready
            data environments that drive smarter business decisions.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-strart justify-strart h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-30px] right-[-80px] z-0" />
            <img
              src="/dms_banner.jpg"
              alt="Data Management"
              className="rounded-[20px] w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>

      {/* Data Engineering Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-strart justify-strart h-full">
          <div className="relative w-full h-full flex items-strart mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/data_engineering_banner.jpg"
              alt="Data Engineering"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-strart items-strart rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-strart mb-4">
            <div className="flex flex-col items-strart">
              <div className="flex justify-strart items-strart w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/data_engineering_icon.png"
                  alt="Data engineering icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Data Engineering
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Transform raw information into actionable insights with our expert
            data engineering services.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Our team designs and implements robust data pipelines, integrates
            diverse data sources, and automates data workflows to ensure
            high-quality, reliable data is always available for analytics and
            AI.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            We specialize in{" "}
            <span className="font-bold text-[#161616]">
              architectures that support real-time processing, advanced
              analytics, and seamless data movement
            </span>{" "}
            across your enterprise.
          </p>
        </div>
      </div>

      {/* Data Visualization Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-strart items-strart rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] mb-8 md:mb-0 h-full">
          <div className="flex items-strart mb-4">
            <div className="flex flex-col items-strart">
              <div className="flex justify-strart items-strart w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/data_visual_icon.png"
                  alt="Data Visualization icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Data Visualization
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Bring your data to life with{" "}
            <span className="font-bold text-[#161616]">
              intuitive, interactive visualizations that empower faster, more
              informed decisions.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Our data visualization solutions turn complex datasets into clear,
            compelling dashboards and reports, tailored to your business needs.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            From executive summaries to granular operational insights, we ensure
            stakeholders at every level can easily interpret and act on your
            data.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-strart justify-strart h-full">
          <div className="relative w-full h-full flex items-start mt-15 ">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-30px] right-[-80px] z-0" />
            <img
              src="/data_visual_banner.jpg"
              alt="Data Visualization"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Data Governance Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/data_gov_banner.jpg"
              alt="Data Governance"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-center items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/data_gov_icon.png"
                  alt="Data Governance icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#023ED6] text-left">
                Data Governance
              </span>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Safeguard your data and build trust with our comprehensive data
            governance frameworks.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            We help you establish{" "}
            <span className="font-bold text-[#161616]">
              clear policies, roles, and controls to ensure data quality,
              privacy, and regulatory compliance.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Our solutions provide transparency and accountability across your
            data landscape, reducing risk and enabling confident, compliant
            data-driven innovation.
          </p>
        </div>
      </div>

      {/* Data Science Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-stretch justify-center px-10">
        {/* LEFT: Content */}
        <div className="bg-white flex flex-col justify-start items-start rounded-2xl px-8 py-8 w-full max-w-md min-h-[285px] mb-8 md:mb-0 h-full">
          <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
              <div className="flex justify-start items-start w-[56px] h-[56px] mr-[-34px] mb-1">
                <img
                  src="/data_science_icon.png"
                  alt="Data Science icon"
                  className="w-14 h-14"
                />
              </div>
              <span className="font-black text-[20px] mt-4 text-[#E29400] text-left">
                Data Science
              </span>
            </div>
          </div>
          <h3 className="text-black font-bold text-[16px] md:text-base leading-[1.8] mb-3 text-left">
            Data holds the answers to your business challenges—we help you find
            them!
          </h3>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Our Data Science services blend statistical modeling, machine
            learning, and AI to turn complex data into clear, actionable
            insights.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Whether you're aiming to forecast{" "}
            <span className="font-bold text-[#161616]">
              demand, optimize resources, detect anomalies, or personalize user
              experiences,
            </span>{" "}
            our team works with you to build scalable, data-driven solutions.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full max-w-md flex items-start justify-start h-full">
          <div className="relative w-full h-full flex items-start mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-30px] right-[-80px] z-0" />
            <img
              src="/data_science_banner.jpg"
              alt="Data Science"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fusefy Section */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-60 items-start justify-center px-10">
        {/* LEFT: Image */}
        <div className="w-full max-w-md flex items-center justify-center h-full">
          <div className="relative w-full h-full flex items-center mt-15">
            <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-[-20px] left-[-80px] z-0" />
            <img
              src="/fusefy_banner.jpg"
              alt="Fusefy"
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
                  src="/fusefy_icon.png"
                  alt="Fusefy icon"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex items-center gap-1 mt-4">
                <h2 className="text-[#023ED6] text-[20px] font-black text-left">
                  Fusefy
                </h2>
                <Link
                  href="https://www.fusefy.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1"
                >
                  <img
                    src="/external_link.png"
                    alt="External Link"
                    className="w-4 h-4 inline-block"
                  />
                </Link>
              </div>
            </div>
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Fusefy{" "}
            <span className="font-bold text-[#161616]">
              –AI adoption as a Service (AIaaS)
            </span>{" "}
            platform empowers your business to{" "}
            <span className="font-bold text-[#161616]">
              seamlessly adopt AI, accelerating implementation from idea to
              production with robust governance, security, and compliance.
            </span>
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            Our approach is anchored in the FUSE Framework—
          </p>
          <div className="grid grid-cols-4 text-gray-900 font-bold mb-4 text-left">
            {["Feasible", "Usable", "Secure", "Explainable"].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-start">
                <img
                  src="/star.png"
                  alt="Star"
                  className="w-5 h-5 object-contain"
                />
                {item}
              </div>
            ))}
          </div>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium mb-3 text-left">
            ensuring every AI solution is practical, user-friendly, protected,
            and transparent.
          </p>
          <p className="text-[#535353] text-[16px] md:text-base leading-[1.8] font-medium text-left">
            Unlock measurable ROI and operational efficiency with{" "}
            <span className="font-bold text-[#161616]">
              end-to-end, data-driven AI solutions, and scale confidently with
              expert support at every stage.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataAIAnalytics;
