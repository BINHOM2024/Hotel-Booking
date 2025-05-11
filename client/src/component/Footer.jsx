import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="bg-gray-300 text-gray-500">
      <div className="w-[80%] m-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  gap-8 py-6">
          <div>
            <img src={assets.logo} />
            <p className=" my-4">
              Discover the world's most extraordinary places to stay, from
              boutique hotels to luxury villas and private islands.
            </p>
            <div className="flex gap-8">
              <img src={assets.instagramIcon} />
              <img src={assets.facebookIcon} />
              <img src={assets.twitterIcon} />
              <img src={assets.linkendinIcon} />
            </div>
          </div>
          <div>
            <h2 className="text-black font-bold pb-2">COMPANY</h2>
            <div className="flex flex-col">
              <a href="">About</a>
              <a href="">Careers</a>
              <a href="">Press</a>
              <a href="">Blog</a>
              <a href="">Partners</a>
            </div>
          </div>
          <div>
            <h2 className="text-black font-bold pb-2">SUPPORT</h2>
            <div className="flex flex-col">
              <a href="">Help Center</a>
              <a href="">Safety Information</a>
              <a href="">Cancellation Options</a>
              <a href="">Contact Us</a>
              <a href="">Accessibility</a>
            </div>
          </div>
          <div>
            <h2 className="text-black font-bold pb-2">STAY UPDATED</h2>
            <div>
              <p>
                Subscribe to our newsletter for travel inspiration and special
                offers.
              </p>
              <div className="flex pt-2">
                <input
                  type="email"
                  placeholder="your email"
                  className="py-1 pl-2 bg-gray-400 outline-0 rounded-l-[5px]"
                />
                <img
                  src={assets.arrowIcon}
                  className="bg-black w-8 rounded-r-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-6">
          <p>© 2025 QuickStay. All rights reserved.</p>
          <div className="flex gap-4 ">
            <p>Privacy</p>
            <p>Terms</p>
            <p>SiteMap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
