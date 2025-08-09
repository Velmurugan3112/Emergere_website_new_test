import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#071a4d] text-white px-3 md:px-20 py-18">
      <div className="ml-0 md:ml-25 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 w-full text-center md:text-left">
        {/* Logo and Description */}
        <div className="flex flex-col h-full justify-between items-center md:items-start">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/Footer_Emergere_Logo.svg"
              alt="Emergere Logo"
              className="h-full w-full align-middle"
            />
          </div>
          <p className="text-neutral-200 leading-7">
            We architect intelligent data and application solutions while
            providing the expert technology talent you need to succeed.
          </p>
          <Link
            href="https://www.linkedin.com/company/emergere-technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center gap-2 w-40 h-11 bg-blue-950 rounded-xl px-4 mt-4"
          >
            <img src="/linkedIn.svg" alt="LinkedIn" className="h-6 w-6" />
            <span className="text-slate-300 text-base">LinkedIn</span>
          </Link>
        </div>

        {/* Quick Links & Contact */}
        <div className="ml-0 md:ml-20 flex flex-col h-full items-center md:items-start justify-between gap-y-3 mt-8 md:mt-0">
          <h4 className="text-white text-xl mb-4 font-semibold italic">
            QuickLinks
          </h4>
          <ul className="space-y-3 text-indigo-200 w-full flex flex-col items-center md:items-start">
            <li className="w-full flex justify-center md:justify-start">
              <Link href="/about-us" className="flex items-center gap-1">
                <span>About Us</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-7 w-7"
                />
              </Link>
            </li>
            <li className="w-full flex justify-center md:justify-start">
              <Link
                href="/data-ai-analytics"
                className="flex items-center gap-1"
              >
                <span>Our Services</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-7 w-7"
                />
              </Link>
            </li>
            <li className="w-full flex justify-center md:justify-start">
              <Link href="/industries" className="flex items-center gap-1">
                <span>Industries</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-7 w-7"
                />
              </Link>
            </li>
            <li className="w-full flex justify-center md:justify-start">
              <Link href="/" className="flex items-center gap-1">
                <span>Insights</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-7 w-7"
                />
              </Link>
            </li>
            <li className="w-full flex justify-center md:justify-start">
              <Link href="/careers" className="flex items-center gap-1">
                <span>Careers</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-7 w-7"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col h-full items-center md:items-start gap-y-5 mt-8 md:mt-0">
          <h4 className="text-white text-xl font-semibold italic">
            Contact Us
          </h4>
          <div className="flex items-center gap-3">
            <img src="/Group 87.svg" className="h-8 w-8" />
            <Link
              href="mailto:hello@emergertech.com"
              className="text-lg text-white"
            >
              hello@emergertech.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Phone.svg" className="h-8 w-8" />
            <Link href="tel:+14694017117" className="text-lg text-white">
              +1 469 401 7117
            </Link>
          </div>
        </div>

        {/* Certified By */}
        <div className="flex flex-col h-full items-center md:items-start mt-8 md:mt-0">
          <h4 className="text-white text-xl font-semibold italic">
            Certified by
          </h4>
          <div className="flex mt-5">
            <img
              src="/certified_logo.svg"
              alt="Great Place to Work Certified"
              className="w-40 h-46"
            />
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="mt-16 ml-25 grid grid-cols-1 md:grid-cols-3 gap-20 text-indigo-200">
        <div className="flex items-center gap-4">
          <img
            src="/US_Flag.svg"
            alt="US"
            className="h-14 md:h-10 align-middle"
          />
          <div>
            <h5 className="text-xl mb-2 font-bold italic">
              US (Corporate Office)
            </h5>
            <p className="text-md text-neutral-200 mb-0">
              8105 Rasor Blvd, Suite 60, Plano, <br />
              Texas 75024
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/Dubai_Flag.svg"
            alt="AI"
            className="h-14 md:h-10 align-middle"
          />
          <div>
            <h5 className="text-xl mb-2 font-bold italic">Dubai</h5>
            <p className="text-md text-neutral-200">
              PO Box Number 32846, F009,
              <br /> Ras Al Khor Avenue, Dubai
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/India_Flag.svg"
            alt="IND"
            className="h-14 md:h-10 align-middle"
          />
          <div>
            <h5 className="text-xl mb-2 font-bold italic">India</h5>
            <p className="text-md text-neutral-200">
              42, Sri Balasubramania Nagar,
              <br /> Peelamedu, Coimbatore - 641 004
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-indigo-900 text-md text-center flex justify-center items-center gap-3 text-[#7E97D6]">
        <p>© 2025 Emergere Technologies. All Rights Reserved.</p>
        <span className="w-px h-4 bg-white/50"></span>
        <Link href="#" className="hover:underline text-[#7E97D6]">
          Privacy Policy
        </Link>
      </div>
      <span className="w-full flex justify-center items-center font-bold text-[16vw] bg-gradient-to-b from-[#152E6D] to-[#030E4D] bg-clip-text text-transparent leading-none">
        EMERGERE
      </span>
    </footer>
  );
};

export default Footer;
