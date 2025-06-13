import React from "react";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between py-2 px-4 shadow">
      <a href="/">
        <img src={assets.logo} className="invert opacity-70" />
      </a>
      <UserButton />
    </div>
  );
};

export default NavBar;
