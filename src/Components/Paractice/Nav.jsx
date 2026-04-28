import React from "react";
import NavData from "./NavData";
function Nav() {
  return (
    <div className="Screen bg-gray-100 min-h-screen">
      {NavData.map((Data) => (
        <div className="p-4">
          {/* NavBar */}
          <nav className="relative">
            <input
              type="checkbox"
              name=""
              id={Data.Humberger}
              className="peer hidden"
            />

            {/* DeskTop Nav */}

            <div className="Desktop">
              <div className="PcNav bg-white flex items-center  p-6 px-12 rounded-xl md:flex  justify-between">
                <div className="Logo">
                  <h2 className="font-bold text-xl">{Data.Logo}</h2>
                </div>

                <div className="Menu ">
                  <ul className=" md:gap-8 hidden md:flex">
                    <li>
                      <a
                        href={Data.Path}
                        className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 rounded-lg transition duration-400"
                      >
                        {Data.Home}
                      </a>
                    </li>
                    <li>
                      <a
                        href={Data.Path}
                        className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 rounded-lg transition duration-400"
                      >
                        {Data.About}
                      </a>
                    </li>
                    <li>
                      <a
                        href={Data.Path}
                        className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 rounded-lg transition duration-400"
                      >
                        {Data.Services}
                      </a>
                    </li>
                    <li>
                      <a
                        href={Data.Path}
                        className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 rounded-lg transition duration-400"
                      >
                        {Data.Contact}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="AssignBurger md:hidden">
                  <label htmlFor={Data.Humberger} className="">
                    <div className="BurgerICON hover:bg-gray-200 p-2 rounded-lg cursor-pointer ">
                      <span className="w-5 h-0.5 bg-gray-600 block "></span>
                      <span className="w-5 h-0.5 bg-gray-600 block my-1"></span>
                      <span className="w-5 h-0.5 bg-gray-600 block "></span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden w-full top-full left-0 bg-white peer-checked:max-h-64 rounded-lg overflow-hidden max-h-0 ease-in-out mt-2 absolute">
              <ul className="flex flex-col space-y-4 p-4">
                <li className="">
                  <a
                    href={Data.Path}
                    className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 hover:font-semibold rounded-lg transition duration-400 block"
                  >
                    {Data.Home}
                  </a>
                </li>
                <li>
                  <a
                    href={Data.Path}
                    className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 hover:font-semibold rounded-lg transition duration-400 block"
                  >
                    {Data.About}
                  </a>
                </li>
                <li>
                  <a
                    href={Data.Path}
                    className="hover:bg-blue-500 hover:text-white text-gray-500 p-2 hover:font-semibold rounded-lg transition duration-400 block"
                  >
                    {Data.Services}
                  </a>
                </li>
                <li>
                  <a
                    href={Data.Path}
                    className="hover:bg-blue-500 hover:text-white text-gray-500 hover:font-semibold p-2 rounded-lg transition duration-400 block"
                  >
                    {Data.Contact}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      ))}
    </div>
  );
}

export default Nav;
