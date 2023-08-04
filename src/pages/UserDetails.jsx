import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserCard from '../component/UserCard';




const UserDetails = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


const fetchUsers = async () => {
    try {
      const response = await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`);
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers()
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);
    



  
  return (
    <div className="user-details-container">
    {loading ? (
      <p>Loading...</p>
    ) : users ? (
      <>
        
     <UserCard
       name={users.name}
       avatar={users.avatar}
       about={users.about}
     />
      
        
      </>
    ) : (
      <p>User not found.</p>
    )}
  </div>

    
  )
}

export default UserDetails


  
  


