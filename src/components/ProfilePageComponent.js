import React, { useContext, useEffect } from 'react'
import {useNavigate  } from 'react-router-dom'
import UserContext from '../UserContext/UserContext';

const ProfilePageComponent = () => {
    const navigate = useNavigate();

    const handlePageChange = () => {
        navigate('/');
    }

      let data = useContext(UserContext);

  return (
    <div>
      <h1>This is the Profile Page</h1>
      <button onClick={handlePageChange} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">gooo hoooommmee</button>

     
      <h2>{data.user.name.title} {data.user.name.first} {data.user.name.last} </h2>

    </div>
  )
}

export default ProfilePageComponent
