import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetailsData from "./ServicesDetailsData";

const ServicesDetails = () => {
  const { id } = useParams();

  const service = ServiceDetailsData.find(
    (item) => item.id === Number(id)
  );

  if (!service) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  return (
    <div className=" min-h-screen mx-1 ">

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src={service.titleIcon} alt="" className="w-12 h-12 p-2 bg-[#F5FAFF] rounded-full" />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {service.title}
          </h1>

          <p className="text-gray-600 text-xl font-medium max-w-xl mb-10">
            {service.description}
          </p>

          {/* Doctor */}
         <a href={service.doctor.path} className="curser-pointer">
             <div className="flex items-center gap-3 mt-8">
            <img
              src={service.doctor.image}
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
            <div>
              <p className="font-medium">{service.doctor.name}</p>
              <p className="text-sm text-gray-500">
                {service.doctor.role}
              </p>
            </div>
            <div>
                <img src={service.icons.go} alt="Go-Arrow" className="w-4 h-4 ml-2 justify-start cursor-pointer" />
            </div>
          </div>
         </a>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={service.heroImage}
            alt=""
            className="w-full h-[540px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 pb-16 mt-16 grid lg:grid-cols-3 gap-10">

        {/* CONTACT CARD */}
        <div className="bg-[#F5FAFF] rounded-2xl p-6 h-fit text-black font-semibold sm:hidden md:hidden lg:block">

          <h3 className="text-3xl font-semibold mb-6">
            Book a call with <br /> specialist Now!!
          </h3>

          <div className="space-y-5 text-md text-gray-700">

            <div className="flex items-center invert-1 sharpness  gap-3">
              <img src={service.icons.phone} className="w-6" />
              <span>{service.contact.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={service.icons.message} className="w-6" />
              <span>{service.contact.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={service.icons.location} className="w-6" />
              <span>{service.contact.location}</span>
            </div>
          </div>

          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
            Book a call
          </button>
        </div>

        {/* ABOUT SECTION */}
        <div className="lg:col-span-2  ">

          <h2 className="text-3xl font-semibold mb-4">
            About service:
          </h2>

          {service.aboutService.map((p, i) => (
            <p key={i} className="text-gray-500 mb-4 text-md font-medium leading-relaxed">
              {p}
            </p>
          ))}

          <ul className="list-disc pl-6 space-y-2  text-md font-medium  text-gray-500 mt-4">
            {service.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#F5FAFF] rounded-2xl p-6 h-fit text-black font-semibold lg:hidden">

          <h3 className="text-3xl font-semibold mb-6">
            Book a call with <br /> specialist Now!!
          </h3>

          <div className="space-y-5 text-md text-gray-700">

            <div className="flex items-center invert-1 sharpness  gap-3">
              <img src={service.icons.phone} className="w-6" />
              <span>{service.contact.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={service.icons.message} className="w-6" />
              <span>{service.contact.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={service.icons.location} className="w-6" />
              <span>{service.contact.location}</span>
            </div>
          </div>

          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;