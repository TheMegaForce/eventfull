import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutBTN = () => {
  const navigate = useNavigate()

  const url_token = localStorage.getItem("token")

  const handleLogout = async (e) => {
    try {
       console.log(url_token);
       if (url_token) {
          localStorage.removeItem("token")
          navigate('login');
        } else {
          alert('Cant Logout');
        }
    } catch (error) {
       console.error(error)
    }
 }

  return (
    <button className='text-[#021817] bg-[#E7FDFC]' onClick={handleLogout}>
      Logout {url_token}
    </button>
  )
}

export default LogoutBTN