import React from "react";
import { TestiHeader, TestiTitle, TestimonialsData } from "../Testimonials/TestimonialsData";

function Testimonials() {
  return (
    <div className="overflow-x-hidden bg-white">
      <div className="mt-10 mb-5 flex items-center justify-center gap-2 md:mt-24 md:mb-8">
        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
        <h2 className="text-base text-black">{TestiTitle}</h2>
      </div>

      <div className="mx-auto mb-10 max-w-[900px] px-4 text-center text-3xl font-semibold leading-tight text-black sm:text-3xl md:mb-14 md:text-4xl lg:text-5xl">
        <p>{TestiHeader}</p>
      </div>

      {/* NOTE: This is already 1 column by default.
         If you still see 2 columns, your screen width is likely >= 1024px (lg breakpoint) */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-1 gap-5 px-4 pb-10 md:px-6 md:pb-16 lg:grid-cols-3">
        
        {/* NOTE: lg:grid-cols-3 activates ONLY on large screens (>=1024px) */}
        {TestimonialsData.map((data, index) => (
          <div key={index}>
            <div className="rounded-2xl bg-slate-100 px-5 py-6 md:min-h-[280px] md:rounded-3xl md:px-7 md:py-8">
              <div className="mb-5 flex items-center gap-4 text-lg font-medium text-black md:mb-7">
                <img
                  src={data.Image}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                />

                <div>
                  <p>{data.Name}</p>
                </div>
              </div>

              <div className="text-base text-gray-500 md:text-lg">
                <div className="mb-5 leading-relaxed md:mb-6">
                  <p>{data.Description}</p>
                </div>

                <div className="flex items-center">
                  <img
                    src={data.Star}
                    alt=""
                    className="w-[110px] md:w-[120px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;