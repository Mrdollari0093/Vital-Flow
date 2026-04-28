import React from "react";
import { ContactData, ContactHeader, ContactTitle } from "./ContactData";

function Contact() {
  return (
    <div>
      {ContactData.map((data, index) => (
        <div
          key={index}
          className="mt-20 flex flex-col gap-12 bg-blue-500 px-6 py-12 text-white lg:flex-row lg:justify-between lg:px-16 xl:px-24"
        >
          <div className="w-full lg:max-w-sm">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <p className="text-base font-medium">{ContactTitle}</p>
            </div>

            <h2 className="max-w-sm text-4xl font-semibold leading-snug sm:text-5xl">
              {ContactHeader}
            </h2>

            <div className="mt-8">
              <img src={data.FiveStar} alt="" className="w-24" />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 lg:max-w-3xl lg:grid-cols-2 lg:gap-8">
            <input
              type="text"
              placeholder={data.FName}
              className="border-b border-white bg-transparent pb-3 outline-none placeholder:text-white"
            />

            <input
              type="email"
              placeholder={data.Email}
              className="border-b border-white bg-transparent pb-3 outline-none placeholder:text-white"
            />

            <input
              type="number"
              placeholder={data.Phone}
              className="border-b border-white bg-transparent pb-3 outline-none placeholder:text-white"
            />

            <input
              type="date"
              placeholder={data.Calender}
              className="border-b border-white bg-transparent pb-3 outline-none"
            />

            <textarea
              placeholder={data.Message}
              className="min-h-[120px] resize-none border-b border-white bg-transparent pb-3 outline-none placeholder:text-white lg:col-span-2"
            ></textarea>

            <div className="lg:col-span-2">
              <button className="rounded-full bg-white px-8 py-3 text-lg font-medium text-blue-500 transition hover:-translate-y-0.5">
                {data.Btn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;