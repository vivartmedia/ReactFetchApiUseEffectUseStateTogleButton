import React, { useContext, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { getUserData } from '../DataServices/DataServices';
import UserContext from '../UserContext/UserContext';

const HomePageComponent = () => {
    const [userInfo, setUserInfo] = useState({});
    const [newPerson, setNewPerson] = useState(true);

    let data = useContext(UserContext)

    const navigate = useNavigate();// Reacts-router-dom's method for changinfg url locations

        const handlePageChange = () => {
            navigate('/profile');
        }

            //Everytime the componenet is re-rendered or a state is changed the useEffect hook fires
        useEffect(() => {
            const getData = async () => {
                const fetchedData = await getUserData();
                console.log(fetchedData);
                setUserInfo(fetchedData);
                data.setUser(fetchedData)
            }
            getData();
        },[newPerson])// this useEffect takes 2 parameters: parameter one: anonymous function; and parameter 2 is the Dependency Array []
            // Dependency array determins when the useEffec t fires
 
            const  handleNewPerson = () => {
                setNewPerson (!newPerson);
            }
 
            return (
    <div>
       <h1 class="text-3xl text-center mt-12">Hello this is our homepage</h1>
       {/* if the left side expression is truthy then the right side is returned */}
       <h2 class="text-2xl text-center mt-12">{userInfo.name && userInfo.name.title} {userInfo.name && userInfo.name.first} {userInfo.name && userInfo.name.last} </h2>
       <button onClick={handlePageChange} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">go tto profile page</button>
       <button onClick={handleNewPerson} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Get New Peerson</button>

    
    
    </div>
  )
}

export default HomePageComponent

