import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Blog1.png";
import Img2 from "../../assets/Blog2.png";
import Img3 from "../../assets/Blog3.png";

import Calender from "../../assets/calendar.png";
import Time from "../../assets/time.png";
const blogTitle = "Blog";
const BlogHeader = "Insights and tips for better healthcare decisions";



function BlogCopy() {

  
  
  const CardData = [
    {
      id:1,
      Img: Img1,
      Title: "The Benefits of Regular Exercise: A Pathway to Health",
      Calender: Calender,
      Data: "Sep 4, 2024",
      Clock: Time,
      Time: "5 min read",
    },
    {
      id:2,
      Img: Img2,
      Title: "Managing Stress for Better Health: Strategies for a Calmer Life",
      Calender: Calender,
      Data: "Sep 5, 2024",
      Clock: Time,
      Time: "5 min read",
  
    },
    {
      id:3,
      Img: Img3,
      Title: "The Impact of Sleep on Your HealthCare: Why Rest Matters",
      Calender: Calender,
      Data: "Sep 16, 2024",
      Clock: Time,
      Time: "5 min read",
  
    },
    
  ];

  return (
    <div className="overflow-x-hidden bg-white">


      <div className="mt-6 mb-6 flex items-center justify-center gap-2 md:mt-20 md:mb-10">
        <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
        <div className="text-lg font-medium text-black">{blogTitle}</div>
      </div>

      <div className="mx-auto mb-8 max-w-[620px] px-4 text-center text-3xl font-semibold leading-tight text-black sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl">
        {BlogHeader}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 pb-10 md:gap-5 md:px-6 lg:grid-cols-3">
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
                  <p className="text-2xl font-medium md:mr-[380px] lg:mr-0 leading-snug text-black lg:text-3xl">
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
    </div>
  );
}

export default BlogCopy;