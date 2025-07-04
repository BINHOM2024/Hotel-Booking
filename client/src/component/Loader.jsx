import  { useEffect } from 'react'
import { useContextCreator } from '../context/StoreContext'
import { useParams } from 'react-router-dom'

const Loader = () => {
    const { navigateTo } = useContextCreator()
    const { nextUrl } = useParams()
    
useEffect(() => {
    if (nextUrl) {
     setTimeout(() => {
        navigateTo(`/${nextUrl}`)
     }, 5000);
 }
}, [nextUrl])


  return (
      <div className='flex justify-center items-center h-screen'>
          <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-blue-900'>
              
          </div>
    </div>
  )
}

export default Loader