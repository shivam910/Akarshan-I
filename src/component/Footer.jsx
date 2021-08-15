import React from "react";
import Insta from ".././assets/images/insta.gif";
import Fb from ".././assets/images/fb.gif";

const Footer = () => {
  return (
    
      <div className="flex flex-col justify-center mx-auto w-screen bg-gradient-to-r from-black via-black to-purple-800 text-white bottom-0 p-6">
        <div className="grid grid-cols-4">
          <div className="flex flex-col text-left mx-3">
            <h1 className="pb-3 text-lg">Akarshan-I</h1>
            <div href="/aboutus">
              <a href="#">
                <p className="tracking-widest py-1 text-purple-200 hover:text-white">About Us</p>
              </a>
            </div>
            <div href="/team">
              <a href="#">
                <p className="tracking-widest py-1 text-purple-200 hover:text-white">Team</p>
              </a>
            </div>
            <div href="/privacypolicy">
              <a href="#">
                <p className="tracking-widest py-1 text-purple-200 hover:text-white">Privacy Policy</p>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col text-left mx-3">
            <h1 className="pb-3 text-lg ">We Accept</h1>
          </div>
          <div className="flex flex-col text-left mx-3">
            <h1 className="pb-3 text-lg ">Contact Us</h1>
            <p className="cursor-pointer text-purple-200 hover:text-white">+91-7984252615</p>
            <a href="#" className="cursor-pointer py-3 text-sm text-purple-200 hover:text-white">akarshani@gmail.com</a>
          </div>
          <div className="flex flex-col text-left mx-3">
            <h1 className="pb-3 text-lg">Reach us :</h1>
            <div className="flex">
            <img className="h-10 w-10 mx-2 rounded-3xl" src={Insta} alt="image" />
            <img className="h-10 w-10 mx-2 rounded-3xl" src={Fb} alt="image" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;