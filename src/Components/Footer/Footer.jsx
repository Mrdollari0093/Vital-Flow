import React from "react";
import {
  footerBrand,
  footerDescription,
  footerButtonText,
  newsletterTitle,
  newsletterPlaceholder,
  newsletterButton,
  newsletterText,
  footerLinks,
} from "./FooterData";
import Logo from "../../assets/log.svg";


const Footer = () => {
  return (
    <footer className=" px-5 py-10 md:px-10 lg:px-16 lg:py-14">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr]">
        
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-5 ">
            {/* Logo instead of heart */}
            <img
              src={Logo}
              alt="logo"
              className="h-10 w-10 object-contain rounded-xl p-2 bg-sky-500"
            />
            <h2 className="text-[18px] font-semibold text-[#111]">
              {footerBrand}
            </h2>
          </div>

          <p className="text-[15px] leading-[1.6] text-[#555] max-w-[260px] mb-6">
            {footerDescription}
          </p>

          <a href="/Contacts">
            <button className="rounded-full bg-[#4f83ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3b6fe0] transition">
            {footerButtonText}
          </button>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-12">
          
          {/* NEWSLETTER */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#111] mb-5">
              {newsletterTitle}
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 max-w-[560px]">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                className="h-[52px] w-full rounded-xl bg-[#e9edf1] px-5 text-sm outline-none focus:ring-2 focus:ring-[#4f83ff]"
              />

              <button className="h-[52px] px-7 rounded-xl bg-[#4f83ff] text-sm font-semibold text-white hover:bg-[#3b6fe0] transition">
                {newsletterButton}
              </button>
            </div>

            <p className="text-[13px] text-[#666] mt-3">
              {newsletterText}
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerLinks.map((group) => (
              <div key={group.id}>
                <h4 className="text-[15px] font-semibold text-[#111] mb-4">
                  {group.title}
                </h4>

                <ul className="space-y-3">
                  {group.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.path}
                        className="text-[14px] text-[#777] hover:text-[#4f83ff] transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;