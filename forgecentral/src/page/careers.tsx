"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// JobPost type interface
type JobPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  meta?: {
    experience?: string;
    job_location?: string;
    // Add any other meta fields used by WP Job Openings
  };
  featured_media?: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
};

const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Full Time");
  const [filteredJobs, setFilteredJobs] = useState<JobPost[]>([]);

  const [jobs, setJobs] = useState<JobPost[]>([]);
  const decodeEntities = (str: string) => str.replace(/&amp;/g, "& ");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://blogs.emergertech.com/wp-json/wp/v2/awsm_job_openings"
        );
        const data = await res.json();

        // Parse experience and location
        const jobsWithParsedMeta = data.map((job: any) => {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(
            job.content.rendered,
            "text/html"
          );

          const experienceMatch = htmlDoc.body.innerText.match(
            /Experience:\s*([\d+\-–]+(?:\s*years?))/i
          );
          const locationMatch =
            htmlDoc.body.innerText.match(/Location:\s*(.+)/i);

          return {
            ...job,
            meta: {
              experience: experienceMatch?.[1]?.replace(/\s+/g, " ") ?? "N/A",
              job_location: locationMatch?.[1]?.replace(/\s+/g, " ") ?? "N/A",
            },
          };
        });

        // Filter based on selected category
        const filtered = jobsWithParsedMeta.filter((job: any) => {
          if (selectedCategory === "Full Time") {
            return job.class_list.includes("job-type-full-time");
          }
          if (selectedCategory === "Contract") {
            return job.class_list.includes("job-type-contract");
          }
          if (selectedCategory === "Internship") {
            return job.class_list.includes("job-type-internship");
          }
          return true;
        });

        setJobs(jobsWithParsedMeta);
        setFilteredJobs(filtered);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, [selectedCategory]);

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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Careers</h1>
          <p className="text-md text-white/80">
            <Link href="/" className="text-[#6490FE]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/careers" className="text-[#EFEFEF]">
              Careers
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
            src="/careers_icon.png"
            alt="Careers icon"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent leading-tight">
            Careers
          </h1>
          <div className="px-4 md:px-8 py-4 max-w-3xl mt-4 flex flex-col items-center text-center">
            <h2 className="text-lg font-extrabold text-[#161616] leading-[38px] mb-4">
              Join the Future of Innovation at Emergere
            </h2>

            <p className="text-md text-center text-[#161616] leading-[32px] font-normal max-w-2xl">
              Emergere is a leading global recruitment firm, with offices in the
              US and India. We{" "}
              <strong className="text-black font-semibold">
                specialize in connecting talented professionals with the best IT
                and engineering jobs around the world.
              </strong>{" "}
              Our team of experienced recruiters leverage our industry expertise
              to find you the perfect opportunity. Search through our database
              of open positions and start your journey towards a bright and
              successful career.
            </p>
          </div>
        </div>
      </div>

      {/* Join Team Section */}
      <div className="relative items-center justify-center px-26">
        {/* Join our dynamic Team! Section */}
        <div className="w-full bg-white px-6 md:px-10 py-16 relative">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
            {/* Left Text Content */}
            <div className="w-full md:basis-1/2 flex mb-6 flex-col items-start">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src="/team_icon.png"
                  alt="Team Icon"
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-[28px] md:text-[30px] font-extrabold text-[#023ED6] mb-4">
                Join our dynamic Team!
              </h2>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                We’re at our best when everyone has a seat at the table.
              </p>
              <p className="text-[#535353] text-lg md:text-[18px] font-medium leading-relaxed">
                Innovation happens when different minds come together and that’s
                why we champion a workplace where inclusivity isn't just
                encouraged, it's essential. Here,{" "}
                <span className="font-bold text-[#161616]">
                  your ideas are heard, your perspective matters, and together,
                  we build smarter, stronger solutions!
                </span>
              </p>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:basis-1/2 flex justify-center relative">
              {/* Blurred Ellipse */}
              <div className="absolute w-[200px] h-[200px] bg-[#023ED6] opacity-90 blur-[150px] rounded-full rotate-[30deg] bottom-2 right-0 z-0" />

              {/* Main Image */}
              <img
                src="/dynamic_team_banner.jpg"
                alt="Dynamic Team"
                className="w-full max-w-[585px] h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Explore Our Open Roles Section*/}
      <div className="relative items-center justify-center px-6 md:px-10 py-16 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
          {/* Small Label */}
          <p className="text-md font-semibold text-[#023ED6] uppercase tracking-wide mb-2">
            Explore our open roles
          </p>

          {/* Gradient Underline */}
          <div className="w-10 h-[2px] bg-[#E29400] mb-4" />

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-8 leading-snug">
            At Emergere, we believe innovation <br />
            <span className="bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent">
              starts with people.
            </span>
          </h2>

          {/* Search Box */}
          <div className="flex items-center w-full max-w-2xl border border-gray-300 rounded-[12px] overflow-hidden px-3 py-2">
            {/* Icon + Input */}
            <div className="flex items-center gap-2 flex-grow">
              <img src="/job_icon.png" alt="Job Icon" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search Job title / Technology"
                className="w-full text-md text-gray-600 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button className="bg-[#023ED6] hover:bg-blue-700 text-white text-md font-semibold px-5 py-2 rounded-[8px]">
              Find Job
            </button>
          </div>
        </div>
      </div>

      {/*View Open Roles Section*/}
      <div className="bg-white min-h-screen px-6 md:px-10 py-16">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h1 className="text-[28px] md:text-[30px] font-semibold bg-gradient-to-r from-[#023ED6] to-[#E29400] bg-clip-text text-transparent">
              View Open Roles
            </h1>
            <div className="flex gap-2 mb-4">
              {["Full Time", "Contract", "Internship"].map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedCategory(label)}
                  className={`px-8 py-3 text-md border rounded-full font-medium ${
                    selectedCategory === label
                      ? "bg-[#0047FF] text-white border-[#0047FF]"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6 rounded-[20px] bg-[#f9f9f9] px-2 py-6 sm:rounded-[28px] sm:px-6 sm:py-10">
            {/* Internship → Show Form */}
            {selectedCategory === "Internship" ? (
              <div className="bg-white p-3 rounded-xl border border-gray-200 w-full sm:p-6 sm:rounded-2xl">
                <h3 className="text-lg font-bold text-[#0047FF] mb-4 sm:text-xl sm:mb-5">
                  Internship Application
                </h3>

                <form className="space-y-3 sm:space-y-4">
                  {/* Row 1 */}
                  {/* 2-Column Grid Inputs */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {/* Full Name */}
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4"
                    />

                    {/* Date of Birth */}
                    <div className="relative">
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-md text-[#404040] z-10 pointer-events-none rounded-full"
                        style={{ lineHeight: "1.2" }}
                      >
                        DOB
                      </label>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm pr-8 outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4 sm:pr-10"
                        required
                      />
                      <span className="absolute right-3 top-2.5">
                        <img
                          src="/calendar_icon.png"
                          alt="Calendar"
                          className="w-5 h-5"
                        />
                      </span>
                    </div>

                    {/* Gender */}
                    <div className="relative">
                      <select className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm outline-none text-[#404040] appearance-none pr-6 sm:text-md sm:px-4">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <span className="absolute right-3 top-2.5 pointer-events-none">
                        <img
                          src="/arrow-down.svg"
                          alt="Arrow Down"
                          className="w-5 h-5"
                        />
                      </span>
                    </div>

                    {/* Another Date Field */}
                    <div className="relative">
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-md text-[#404040] z-10 pointer-events-none rounded-full"
                        style={{ lineHeight: "1.2" }}
                      >
                        DOJ
                      </label>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm pr-8 outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4 sm:pr-10"
                      />
                      <span className="absolute right-3 top-2.5">
                        <img
                          src="/calendar_icon.png"
                          alt="Calendar"
                          className="w-5 h-5"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4"
                  />

                  {/* About You */}
                  <textarea
                    rows={4}
                    placeholder="About you"
                    className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm outline-none resize-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4"
                  ></textarea>

                  {/* Upload Resume */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:text-md">
                      Upload Resume here
                    </label>
                    <div className="border-2 border-dashed border-blue-400 rounded-lg p-3 bg-[#f7faff] text-center relative sm:rounded-xl sm:p-5">
                      <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src="/upload.png"
                          alt="Upload"
                          className="w-6 h-6"
                        />
                        <p className="text-sm text-blue-500 font-medium sm:text-md">
                          Choose file or{" "}
                          <span className="font-semibold">
                            Drag & Drop it here
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer buttons */}
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-between sm:items-center sm:pt-6">
                    <button
                      type="button"
                      className="flex items-center text-sm font-medium text-[#404040] gap-1 hover:bg-gray-100 sm:text-md"
                    >
                      <img src="/arrow-left.png" className="w-4 h-4" />
                      Back to Job List
                    </button>

                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-sm text-gray-400 sm:text-md sm:px-6"
                      >
                        Not now
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-md bg-[#0047FF] hover:bg-[#003adb] text-white text-sm sm:text-md sm:px-6"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              /* Job Cards */
              <>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white rounded-[12px] px-3 py-4 shadow-md border border-[#E5E5E5] flex flex-col gap-4 sm:rounded-[16px] sm:px-8 sm:py-6 sm:flex-row sm:justify-between sm:items-start"
                    >
                      {/* Job Info */}
                      <div className="flex-1 pr-0 flex flex-col gap-3 sm:pr-4 sm:gap-4">
                        <div>
                          <h3 className="text-[20px] font-bold text-black mb-1">
                            {decodeEntities(job.title?.rendered)}
                          </h3>
                        </div>

                        <hr className="border-t border-gray-200" />

                        <div className="flex flex-col gap-3 text-sm text-black font-medium sm:flex-row sm:items-center sm:gap-10 sm:text-md">
                          <div className="flex items-center gap-2">
                            <img
                              src="/job_icon.png"
                              className="w-5 h-5"
                              alt="icon"
                            />
                            <div>
                              <div className="text-[13px] text-[#666]">
                                Experience
                              </div>
                              <div className="text-[14px] font-semibold">
                                {decodeEntities(job.meta?.experience || "N/A")}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <img
                              src="/pin_icon.png"
                              className="w-5 h-5"
                              alt="icon"
                            />
                            <div>
                              <div className="text-[13px] text-[#666]">
                                Location
                              </div>
                              <div className="text-[14px] font-semibold">
                                {decodeEntities(
                                  job.meta?.job_location || "N/A"
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <img
                              src="/calendar_icon.png"
                              className="w-5 h-5"
                              alt="icon"
                            />
                            <div>
                              <div className="text-[13px] text-[#666]">
                                Posted on
                              </div>
                              <div className="text-[14px] font-semibold">
                                {new Date(job.date).toLocaleDateString("en-IN")}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <div className="mt-2 sm:mt-0">
                        <button
                          onClick={() => {
                            sessionStorage.setItem(
                              "jobTitle",
                              decodeEntities(job.title?.rendered) || ""
                            );
                            sessionStorage.setItem(
                              "jobContent",
                              job.content?.rendered || ""
                            );
                            window.location.href = "/apply-job";
                          }}
                          className="text-sm font-semibold text-gray-700 border border-gray-200 rounded-full px-4 py-2 hover:scale-105 sm:text-md sm:px-5"
                        >
                          Know More
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No jobs found for {selectedCategory}.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
// tested
