import React from "react";
import Image from "next/image";
import ServicesMenu from "./servicemenu";

export const TechnologyStaffing = () => {
  return (
    <>
      <ServicesMenu />
      <div className="w-full bg-white">
        {/* Technology Staffing Section */}
        <section
          className="w-full flex flex-col items-center justify-center text-center px-4 pt-12 pb-0"
          style={{
            backgroundImage: "url('/digitalservice_bg_img_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "520px", // You can adjust this as per spacing needs
          }}
        >
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/technology_staffing_icon_1.svg"
              alt="Technology Staffing Icon"
              width={64}
              height={64}
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <span
              className="bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #023ED6 0%, #E29400 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technology Staffing
            </span>
          </h1>

          {/* Headline */}
          <h2 className="text-[20px] md:text-[26px] font-extrabold text-[#161616] leading-[40px] mt-4">
            Right Talent. Right Time. Real Impact.
          </h2>

          {/* Paragraphs */}
          <div className="px-4 md:px-8 mt-6 max-w-4xl text-center flex flex-col gap-6 text-[#2F2F2F] text-[16px] leading-[30px] font-medium">
            <p>
              At Emergere, we are more than just a staffing provider—
              <strong className="text-[#161616]">
                {" "}
                we are your strategic talent partner.
              </strong>{" "}
              Our Technology Staffing services are built to help you{" "}
              <strong className="text-[#161616]">
                scale your IT capabilities efficiently while
                <br />
                maintaining agility and cost-effectiveness.
              </strong>
            </p>

            <p>
              We understand that in today’s fast-paced digital landscape,
              finding the right talent at the right time is critical to success.
              Whether you’re expanding teams, launching new projects, or looking
              to fill skill gaps,{" "}
              <strong className="text-[#161616]">
                Emergere ensures that your organization is equipped with
                top-tier professionals who are technically proficient,
                culturally aligned, and ready to deliver.
              </strong>
            </p>
          </div>
        </section>

        {/* End-to-End Talent Lifecycle Support Services Section */}
        <section className="w-full bg-white px-16 md:px-36 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col items-center">
            {/* Centered "WHAT WE OFFER" Label with Line */}
            <div className="flex flex-col items-start mb-12">
              <span className="text-md text-[#023ED6] font-extrabold tracking-[0.08em] uppercase mb-1">
                WHAT WE OFFER
              </span>
              <div className="w-full flex justify-end ml-4">
                <Image
                  src="/aboutus_Line_34.svg"
                  alt="line icon"
                  width={45}
                  height={0}
                />
              </div>
            </div>

            {/* Two-Column Content */}
            <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
              {/* Left Content */}
              <div className="w-full md:basis-1/2 flex flex-col items-start">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <img
                    src="/TalentSupportIcon.svg"
                    alt="Talent Support Icon"
                    width={64}
                    height={64}
                  />
                </div>

                {/* Heading */}
                <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4 leading-snug">
                  End-to-End Talent Lifecycle Support
                </h2>

                {/* Description */}
                <p className="text-[#535353] text-lg md:text-[18px] font-normal leading-relaxed mb-4">
                  We streamline the entire talent acquisition process—from{" "}
                  <strong className=" text-[#161616]">
                    candidate screening, recruitment, onboarding, and training
                  </strong>{" "}
                  to workforce management.
                </p>
                <p className="text-[#535353] text-lg md:text-[18px] font-normal leading-relaxed">
                  Our goal is to reduce your operational burden while ensuring{" "}
                  <strong className="text-[#161616]">
                    fast turnaround times and high-quality placements.
                  </strong>
                </p>
              </div>

              {/* Right Image */}
              <div className="w-full md:basis-1/2 flex justify-center relative">
                {/* Elliptical Blue Blur */}
                <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />
                <Image
                  src="/talentlifecycleteam.svg"
                  alt="Talent Lifecycle Team"
                  width={569}
                  height={424}
                  className="w-full max-w-[540px] h-auto object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Domain Expertise Section */}
        <section className="w-full bg-white px-16 md:px-36 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-10 md:gap-20">
            {/* Left: Image */}
            <div className="w-full md:basis-1/2 flex justify-center items-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/cross_domain_expertise_image.svg" // ← update with your image path
                alt="Cross-Domain Expertise"
                className="w-full max-w-[560px] rounded-[40px] object-cover relative z-10"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start justify-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                <img
                  src="/expertise_icon.svg" // ← update with your actual icon path
                  alt="Expertise Icon"
                  className="w-[64px] h-[64px]"
                />
              </div>

              {/* Heading */}
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] leading-tight mb-4">
                Cross-Domain Expertise
              </h2>

              {/* Description */}
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Our talent pool includes{" "}
                <span className="font-bold text-[#161616]">
                  consultants and specialists
                </span>{" "}
                with proven experience across various industry domains and
                technologies, including{" "}
                <span className="font-bold text-[#161616]">
                  cloud, data, ERP, cybersecurity, and digital transformation
                  initiatives.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Fit & Team Synergy Section */}
        <section className="w-full bg-white px-16 md:px-36 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-10 md:gap-20">
            {/* Left: Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start justify-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                <img
                  src="/cultural_synergy_icon.svg" // ← replace with actual icon
                  alt="Team Synergy Icon"
                  className="w-[64px] h-[64px]"
                />
              </div>

              {/* Heading */}
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] leading-tight mb-4">
                Cultural Fit & Team Synergy
              </h2>

              {/* Description */}
              <p className="text-[#535353] text-lg md:text-[18px] font-normal leading-relaxed mb-4">
                Beyond technical skills, we focus on aligning candidates with
                your{" "}
                <strong className="text-[#161616]">
                  organization’s values, work culture, and team dynamics to
                  ensure long-term retention and team cohesion.
                </strong>
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:basis-1/2 flex justify-center items-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />
              <img
                src="/cultural_fit_image.svg" // ← replace with actual image
                alt="Cultural Fit"
                className="w-full max-w-[560px] object-cover relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Flexible Engagement Models Section */}
        <section className="w-full bg-white px-16 md:px-36 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center gap-10 md:gap-20">
            {/* Left: Content (on right due to reverse) */}
            <div className="w-full md:basis-1/2 flex flex-col items-start justify-center">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-5">
                <img
                  src="/engagement_model_icon.svg" // ← replace with actual icon
                  alt="Engagement Model Icon"
                  className="w-[64px] h-[64px]"
                />
              </div>

              {/* Heading */}
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#E29400] leading-tight mb-4">
                Flexible Engagement Models
              </h2>

              {/* Description */}
              <p className="text-[#535353] text-lg md:text-[18px] font-normal leading-relaxed">
                Whether you need{" "}
                <strong className="text-[#161616]">
                  consultants on-demand, project-based staffing, or full-time
                  hires, our scalable engagement models
                </strong>{" "}
                adapt to your evolving business needs.
              </p>
            </div>

            {/* Right: Image (on left due to reverse) */}
            <div className="w-full md:basis-1/2 flex justify-center items-center relative">
              {/* Elliptical Blue Blur */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 left-0 z-0" />
              <img
                src="/flexible_engagement_image.svg" // ← replace with actual image
                alt="Flexible Engagement"
                className="w-full max-w-[560px] object-cover relative z-10"
              />
            </div>
          </div>
        </section>

        {/* IT Consulting & Strategic Guidance Section */}
        <section className="w-full px-4 md:px-20">
          <div className="relative rounded-[48px] px-6 md:px-16 pt-12 pb-10 text-white overflow-hidden max-w-[1200px] mx-auto">
            {/* Background Pattern Image with subtle opacity */}
            <div className="absolute inset-0 z-0 ">
              <Image
                src="/it_consulting_bgimg.png"
                alt="Background pattern"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Top-left Heading with Icon */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <Image
                  src="/it_consulting_icon.svg"
                  alt="IT Consulting Icon"
                  width={48}
                  height={48}
                />
                <h2 className="text-[26px] md:text-[36px] font-semibold leading-snug">
                  IT Consulting & Strategic Guidance
                </h2>
              </div>
            </div>

            {/* Centered Paragraph Section */}
            <div className="relative z-10 flex flex-col items-center text-center px-2">
              <p className="text-white text-[18px] md:text-[18px] leading-[1.9] font-light max-w-[820px]">
                Our staffing services are backed by robust IT consulting
                expertise. We not only help you find the right people but also
                guide you in{" "}
                <span className="font-semibold text-white">
                  aligning talent with your broader technology strategy
                </span>
                —so you can stay ahead in{" "}
                <span className="font-semibold text-white">
                  innovation, reduce downtime,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-white">
                  focus on driving business outcomes.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Why Emergere Section */}
        <section className="w-full px-4 md:px-0 py-[60px] bg-[#F9F9FA] relative overflow-hidden">
          {/* Section Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hardware_services_bg.svg"
              alt="Background pattern"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Section Heading */}
            <h2 className="text-[28px] md:text-[40px] font-bold mt-20 mb-[24px] text-black">
              Why{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #023ED6 42.9%, #E29400 70.37%)",
                }}
              >
                Emergere?
              </span>
            </h2>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-1 mb-16 w-full px-4 md:px-8">
              {/* Card Component Template */}
              {[
                {
                  icon: "/quick_deployment.svg",
                  alt: "Quick deployment",
                  text: (
                    <>
                      Quick deployment of
                      <br />
                      skilled resources
                    </>
                  ),
                },
                {
                  icon: "/deep_talent.svg",
                  alt: "Deep talent networks",
                  text: (
                    <>
                      Deep talent networks across
                      <br />
                      cutting-edge technologies
                    </>
                  ),
                },
                {
                  icon: "/transparent_model.svg",
                  alt: "Transparent engagement",
                  text: (
                    <>
                      Transparent, client-first
                      <br />
                      engagement model
                    </>
                  ),
                },
                {
                  icon: "/long_term_focus.svg",
                  alt: "Long-term focus",
                  text: (
                    <>
                      Long-term focus on value
                      <br />
                      and partnership
                    </>
                  ),
                },
              ].map(({ icon, alt, text }, i) => (
                <div
                  key={i}
                  className="relative py-10 px-6 flex flex-col items-center overflow-hidden w-full max-w-[292px] mx-auto"
                >
                  {/* Diagonal Light Background Image */}
                  <div className="absolute w-full h-full inset-0 ">
                    <Image
                      src="/card_pattern.svg" // <- Your subtle diagonal bg
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col w-full max-w-[292px] items-center">
                    <Image
                      src={icon}
                      alt={alt}
                      width={48}
                      height={48}
                      className="mb-6"
                    />
                    <p className="text-md font-semibold text-black text-center">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Paragraph */}
            <p className="text-lg md:text-xl text-[#333] max-w-4xl leading-relaxed">
              Let Emergere be the engine behind your technology{" "}
              <strong className="text-[#161616]">
                team’s success—delivering people who don’t just fill roles but
                drive results.
              </strong>{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
