import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets';

const ListRoom = () => {
  const [roomList, setRoomList] = useState(roomsDummyData)
  const bookingDatails = [
    "Name",
    "Facility",
    "Price/night",
    "Actions",
  ];
  return (
    <div className="px-2 sm:px-0 mb-8">
      <h1 className="text-3xl mb-3">Room List</h1>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Soluta, itaque!
      </p>
      <p className="text-l mt-8 mb-4 text-gray-600">All Rooms</p>
      <div className="border-2 border-b-0 rounded border-gray-300 ">
        <div className="grid grid-cols-[1fr_3fr_1fr_1fr] border-b-2 border-gray-300 bg-gray-400/20 p-1 gap-1">
          {bookingDatails.map((title, i) => (
            <p key={i}>{title}</p>
          ))}
        </div>
        {roomList.map((item) => (
          <div
            key={item._id}
            className="grid items-center grid-cols-[1fr_3fr_1fr_1fr] text-gray-400  border-b-2 border-gray-300 p-1 gap-1"
          >
            <p>{item.roomType}</p>
            <p>{item.amenities.join(", ")}</p>
            <p>$ {item.pricePerNight}</p>
            <label htmlFor="">
              <input type="checkbox" id="" className="" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListRoom