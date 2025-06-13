import { assets, cities } from "../assets/assets";

const HotelReg = ({ setIsHotelReg }) => {
  const registerHotel = [
    { name: "Hotel Name", type: "text" },
    { name: "Phone", type: "number" },
    { name: "Address", type: "text" },
  ];
  return (
    <div className="grid fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-100">
      <div className="flex bg-white rounded-2xl overflow-hidden w-[40%] h-auto place-self-center text-[14px]">
        <img src={assets.regImage} className="hidden lg:block w-[50%]" />
        <form className="grid pl-6 pr-3 w-[100%] lg:w-[50%] mb-6">
          <img
            onClick={()=>setIsHotelReg(prev=>!prev)}
            src={assets.closeIcon}
            className="place-self-start sm:place-self-end cursor-pointer pt-2"
          />
          <h2 className="text-center pt-4  sm:text-[20px] font-black">
            Register Your Hotel
          </h2>
          <div className="grid gap-3 my-4">
            {registerHotel.map((reg, i) => (
              <div key={i} className="grid">
                <label htmlFor={reg.name}>{reg.name}</label>
                <input
                  type={reg.type}
                  id={reg.name}
                  placeholder="type here"
                  className="border outline-0 text-[13px] p-1.5 w-[100%] border-gray-400 rounded"
                />
              </div>
            ))}
          </div>
          <p className="mb-1">City</p>
          <select className="mb-4 sm:pl-2 sm:w-[70%] cursor-pointer outline-0">
            <option>Select City</option>
            {cities.map((city, i) => (
              <option value={city} key={i}>
                {city}
              </option>
            ))}
          </select>
          <button className="bg-blue-900 lg:place-self-start p-2   lg:w-[40%] text-white rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelReg;
