import React from "react";
import LandingPG from "../assets/Landing page image.svg";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full bg-[#DDDDDD] ">
      <div className="sm: flex-col-reverse md:flex-col-reverse flex justify-around items-center lg:flex-row border-red-800 ">
        <div className="justify-center items-center border-blue-600 flex lg:w-[50%] md:w-[100%]">
          <img
            style={{ display: "block" }}
            className="rounded-lg  mb-2 ml-7 mt-12 h-[75vh]"
            src={LandingPG}
            alt="landingPage"
          />
        </div>

        <div className="flex flex-col lg:pr-4">
          <div className="mx-3 mb-4">
            <h1 className="text-3xl text-[#240D57] text-end ">
              Imagine if <br />{" "}
              <span className="text-[#8456EC] text-3xl font-bold">
                Snapchat
              </span>{" "}
              <br /> had events
            </h1>
            <p className="text-gray-400 mt-2 text-end">
              Easily host and share events with your friends <br /> across any
              social media
            </p>
          </div>
          <Link to="/eventpage">
            <Buttons>Create my event</Buttons>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
