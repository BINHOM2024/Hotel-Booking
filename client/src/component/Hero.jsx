import React from "react";
import calander from "../assets/calenderIcon.svg";
import searchIcon from "../assets/searchIcon.svg";

const Hero = () => {
  return (
    <div className="flex bg-[url('src/assets/heroImage.png')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="w-[90%] m-auto">
        <div className="text-white mt-40 mb-6 w-[40%]">
          <p className="bg-teal-300 opacity-80 rounded-2xl pl-3 py-1 w-[50%]">
            The Ultimate Hotel Experience
          </p>
          <p className="text-5xl  my-3">
            Discover Your Perfect Gateway Destination
          </p>
          <p className="">
            Unparalleled luxyry and comfort await at the world's most exclusive
            hotels and resorts.Start your journey today.
          </p>
        </div>
        <div className="bg-amber-50 flex gap-3 w-[60%] py-4 px-4 rounded justify-between">
          <div className="">
            <label htmlFor="destination" className="flex gap-1">
              <img src={calander} />
              Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="type here"
              className="w-32 border border-gray-200 pl-1 outline-0 mt-2"
            />
          </div>
          <div className="">
            <label htmlFor="Check in" className="flex gap-1">
              <img src={calander} />
              Check in
            </label>
            <input
              type="date"
              id="Check in"
              className="border border-gray-200 pl-1 outline-0 mt-2"
            />
          </div>
          <div className="">
            <label htmlFor="check out" className="flex gap-1">
              <img src={calander} />
              Check out
            </label>
            <input
              type="date"
              id="check out"
              className="border border-gray-200 pl-1 outline-0 mt-2"
            />
          </div>
          <div className="">
            <label htmlFor="guests" className="flex gap-1">
              <img src={calander} />
              Guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              className="w-16 border border-gray-200 pl-1 outline-0 mt-2"
            />
          </div>
          <div className="bg-black text-[20px] items-center flex text-white px-2 place-self-center py-1 rounded">
            <img src={searchIcon} className="w-8" />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
