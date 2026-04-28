import React from "react";
import { CardData, blogTitle, BlogHeader } from "./BlogData";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import About from "../About/About";

function Blog() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* <Header /> */}

      <div className="mt-6 mb-6 flex items-center justify-center gap-2 md:mt-20 md:mb-10">
        <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
        <div className="text-lg font-medium text-black">{blogTitle}</div>
      </div>

      <div className="mx-auto mb-8 max-w-[620px] px-4 text-center text-3xl font-semibold leading-tight text-black sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl">
        {BlogHeader}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 pb-10 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-3">
        {CardData.map((item, index) => (
          <div key={index} className="rounded-3xl bg-white overflow-x-hidden">
            <Link to={`/blog/${item.id}`}>
              <div className="flex flex-col">
                <img
                  src={item.Img}
                  alt={item.Title}
                  className="h-60 w-full rounded-lg object-cover transition hover:scale-105"
                />

                <div className="py-5">
                  <p className="text-2xl font-medium leading-snug text-black md:text-3xl">
                    {item.Title}
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="flex  flex-wrap items-center gap-2 pt-4 text-gray-500 ">
                <img src={item.Calender} alt="calendar" className="h-4 w-4" />
                <div className="text-sm md:text-base">{item.Data}</div>

                <img src={item.Clock} alt="clock" className="h-4 w-4" />
                <div className="text-sm md:text-base">{item.Time}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Testimonials />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default Blog;