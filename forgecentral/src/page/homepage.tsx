import React from "react";

const services = [
  {
    title: "Data, AI & Analytics",
    description:
      "Unlock strategic insights and drive innovation by transforming your data into actionable intelligence.",
    icon: "/data_ai_analytics_icon.png",
    color: "bg-gradient-to-b from-[#215EF8]-600 to-[#023ED6]-400",
  },
  {
    title: "Digital Services",
    description:
      "Enhance your digital footprint and user experiences with bespoke strategies and seamless execution.",
    icon: "/digital_services_icon.png",
    color: "bg-#F5B037-400",
  },
  {
    title: "Modern Technology",
    description:
      "Embrace cutting-edge solutions to modernize your infrastructure and drive digital transformation.",
    icon: "/modern_technology_icon.png",
    color: "bg-gradient-to-b from-[#215EF8]-600 to-[#023ED6]-400",
  },
  {
    title: "Managed Services",
    description:
      "Optimize your IT operations and ensure continuous system performance with our expert oversight.",
    icon: "/managed_services_icon.png",
    color: "bg-#F5B037-400",
  },
  {
    title: "ERP",
    description:
      "Enhance your digital footprint and user experiences with bespoke strategies and seamless execution.",
    icon: "/erp_icon.png",
    color: "bg-gradient-to-b from-[#215EF8]-600 to-[#023ED6]-400",
  },
  {
    title: "Technology Staffing",
    description:
      "Source top-tier technology talent to meet your specialized project demands and overcome skill gaps.",
    icon: "/technology_staffing_icon.png",
    color: "bg-#F5B037-400",
  },
];

const industries = [
  {
    title: "Consumer & Retail",
    icon: "/consumer_retail_icon.png",
    background: "/consumer_retail.jpg",
  },
  {
    title: "Financial Services",
    icon: "/financial_services_icon.png",
    background: "/financial_services.jpg",
  },
  {
    title: "Healthcare & Lifesciences",
    icon: "/hc_ls_icon.png",
    background: "/hc_ls.jpg",
  },
  {
    title: "Banking & Capital Markets",
    icon: "/banking_capital_icon.png",
    background: "/banking_capital.jpg",
  },
  {
    title: "Industrial Manufacturing",
    icon: "/industrial_manufacturing_icon.png",
    background: "/industrial_manufacturing.jpg",
  },
  {
    title: "Technology, Media & Telecom",
    icon: "/tech_media_telecom_icon.png",
    background: "/tech_media_telecom.jpg",
  },
];

const testimonials = [
  {
    name: "Jacob Jones",
    role: "Nursing Assistant",
    message:
      "The team delivered exactly what we needed—skilled, reliable professionals who hit the ground running.",
    rating: 4,
    avatar: "/Jacob Jones.png",
  },
  {
    name: "Eleanor Pena",
    role: "Web Designer",
    message:
      "Eden is 110% recommendable! Very friendly and accurate. She brought me a lot of value in a short period.",
    rating: 5,
    avatar: "/Jacob Jones.png",
  },
  {
    name: "Jerome Bell",
    role: "President of Sales",
    message:
      "An amazing mentor! Vassilena really took the time to research our brand beforehand and give us more.",
    rating: 5,
    avatar: "/Jerome Bell.png",
  },
  {
    name: "Marvin McKinney",
    role: "Medical Assistant",
    message:
      "Another great session with Mike. We spoke about doing estimates as an agency and how to optimize that.",
    rating: 4,
    avatar: "/Marvin McKinney.png",
  },
  {
    name: "Kathryn Murphy",
    role: "Marketing Coordinator",
    message:
      "Kostas was very receptive while we talked about my issues, we discussed the root of the problem, what...",
    rating: 4,
    avatar: "/Jacob Jones.png",
  },
  {
    name: "Cody Fisher",
    role: "UX Designer",
    message:
      "Nicolas helped me a lot with two specific but crucial questions I had and gave me a very good overview!",
    rating: 4,
    avatar: "/Cody Fisher.png",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-yellow-400 mb-3">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="bg-[#002A82] relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#0047ab] to-blue-900 text-white py-20 px-6 md:px-20 mt-25">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/web-with-cloud-middle.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Future-Ready IT Solutions <br />
              Across <span className="text-yellow-300">Data, AI & Cloud</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Emergere delivers comprehensive IT services across Data, AI &
              Analytics, Cloud, ERP, and Modern Technology, with strong
              capabilities in Data Governance, Managed Services, and Technology
              Staffing to support seamless digital transformation.
            </p>
            <button className="bg-white text-blue-800 font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Explore More →
            </button>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="relative z-10 flex justify-center mt-10 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
          <span className="w-3 h-3 bg-white/50 rounded-full"></span>
          <span className="w-3 h-3 bg-white/50 rounded-full"></span>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="relative bg-[#0047ab] py-20 px-6 md:px-20">
        <div
          className="absolute inset-0 w-full h-full z-0 rounded-t-[40px] pointer-events-none"
          style={{
            backgroundImage: "url('/who_we_are_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />
        <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 lg:p-20 flex flex-col md:flex-row items-center md:items-start gap-70">
          {/* Image Stack */}
          <div className="relative w-fit z-10">
            <div className="rounded-[29px] overflow-hidden w-[260px] h-[260px] shadow-xl">
              <img
                src="/team.jpg"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-50 top-50 w-[220px] h-[220px] rounded-[29px] overflow-hidden border-4 border-white shadow-2xl bg-white">
              <img
                src="/handshake.jpg"
                alt="Handshake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Block */}
          <div className="md:w-1/2 text-left z-10">
            <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
              WHO WE ARE
              <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-amber-400 rounded mt-1"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              What Makes Us Your Ideal{" "}
              <span className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] bg-clip-text text-transparent">
                Tech Partner
              </span>
            </h2>
            <p className="text-gray-600 mb-4">
              At Emergere, we empower businesses through end-to-end digital
              transformation and technology services from ideation to execution.
              We blend deep domain expertise with a culture rooted in
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-gray-900 font-bold mb-4">
              {["Teamwork", "Enthusiasm", "Excellence", "Customer focus"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
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

            <p className="text-gray-600 mb-8">
              Our teams work as an extension of yours: collaborative, agile, and
              aligned to your goals to deliver solutions that are not only
              technically sound but also business-smart.
            </p>

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition font-semibold w-fit text-base flex items-center gap-2">
              Know More <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Transforming Insights Section */}
      <div className="relative bg-gradient-to-r from-[#023ED6] to-[##002FA7] overflow-hidden py-0 px-0">
        {/* Optional: SVG or PNG pattern overlay for the right-side lines */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/transforming_insights_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            opacity: 0.1,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
          {/* Left: Icon + Heading */}
          <div className="flex flex-row items-center gap-6 md:w-1/2">
            <img
              src="/transforming_insights_icon.png"
              alt="Insight Icon"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Transforming <br />
              Insights into <br />
              Impact
            </h2>
          </div>
          <div
            className="hidden md:block h-32 border-l-2 mx-10"
            style={{
              background:
                "linear-gradient(to bottom, #0028B0, #7E94D9, #002BB4)",
              width: "2px",
              border: "none",
            }}
          />
          {/* Right: Paragraphs */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-start">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              At Emergere, it’s not just what we deliver—it’s how we deliver it.
            </h3>
            <p className="text-white/90 text-base md:text-lg">
              Partner with us to turn challenges into opportunities
              <br />
              and drive meaningful change.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-[#F2F3F5] py-20 px-6 md:px-24 text-center">
        <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
          WHAT WE DO
          <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-amber-400 rounded mt-1"></span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Elevate Your Enterprise: Our <br />
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] bg-clip-text text-transparent">
            Suite of Solutions
          </span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          From data strategy to seamless execution, we provide the expertise to
          navigate your digital transformation.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 text-left justify-between shadow hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <button className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-blue-700">
                Know more <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-[#f7f7f7] py-20 px-6 md:px-24 text-center">
        <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
          INDUSTRIES
          <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-amber-400 rounded mt-1"></span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Tailored Solutions for Your <br />
          <span className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] bg-clip-text text-transparent">
            Unique Challenges
          </span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          From data strategy to seamless execution, we provide the expertise to
          navigate your digital transformation.
        </p>

        {/* Industries Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white rounded-[40px] shadow-md hover:shadow-lg transition flex flex-col items-center text-center overflow-hidden p-6 w-full"
            >
              {/* Banner Image with Icon Overlay */}
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-6">
                <img
                  src={industry.background}
                  alt={`${industry.title} background`}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.5)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={industry.icon}
                    alt={`${industry.title} icon`}
                    className="w-18 h-18 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-lg text-gray-900 mb-6">
                {industry.title}
              </h3>

              {/* Know More Button */}
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-full px-5 py-2 hover:text-blue-700 transition">
                Know more <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Brochure Section */}
        <div className="mt-20 relative rounded-[40px] overflow-hidden px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#f4f4f4]">
          {/* Background overlay pattern image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/get_our_brochure.jpg" // pattern image
              alt="Background Pattern"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Content */}
          <div className="z-10 flex-1 text-center flex flex-col items-center">
            <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
              GET OUR BROCHURE
              <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-amber-400 rounded mt-1"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-6">
              Discover Who We Are and <br />
              <span className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>

            <button className="bg-[#0047ff] text-white font-semibold rounded-full px-6 py-2.5 flex items-center gap-2 shadow-md hover:bg-blue-800 transition mx-auto md:mx-0">
              Download
              <img
                src="/download_icon.png"
                alt="Download"
                className="w-4 h-4"
              />
            </button>
          </div>

          {/* Right Icon */}
          <div className="z-10 flex-1 flex justify-center relative">
            <div className="relative w-40 md:w-52 z-10">
              <img
                src="/brochure.jpg"
                alt="Brochure Icon"
                width={208}
                height={208}
                className="z-10 relative"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 px-6 md:px-24 text-center">
          <p className="text-sm uppercase font-bold text-blue-700 mb-2 tracking-wider inline-block relative">
            TESTIMONIALS
            <span className="absolute bottom-0 right-0 translate-y-full w-10 h-1 bg-amber-400 rounded mt-1"></span>
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            See why people like you choose <br />
            <span className="bg-gradient-to-r from-[#4568dc] to-[#ffb03a] bg-clip-text text-transparent">
              EMERGERE !
            </span>
          </h2>

          {/* Testimonials Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] shadow-sm hover:shadow-xl p-6 flex flex-col justify-between transition-shadow duration-300"
              >
                {/* Star Rating */}
                <div
                  className="flex gap-1 text-yellow-400 text-base mb-4"
                  aria-label={`Rating: ${testimonial.rating} out of 5`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} aria-hidden>
                      {i < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  {testimonial.message}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-200"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Get In Touch Section */}
      <div
        className="bg-[#002FA7] py-20 px-6 md:px-24 text-white "
        style={{
          backgroundImage: `url('/get_in_touch.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Contact CTA */}
          <div className="text-left space-y-6">
            <button className="bg-white/10 border border-white rounded-full px-4 py-1 text-xs tracking-wide">
              <span className="text-[10px] text-yellow-400">●</span> GET IN
              TOUCH
            </button>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Contact us for more <br />
              information & get started
            </h2>
            <p className="text-white/80 text-sm">
              Have questions or need help? We’re here for you
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#0C3FC0] rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <img
                src="/headset_icon.png"
                alt="Support Icon"
                className="w-10 h-10"
              />
              We’d love to help! Let us know how
            </h3>

            {/* Form Inputs */}
            <form className="space-y-6">
              <div className="flex items-center border-b border-white/30 py-2">
                <img
                  src="/user_icon.png"
                  alt="user Icon"
                  className="w-5 h-5 mr-3"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent w-full text-white placeholder text-sm outline-none"
                />
              </div>
              <div className="flex items-center border-b border-white/30 py-2">
                <img
                  src="/sms_icon.png"
                  alt="sms Icon"
                  className="w-5 h-5 mr-3"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent w-full text-white placeholder text-sm outline-none"
                />
              </div>
              <div className="flex items-center border-b border-white/30 py-2">
                <img
                  src="/call_icon.png"
                  alt="call Icon"
                  className="w-5 h-5 mr-3"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="bg-transparent w-full text-white placeholder text-sm outline-none"
                />
              </div>

              <div className="mt-4">
                <textarea
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-sm text-white placeholder outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 relative inline-flex items-center rounded-full border border-white/50 bg-[#1E51D2] px-6 py-2.5 text-white text-sm pr-12"
              >
                <span className="z-10">Submit</span>
                <span className="absolute right-1.5 rounded-full flex items-center justify-center">
                  <img
                    src="/submit_icon.png"
                    alt="submit Icon"
                    className="w-8 h-8"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
