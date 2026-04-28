import React from "react";
import {
  ServicesTitle,
  ServiceHeader,
  ServicesData,
  Arrow,
} from "../Services/ServicesData" ;
import { Link } from "react-router-dom";


function ServicesCopy() {
  return (
  <div>

      <section className="mt-16 md:mt-16 lg:mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* top label */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              {ServicesTitle}
            </p>
          </div>

          {/* heading */}
          <div className="mx-auto mt-4 max-w-4xl text-center">
            {ServiceHeader === "Personalized solutions for better oral health" ? (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
                <span className="block md:inline">Personalized solutions</span>
                <br className="hidden md:block" />
                <span className="block md:inline">for better oral</span>
                <span className="block md:inline md:ml-2">health</span>
              </h1>
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
                {ServiceHeader}
              </h1>
            )}
          </div>

          {/* cards */}
          <div className="mt-14 md:mt-16 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
            {ServicesData.map((service) => (
              <Link to={`/Services/${service.id}`} key={service.id}>
                <article
                  className="group rounded-[28px] bg-sky-50 px-6 py-8 sm:px-8 sm:py-10 text-center transition-all duration-300 "
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="mx-auto mt-7 inline-flex items-center gap-2 text-base font-semibold text-gray-900 transition-all duration-300 group-hover:gap-4"
                  >
                    <span>{service.buttonText}</span>
                    <img src={Arrow} alt="" className="h-4 w-4 object-contain" />
                  </button>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

  
  </div>
  );
}

export default ServicesCopy;