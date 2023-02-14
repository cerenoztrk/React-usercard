import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import SingleUser from './SingleUser';

const UserList = () => {
    

    const [users,setUsers]= useState([])
    useEffect(() => {

    const getUserInfo = async () => {

            const response = await axios.get('https://randomuser.me/api/?results=10');
                setUsers(response.data.results);

                 
            }
            getUserInfo(); 
    },
        [] 
        );
  
    return (
        <div className="all-user">
            <ul> 
            {
            users.map( (user, idx) => ( 
               <li><SingleUser user ={user} key={idx} /> </li>

            )
            )
        } 
            </ul>
        </div>
    )
}



export default UserList
