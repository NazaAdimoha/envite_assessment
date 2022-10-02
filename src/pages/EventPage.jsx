import React from "react";
import Birthday from "../assets/Birthday cake.png";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const EventPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#240D57]">
              Birthday Bash
            </h1>
            <p className="text-gray-400 text-lg">Hosted by Elysla</p>

            <div className="flex sm:flex-col">
                <div className="rounded-lg w-[50px] items-center cursor-pointer hover:scale-105 ease-in duration-300">
                    <MdOutlineDateRange />
                </div>
                <div>
                    <h3 className="text-[#240D57]">18 August 6:00PM</h3>
                    <span>to</span><h3 className="text-gray-700 font-bold">19 August 1:00PM UTC </h3>
                </div>
            </div>

            <div className="flex sm:flex-row">
                <div className="rounded-lg w-[50px] items-center  cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <IoLocationOutline className="" />
                </div>
                <div>
                    <h3 className="text-[#240D57]">Street name</h3>
                    <h3>Suburb, State, Postcode</h3>
                </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Birthday}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPage;
