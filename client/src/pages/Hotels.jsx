import { useState, useEffect } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const [Show, setShow] = useState(false);
  const [size, setSize] = useState(false);
  const navigaiteTo = useNavigate();

  const stars = [
    assets.starIconFilled,
    assets.starIconFilled,
    assets.starIconFilled,
    assets.starIconFilled,
    assets.starIconOutlined,
  ];
  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setSize(true);
    } else {
      setSize(false);
    }
    const handleResize = () => {
      setSize(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-36 m-auto w-[90%] flex flex-col-reverse lg:flex-row justify-between gap-12 ">
      <div>
        <h1 className="text-3xl font-bold mb-10">Hotel Rooms</h1>
        <p className="text-gray-400 lg:w-[60%]">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
        {roomsDummyData.map((room, i) => (
          <div className="gap-9 flex flex-col lg:flex-row my-12 " key={i}>
            <img
              onClick={() => {
                navigaiteTo(`/hotels/${room._id}`);
                scrollTo(0, 0);
              }}
              className="md:w-[500px] cursor-pointer rounded-2xl"
              src={room.images[0]}
              title="view room details"
            />
            <div className="gap-2 flex flex-col">
              <h4 className="text-gray-400 ">{room.hotel.city}</h4>
              <h2
                className="text-2xl cursor-pointer"
                onClick={() => {
                  navigaiteTo(`/hotels/${room._id}`);
                  scrollTo(0, 0);
                }}
              >
                {room.hotel.name}
              </h2>
              <div className="flex lg:grid gap-1 xl:flex ">
                <div className="flex">
                  {stars.map((star, i) => (
                    <img key={i} src={star} className="w-4" />
                  ))}
                </div>
                <p className="ml-2 lg:ml-0 ">200+ reviews</p>
              </div>
              <div className="flex gap-1">
                <img src={assets.locationIcon} alt="" />
                <p className="text-gray-300">{room.hotel.address}</p>
              </div>
              <div className="roomBtn grid  sm:grid-cols-2 lg:grid-cols-1 lg:max-w-[100%] max-w-[50%] sm:max-w-[70%]  gap-4">
                {room.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 bg-blue-50 py-1.5 rounded-[10px] justify-center"
                  >
                    <img src={facilityIcons[item]} alt="" />
                    <p className="text-[14px]">{item}</p>
                  </div>
                ))}
              </div>
              <h5 className="text-2xl mt-3.5">${room.pricePerNight}/Night</h5>
            </div>
          </div>
        ))}
        <hr />
      </div>
      <div className="border lg:w-[25%] mt-24 max-h-[85vh] w-[300px]">
        <div className="flex border-b p-3 justify-between items-center">
          <h2 className="text-[20px]">FILTERS</h2>

          {size ? (
            <button onClick={() => setShow((prev) => !prev)}>
              {Show ? "Hide" : "Show"}
            </button>
          ) : (
            <p className="text-gray-500 text-[15px]">CLEAR</p>
          )}
        </div>
        {(Show || !size) && (
          <div className="">
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
        )}
      </div>
    </div>
  );
}

export default Hotels;
