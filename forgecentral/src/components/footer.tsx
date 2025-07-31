import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#071a4d] font-['Futura PT'] text-white px-6 md:px-20 py-16">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        {/* Logo and Description */}
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/Group.svg"
              alt="Emergere"
              className="h-12 md:h-8 align-middle"
            />
            <div>
              <h3 className="text-white text-lg mb-1">EMERGERE TECHNOLOGIES</h3>
              <p className="text-white text-xs">
                TECHNOLOGY ONWARDS AND UPWARDS
              </p>
            </div>
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
        <div className="flex flex-col h-full items-start justify-between">
          <h4 className="text-white text-xl mb-4">QuickLinks</h4>
          <ul className="space-y-2 text-indigo-200">
            <li>
              <Link href="#" className="flex items-center gap-1">
                <span>Our Works</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-4 w-4"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/data-ai-analytics"
                className="flex items-center gap-1"
              >
                <span>Services</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-4 w-4"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/technology-staffing"
                className="flex items-center gap-1"
              >
                <span>Technology Staffing</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-4 w-4"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-1">
                <span>Customers</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-4 w-4"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-1">
                <span>Blogs</span>
                <img
                  src="/arrow-right.png"
                  alt="Arrow Icon"
                  className="h-4 w-4"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col h-full justify-between">
          <h4 className="text-white text-xl mb-4">Contact Us</h4>
          <div className="flex items-start gap-3 mb-4">
            <img src="/Group 87.svg" className="h-8 w-8 align-middle" />
            <Link href="mailto:hello@emergertech.com" className="text-lg">
              hello@emergertech.com
            </Link>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <img src="/phone.svg" className="h-8 w-8 align-middle" />
            <Link href="tel:+14694017117" className="text-lg">
              +1 469 4017117
            </Link>
          </div>
        </div>

        {/* Certified By */}
        <div className="flex flex-col h-full justify-between items-start">
          <h4 className="text-white text-xl mb-4">Certified by</h4>

          <div className="flex items-center gap-4 mb-4">
            <img
              src="/certified_logo.png"
              alt="Great Place to Work Certified"
              className="w-30 h-36"
            />
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-indigo-200">
        <div className="flex items-center gap-4">
          <img
            src="/Group 89.svg"
            alt="US"
            className="h-12 md:h-8 align-middle"
          />
          <div>
            <h5 className="text-lg mb-2">US (Corporate Office)</h5>
            <p className="text-neutral-200 mb-0">
              8105 Rasor Blvd, Suite 60, Plano, Texas 75024
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/Group 89.svg"
            alt="AI"
            className="h-12 md:h-8 align-middle"
          />
          <div>
            <h5 className="text-lg mb-2">Dubai</h5>
            <p className="text-neutral-200">
              PO Box Number 32846, F009, Ras Al Khor Avenue, Dubai
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/Group 89.svg"
            alt="IND"
            className="h-12 md:h-8 align-middle"
          />
          <div>
            <h5 className="text-lg mb-2">India</h5>
            <p className="text-neutral-200">
              42, Sri Balasubramania Nagar, Peelamedu, Coimbatore - 641 004
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-indigo-900 text-sm text-center flex justify-center items-center gap-3 text-[#7E97D6]">
        <p>© 2025 Emergere Technologies. All Rights Reserved.</p>
        <span className="w-px h-4 bg-white/50"></span>
        <Link href="#" className="hover:underline text-[#7E97D6]">
          Privacy Policy
        </Link>
      </div>
      <div className="w-full flex justify-center items-center font-bold">
        <span className="text-[16vw] bg-gradient-to-b from-[#152E6D] to-[#030E4D] bg-clip-text text-transparent leading-none">
          EMERGERE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
