import React from "react";
import Images from "./Images";
import BlogCopy from "./BlogCopy";
import TestimonialsCopy from "../Testimonials/Testimonials/";
import ServicesCopy from "./ServicesCopy";
import Feature from "./Feature";
import StepsSection from "./works";
import FAQSection from "./FAQ";
import Contacts from "../DetailPages/Contacts";

const Path ="https://www.youtube.com/";

function Landing() {
  return (
    <>
    <section className=" py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          {/* Rating */}
          <div className="flex items-center gap-3 font-semibold mb-4">
            <div className="text-yellow-400 text-3xl">★★★★★</div>
            <p className="text-gray-600 text-sm mt-2 items-center">
              5.0 (980 Reviews)
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Partner in health <br /> and wellness
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Providing advanced healthcare solutions with a compassionate touch
            for every patient.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-10">
          <a href="/Contacts">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Book a call
            </button>
          </a>


           <a href={Path}>
             <button className="flex items-center gap-2 text-black hover:text-gray-700 hover:scale-[0.97] ease-in-out transition">
              <img className="w-8 p-2 flex items-center justify-center border rounded-full"  src={Images.PlayIcon}  alt = "Play-icon" />
              Watch Video
            </button>
           </a>
          </div>

          {/* Appointments */}
          <div className="flex items-center gap-4">
            
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                src={Images.Im1}
                alt="user1"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <img
                src={Images.Im2}
                alt="user2"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <img
                src={Images.Im3}
                alt="user3"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            </div>

            {/* Text */}
            <div>
              <p className="font-semibold text-gray-800">
                5000+ Appointments
              </p>
              <p className="text-gray-500 text-sm">
                Patients booked already
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full h-[400px] lg:h-[500px] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">
          
          {/* If image exists */}
          {Images?.HeroImg ? (
            <img
              src={Images.HeroImg}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">
              Image Placeholder
            </span>
          )}

        </div>

      </div>
    </section>

<section className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
  <div className="max-w-6xl mx-auto bg-[#F5FAFF] rounded-3xl p-6 sm:p-8 lg:p-12">

    {/* Top Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4 mb-8">

      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
        Virtual Consultation
      </h2>

      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-3xl">★★★★★</span>
        <span className="text-gray-600 text-sm mt-2 font-semibold">
          5.0 (980 Reviews)
        </span>
      </div>
    </div>

    {/* FORM */}
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

      {/* Name */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Jane Smith"
          required
          className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Doctor */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Doctor
        </label>
        <input
          type="text"
          placeholder="Dr Maria Cleven"
          required
          className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Location
        </label>
        <input
          type="text"
          placeholder="Amsterdam"
          required
          className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>

    </form>

    {/* Bottom Stats */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">
        200K+
      </h3>
      <p className="text-gray-600 max-w-sm font-semibold">
        Cured satisfied patients <br /> around the globe
      </p>
    </div>

  </div>
</section>


 <section className="w-full lg:px-24 py-16">
      <div className="mx-auto grid max-w-7xl  grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Why us
          </p>

          <h2 className="mb-8 text-4xl font-semibold leading-tight text-gray-900">
            Why choose VitalFlow for your healthcare?
          </h2>

          {/* ITEM 1 */}
          <div className="mb-6 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border text-gray-500">
              01
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Experienced Professionals
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Our team of dedicated healthcare providers brings years of
                experience and expertise to deliver care
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="mb-8 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border text-gray-500">
              02
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Advanced Technology
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We utilize cutting-edge medical technology to provide accurate
                diagnoses and effective treatments
              </p>
            </div>
          </div>

        <a href="/Contacts">
            <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 transition">
            Get Started
          </button>
        </a>
        </div>

        {/* RIGHT IMAGE + FLOATING CARD */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={Images.Img4}
            alt="Doctor"
            className="h-[420px] w-full max-w-md rounded-2xl object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-[-32px] md:bottom-1 left-1/2 w-[320px] md:w-[400px]  md:left-1/02 lg:left-1/3 lg:w-[300px] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-lg">
            <h4 className="text-sm font-semibold text-gray-900">
              Available Doctors
            </h4>
            <p className="mb-4 text-xs text-gray-500">Choose Doctors</p>

            {/* Doctor 1 */}
            <div className="mb-3 flex items-center gap-3">
              <img
                src={Images.Img5}
                alt="Doctor 1"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Jonathan Reed
                </p>
                <p className="text-xs text-gray-500">
                  Gastroenterologist
                </p>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="mb-4 flex items-center gap-3">
              <img
                src={Images.Img6}
                alt="Doctor 2"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Olivia Bennett
                </p>
                <p className="text-xs text-gray-500">
                  Dermatologist
                </p>
              </div>
            </div>

            <a href="/Team">
                <button className="w-full rounded-lg bg-blue-50 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 transition">
              Meet Our Experts
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <ServicesCopy />

 <section className=" lg:px-24 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 ">
          <img
            src={Images.Img7}
            alt="Healthcare lab"
            className="w-full  h-[420px] lg:h-[540px] object-cover rounded-3xl p-2"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 mt-4 px-4 mb-4 text-md">
             <p className="mb-3 flex items-center gap-2 text-sm text-black">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            About us
          </p>

          <h2 className="text-3xl  lg:text-5xl font-semibold text-gray-900 leading-snug mb-6">
            Vision for a healthier <br className="hidden sm:block" />
            and brighter tomorrow
          </h2>

          {/* Mission */}
          <div className="flex items-start gap-4 my-12 mr-4 md:mr-24">
            <div className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
             <img src={Images.Mission} alt="Icon" className="p-2" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">
                Our Mission
              </h4>
              <p className="text-gray-500 text-md lg:text-lg mt-1  md:mr-36 lg:mr-0">
                Our mission is to deliver compassionate and high-quality healthcare services.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-start gap-4 my-12 mr-4 lg:mr-24 md:mr-36">
            <div className="w-11 h-11 flex items-center justify-center bg-gay-100 rounded-full shrink-0">
              <img src={Images.Vision} alt=""  className="p-2"/>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">
                Our Vision
              </h4>
              <p className="text-gray-500 text-md mt-1 md:mr-36 lg:mr-0">
                Leading healthcare provider, recognized for innovative practices and care.
              </p>
            </div>
          </div>

          <a href="/Services">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-full transition">
            What we do
          </button>
          </a>

        </div>
      </div>
    </section>
    <StepsSection />

   <Feature />
  <TestimonialsCopy></TestimonialsCopy>
    <BlogCopy />
    <FAQSection />
    </>
    
  );
}

export default Landing;