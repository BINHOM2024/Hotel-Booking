import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [singleRoom, setSingleRoom] = useState(null);

  const formValues = [
    { name: "Check-In", type: "date" },
    { name: "Check-Out", type: "date" },
    { name: "Guests", type: "number" },
  ];

  useEffect(() => {
    const room = roomsDummyData.find((rooms) => rooms._id === id);
    room && setRoom(room);
    room && setSingleRoom(room.images[0]);
  }, [id]);

  return (
    room && (
      <div className="grid m-auto w-[80%] mt-40 mb-24 gap-4 ">
        <div className="flex flex-col items-start md:flex-row md:items-center gap-3">
          <h1 className="text-2xl ">
            {room.hotel.name} <span className="text-sm">({room.roomType})</span>
          </h1>
          <p className="bg-orange-600 rounded-3xl py-1 px-2">20 % OFF</p>
        </div>
        <div className="flex gap-1">
          <img src={assets.locationIcon} alt="" />
          <p>{room.hotel.address}</p>
        </div>
        <div className="grid md:grid-cols-2 w-[90%] gap-4 md:gap-8">
          <img className=" rounded-2xl" src={singleRoom} alt="" />
          <div className="grid grid-cols-2 gap-4 ">
            {room.images.length > 1 &&
              room.images.map((image, i) => (
                <img
                  onClick={() => setSingleRoom(image)}
                  key={i}
                  src={image}
                  alt=""
                  className={`rounded-2xl cursor-pointer ${
                    singleRoom === image && "outline-4 outline-red-300"
                  }`}
                />
              ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-2xl mt-8">
          <h2>Experience Luxury Like Never Before</h2>
          <p className="hidden md:block">${room.pricePerNight}/Night</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[60%]  gap-2 text-[14px]">
          {room.amenities.map((item, i) => (
            <div
              key={i}
              className="flex gap-1 bg-gray-200 px-2 py-3 place-self-start rounded-[7px] "
            >
              <img src={facilityIcons[item]} alt="" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <form className="flex flex-col md:flex-row gap-4 md:gap-2 sm:justify-between mt-10 mx-16 sm:mx-0 md:mx-4 px-8 py-8 text-gray-500 rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
            {formValues.map((value, i) => (
              <div className="flex flex-col" key={i}>
                <label htmlFor={value.name}>{value.name}</label>
                <input
                  type={value.type}
                  id={value.name}
                  className={`border-2 rounded  outline-0 p-1 ${
                    value.type === "number" && "w-16"
                  }`}
                  placeholder={`${value.type === "number" && "0"}`}
                />
              </div>
            ))}
          </div>
          <button className="text-white bg-blue-500 px-6 rounded place-self-center py-2.5">
            Check Availability
          </button>
        </form>
        <div className="my-12 flex flex-col gap-4">
          {roomCommonData.map((room, i) => (
            <div className="flex gap-2 items-start">
              <img src={room.icon} alt="" />
              <div>
                <p>{room.title}</p>
                <p className="text-gray-500">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="border-y max-w-3xl border-gray-400 py-8 text-gray-500">
          Guests will be allocated on the ground floor according to
          availability. You get a comfortable Two bedroom apartment has a true
          city feeling. The price quoted is for two guest, at the guest slot
          please mark the number of guests to get the exact price for groups.
          The Guests will be allocated ground floor according to availability.
          You get the comfortable two bedroom apartment that has a true city
          feeling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8">
          <img src={assets.regImage} className="w-14 h-14 rounded-full" />
          <p className="text-2xl font-black">Hosted by {room.hotel.name}</p>
        </div>
        <button className="text-white place-self-start mt-6 bg-blue-500 px-6 rounded py-2.5">
          Contact Now
        </button>
      </div>
    )
  );
};

export default RoomDetails;
