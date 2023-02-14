import React from 'react'


const SingleUser = ({user}) => {
  return (
    <div className='single-user'>
        <img src={user.picture.large} alt="" />
        <div className="user-info">
            <h2>{user.name.first} {user.name.first}  </h2>
        
        <p className="user-gender">
            {user.gender}
        </p>
        <p className="user-email">
            {user.email}
        </p>
        <p className="user-location">
            {user.location.country} | {user.location.city }
        </p>  
        <p className="user-concat">
            {user.phone}
        </p>

        </div>

            


       
    </div>
  )
}

export default SingleUser
