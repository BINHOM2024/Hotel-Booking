import  { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useContextCreator } from "../context/StoreContext";

const Hero = () => {
  const {  navigateTo } = useContextCreator()
  const [destination, setDestination] = useState("")

  const onSearch = async (e) => {
    e.preventDefault()
    navigateTo(`/rooms?destination=${destination}`)
    
  }
  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-14 lg:px-24 xl:px-32 text-white  bg-[url('src/assets/heroImage.png')] bg-cover bg-center bg-no-repeat h-screen">
      <p className="bg-[#49B9FF]/50  rounded-full px-3 py-1 ">
        The Ultimate Hotel Experience
      </p>
      <p className="font-playfair text-2xl md:text-5xl  md:leading-[56px] font-bold max-w-xl my-3">
        Discover Your Perfect Gateway Destination
      </p>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Unparalleled luxyry and comfort await at the world's most exclusive
        hotels and resorts.Start your journey today.
      </p>
      <form onSubmit={onSearch} className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            value={destination}
            onChange={e=>setDestination(e.target.value)}
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-32 "
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, i) => (
              <option value={city} key={i} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 md:px-6 lg:px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} className="h-8"/>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
