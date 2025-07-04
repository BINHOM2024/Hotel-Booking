
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const sideBarLinks = [
        {name:"Dashboard",path:"/owner",icon:assets.dashboardIcon},
        {name:"Add Room",path:"/owner/add-room",icon:assets.addIcon},
        {name:"List Room",path:"/owner/list-room",icon:assets.listIcon}
    ]
  return (
    <div className=" shadow pt-6 sm:h-[100vh] w-[200px]">
      {sideBarLinks.map((item, i) => (
        <NavLink
          key={i}
              to={item.path}
              end={"/owner"}
              className={({isActive})=>`flex gap-2 items-center mb-2 pl-5 py-2 ${isActive?"bg-blue-600/20 border-r-4 text-blue-600":"hover:bg-gray-400/40"}`}
        >
          <img src={item.icon} className="min-w-3 min-h-3 w-4 hidden md:block" />
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar