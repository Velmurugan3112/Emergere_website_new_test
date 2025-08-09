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
          <p className="text-lg md:text-[16px] text-center text-[#161616] leading-[32px] font-normal max-w-2xl">
            Data, AI, and analytics form the backbone of digital transformation.
            By harnessing vast amounts of data through{" "}
            <strong>
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

      {/* Data AI Analytics Row Section */}
      <div className="bg-white relative items-center justify-center px-26">
        {/* Data Management Solutions Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex mb-6 flex-col items-start">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src="/dms_icon.png" alt="App Icon" className="w-16 h-16" />
              </div>
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                Data Management Solutions
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Unlock the full potential of your data assets with our
                comprehensive data management solutions.
              </p>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                We help organizations
                <span className="font-bold text-[#161616]">
                  {" "}
                  organize, store, secure, and optimize data across the entire
                  lifecycle, ensuring accessibility, integrity, and compliance.
                </span>
              </p>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Whether you're modernizing legacy systems or building
                cloud-native architectures, our tailored approach delivers
                scalable, future-ready data environments that drive smarter
                business decisions.
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/dms_banner.jpg"
                alt="Application Dev"
                className="w-full max-w-[585px] h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Data Engineering Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/data_engineering_icon.png"
                    alt="Data Engineering Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Data Engineering
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Transform raw information into actionable insights with our
                  expert data engineering services.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Our team designs and implements robust data pipelines,
                  integrates diverse data sources, and automates data workflows
                  to ensure high-quality, reliable data is always available for
                  analytics and AI.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  We specialize in
                  <span className="font-bold text-[#161616]">
                    {" "}
                    architectures that support real-time processing, advanced
                    analytics, and seamless data movement{" "}
                  </span>
                  across your enterprise.
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative z-10">
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/data_engineering_banner.jpg"
                alt="Data Engineering"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Data Visualization Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/data_visual_icon.png"
                    alt="Data Visualization Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Data Visualization
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Bring your data to life with
                  <span className="font-bold text-[#161616]">
                    intuitive, interactive visualizations that empower faster,
                    more informed decisions.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Our data visualization solutions turn complex datasets into
                  clear, compelling dashboards and reports, tailored to your
                  business needs.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  From executive summaries to granular operational insights, we
                  ensure stakeholders at every level can easily interpret and
                  act on your data.
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/data_visual_banner.jpg"
                alt="Data Visualization"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Data Governance Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/data_gov_icon.png"
                    alt="Data Governance Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Data Governance
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Safeguard your data and build trust with our comprehensive
                  data governance frameworks.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  We help you establish
                  <span className="font-bold text-[#161616]">
                    {" "}
                    clear policies, roles, and controls to ensure data quality,
                    privacy, and regulatory compliance.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Our solutions provide transparency and accountability across
                  your data landscape, reducing risk and enabling confident,
                  compliant data-driven innovation.
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/data_gov_banner.jpg"
                alt="Data Governance"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Data Science Section */}
        <div className="w-full px-6 md:px-10 py-16 relative ">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/data_science_icon.png"
                    alt="Data Science Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] mb-4">
                  Data Science
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  <span className="font-bold text-[#161616]">
                    Data holds the answers to your business challenges—we help
                    you find them!
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Our Data Science services blend statistical modeling, machine
                  learning, and AI to turn complex data into clear, actionable
                  insights.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                  Whether you're aiming to forecast
                  <span className="font-bold text-[#161616]">
                    {" "}
                    demand, optimize resources, detect anomalies, or personalize
                    user experiences,{" "}
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
                src="/data_science_banner.jpg"
                alt="Data Science"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Fusefy Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/fusefy_icon.png"
                    alt="Fusefy Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                  Fusefy{"  "}
                  <Link
                    href="https://www.fusefy.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1"
                  >
                    <img
                      src="/external_link.png"
                      alt="External Link"
                      className="w-8 h-8 inline-block"
                    />
                  </Link>
                </h2>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Fusefy{" "}
                  <span className="font-bold text-[#161616]">
                    –AI adoption as a Service (AIaaS)
                  </span>{" "}
                  platform empowers your business to{" "}
                  <span className="font-bold text-[#161616]">
                    seamlessly adopt AI, accelerating implementation from idea
                    to production with robust governance, security, and
                    compliance.
                  </span>
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Our approach is anchored in the FUSE Framework—
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 text-[#161616] text-base sm:text-lg md:text-[18px] font-medium leading-relaxed font-bold mb-4 text-left gap-x-4 gap-y-2">
                  {["Feasible", "Usable", "Secure", "Explainable"].map(
                    (item) => (
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
                    )
                  )}
                </div>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  ensuring every AI solution is practical, user-friendly,
                  protected, and transparent.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px]  font-medium leading-relaxed">
                  Unlock measurable ROI and operational efficiency with{" "}
                  <span className="font-bold text-[#161616]">
                    end-to-end, data-driven AI solutions, and scale confidently
                    with expert support at every stage.
                  </span>
                </p>
              </div>
            </div>
            {/* Left Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative">
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/fusefy_banner.jpg"
                alt="Fusefy"
                className="w-full max-w-[585px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAIAnalytics;
