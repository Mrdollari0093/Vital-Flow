import React from "react";
import Appointment from "./Materials/F1.svg"
import Plans from "./Materials/F2.svg"
import Consultation  from "./Materials/F3.svg"
import Technology  from "./Materials/F4.svg"
import Records from "./Materials/F5.svg"
import Network from "./Materials/F6.svg"



const FeatureData = [
  {
    id: 1,
    icon: Appointment,
    title: "Easy appointment",
    desc: "Schedule your appointments quickly with our simple and efficient booking system.",
  },
  {
    id: 2,
    icon: Plans,
    title: "Personalized plans",
    desc: "Receive tailored care plans designed to meet your unique health needs and goals.",
  },
  {
    id: 3,
    icon: Consultation,
    title: "24/7 consultationsy",
    desc: "Access expert medical advice anytime through secure and reliable virtual visits.",
  },
  {
    id: 4,
    icon: Technology,
    title: "Medical technology",
    desc: "Experience modern healthcare with innovative tools and state-of-the-art equipment.",
  },
  {
    id: 5,
    icon: Records,
    title: "Patient records",
    desc: "Stay organized with secure, easy access to your medical records whenever needed.",
  },
  {
    id: 6,
    icon: Network,
    title: "Care network",
    desc: "Connect with top specialists and facilities to ensure complete healthcare coverage.",
  },
];


const Feature = () => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-3 lg:px-10">
      
      {/* Heading */}
<div className="max-w-4xl mx-auto text-center mb-20">

  <div className="flex items-center justify-center gap-2">
    <span className="h-2.5 w-2.5 rounded-full bg-blue-500 inline-block"></span>
    <p className="text-sm sm:text-base font-medium text-gray-700">
      Features
    </p>
  </div>

  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mt-4">
    Innovative solutions to <br className="hidden sm:block" />
    enhance medical service
  </h2>

</div>
      {/* Grid */}
      <div className="lg:max-w-7xl sm:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3  bg-white mx-3  lg:mx-16  border border-gray-200">
        
        {FeatureData.map((item, index) => (
          <div
            key={item.id}
            className={`
             px-7 md:px-10 py-16 text-center flex flex-col items-center justify-center
              border border-gray-200 -ml-px -mt-px

              /* LG (3 cols) */
              ${index % 3 !== 2 ? "md:border-r" : ""}
              ${index < 3 ? "md:border-b" : ""}

              /* SM (2 cols) */
              ${index % 2 !== 1 ? "sm:border-r" : ""}
              ${index < 4 ? "sm:border-b" : ""}
            `}
          >
            {/* Icon */}
            <div className="w-20 h-20 mb-8 flex items-center justify-center bg-blue-50 rounded-full">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 md:px-4 lg:px-0 md:text-xl leading-relaxed max-w-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;