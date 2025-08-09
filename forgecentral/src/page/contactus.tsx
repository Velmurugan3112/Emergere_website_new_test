"use client";

import React from "react";
import Image from "next/image";
import ContactHeaderMenu from "./contact_header_menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  // Form state and response message
  const [formInput, setFormInput] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [response, setResponse] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  // Input handler
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  // Submit handler (calls Azure API endpoint)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(null);
    setLoading(true);
    const payload = {
      contactName: formInput.name,
      contactEmail: formInput.email,
      contactPhone: formInput.phone,
      contactMessage: formInput.message,
    };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}ContactUs/AddContact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (data.message) {
        toast.success(data.message);
      } else {
        toast.success("Email sent successfully!");
      }
      // Reset form fields
      setFormInput({ name: "", email: "", phone: "", message: "" });
      // Reload after 2 seconds so user sees the toast
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.warning("Sorry, Email Already Exists.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <ContactHeaderMenu />
      <div className="w-full bg-white pb-10">
        {/* Top Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-16 px-4 "
          style={{ backgroundImage: "url('contact-bg.svg')" }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-[#023ED6] font-bold tracking-wide tracking-[0.08em] text-md uppercase">
              GET IN TOUCH
            </h3>
            <div className="flex justify-center ml-20 mb-4 mt-1">
              <Image
                src="/aboutus_Line_34.svg"
                alt="line icon"
                width={45}
                height={4}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide gap-2 mt-4 mb-4 text-[#222222]">
              Contact us for more <br /> information &{" "}
              <span className="text-[#023ED6]">get</span>{" "}
              <span className="bg-gradient-to-r from-[#5B4B4B] to-[#E29400] bg-clip-text text-transparent font-bold">
                started
              </span>
            </h2>
            <p className="text-[#9B9B9B] font-semibold mb-2">
              Have questions or need help? We’re here for you
            </p>
            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-8 md:gap-x-40 text-gray-800 mt-15 mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/mail-icon.svg"
                  alt="Email"
                  width={42}
                  height={42}
                />
                <span className="font-medium">hello@emergertech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/phone-icon.svg"
                  alt="Phone"
                  width={42}
                  height={42}
                />
                <span className="font-medium">+1 469 401 7117</span>
              </div>
            </div>
            <hr className="border-t border-gray-200 w-full max-w-3xl mx-auto mt-6 mb-0" />
          </div>

          {/* Office Addresses */}
          <div className="relative w-full px-6 md:px-10 pt-12 pb-20">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
              {/* US Office */}
              <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 text-center md:text-left max-w-xs mx-auto">
                <div className="w-10 h-10 flex items-center justify-center mt-1 shrink-0 mb-2 md:mb-0 mx-auto md:mx-0">
                  <Image
                    src="/US_Flag.svg"
                    alt="US Location"
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <h3 className="font-bold italic mt-2 text-base mb-1 text-gray-900">
                    US (Corporate Office)
                  </h3>
                  <p className="text-md mt-3 leading-[1.5] text-[#252525]">
                    8105 Rasor Blvd, Suite 60,
                    <br />
                    Plano, Texas 75024
                  </p>
                </div>
              </div>

              {/* Dubai Office */}
              <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 text-center md:text-left max-w-xs mx-auto">
                <div className="w-10 h-10 flex items-center justify-center mt-1 shrink-0 mb-2 md:mb-0 mx-auto md:mx-0">
                  <Image
                    src="/Dubai_Flag.svg"
                    alt="Dubai Location"
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <h3 className="font-bold italic mt-2 text-base mb-1 text-gray-900">
                    Dubai
                  </h3>
                  <p className="text-md mt-3 leading-[1.5] text-[#252525]">
                    PO Box Number 32846, F009,
                    <br />
                    Ras Al Khor Avenue, Dubai
                  </p>
                </div>
              </div>

              {/* India Office */}
              <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 text-center md:text-left max-w-xs mx-auto">
                <div className="w-10 h-10 flex items-center justify-center mt-1 shrink-0 mb-2 md:mb-0 mx-auto md:mx-0">
                  <Image
                    src="/India_Flag.svg"
                    alt="India Location"
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <h3 className="font-bold italic mt-2 text-base mb-1 text-gray-900">
                    India
                  </h3>
                  <p className="text-md mt-3 leading-[1.5] text-[#252525]">
                    42, Sri Balasubramania Nagar
                    <br />
                    Peelamedu, Coimbatore - 641 004
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="flex justify-center">
          <div
            className="relative max-w-5xl mx-auto -mt-10 text-white overflow-hidden bg-cover bg-center bg-no-repeat pt-6 px-8 w-full max-w-[880px] rounded-[32px] justify-center items-center pb-4"
            style={{ backgroundImage: "url('/contactus_form_bg.svg')" }}
          >
            {/* Optional: overlay for blue tint, if needed  */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            ></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/headset-icon.svg"
                  alt="Headset"
                  width={68}
                  height={65}
                />
                <span className="text-3xl font-bold leading-tight">
                  We’d love to help! Let us <br /> know how
                </span>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4" onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 border-b border-white py-2">
                  <Image
                    src="/user-icon.svg"
                    alt="User Icon"
                    width={24}
                    height={24}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="bg-transparent text-white placeholder-white outline-none flex-1"
                    onChange={handleInput}
                    value={formInput.name}
                    required
                  />
                </div>
                <div className="flex items-center gap-3 border-b border-white py-2">
                  <Image
                    src="/mail-icon_1.svg"
                    alt="Email Icon"
                    width={24}
                    height={24}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="bg-transparent text-white placeholder-white outline-none flex-1"
                    onChange={handleInput}
                    value={formInput.email}
                    required
                  />
                </div>
                <div className="flex items-center gap-3 border-b border-white py-2">
                  <Image
                    src="/phone-icon-1.svg"
                    alt="Phone Icon"
                    width={24}
                    height={24}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    className="bg-transparent text-white placeholder-white outline-none flex-1"
                    onChange={handleInput}
                    value={formInput.phone}
                  />
                </div>
                <div className="border border-white rounded-xl p-3 h-26 mb-0 md:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Type your message here"
                    className="w-full bg-transparent text-white placeholder-white outline-none h-32 resize-none"
                    onChange={handleInput}
                    value={formInput.message}
                    required
                  />
                </div>
                <div className="md:col-span-2 flex justify-center mb-5">
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-between gap-4 pl-6 pr-1 py-2 rounded-full border border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                    disabled={loading}
                  >
                    <span className="text-white font-medium">
                      {loading ? (
                        <span className="flex items-center">
                          <span className="spinner-border mr-2" style={{ display: 'inline-block', width: 20, height: 20, border: '2px solid #fff', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
                          Submitting...
                        </span>
                      ) : (
                        'Submit'
                      )}
                    </span>
                    <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center ml-3">
                      <Image
                        src="/right-arrow.svg"
                        alt="Arrow"
                        width={40}
                        height={40}
                      />
                    </span>
                  </button>
                  {/* Spinner CSS */}
                  <style>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                </div>
                {response && (
                  <div className="md:col-span-2 text-center text-white">{response}</div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
