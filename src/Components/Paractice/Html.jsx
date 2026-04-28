import React from "react";
import HtmlData from "./HtmlData";

function Html() {
  return (
    <div>
      <div className="Screen bg-gray-200 min-h-screen">
        {HtmlData.map((Data) => (
          <div className="p-2">
            {/* Nav Bar */}
            <nav className="relative">
              <input type="checkbox" id={Data.Menu} className="peer hidden" />

              <div className="Navbar bg-white shadow p-5 flex justify-between md:mx-5 md:my-2 items-center m-1 rounded-lg">
                <div className="Logo text-xl font-bold">
                  <h1>{Data.Logo}</h1>
                </div>

                <div className="Menu">
                  <ul className="flex gap-3 md:gap-5 items-center hidden md:flex">
                    <li className="cursor-pointer hover:bg-blue-500 p-2 hover:text-white md:text-gray-500 rounded-xl">
                      {Data.Home}
                    </li>
                    <li className="cursor-pointer hover:bg-blue-500 p-2 hover:text-white md:text-gray-500 rounded-xl">
                      {Data.About}
                    </li>
                    <li className="cursor-pointer hover:bg-blue-500 p-2 hover:text-white md:text-gray-500 rounded-xl">
                      {Data.Services}
                    </li>
                    <li className="cursor-pointer hover:bg-blue-500 p-2 hover:text-white text-gray-500 rounded-xl">
                      {Data.Contact}
                    </li>
                  </ul>
                </div>

                {/* End of Desktop NavBar */}
                {/* Mobile Nav */}

                <div className="md:hidden">
                  <label htmlFor={Data.Menu} className="md:hidden">
                    <div className="Menu-Toggle hover:bg-gray-200 p-2 cursor-pointer rounded-xl items-center content-center">
                      <span className="w-5 h-0.5 bg-gray-800 block mb-1 mt-1"></span>
                      <span className="w-5 h-0.5 bg-gray-800 block mb-1"></span>
                      <span className="w-5 h-0.5 bg-gray-800 block mb-1"></span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="Menu md:hidden top-full left-0 j w-full peer-checked:max-h-64 ease-in-out max-h-0 mt-2 overflow-hidden absolute bg-white rounded-lg">
                <ul className="flex flex-col space-y-3 ">
                  <li className="cursor-pointer hover:bg-blue-500 p-3 hover:text-white hover:font-medium text-gray-500 rounded-xl block m-2">
                    {Data.Home}
                  </li>
                  <li className="cursor-pointer  hover:bg-blue-500 p-3 hover:text-white hover:font-medium text-gray-500 rounded-xl block m-2">
                    {Data.About}
                  </li>
                  <li className="cursor-pointer hover:bg-blue-500 p-3 hover:text-white hover:font-medium text-gray-500 rounded-xl block m-2">
                    {Data.Services}
                  </li>
                  <li className="cursor-pointer hover:bg-blue-500 p-3 hover:text-white hover:font-medium text-gray-500 rounded-xl block m-2 ">
                    {Data.Contact}
                  </li>
                </ul>
              </div>
            </nav>
            {/* End Of NavBar */}

            {/* Hero Section */}

            <div className="Hero text-center content-center flex flex-col item-center mt-20 ">
              <h2 className="font-bold text-xl">{Data.Title}</h2>
              <p className="text-black-500">{Data.Body}</p>
              <div className="mt-5">
                <button className=" py-2 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
                  {Data.Link}
                </button>
              </div>
            </div>
            {/* End of Hero Section */}

            {/* Cards */}
            <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 mt-10 p-2  mb-10">
              <div className="Card p-5 bg-green-100 rounded-lg transition transition-transform duration-300 hover:scale-95 cursor-pointer">
                <h3 className="text-blue-500 font-semibold">{Data.C1Title}</h3>
                <p>{Data.C1Body}</p>
              </div>
              <div className="Card  p-5 bg-green-100 rounded-lg transition transition-transform duration-300 hover:scale-95 cursor-pointer">
                <h3 className="text-blue-500 font-semibold">{Data.C2Title}</h3>
                <p>{Data.C2Body}</p>
              </div>
              <div className="Card  p-5 bg-green-100 rounded-lg transition transition-transform duration-300 hover:scale-95 cursor-pointer">
                <h3 className="text-blue-500 font-semibold">{Data.C3Title}</h3>
                <p>{Data.C3Body}</p>
              </div>
            </div>
            {/* End of The Cards */}

            {/* Fotoer */}

            <footer>
              <div className="Footer p-20 text-center item-center bg-black text-white">
                <div className="FooterTitle">
                  <h4 className="font-bold">{Data.FooterTitle}</h4>
                </div>
                <div className="CopyRight">
                  <p className="mt-5">{Data.CopyRight}</p>
                </div>
              </div>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Html;
