import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-[url('/subscribe_bg.jpg')] py-12 px-6 md:px-24 relative overflow-hidden font-['Futura PT']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2 flex items-center gap-2">
            Subscribe
            <img
              src="/Group.svg"
              alt="Emergere Logo"
              height={20}
              className="inline-block align-middle"
            />
            <span className="font-bold">Emergere</span>
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            for exclusive content &amp; news !
          </h2>
        </div>

        {/* Input */}
        <div className="w-full md:w-auto flex flex-col items-start mt-4 md:mt-0">
          <div className="flex w-full md:w-auto bg-white rounded-full shadow-lg relative items-center px-2 py-2">
            <input
              type="email"
              placeholder="info@gmail.com"
              className="bg-transparent outline-none px-5 py-3 w-full md:w-72 text-black rounded-full focus:ring-0 focus:border-blue-700 placeholder-gray-400"
              style={{ borderRadius: "9999px 0 0 9999px" }}
            />
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition-all font-semibold absolute right-2 top-1/2 -translate-y-1/2 md:static md:translate-y-0 md:ml-2"
              style={{ minWidth: 140 }}
            >
              Subscribe
            </button>
          </div>
          <span className="text-sm text-black italic mt-2 ml-2">
            Enter your email address here
          </span>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
