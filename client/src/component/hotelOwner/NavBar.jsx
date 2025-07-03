
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";
import { useContextCreator } from "../../context/StoreContext";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const NavBar = () => {
  const {navigateTo}=useContextCreator()
  return (
    <div className="flex justify-between py-2 px-4 shadow">
      <a href="/">
        <img src={assets.logo} className="invert opacity-70" />
      </a>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Action
            label="My bookings"
            labelIcon={<BookIcon />}
            onClick={() => navigateTo("/my-bookings")}
          />
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
};

export default NavBar;
