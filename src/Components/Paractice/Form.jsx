import React from "react";
import FormData from "./FormData";
import { data } from "autoprefixer";
function Form() {
  return (
    <div>
      <div className="LoginCard bg-gray-100 min-h-screen flex mx-auto justify-center">
        <div className="Login mt-20 bg-white h-[440px] p-5 w-[340px] md:w-[400px] rounded-xl">
          {FormData.map((Data) => (
            <div>
              <div className="LoginTitle ">
                <h2 className="text-black font-bold text-2xl p-3 text-center">{Data.LoginTitle}</h2>
              </div>
              <div className="Form">
                <div className="Email">
                  <label className="block font-semibold mt-2">{Data.Email}</label>
                  <input type="email" name="" id="" placeholder={Data.EmailPlace}  
                  className="w-full border border-gray-600 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"/>
                </div>
                <div className="Password block font-semibold mt-2">
                  <label htmlFor="">{Data.Password}</label>
                  <input type="password" name="" id="" placeholder={Data.PasswordPlace} 
                  className=" w-full border border-gray-600 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"/>
                </div>

                <div className="CheckFlex flex mt-3 justify-between">
                    <div className="Remember flex gap-2">
                        <input type="checkbox" name={Data.Remember} id={Data.Remember}  />
                        <label htmlFor={Data.Remember}>{Data.Remember}</label>
                    </div>
                    <div className="Forgot text-blue-500">
                        <a href={Data.Path}>{Data.Forgot}</a>
                    </div>
                </div>

                <div className="Btn">
                    <button className="py-2 mt-5 bg-blue-600 text-white hover:bg-blue-700 transition rounded-lg w-full">{Data.Btn}</button>
                </div>
                <div className="Dont">
                    <p className="text-center p-4 text-gray-600">{Data.Dont}</p>
                </div>
                <div className="SignUp">
                    <p className="text-blue-500 cursor-pointer">{Data.SignUp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
