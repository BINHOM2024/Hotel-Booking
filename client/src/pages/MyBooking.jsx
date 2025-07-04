import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useContextCreator } from "../context/StoreContext";

const MyBooking = () => {
  const { axios, toast, user, getToken } = useContextCreator();
  const [bookings, setBookings] = useState([]);

  const fetchUserBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePayment = async (bookingId) => {
    try {
      const { data } = await axios.post(
        "/api/bookings/stripe-payment",
        { bookingId },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      console.log("first")
      if (data.success) {
        console.log(window.location.href)
        window.location.href = data.url;
      } else {
        console.log("second")
        toast.error(data.message);
      }
    } catch (error) {
      console.log("third")
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserBookings();
    }
  }, [user]);

  return (
    <div className="mt-36 mb-20 m-auto w-[80%]">
      <h1 className="text-3xl font-black">My Bookings</h1>
      <p className="text-gray-500 mt-4 sm:max-w-[80%] md:max-w-[60%]">
        Easily manage your past,current,and upcoming hotel reservations in one
        place. Plan your trips seamlessly with just a few clicks
      </p>
      <div className="hidden lg:grid md:grid-cols-[2fr_1fr_1fr] pb-2 border-b-2 mt-8 text-[18px] font-semibold border-gray-300">
        <p>Hotels</p>
        <p>Date $ Timings</p>
        <p>Payment</p>
      </div>
      <div className="grid gap-4 mt-6">
        {bookings.map((booking) => (
          <div
            className="grid gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr] text-sm border-b items-center border-gray-400 pb-2"
            key={booking._id}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={booking.room.images[0]}
                className=" sm:w-[200px] md:w-[150px]"
              />
              <div className="text-gray-900 grid gap-1.5">
                <p className="text-l text-black font-black">
                  {booking.hotel.name}
                  <span className="text-sm ml-2 font-light">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex gap-1 text-[12px]">
                  <img src={assets.locationIcon} />
                  <p>{booking.hotel.address}</p>
                </div>
                <div className="flex gap-1 text-[12px]">
                  <img src={assets.guestsIcon} alt="" />
                  <p>Guests: {booking.guests}</p>
                </div>
                <p className=" text-black">Total: $ {booking.totalPrice}</p>
              </div>
            </div>
            <div>
              <p>
                CheckIn:
                <span className="text-[12px] ml-2 text-gray-900 font-light">
                  {new Date(booking.checkInDate).toDateString()}
                </span>
              </p>
              <p>
                CheckOut:
                <span className="text-gray-900 text-[12px] ml-2 font-light">
                  {new Date(booking.checkOutDate).toDateString()}
                </span>
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2 items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    booking.isPaid ? "bg-green-600" : "bg-red-400"
                  } `}
                ></div>
                <p
                  className={`${
                    booking.isPaid ? "text-green-600" : "text-red-400"
                  }`}
                >{`${booking.isPaid ? "Paid" : "Unpaid"}`}</p>
              </div>
              {!booking.isPaid && (
                <button
                  onClick={() => handlePayment(booking._id)}
                  className="border rounded-full py-1 px-2 text-[12px] place-self-start"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
