import React from 'react'
import {useNavigate  } from 'react-router-dom'

const ProfilePageComponent = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/')
    }

  return (
    <div>
      <h1>This is the Profile Page</h1>
      <button onClick={handlePageChange} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">gooo hoooommmee</button>

    </div>
  )
}

export default ProfilePageComponent
