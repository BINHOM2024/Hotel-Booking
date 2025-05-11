import React from "react";
import NavBar from "../component/NavBar";
import { assets } from "../assets/assets";

function Hotels() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="m-auto w-[80%] flex justify-between gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-10">Hotel Rooms</h1>
          <p className="text-gray-400 lg:w-[60%]">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
          <div className="gap-9 flex flex-col lg:flex-row my-12 ">
            <img className="md:w-[400px] rounded-2xl" src={assets.roomImg4} />
            <div className="gap-2 flex flex-col">
              <h4 className="text-gray-400 ">New York</h4>
              <h2 className="text-2xl">Urbanza Suites</h2>
              <div className="flex">
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconOutlined} alt="" />
                <p className="ml-2">200+ reviews</p>
              </div>

              <p className="text-gray-300">Main Road 123 Street,23 Clony</p>
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-4">
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.roomServiceIcon} alt="" />
                  <p className="text-[14px]">ROOM SERVICE</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.mountainIcon} alt="" />
                  <p className="text-[14px]">MOUNTAIN VIEW</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.poolIcon} alt="" />
                  <p className="text-[14px]">POOL ACCESS</p>
                </div>
              </div>
              <h5 className="text-2xl mt-3.5">$399/night</h5>
            </div>
          </div>
          <hr />
          <div className="gap-9 flex flex-col lg:flex-row my-12  ">
            <img className="md:w-[400px] rounded-2xl" src={assets.roomImg3} />
            <div className="gap-2 flex flex-col">
              <h4 className="text-gray-400 ">New York</h4>
              <h2 className="text-2xl">Urbanza Suites</h2>
              <div className="flex">
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconOutlined} alt="" />
                <p className="ml-2">200+ reviews</p>
              </div>

              <p className="text-gray-300">Main Road 123 Street,23 Clony</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.freeWifiIcon} alt="" />
                  <p className="text-[14px]">FREE WIFI</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.mountainIcon} alt="" />
                  <p className="text-[14px]">MOUNTAIN VIEW</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.poolIcon} alt="" />
                  <p className="text-[14px]">POOL ACCESS</p>
                </div>
              </div>
              <h5 className="text-2xl mt-3.5">$199/night</h5>
            </div>
          </div>
          <hr />
          <div className="gap-9 flex flex-col lg:flex-row my-12 ">
            <img className="md:w-[400px] rounded-2xl" src={assets.roomImg2} />
            <div className="gap-2 flex flex-col">
              <h4 className="text-gray-400 ">New York</h4>
              <h2 className="text-2xl">Urbanza Suites</h2>
              <div className="flex">
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconOutlined} alt="" />
                <p className="ml-2">200+ reviews</p>
              </div>

              <p className="text-gray-300">Main Road 123 Street,23 Clony</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.freeWifiIcon} alt="" />
                  <p className="text-[14px]">FREE WIFI</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.freeBreakfastIcon} alt="" />
                  <p className="text-[14px]">FREE BREAKFAST</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.poolIcon} alt="" />
                  <p className="text-[14px]">POOL ACCESS</p>
                </div>
              </div>
              <h5 className="text-2xl mt-3.5">$499/night</h5>
            </div>
          </div>
          <hr />
          <div className="gap-9 flex flex-col lg:flex-row my-12  mb-25">
            <img
              className=" md:w-[400px] rounded-2xl"
              src={assets.roomImg1}
              alt=""
            />
            <div className="gap-2 flex flex-col">
              <h4 className="text-gray-400 ">New York</h4>
              <h2 className="text-2xl">Urbanza Suites</h2>
              <div className="flex">
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconOutlined} alt="" />
                <p className="ml-2">200+ reviews</p>
              </div>

              <p className="text-gray-300">Main Road 123 Street,23 Clony</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.roomServiceIcon} alt="" />
                  <p className="text-[14px]">ROOM SERVICE</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.mountainIcon} alt="" />
                  <p className="text-[14px]">MOUNTAIN VIEW</p>
                </div>
                <div className="flex gap-1 bg-blue-50 p-1.5 rounded-[10px]">
                  <img src={assets.poolIcon} alt="" />
                  <p className="text-[14px]">POOL ACCESS</p>
                </div>
              </div>
              <h5 className="text-2xl mt-3.5">$396/night</h5>
            </div>
          </div>
        </div>
        <div className="border w-[25%] mt-24 max-h-[85vh] hidden lg:block">
          <div className="flex border-b p-3 justify-between items-center">
            <h2 className="text-[20px]">FILTERS</h2>
            <p className="text-gray-500 text-[15px]">CLEAR</p>
          </div>
          <div className="p-4">
            <h2 className="text-[21px] font-light mb-3">Popular filters</h2>
            <div className="flex flex-col gap-1 text-gray-500">
              <label htmlFor="single bed">
                <input
                  type="checkbox"
                  id="single bed"
                  className="mr-2 cursor-pointer"
                />
                Single Bed
              </label>
              <label htmlFor="double bed">
                <input
                  type="checkbox"
                  id="double bed"
                  className="mr-2 cursor-pointer"
                />
                Double Bed
              </label>
              <label htmlFor="luxury room">
                <input
                  type="checkbox"
                  id="luxury room"
                  className="mr-2 cursor-pointer"
                />
                Luxury Room
              </label>
              <label htmlFor="family suite">
                <input
                  type="checkbox"
                  id="family suite"
                  className="mr-2 cursor-pointer"
                />
                Family Suite
              </label>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-[21px] font-light mb-3">Price Range</h2>
            <div className="flex flex-col gap-1 text-gray-500">
              <label htmlFor="0 to 500">
                <input
                  type="checkbox"
                  id="0 to 500"
                  className="mr-2 cursor-pointer"
                />
                $ 0 to 500
              </label>
              <label htmlFor="500 to 1000">
                <input
                  type="checkbox"
                  id="500 to 1000"
                  className="mr-2 cursor-pointer"
                />
                $ 500 to 1000
              </label>
              <label htmlFor="1000 to 2000">
                <input
                  type="checkbox"
                  id="1000 to 2000"
                  className="mr-2 cursor-pointer"
                />
                $ 1000 to 2000
              </label>
              <label htmlFor="2000 to 3000">
                <input
                  type="checkbox"
                  id="2000 to 3000"
                  className="mr-2 cursor-pointer"
                />
                $ 2000 to 3000
              </label>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-[21px] font-light mb-3">Sort By</h2>
            <div className="flex flex-col gap-1 text-gray-500">
              <label htmlFor="low to high">
                <input
                  type="radio"
                  id="low to high"
                  name="radio"
                  className="mr-2 cursor-pointer"
                />
                Price Low to High
              </label>
              <label htmlFor="high to low">
                <input
                  type="radio"
                  id="high to low"
                  name="radio"
                  className="mr-2 cursor-pointer"
                />
                Price High to Low
              </label>
              <label htmlFor="newest first">
                <input
                  type="radio"
                  id="newest first"
                  name="radio"
                  className="mr-2 cursor-pointer"
                />
                Newest First
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
