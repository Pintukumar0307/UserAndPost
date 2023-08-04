import React from 'react'

const UserCard = ({name,avatar,about}) => {
  return (
    <div className='userdetails'>
        <h1>{name}</h1>
        <img src={avatar} alt="Avatar" />
        <p>{about}</p>

    </div>
  )
}

export default UserCard