"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const ApplyJob: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const storedTitle = sessionStorage.getItem("jobTitle");
    const storedContent = sessionStorage.getItem("jobContent");

    setTitle(storedTitle || "");
    setContent(storedContent || "");
  }, []);

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
      <div className="bg-white min-h-screen px-2 py-6 sm:px-4 sm:py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 bg-white rounded-[16px] overflow-hidden items-start sm:gap-10 sm:rounded-[24px] lg:grid-cols-2">
          {/* Left Column */}
          <div className="bg-white rounded-[12px] p-3 shadow-sm border border-[#EFEFEF] w-full sm:rounded-[16px] sm:p-6">
            <h1 className="text-[#000000] text-3xl font-bold mb-4">{title}</h1>
            <p
              className="text-lg text-[#1A1A1A] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Right Column */}
          <div className="bg-white p-3 rounded-xl border border-gray-200 w-full sm:p-6 sm:rounded-2xl">
            <h3 className="text-lg font-bold text-[#0047FF] mb-4 sm:text-xl sm:mb-5">
              Fill Job Application
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
                    className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-sm pr-8 outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4 sm:pr-10 mt-1"
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
                  <label
                    className="absolute -top-2 left-3 bg-white px-1 text-md text-[#404040] z-10 pointer-events-none rounded-full"
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
                    <img src="/upload.png" alt="Upload" className="w-6 h-6" />
                    <p className="text-sm text-blue-500 font-medium sm:text-md">
                      Choose file or{" "}
                      <span className="font-semibold">Drag & Drop it here</span>
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
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
// tested
