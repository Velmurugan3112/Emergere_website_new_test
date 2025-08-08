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
            <Link href="/" className="text-[#EFEFEF]">
              Careers
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white min-h-screen px-4 py-10">
        <div className="w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-[24px] overflow-hidden items-start">
          {/* Left Column */}
          <div className="bg-white rounded-[16px] p-6 shadow-sm border border-[#EFEFEF] w-full">
            <h1 className="text-[#000000] text-3xl font-bold mb-4">{title}</h1>
            <p
              className="text-lg text-[#1A1A1A] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Right Column */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 w-full">
            <h3 className="text-xl font-bold text-[#0047FF] mb-5">
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
                  className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-md outline-none text-[#404040] placeholder:text-[#404040]"
                />

                {/* Date of Birth */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-md pr-10 outline-none text-[#404040] placeholder:text-[#404040]"
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
                  <select className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-md outline-none text-[#404040] appearance-none pr-6">
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
                    className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-md pr-10 outline-none text-[#404040] placeholder:text-[#404040]"
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
                className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-md outline-none text-[#404040] placeholder:text-[#404040]"
              />

              {/* About You */}
              <textarea
                rows={4}
                placeholder="About you"
                className="border border-[#D4D4D4] px-4 py-2 rounded-md w-full text-md outline-none resize-none text-[#404040] placeholder:text-[#404040]"
              ></textarea>

              {/* Upload Resume */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Upload Resume here
                </label>
                <div className="border-2 border-dashed border-blue-400 rounded-xl p-5 bg-[#f7faff] text-center relative">
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <img src="/upload.png" alt="Upload" className="w-6 h-6" />
                    <p className="text-md text-blue-500 font-medium">
                      Choose file or{" "}
                      <span className="font-semibold">Drag & Drop it here</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="flex justify-between items-center pt-6">
                <button
                  type="button"
                  className="flex items-center text-md font-medium text-[#404040] gap-1 hover:bg-gray-100"
                >
                  <img src="/arrow-left.png" className="w-4 h-4" />
                  Back to Job List
                </button>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-md text-gray-400"
                  >
                    Not now
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-md bg-[#0047FF] hover:bg-[#003adb] text-white text-md"
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
