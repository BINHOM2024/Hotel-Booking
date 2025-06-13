import React, { useState } from "react";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [Images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [inputs, setInputs] = useState({
    pricePerNight: 0,
    roomType: "",
    amneties: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <div className="px-2 sm:px-0">
      <h1 className="text-3xl mb-3">Add Room</h1>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Soluta, itaque!
      </p>
      <p className="text-l mt-8 mb-4 text-gray-600">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-self-start gap-2">
        {Object.keys(Images).map((key) => (
          <label
            htmlFor={`image/${key}`}
            key={key}
            className="cursor-pointer sm:w-36"
          >
            <img
              className="w-[80%]"
              src={
                Images[key]
                  ? URL.createObjectURL(Images[key])
                  : assets.uploadArea
              }
            />
            <input
              type="file"
              id={`image/${key}`}
              accept="image/*"
              hidden
              onChange={(e) =>
                setImages({ ...Images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>
      <div className="flex gap-2 mt-6 text-gray-600">
        <div>
          <p>Room Type</p>
          <select
            className="border-2 py-1.5 outline-0 pl-2 pr-3 border-gray-400 cursor-pointer rounded"
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
          >
            <option value="">Select Room Type</option>
            <option value="DoubleRoom">Double Room</option>
            <option value="SingleRoom">Single Room</option>
          </select>
        </div>
        <label htmlFor="price" className="inline-flex flex-col">
          Price/night
          <input
            type="number"
            id="price"
            placeholder="0"
            className="border-2 outline-0 cursor-pointer border-gray-400 w-[50%] pl-1 py-1 rounded"
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <p className="mt-4 pb-1 text-gray-900">Amenities</p>
        {Object.keys(inputs.amneties).map((amenty, i) => (
          <label htmlFor={amenty} key={i} className="flex gap-2 text-gray-500">
            <input
              type="checkbox"
              id={amenty}
              className="cursor-pointer"
              checked={inputs.amneties[amenty]}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  amneties: {
                    ...inputs.amneties,
                    [amenty]: !inputs.amneties[amenty],
                  },
                })
              }
            />
            {amenty}
          </label>
        ))}
      </div>
      <button className="my-4 p-2 text-white rounded bg-blue-600">
        Add Room
      </button>
    </div>
  );
};

export default AddRoom;
