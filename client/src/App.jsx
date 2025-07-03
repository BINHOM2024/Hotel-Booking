import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Hotels from "./pages/Hotels";
import NavBar from "./component/NavBar";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";
import HotelReg from "./pages/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./component/hotelOwner/Dashboard";
import AddRoom from "./component/hotelOwner/AddRoom";
import ListRoom from "./component/hotelOwner/ListRoom";
import { ToastContainer } from "react-toastify"
import { useContextCreator } from "./context/StoreContext";
import Loader from "./component/Loader";


const App = () => {
  //const [isHotelReg, setIsHotelReg] = useState(false)
  const isOwnerPath = window.location.pathname.includes("owner");
  const {showHotelReg}=useContextCreator()
  return (
    <div>
      <ToastContainer />
      {!isOwnerPath && <NavBar />}
      {showHotelReg && <HotelReg/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Hotels />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/loader/:nextUrl" element={<Loader />} />
        
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-room" element={<AddRoom />} />
          <Route path="list-room" element={<ListRoom />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
