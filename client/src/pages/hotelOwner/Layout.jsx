import NavBar from '../../component/hotelOwner/NavBar'
import SideBar from '../../component/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'
import { useContextCreator } from '../../context/StoreContext'
import { useEffect } from 'react'

const Layout = () => {
  // const { navigateTo, isOwner } = useContextCreator();

  // useEffect(() => {
  //   if (!isOwner)
  //     navigateTo("/")
  //     return 
  // }, [isOwner])
  
  return (
    <div >
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