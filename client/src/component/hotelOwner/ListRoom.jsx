import { useEffect, useState } from 'react'
import { useContextCreator } from '../../context/StoreContext';

const ListRoom = () => {
  const [roomList, setRoomList] = useState([])
  const { axios, user, getToken,toast } = useContextCreator();
  const bookingDatails = [
    "Name",
    "Facility",
    "Price/night",
    "Actions",
  ];
  const getOwnerRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms/owner", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setRoomList(data.rooms);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const toggleRoomAvailability = async (roomId) => {
    try {
      const  {data}  =await axios.post("/api/rooms/toggle-availability", { roomId }, { headers: { Authorization: `Bearer ${await getToken()}` } });
      if (data.success) {
        toast.success(data.message);
        getOwnerRooms()
      } 
    } catch (error) {
      toast.error(error.message)
    }
   
}
  useEffect(() => {
    if (user) {
     getOwnerRooms()
   }
  }, [user])
  
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
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
              <input
                type="checkbox"
                onChange={() => toggleRoomAvailability(item._id)}
                checked={item.isAvailable}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-100"></div>
              <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-100 ease-in-out peer-checked:translate-x-5"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListRoom