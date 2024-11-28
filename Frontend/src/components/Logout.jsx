import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
           setAuthUser({
            ...authUser,
            user:null,
           }) ;
           localStorage.removeItem("Users")
           toast.success('Successfully Login! ');
          
           setTimeout(()=>{
             window.location.reload();
              
              },2000)  
             } catch (error) {
            toast.error("error: "+error)
            setTimeout(()=>{},2000)
            
        }

    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-wwhite rounded-md cursor-pointer'
      onClick={handleLogout}>
        Logout
        </button>
    </div>
  )
}

export default Logout