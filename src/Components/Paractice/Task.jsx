import React from "react";
import TaskData from "./TaskData";
import Img from "./Blog1.png";
function Task() {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className=" text-center text-weight-900 text-2xl pt-4 text-blue-600">
        Card Profile
      </div>

      <div className="grid grid-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 item-center place-center content-center">
        {TaskData.map((Data, index) => (
          <div key={index.id} className="place-center">
            <div className="">
              <div className="Card w-[300px] sm:font-semibold md:font-sans lg:font-['Inter'] sm:text-[14px] md:text-[16px] lg:text-[18px] sm:w-[200px] md:w-[320px] lg:w-[350px] xl:w-[400px] rounded-xl shadow bg-white my-10 m-auto overflow-hidden">
                <img
                  src={Img}
                  alt="Image of Card"
                  className="w-full h-[200px] cursor-pointer transition-transform duration-300 hover:scale-105"
                />

                <div className="Bodyy p-5">
                  <div>
                    <h1 className="text-blue-600 text-bold">{Data.Name}</h1>
                  </div>
                  <div>
                    <p className="my-5 text-gray-600">{Data.Body}</p>
                  </div>
                  <div>
                    <button className="bg-green-500 rounded-lg pl-4 pr-4 py-2 text-white mt-4 hover:bg-green-600">
                      {Data.Link}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
