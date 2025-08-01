import React from "react";
import ServicesMenu from "./servicemenu";

const servicesRowOne = [
  {
    icon: "/multi-cloud.svg",
    title: "Multi-Cloud Hosting",
    desc: "Build and scale your environment across Azure, AWS, and GCP to ensure flexibility and resilience.",
  },
  {
    icon: "/automation.svg",
    title: "Automation & Flexibility",
    desc: "Accelerate deployment through Infrastructure-as-Code (IaC) for consistent and efficient provisioning.",
  },
  {
    icon: "/container-hosting.svg",
    title: "Container & Application Hosting",
    desc: "Enable agile development with managed container services and virtual machines for modern application delivery.",
  },
  {
    icon: "/hybrid-integration.svg",
    title: "Seamless Hybrid Integration",
    desc: "Connect your on-premise infrastructure with public cloud environments for a unified, hybrid cloud strategy.",
  },
];

const servicesRowTwo = [
  {
    icon: "/identity-access.svg",
    title: "Unified Identity & Access Management",
    desc: "Secure user access with centralized control via Microsoft Entra ID.",
  },
  {
    icon: "/governance.svg",
    title: "Robust Data Governance",
    desc: "Maintain compliance and transparency using Microsoft Purview and Azure Policy.",
  },
  {
    icon: "/security.svg",
    title: "End-to-End Cloud Security",
    desc: "Protect cloud workloads with advanced security tools like Microsoft Defender for Cloud and Microsoft Sentinel.",
  },
];
interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-start bg-white bg-opacity-90 rounded-2xl p-6 w-full max-w-[300px] min-h-[240px] h-[308px] border border-[#E3EAFD] shadow-sm">
    <div className="w-12 h-12 mb-2 flex items-center justify-center">
      <img src={icon} alt={title} className="w-[64px] h-[64px]" />
    </div>
    <h3 className="text-[18px] font-extrabold text-[#161616] mt-4 mb-8">
      {title}
    </h3>
    <p className="text-[15px] text-[#535353] font-medium leading-relaxed">
      {desc}
    </p>
  </div>
);

export const ManagedServices = () => {
  return (
    <>
      <ServicesMenu />
      <div className="w-full font-sans bg-white item-center justify-center">
        {/* Managed Service Section */}
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
              src="/managedservices_icon_1.svg"
              alt="Managed Services"
              className="w-16 h-16"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mt-2 flex justify-center items-center gap-1">
            <span className="text-[#023ED6]">Managed</span>
            <span className="bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent font-bold">
              Services
            </span>
          </h1>

          {/* Headline + Paragraph */}
          <div className="px-4 md:px-8 py-4 max-w-3xl md-0 flex flex-col items-center text-center">
            <h2 className="text-xs md:text-[24px] font-extrabold text-[#161616] leading-[38px] mb-4">
              Ensuring Operational Continuity, Scalability, and
              <br />
              Technology Optimization
            </h2>
          </div>
          <div className="px-4 md:px-0 mt-0 max-w-5xl flex flex-col items-center text-center">
            <p className="text-lg md:text-[18px] text-center text-[#535353] leading-[32px] font-medium max-w-4xl">
              Our Managed Services are built to{" "}
              <strong className="text-[#161616]">
                simplify IT operations, enhance system reliability, and enable
                your teams to focus on core business outcomes.
              </strong>{" "}
              We bring deep expertise in enterprise platforms and cloud
              ecosystems to keep your digital infrastructure{" "}
              <strong className="text-[#161616]">
                secure, agile, and performance-driven.
              </strong>
            </p>
          </div>
        </section>
          
        {/* Cloud Platform Services Section */}
        <section className="w-full bg-white px-6 md:px-36 py-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Left Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src="/cloudplatform_icon.svg"
                  alt="Cloud Platform Icon"
                  className="w-16 h-16"
                />
              </div>
              {/* Heading */}
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#023ED6] mb-4">
                Cloud Platform Services
              </h2>
              {/* Description */}
              <p className="text-[#535353] text-lg md:text-[20px] font-medium leading-relaxed">
                Our cloud platform services help businesses unlock the power of
                <span className="font-bold text-[#161616]">
                  {" "}
                  multi-cloud environments{" "}
                </span>
                while ensuring agility, governance, and
                <span className="font-bold text-[#161616]">
                  {" "}
                  security at every stage of their digital transformation.
                </span>
              </p>
              {/* Feature List */}
              <div className="text-[16px] font-bold text-gray-800 text-left mt-6 mb-2 w-full">
                <div className="flex gap-8">
                  {/* Flexible */}
                  <div className="flex items-center gap-2">
                    <img
                      src="/aboutus_bullet_1.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <span className="leading-[2.3] text-[#000000]">
                      Flexible
                    </span>
                  </div>
                  {/* Scalable */}
                  <div className="flex items-center gap-2">
                    <img
                      src="/aboutus_bullet_1.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <span className="leading-[2.3] text-[#000000]">
                      Scalable
                    </span>
                  </div>
                  {/* Cloud-Ready */}
                  <div className="flex items-center gap-2">
                    <img
                      src="/aboutus_bullet_1.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <span className="leading-[2.3] text-[#000000]">
                      Cloud-Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />
              <img
                src="/managedservice_img_1.svg" // Replace with your actual cloud image path
                alt="Cloud Platform"
                className="w-full max-w-[540px] h-auto min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Service Cards Section */}
        <section
          className="w-full py-16 px-2 sm:px-8 flex flex-col justify-center items-center relative z-5"
          style={{
            backgroundImage: "url('/cloud_services_bg.svg')", // Use your actual image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1440px] mx-auto w-full flex flex-col px-14 pt-16 gap-12 items-center">
            {/* First Row: 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center w-full">
              {servicesRowOne.map((card) => (
                <ServiceCard key={card.title} {...card} />
              ))}
            </div>
            {/* Second Row: 3 Columns (Centered) */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesRowTwo.map((card) => (
                  <ServiceCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Services Section */}
        <section className="w-full bg-white px-6 md:px-10 pt-16 pb-0">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-stretch md:items-center px-26 gap-10 md:gap-20">
            {/* Left: Content */}
            <div className="w-full md:basis-1/2 flex flex-col items-start justify-center">
              {/* Icon & Heading */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src="/infrastructure_icon.svg" // <-- update with your actual icon path
                    alt="Infrastructure Icon"
                    className="w-[64px] h-[64px]"
                  />
                </div>
                <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#E29400] leading-tight">
                  Infrastructure Services
                </h2>
              </div>
              {/* Description */}
              <p className="text-[#535353] text-lg md:text-[20px] font-medium leading-relaxed mb-6">
                Our infrastructure services are built for enterprises with
                demanding
                <span className="font-extrabold text-[#161616]">
                  {" "}
                  compute needs, mission-critical workloads, and evolving IT
                  landscapes
                </span>
                —whether in the cloud, on-premise, or hybrid.
              </p>
              {/* Feature List */}
              <div className="flex flex-row flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="/aboutus_bullet_1.svg"
                    alt="star"
                    className="w-5 h-5"
                  />
                  <span className="text-[16px] font-bold text-[#161616]">
                    Performance-Driven
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/aboutus_bullet_1.svg"
                    alt="star"
                    className="w-5 h-5"
                  />
                  <span className="text-[16px] font-bold text-[#161616]">
                    Reliable
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/aboutus_bullet_1.svg"
                    alt="star"
                    className="w-5 h-5"
                  />
                  <span className="text-[16px] font-bold text-[#161616]">
                    Custom-Built.
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full md:basis-1/2 flex flex-col items-start min-h-[300px] justify-center relative z-10">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#E29400] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-0 left-[-80px] z-0" />
              <img
                src="/infrastructure_services_image.svg" // <-- update with your image path
                alt="Infrastructure Security"
                className="w-full max-w-[500px] min-h-[300px] object-contain relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Hardware Services Section */}
        <section
          className="w-full bg-white mt-0 py-28 px-4 md:px-10 relative z-5"
          style={{
            backgroundImage: "url('/hardware_services_bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20 justify-center">
              {/* Card 1 */}
              <div className="flex flex-col bg-white rounded-2xl px-7 py-8 w-[330px] h-[296px] flex-1 mx-auto items-start border border-[#E3EAFD] shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="/hardware_server.svg"
                    alt="On-Premise Servers"
                    className="w-[53px] h-[53px]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#161616] mb-[16px] leading-snug">
                  Dedicated On-Premise
                  <br />
                  Servers
                </h3>
                <p className="text-[15px] text-[#535353] font-normal leading-relaxed">
                  Enterprise-grade hardware tailored for critical applications
                  and legacy system support.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-white rounded-2xl px-7 py-8 w-[330px] h-[296px] flex-1 mx-auto items-start border border-[#E3EAFD] shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="/hardware_performance.svg"
                    alt="High-Performance"
                    className="w-[53px] h-[53px]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#161616] mb-[16px] leading-snug">
                  High-Performance &<br />
                  High-Availability Architecture
                </h3>
                <p className="text-[15px] text-[#535353] font-normal leading-relaxed">
                  Designed for always-on operations with redundancy built in to
                  support 24/7 reliability.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-white rounded-2xl px-7 py-8 w-[330px] h-[296px] flex-1 mx-auto items-start border border-[#E3EAFD] shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="/hardware_ai.svg"
                    alt="Specialized Workloads"
                    className="w-[53px] h-[53px]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#161616] mb-[16px] leading-snug">
                  Hardware Optimization
                  <br />
                  for Specialized Workloads
                </h3>
                <p className="text-[15px] text-[#535353] font-normal leading-relaxed">
                  Custom infrastructure with GPU/FPGA acceleration to power
                  advanced AI/ML, high-performance computing (HPC), and
                  real-time processing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
