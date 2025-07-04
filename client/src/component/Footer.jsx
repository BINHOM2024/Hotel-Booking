
import { assets } from "../assets/assets";
const Footer = () => {
  const companyInfo = ["About", "Careers", "Press", "Blog", "Partners"]
  const support = ["Help Center", "Safety Information", "Cancellation Options", "Contact Us", "Accessibility"]
  const icons = [
    { name: assets.instagramIcon }, { name: assets.facebookIcon }, { name: assets.twitterIcon }, { name: assets.linkendinIcon }
  ]
  return (
    <div className="bg-gray-300 text-gray-500">
      <div className="w-[90%] m-auto">
        <div className="grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_1fr]  gap-8 py-6">
          <div>
            <img src={assets.logo} className="invert" />
            <p className=" my-4">
              Discover the world's most extraordinary places to stay, from
              boutique hotels to luxury villas and private islands.
            </p>
            <div className="flex gap-8">
              {icons.map((icon, i) => (
                <img src={icon.name} alt="" key={i} className="cursor-pointer"/>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-black font-bold pb-2">COMPANY</h2>
            <div className="flex flex-col">
              {companyInfo.map((info, i) => (
                <a href="" key={i}>
                  {info}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-black font-bold pb-2">SUPPORT</h2>
            <div className="flex flex-col">
              {support.map((sup, i) => (
                <a href="" key={i}>{ sup}</a>
              ))}
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
                  className="py-1 pl-2 bg-gray-400 outline-0 rounded-l-[5px] w-[90%]"
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
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-0 sm:justify-between py-6">
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
