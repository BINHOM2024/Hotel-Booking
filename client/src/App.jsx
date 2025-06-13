import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
  const [isHotelReg, setIsHotelReg] = useState(false)
  const isOwnerPath = window.location.pathname.includes("owner");
  return (
    <BrowserRouter>
      {!isOwnerPath && <NavBar />}
      {isHotelReg && <HotelReg setIsHotelReg={ setIsHotelReg} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<RoomDetails />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/owner" element={ <Layout/>}>
          <Route index element={ <Dashboard/>} />
          <Route path="add-room" element={ <AddRoom/>} />
          <Route path="list-room" element={ <ListRoom/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
