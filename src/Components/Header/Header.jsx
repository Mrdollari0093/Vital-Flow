import React, { useState } from "react";
import { HeaderData } from "./HeaderData"
import Team from "../Team/Team";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";
import About from "../About/About";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {HeaderData.map((item, key) => (
        <nav
          key={key}
          className="relative mx-5 flex items-center justify-between py-4 md:mx-10 lg:mx-24"
        >
          <div className="flex items-center justify-center gap-3 text-xl font-medium text-black">
            
              <a href="/" className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
                <img
              
                src={item.Logo}
                alt="Logo"
                className="h-1/2 w-1/2 object-contain items-center justify-center"
              />
              </a>
            
            <a href="/" className="no-underline">
              {item.HeaderTitle}
            </a>
          </div>

          <ul className="hidden items-center gap-8 lg:flex lg:gap-10">
            <li>
              <a href="/About" className="text-base font-medium text-black hover:text-blue-500">
                {item.About}
              </a>
            </li>
            <li>
              <a href="/Services" className="text-base font-medium text-black hover:text-blue-500">
                {item.Services}
              </a>
            </li>
            <li>
              <a href="/Team" className="text-base font-medium text-black hover:text-blue-500">
                {item.Doctors}
              </a>
            </li>
            <li>
              <a href="/Blog" className="text-base font-medium text-black hover:text-blue-500">
                {item.Blog}
              </a>
            </li>
          </ul>

          <div className="hidden lg:block">
         <a href="/Contacts">
             <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 lg:px-8 lg:text-base">
              {item.HeaderBtn}
            </button>
         </a>
          </div>

          <button
            className="text-2xl lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

         {menuOpen && (
  <div className="absolute left-1/2 top-full z-50 flex min-h-[35vh] w-screen -translate-x-1/2 flex-col items-center justify-center gap-6 bg-white py-6 shadow-lg px-4 md:px-8  lg:hidden">
    <a href="/About" className="text-lg font-medium text-black hover:bg-blue-500 hover:text-white p-2  rounded-lg block w-full">
      {item.About}
    </a>
    <a href="/Services" className="text-lg font-medium text-black hover:bg-blue-500 hover:text-white p-2 rounded-lg block w-full">
      {item.Services}
    </a>
    <a href="/Team" className="text-lg font-medium text-black  hover:bg-blue-500 hover:text-white p-2 rounded-lg block w-full">
      {item.Doctors}
    </a>
    <a href="/Blog" className="text-lg font-medium text-black hover:bg-blue-500 hover:text-white p-2  rounded-lg block w-full">
      {item.Blog}
    </a>
  </div>
)}

        </nav>
      ))}
    </>
  );
}

export default Header;