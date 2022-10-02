import React from "react";
import Birthday from "../assets/Birthday cake.png";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";

const EventPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-36 pt-36 md:flex-row flex-col-reverse">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-[#240D57]">
              Birthday Bash
            </h1>
            <p className="text-gray-400 text-lg">Hosted by Elysla</p>

            <div className="mt-7 flex mb-4 gap-x-6 pl-4" >
                <div >
                    <div className="bg-white p-1 border rounded-lg cursor-pointer hover:scale-105 ease-in duration-300 ">
                        <MdOutlineDateRange size={30} color="#8456EC"  />
                    </div>
                </div>
                <div>
                    <h3 className="text-[#240D57] ">18 August 6:00PM</h3>
                    <div className="flex">
                        <span>to&nbsp;</span><h3 className="text-gray-700 font-bold">19 August 1:00PM UTC </h3>
                    </div>
                </div>
            </div>

            <div className="flex gap-x-6 pl-4 w-full">
                <div className="flex-none" >
                    <div className="bg-white p-1 border rounded-lg cursor-pointer hover:scale-105 ease-in duration-300">
                        <IoLocationOutline size={30} color="#8456EC"  />
                    </div>
                </div>
                <div className="grow ">
                    <h3 className="text-[#240D57]">Street name</h3>
                    <div className="flex">
                        <h3 text-gray-700 font-bold>Suburb, State, Postcode</h3>
                    </div>
                </div>
                <div className="flex-none" >
                    <div className="pt-3 ">
                        <AiOutlineRight />
                    </div>
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
