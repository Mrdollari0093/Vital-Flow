import React from "react";
import Testimonials from "../Testimonials/Testimonials";
import Images from "./Img";

const Contacts = () => {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="text-center py-12 md:py-6 px-4 md:py-16">
        <p className="text-sm text-black font-medium flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Contact us
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold text-gray-900 mt-4 leading-tight">
          Your connection to better <br className="hidden sm:block" />
          care starts here
        </h1>

        <a href="/Services">
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
          What we do
        </button>
        </a>
      </section>

      {/* MAIN CARD */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-400">
          
          {/* LEFT FORM */}
          <div className="p-12 md:p-12 border-r border-gray-400 rounded-l-2xl lg:w-[720px]">
            <form className="space-y-6">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700 text-sm">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                  />
                </div>

                <div>
                  <label className="text-gray-700 text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 text-sm">Phone Number</label>
                <input
                  type="text"
                  placeholder="+123 456 789"
                  className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm">Message</label>
                <textarea
                  rows="4"
                  placeholder="Type your message here !!!"
                  className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-300 hover:bg-blue-500 text-white px-24 py-3 rounded-full transition w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT INFO PANEL */}
          <div className="bg-blue-500 text-white p-8 md:p-12 flex flex-col justify-center rounded-r-2xl lg:ml-32">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Reach out directly
            </h2>

            <p className="text-blue-100 mb-8">
              We’re here to answer your questions and support your journey.
            </p>

            <hr className="border-blue-300 mb-8" />

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <img src={Images.Phone} alt="phone" className="w-5 h-5" />
                <span>(487) 120-7980</span>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <img src={Images.Email} alt="email" className="w-5 h-5" />
                <span>name@gmail.com</span>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <img src={Images.Location} alt="location" className="w-5 h-5" />
                <span>Riyadh, KSA</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default Contacts;