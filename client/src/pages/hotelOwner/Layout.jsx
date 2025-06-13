import NavBar from '../../component/hotelOwner/NavBar'
import SideBar from '../../component/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col sm:flex-row gap-4">
        <SideBar />
        <div className='pt-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout