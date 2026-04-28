import React from "react";
import Img8 from "./Materials/Img8.png"; 
import Img9 from "./Materials/Img9.png"; 
import Img10 from "./Materials/Img10.png"; 

const StepsSection = () => {
  return (
    <section className="py-16 px-2 md:px-6 lg:px-24">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
          <p className="text-sm sm:text-base font-medium">
            How it works
          </p>
        </div>

        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 px-2 leading-tight mt-4">
          Step-by-step process for <br className="hidden sm:block" />
          seamless user experience
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="flex flex-col">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold mb-4">
            01
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Share your preferences
          </h3>

          <p className="text-gray-500 mb-5  leading-relaxed  md:mr-[410px] lg:mr-0">
            Tell us about your unique needs and preferences to help us create a personalized plan for your care.
          </p>

          <div className="rounded-2xl overflow-hidden">
            <img src={Img8} alt="" className="w-full h-60 object-cover" />
          </div>
        </div>

        {/* Card 2 (IMAGE IN MIDDLE) */}
        <div className="flex flex-col">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold mb-4">
            02
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Customized solutions
          </h3>

          {/* Image in middle */}
          <div className="rounded-2xl overflow-hidden mb-4">
            <img src={Img9} alt="" className="w-full h-60 object-cover" />
          </div>

          <p className="text-gray-500 leading-relaxed md:mr-[410px] lg:mr-0">
            We analyze your requirements and craft tailored solutions designed specifically for your goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold mb-4">
            03
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Achieve your vision
          </h3>

          <p className="text-gray-500 mb-5 leading-relaxed  md:mr-[410px] lg:mr-0">
            Experience seamless results as we bring your perfect vision to life with precision and care.
          </p>

          <div className="rounded-2xl overflow-hidden">
            <img src={Img10} alt="" className="w-full h-60 object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StepsSection;