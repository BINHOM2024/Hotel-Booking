import { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useContextCreator } from "../context/StoreContext";
//import axios from "axios";
import { toast } from "react-toastify";

const HotelReg = () => {
  const registerHotel = [
    { name: "name", type: "text" },
    { name: "contact", type: "number" },
    { name: "address", type: "text" },
  ];

  const { SetShowHotelReg, getToken, setIsOwner,axios } = useContextCreator();
  const [hotelRegister, setHotelRegister] = useState({});

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setHotelRegister({ ...hotelRegister, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "/api/hotels/",
        { hotelRegister },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) {
        toast.success(data.message);
        SetShowHotelReg(false);
        setIsOwner(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="grid fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-100">
      <div className="flex bg-white rounded-2xl overflow-hidden w-[40%] h-auto place-self-center text-[14px]">
        <img src={assets.regImage} className="hidden lg:block w-[50%]" />
        <form
          className="grid pl-6 pr-3 w-[100%] lg:w-[50%] mb-6"
          onSubmit={onSubmitHandler}
        >
          <img
            onClick={() => SetShowHotelReg(false)}
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
                  onChange={onChangeHandler}
                  type={reg.type}
                  name={reg.name}
                  id={reg.name}
                  placeholder="type here"
                  className="border outline-0 text-[13px] p-1.5 w-[100%] border-gray-400 rounded"
                />
              </div>
            ))}
          </div>
          <p className="mb-1">City</p>
          <select
            onChange={onChangeHandler}
            name="city"
            className="mb-4 sm:pl-2 sm:w-[70%] cursor-pointer outline-0"
          >
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
