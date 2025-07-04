import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useContextCreator } from "../../context/StoreContext";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    bookings:[]
  });
  const { axios, user, getToken,toast } =useContextCreator()
  const bookingDatails = [
    "User Name",
    "Room Name",
    "Total Amount",
    "Payment Status",
  ];
  const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/bookings/hotel", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        console.log(data)
        setDashboard(data.dashboardData);
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

useEffect(() => {
  if (user) {
   getDashboardData()
 }
}, [user])

console.log(dashboard)
  return (
    <div className="px-2 sm:px-0">
      <h1 className="text-3xl mb-3">Dashboard</h1>
      <p className="text-gray-500 w-[70%]">
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Soluta, itaque!
      </p>
      <div className="flex flex-col sm:flex-row place-self-start gap-2 mt-8">
        <div className="flex gap-2 bg-gray-100 rounded px-3 py-1">
          <img src={assets.totalBookingIcon} className="w-8 min-w-6" />
          <div>
            <p className="text-blue-600">Total Bookings</p>
            <p className="text-gray-400">{dashboard.totalBookings}</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 rounded px-3 py-1">
          <img src={assets.totalRevenueIcon} className="w-8 min-w-6" />
          <div>
            <p className="text-blue-600">Total Revenue</p>
            <p className="text-gray-400">$ {dashboard.totalRevenue}</p>
          </div>
        </div>
      </div>
      <p className="text-xl mt-8 mb-4 text-gray-600">Recent Bookings</p>
      <div className="border-2 border-b-0 rounded border-gray-300 mb-8 sm:mr-2">
        <div className="grid grid-cols-4 border-b-2 border-gray-300 bg-gray-400/20 p-1">
          {bookingDatails.map((title, i) => (
            <p key={i}>{title}</p>
          ))}
        </div>
        {dashboard.bookings.map((item) => (
          <div
            key={item._id}
            className="grid items-center grid-cols-4 text-gray-400  border-b-2 border-gray-300 p-1"
          >
            <p>{item.user.userName}</p>
            <p>{item.room.roomType}</p>
            <p>$ {item.totalPrice}</p>
            <button
              className={` rounded-2xl place-self-start px-2 py-1 sm:px-4 text-sm my-1 ${
                item.isPaid
                  ? "bg-green-500/40 text-green-700"
                  : " bg-red-200/50"
              }`}
            >
              {item.isPaid ? "Completed" : "Pending"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
