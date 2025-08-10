"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Simple Modal for Success
const SuccessModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-black rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
        <h2 className="text-xl font-bold mb-2">Thanks for your Interest</h2>
        <p className="mb-4">
          Your application was submitted successfully. Our Recruitment Team will
          check your profile and contact you soon.
        </p>
        <button
          className="px-4 py-2 rounded bg-[#0047FF] text-white hover:bg-[#003adb]"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

const ApplyJob: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  // State for job info
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [jobid, setJobid] = useState("");

  // Form state
  const [formInput, setFormInput] = useState({
    name: "",
    dob: "",
    gender: "",
    doj: "",
    email: "",
    aboutcandidate: "",
    resume: null as File | null,
  });

  // Only access sessionStorage on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTitle(sessionStorage.getItem("jobTitle") || "");
      setContent(sessionStorage.getItem("jobContent") || "");
      setJobid(sessionStorage.getItem("jobID") || "");
    }
  }, []);

  // Input handler
  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (e.target.type === "file") {
      const input = e.target as HTMLInputElement;
      setFormInput({
        ...formInput,
        resume: input.files ? input.files[0] : null,
      });
    } else {
      setFormInput({ ...formInput, [e.target.name]: e.target.value });
    }
  };

  // Utility: convert YYYY-MM-DD to DD/MM/YYYY and vice versa
  function toYMD(dateStr: string) {
    if (!dateStr) return "";
    // If already in YYYY-MM-DD, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
    // If in DD/MM/YYYY, convert
    if (dateStr.includes("/")) {
      const [dd, mm, yyyy] = dateStr.split("/");
      if (yyyy && mm && dd)
        return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
    }
    return dateStr;
  }

  // Reset form
  const clearForm = () => {
    setFormInput({
      name: "",
      dob: "",
      gender: "",
      doj: "",
      email: "",
      aboutcandidate: "",
      resume: null,
    });
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (
      !formInput.name ||
      !formInput.dob ||
      !formInput.gender ||
      !formInput.doj ||
      !formInput.email ||
      !formInput.aboutcandidate ||
      !formInput.resume
    ) {
      console.error("Form validation failed:", formInput);
      toast.error("Please fill all fields and upload your resume.");
      setLoading(false);
      return;
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (formInput.resume && !allowedTypes.includes(formInput.resume.type)) {
      toast.error("Only PDF, DOC, or DOCX files are allowed.");
      setLoading(false);
      return;
    }

    // Check API URL
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      toast.error("API URL is not configured.");
      setLoading(false);
      return;
    }

    // Prepare FormData with correct field names
    const formData = new FormData();
    formData.append("candidateName", formInput.name);
    formData.append("candidateEmail", formInput.email);
    formData.append("JobTitle", title || "");
    formData.append("dateOfBirth", toYMD(formInput.dob));
    formData.append("joiningDate", toYMD(formInput.doj));
    formData.append("aboutCandidate", formInput.aboutcandidate);
    formData.append("gender", formInput.gender);
    formData.append("jobId", jobid || "");
    formData.append(
      "FileToUpload",
      formInput.resume as File,
      (formInput.resume as File).name
    );

    try {
      const res = await fetch(`${apiUrl}ResumeDetail/UploadResume`, {
        method: "POST",
        body: formData,
      });
      console.log("Response:", res);
      let data: any = null;
      let text: string = "";
      try {
        text = await res.text();
        data = JSON.parse(text);
      } catch {
        data = { message: text || "Unexpected server response." };
      }

      if (!res.ok) {
        toast.error(data.message || "Upload failed.");
        setLoading(false);
        return;
      }

      setSuccessOpen(true);
      clearForm();
    } catch (error) {
      toast.error("Upload error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <ToastContainer position="top-center" autoClose={3000} />
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />

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

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              {/* 2-Column Grid Inputs */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {/* Full Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-md outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4"
                  onChange={handleInput}
                  value={formInput.name}
                  required
                />

                {/* Date of Birth */}
                <div className="relative">
                  <label
                    className="absolute -top-2 left-3 bg-white px-1 text-md text-[#404040] z-10 pointer-events-none rounded-full"
                    style={{ lineHeight: "1.2" }}
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    name="dob"
                    placeholder="DOB"
                    className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-md outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:pointer-events-none"
                    onChange={handleInput}
                    value={formInput.dob}
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
                  <select
                    className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-md outline-none text-[#404040] appearance-none pr-6 sm:text-md sm:px-4"
                    name="gender"
                    onChange={handleInput}
                    value={formInput.gender}
                    required
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="absolute right-3 top-2.5 pointer-events-none">
                    <img
                      src="/arrow-down.svg"
                      alt="Arrow Down"
                      className="w-5 h-5"
                    />
                  </span>
                </div>

                {/* Joining Date */}
                <div className="relative">
                  <label
                    className="absolute -top-2 left-3 bg-white px-1 text-md text-[#404040] z-10 pointer-events-none rounded-full"
                    style={{ lineHeight: "1.2" }}
                  >
                    DOJ
                  </label>
                  <input
                    type="date"
                    name="doj"
                    placeholder="Joining Date"
                    className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-md outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:pointer-events-none"
                    onChange={handleInput}
                    value={formInput.doj}
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
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-md outline-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4"
                onChange={handleInput}
                value={formInput.email}
                required
              />

              {/* About You */}
              <textarea
                rows={4}
                placeholder="About you"
                name="aboutcandidate"
                className="border border-[#D4D4D4] px-3 py-2 rounded-md w-full text-md outline-none resize-none text-[#404040] placeholder:text-[#404040] sm:text-md sm:px-4"
                onChange={handleInput}
                value={formInput.aboutcandidate}
                required
              ></textarea>

              {/* Upload Resume */}
              <div>
                <label
                  htmlFor="resume-upload"
                  className="block text-md font-medium text-gray-700 mb-1 sm:text-md"
                >
                  Upload Resume here
                </label>
                <div className="border-2 border-dashed border-blue-400 rounded-lg p-3 bg-[#f7faff] text-center relative sm:rounded-xl sm:p-5">
                  {!formInput.resume && (
                    <input
                      id="resume-upload"
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleInput}
                      required
                      tabIndex={0}
                      aria-label="Upload your resume"
                    />
                  )}
                  <div className="flex flex-col items-center gap-2">
                    {!formInput.resume ? (
                      <>
                        <img
                          src="/upload.png"
                          alt="Upload"
                          className="w-6 h-6"
                        />
                        <p className="text-md text-blue-500 font-medium sm:text-md">
                          Choose file or{" "}
                          <span className="font-semibold">
                            Drag & Drop it here
                          </span>
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-md text-gray-700 mt-2">
                          Selected file:{" "}
                          <span className="font-semibold">
                            {(formInput.resume as File).name}
                          </span>
                        </span>
                        <button
                          type="button"
                          className="mt-2 px-3 py-1 rounded bg-gray-300 text-black text-md hover:bg-[#0047FF] hover:text-[#ffffff]"
                          onClick={() =>
                            setFormInput((prev) => ({ ...prev, resume: null }))
                          }
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-between sm:items-center sm:pt-6">
                <Link href="/careers">
                  <button
                    type="button"
                    className="flex items-center text-md font-medium text-[#404040] gap-1 hover:bg-gray-100 sm:text-md"
                  >
                    <img src="/arrow-left.png" className="w-4 h-4" />
                    Back to Job List
                  </button>
                </Link>

                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-md text-gray-400 sm:text-md sm:px-6"
                    onClick={clearForm}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-[#0047FF] hover:bg-[#003adb] text-white text-md sm:text-md sm:px-6"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                      </span>
                    ) : (
                      "Apply Now"
                    )}
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
