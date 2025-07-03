import { useState, useEffect, useMemo } from "react";
import { assets, facilityIcons } from "../assets/assets";
import { useContextCreator } from "../context/StoreContext";
import { useSearchParams } from "react-router-dom";

function Hotels() {
  const [Show, setShow] = useState(false);
  const [searchParams,setSearchParams]=useSearchParams()
  const [size, setSize] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    roomType: [],
    priceRange: []
  });
  const [selectedSort, setSelectedSort] = useState("")
  const {navigateTo,rooms,setRooms}=useContextCreator()

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRange = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const priceCategory = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];
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

  const handleFilterChange = (checked, room, type) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const currentArray = prevFilters[type] || [];
      if (checked) {
        updatedFilters[type] = [...currentArray, room]; 
      } else {
        updatedFilters[type] = currentArray.filter((item) => item !== room);
      }
      return updatedFilters;
    });
  };
  const handleSortChange = (sortOptions) => {
    setSelectedSort(sortOptions);
  };

  const matchesRoomType = (room) => {
    return selectedFilters.roomType.length===0||selectedFilters.roomType.includes(room.roomType)
  }

  const matchesPriceRange = (room) => {
    return (
      selectedFilters.priceRange.length === 0 ||
      selectedFilters.priceRange.some(range => {
        const [min, max] = range.split(" to ").map(Number)
        return room.pricePerNight >= min && room.pricePerNight <= max;
      }))
  };

  const sortRooms = (a, b) => {
    if (!selectedSort) return
    if (selectedSort === "Price Low to High") {
      return a.pricePerNight - b.pricePerNight;
    }
    if (selectedSort === "Price High to Low") {
      return b.pricePerNight - a.pricePerNight;
    }
    if (selectedSort === "Newest First") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  };
  

  const filterDestination = (room) => {
    const destination = searchParams.get("destination")
    if (!destination) return true
    return room.hotel.city.toLowerCase().includes(destination.toLocaleLowerCase())
  }

  const filteredRooms = useMemo(() => {
    return rooms.filter(
      (room) =>
        matchesRoomType(room) &&
        matchesPriceRange(room) &&
        filterDestination(room)).sort(sortRooms)
  }, [rooms, selectedFilters, searchParams, selectedSort]);
  
  const clearFilter = () => {
    setSelectedFilters({
      roomType: [],
      priceRange: []
    });
    setSelectedSort("")
    setSearchParams({})
}
  return (
    <div className="mt-36 m-auto w-[90%] flex flex-col-reverse lg:flex-row justify-between gap-12 ">
      <div>
        <h1 className="text-3xl font-bold mb-10">Hotel Rooms</h1>
        <p className="text-gray-400 lg:w-[60%]">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
        {filteredRooms.map((room, i) => (
          <div
            className={`gap-9 flex flex-col lg:flex-row my-12 border-b border-gray-300 pb-8 ${
              i === filteredRooms.length - 1 ? "border-b-0" : ""
            }`}
            key={room._id}
          >
            <img
              onClick={() => {
                navigateTo(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="max-h-65 sm:w-1/2 cursor-pointer rounded-xl object-cover"
              src={room.images[0]}
              title="view room details"
            />
            <div className="gap-2 flex flex-col">
              <h4 className="text-gray-400 ">{room.hotel.city}</h4>
              <h2
                className="text-2xl cursor-pointer"
                onClick={() => {
                  navigateTo(`/rooms/${room._id}`);
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
            <p className="text-gray-500 text-[15px] cursor-pointer" onClick={clearFilter}>
              CLEAR
            </p>
          )}
        </div>
        {(Show || !size) && (
          <div>
            <div className="p-4">
              <h2 className="text-[21px] font-light mb-3">Popular filters</h2>
              <div className="flex flex-col gap-1 text-gray-500">
                {roomTypes.map((room, i) => (
                  <label htmlFor={room} key={i}>
                    <input
                      type="checkbox"
                      id={room}
                      className="mr-2 cursor-pointer"
                      checked={selectedFilters.roomType.includes(room)}
                      onChange={(e)=>handleFilterChange(e.target.checked,room,"roomType")}
                    />
                    {room}
                  </label>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-[21px] font-light mb-3">Price Range</h2>
              <div className="flex flex-col gap-1 text-gray-500">
                {priceRange.map((range, i) => (
                  <label htmlFor={range} key={i}>
                    <input
                      type="checkbox"
                      id={range}
                      className="mr-2 cursor-pointer"
                      checked={selectedFilters.priceRange.includes(range)}
                      onChange={(e)=>handleFilterChange(e.target.checked,range,"priceRange")}
                    />
                    {range}
                  </label>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-[21px] font-light mb-3">Sort By</h2>
              <div className="flex flex-col gap-1 text-gray-500">
                {priceCategory.map((category, i) => (
                  <label htmlFor={category} key={i}>
                    <input
                      type="radio"
                      id={category}
                      name="radio"
                      className="mr-2 cursor-pointer"
                      checked={selectedSort===category}
                      onChange={e=>handleSortChange(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hotels;
