import React from "react";
import Header from "../Header/Header";
import img1 from "./Materials/About1.png";
import img2 from "./Materials/About2.png";
import img3 from "./Materials/About3.png";
import img4 from "./Materials/About4.png";
import img5 from "./Materials/About5.png";
import img6 from "./Materials/About6.png";
import Care from "./Materials/Care.svg"
 import   icon1 from "./Materials/Compassion.svg";
 import   icon2 from "./Materials/Excellence.svg";
 import   icon3 from "./Materials/Integrity.svg";
import Services from "./Materials/Services.svg"

import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import TeamCopy from "./TeamCopy";

function About() {
  const images = [img1, img2, img3];

  const cards = [
  {
    title: "Compassion",
    desc: "We prioritize empathy and understanding, ensuring every patient feels valued, respected, and cared for in their healthcare journey.",
    icon: icon1, // your SVG file
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering the highest standards of quality in every aspect of our services, striving for continuous improvement.",
    icon: icon2,
  },
  {
    title: "Integrity",
    desc: "We uphold honesty and transparency in all interactions, building trust with patients, families, and the community through ethical practices.",
    icon: icon3,
  },
];

  return (
    <div>
      {/* <Header /> */}

      <section className="text-center py-12 px-4 md:py-16">
        <p className="text-sm text-black flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          About us
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mt-4 leading-tight">
          A modern dental care <br className="hidden sm:block" />
          home for families
        </h1>
<a href="/Contacts">
  
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
          Get Started
        </button>
</a>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 h-[800px] lg:h-[540px] ">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`about-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 lg:px-20 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between text-center gap-y-6">

            <div className="flex flex-col items-center px-6">
              <h2 className="text-4xl md:text-6xl  text-blue-500">
                98%
              </h2>
              <p className="text-gray-600 mt-2">Satisfaction rate</p>
            </div>

                       <div className="hidden lg:block text-black text-2xl">•</div>


            <div className="flex flex-col items-center px-6">
              <h2 className="text-4xl md:text-6xl text-blue-500">
                30+
              </h2>
              <p className="text-gray-600 mt-2">Years of experience</p>
            </div>

                      <div className="hidden lg:block text-black text-2xl">•</div>


            <div className="flex flex-col items-center px-6">
              <h2 className="text-4xl md:text-6xl  text-blue-500">
                1000+
              </h2>
              <p className="text-gray-600 mt-2">Patients Treated</p>
            </div>

            <div className="hidden lg:block text-black text-2xl">•</div>

            <div className="flex flex-col items-center px-6">
              <h2 className="text-4xl md:text-6xl  text-blue-500">
                80+
              </h2>
              <p className="text-gray-600 mt-2">Expert Doctors</p>
            </div>

          </div>
        </div>
      </section>


<section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 items-center">

        {/* Images */}
        <div className="relative flex ml-16 lg:justify-start lg:ml-32 mb-5">
          <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-full overflow-hidden">
            <img
              src={img4}
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 -left-8 sm:-left-12 md:-left-16 w-40 h-56 sm:w-48 sm:h-64 md:w-52 md:h-72 rounded-full overflow-hidden shadow-lg">
            <img
              src={img5}
              alt="medical"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className=" text-left text-left ">
          <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Our Mission
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-4 leading-tight">
            Transforming lives with <br className="hidden sm:block" />
            medical solutions
          </h2>

          <div className="mt-8 space-y-6">

            {/* Care */}
            <div className="flex items-start gap-4 md:mr-40 ">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <img
                  src={Care}
                  alt="care"
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Compassionate care
                </h4>
                <p className="text-gray-600 text-lg mt-1">
                  Our mission is to provide personalized and empathetic healthcare for individual.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="flex items-start gap-4  md:mr-40 ">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <img
                  src={Services}
                  alt="services"
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div >
                <h4 className="font-semibold text-gray-900">
                  Excellence in service
                </h4>
                <p className="text-gray-600 text-lg mt-1">
                  We strive to deliver high-quality, reliable, and innovative medical solutions.
                </p>
              </div>
            </div>

          </div>

          <a href="/Contacts">
            <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
            Book a call
          </button>
          </a>
        </div>

      </div>
    </section>



     <section className="py-8 md:py-12 px-4 bg-white ">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-4 items-center">


 <div className="flex lg:hidden justify-center  md:justify-start mb-6">
          <div className="w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden">
            <img
              src={img6}
              alt="vision"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>


        {/* Left Content */}
        <div className="justify-start lg:text-left text-left">
          <p className="text-sm text-black font-semibold flex items-center lg:justify-start gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Our Vision
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-4 leading-tight">
            Passionate about creating <br className="hidden sm:block" />
            healthier, happier lives
          </h2>

          <div className="mt-8 space-y-4 justify-start">

            {/* Item */}
            <div className="flex items-start gap-3 justify-left mb-2 lg:justify-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
                ✓
              </div>
              <p className="text-gray-700">
                Innovating for better healthcare futures
              </p>
            </div>

            <div className="flex items-start gap-3 justify-left mb-2 lg:justify-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
                ✓
              </div>
              <p className="text-gray-700">
                Leading with patient-focused care solutions
              </p>
            </div>

            <div className="flex items-start gap-3 justify-left mb-2 lg:justify-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
                ✓
              </div>
              <p className="text-gray-700">
                Building healthier and stronger communities
              </p>
            </div>

            <div className="flex items-start gap-3 justify-left mb-2 lg:justify-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
                ✓
              </div>
              <p className="text-gray-700">
                Transforming lives through medical excellence
              </p>
            </div>

          </div>

          <a href="/Contacts">
            <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
            Book a call
          </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center hidden lg:flex lg:justify-end">
          <div className="w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden">
            <img
              src={img6}
              alt="vision"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
     <section className="w-full py-16 bg-[#F5FAFF] lg:py-24 flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
 <section className="text-center py-12 px-4 lg:py-16">
        <p className="text-sm text-black flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Our Values
        </p>

        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-4 leading-tight">
        Core principles guiding our <br  className="hidden sm:block"/> healthcare mission
        </h1>
      </section>
        

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 sm:p-10 text-white 
              bg-[#4586FF]
              shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>


  <TeamCopy />
 
    </div>
  );
}

export default About;