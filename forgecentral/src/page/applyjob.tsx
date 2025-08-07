"use client";

import React, { useState } from "react";
import Link from "next/link";

const ApplyJob: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);

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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Careers</h1>
          <p className="text-sm text-white/80">
            <Link href="/" className="text-[#6490FE]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/" className="text-[#EFEFEF]">
              Careers
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white min-h-screen px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-[24px] overflow-hidden">
          {/* Left Column */}
          <div className="bg-white rounded-[16px] p-6 shadow-sm border border-[#EFEFEF] max-w-md mx-auto">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center text-center mb-4">
              <img
                src="/Emergere-Logo.png"
                alt="Emergere Logo"
                className="h-10 w-auto mb-2"
              />
              <p className="text-[13px] font-semibold text-[#1A1A1A] leading-tight">
                EMERGERE TECHNOLOGIES
              </p>
              <p className="text-[10px] text-[#1A1A1A] font-medium tracking-wide">
                TECHNOLOGY ONWARDS AND UPWARDS
              </p>
            </div>

            {/* Location Badge */}
            <div className="flex items-center bg-[#F7F7F9] rounded-[12px] px-4 py-2 w-full mb-4">
              <div className="relative w-5 h-6 bg-[#A5C3FF] rounded-b-full rounded-t-[50%] flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-[#0047FF] rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-black mr-1">
                Frisco, Texas 75035
              </span>
              <span className="text-sm text-gray-500">(Headquarters)</span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#1A1A1A] leading-relaxed">
              At Emergеre, our client-centric approach to staffing makes sure
              that you have the best talent in the industry working for you
              across all domains who fit your organization’s culture and team.
              We strive to reduce your operational costs from the screening of
              candidates to training and vacation management. With our strategic
              IT guidance and consulting, we guarantee that your technology runs
              smoothly so that you can focus on running your business.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-span-2 p-6 space-y-8">
            {/* Job Overview */}
            <div className="bg-white rounded-[20px] px-6 py-5 border border-[#E6E6E6] max-w-2xl mx-auto">
              {/* Title */}
              <h2 className="text-[20px] font-extrabold text-black mb-4">
                Application Development
              </h2>

              {/* Info Row */}
              <div className="flex flex-wrap items-start gap-12 text-sm text-[#1a1a1a] font-medium mb-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 text-gray-700 mb-1">
                    <img
                      src="/job_icon.png"
                      alt="Experience"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">Experience</span>
                  </div>
                  <span className="text-[13px] font-semibold">6+ Years</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 text-gray-700 mb-1">
                    <img
                      src="/pin_icon.png"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">Location</span>
                  </div>
                  <span className="text-[13px] font-semibold">Coimbatore</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 text-gray-700 mb-1">
                    <img
                      src="/calendar_icon.png"
                      alt="Posted on"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">Posted on</span>
                  </div>
                  <span className="text-[13px] font-semibold">2 Jan 2025</span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-[#E6E6E6] my-3" />

              {/* Description */}
              <p className="text-[14px] text-[#1a1a1a] leading-snug">
                Sr.SAP SD consultant with QTC Experience and good hands-on
                experience in Contracts, Bill Plans and Subscription
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-[#0047FF] mb-5">
                Fill Job Application
              </h3>

              <form className="space-y-4">
                {/* Row 1 */}
                {/* 2-Column Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-sm outline-none text-[#404040] placeholder:text-[#404040]"
                  />

                  {/* Date of Birth */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-sm pr-10 outline-none text-[#404040] placeholder:text-[#404040]"
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
                    <select className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-sm outline-none text-[#404040] appearance-none pr-6">
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <span className="absolute right-3 top-2.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-[#404040]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Another Date Field */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-sm pr-10 outline-none text-[#404040] placeholder:text-[#404040]"
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
                  className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-sm outline-none text-[#404040] placeholder:text-[#404040]"
                />

                {/* About You */}
                <textarea
                  rows={4}
                  placeholder="About you"
                  className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-sm outline-none resize-none text-[#404040] placeholder:text-[#404040]"
                ></textarea>

                {/* Upload Resume */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume here
                  </label>
                  <div className="border-2 border-dashed border-blue-400 rounded-xl p-5 bg-[#f7faff] text-center relative">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <img src="/upload.png" alt="Upload" className="w-6 h-6" />
                      <p className="text-sm text-blue-500 font-medium">
                        Choose file or{" "}
                        <span className="font-semibold">
                          Drag & Drop it here
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-[#404040] gap-1 hover:bg-gray-100"
                  >
                    <img src="/arrow-left.png" className="w-4 h-4" />
                    Back to Job List
                  </button>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-sm text-gray-400"
                    >
                      Not now
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-md bg-[#0047FF] hover:bg-[#003adb] text-white text-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
// tested
