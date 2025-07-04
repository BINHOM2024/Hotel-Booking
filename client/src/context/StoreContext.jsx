import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useAuth,useUser} from "@clerk/clerk-react"
import { toast } from "react-toastify"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
const contextCreator = createContext()
export const AppContextProvider = ({ children }) => {
    
  const navigateTo = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, SetShowHotelReg] = useState(false);
  const [rooms, setRooms] = useState([]); 

    const fetchUser = async () => {
    try {
        const {data} =await axios.get("/api/user", { headers: { Authorization: `Bearer ${await getToken()}` } })
        if (data.success) {
          setIsOwner(data.role === "hotelOwner");
        } else {
          setTimeout(() => {
            fetchUser();
          }, 3000);
        }
    } catch (error) {
      toast.error(error.message)  
    }
  }
  
  const fetchAllRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms")
      if (data.success) {
        setRooms(data.rooms)
      }
    } catch (error) {
     toast.error(error.message) 
    }
  }
    useEffect(() => {
        if (user) {
         fetchUser()
     }
    }, [user])
  
  useEffect(() => {
      fetchAllRooms()
    },[])
    const value = {
    axios,navigateTo,user,getToken,isOwner,setIsOwner,showHotelReg,SetShowHotelReg,toast,rooms,setRooms
}
    return (
        <contextCreator.Provider value={value}>
            {children}
        </contextCreator.Provider>
    )
}
export const useContextCreator=()=>useContext(contextCreator)