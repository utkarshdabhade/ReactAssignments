import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  
  const addUser = () => {
    const newUser = {
      id: users.length + 1, // Incrementing id for uniqueness
      name: 'Ashwin', // You can replace with any desired name
      email: 'Ashwin@gmail.com', // You can replace with any desired email
    };
    setUsers([...users, newUser]);
  };
  
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default UserList;
