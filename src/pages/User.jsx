import React, { useState, useEffect } from 'react';
import '../style/user.css';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users');
      const usersData = await response.json();
      setUsers(usersData);
      setLoading(false); // Set loading to false after successful fetch
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false); // Set loading to false in case of error too
    }
  };

  return (
    <div className='user'>
      <h2>User list</h2>
      <div className="user-item">
        {loading ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map(user => (
            <Link to={`/user/${user.id}`} style={{ textDecoration: "none", color: "white" }} key={user.id}>
              <li className="user-name">{user.name}</li>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default User;

