import React from "react";
import { useParams } from "react-router-dom";
import DoctorDetailsData from "./DoctorDetailsData";

const DoctorDetails = () => {
  const { id } = useParams();

  const doctor = DoctorDetailsData.find(
    (doc) => doc.id === Number(id)
  );

  if (!doctor) {
    return (
      <div className="p-10 text-center text-gray-600">
        Doctor not found
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 lg:px-20">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-10">

        {/* Image */}
        <div className="w-full max-w-sm  rounded-2xl flex items-center justify-center ">
          <img
            src={doctor.heroImage}
            alt={doctor.name}
            className="w-full h-[400px] object-contain rounded-2xl lg:pt-4 bg-[#F5FAFF]"
          />
        </div>

        {/* Info */}
        <div className="flex-1 pt-3">

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {doctor.name}
          </h1>

          <p className="text-gray-500 mt-2">{doctor.specialty}</p>

          <div className="border-t my-6"></div>

          {/* Details */}
          <div className="space-y-5 max-w-xl">

            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Experience</span>
              <span className="text-gray-500">{doctor.experience}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Qualifications</span>
              <span className="text-gray-500">{doctor.qualifications}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Working hours</span>
              <span className="text-gray-500">{doctor.workingHours}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Location</span>
              <span className="text-gray-500 text-right max-w-xs">
                {doctor.location}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-6"></div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              doctor.socialIcons?.linkedin,
              doctor.socialIcons?.twitter,
              doctor.socialIcons?.facebook,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center border rounded-md cursor-pointer hover:bg-gray-100 transition"
              >
                <img src={icon} alt="social" className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-6 md:mx-auto mt-14 space-y-10">

        {/* About */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            About
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {doctor.about}
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Experience
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {doctor.experienceDetails}
          </p>
        </div>

        {/* Specialities */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Specialities & Info
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {doctor.specialities}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;