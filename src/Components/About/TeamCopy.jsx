import React from "react";
import { teamLabel, teamTitle, doctors } from "../Team/TeamData";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "./About";
import { Link } from "react-router-dom";
import Arrow from "../Team/Arrow.svg";


const TeamCopy = () => {
  return (
    <div>
      <section className="mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">

          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              {teamLabel}
            </p>
          </div>

          <h1 className="mx-auto mb-16 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
            {teamTitle}
          </h1>

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">

            {doctors.map((doctor) => (
              <Link to={`/doctor/${doctor.id}`} key={doctor.id}>
                <article className="text-left cursor-pointer group ">

                  <div className="flex h-[320px] w-full items-end justify-center overflow-hidden rounded-[28px] bg-[#EAF4FF]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="block h-full w-[84%] object-contain"
                    />
                  </div>

                  <div className="px-1 pt-5 flex justify-between">
                   <div>
                     <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">
                      {doctor.specialty}
                      </p>
                   </div>
               <div>
  <div className="w-8 p-2 border border-gray-200 rounded-lg overflow-hidden group cursor-pointer">
    <img
      src={Arrow}
      alt="Arrow-icon"
      className="transition-transform duration-200 ease-in-out group-hover:translate-x-2"
    />
  </div>
</div>
                    
                  </div>

                </article>
              </Link>
            ))}

          </div>
        </div>
      </section>

<Testimonials></Testimonials>
{/* <Contact/>
<Footer></Footer> */}
</div>
  );
 
};


export default TeamCopy;