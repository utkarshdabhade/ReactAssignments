import React, { useState } from 'react';
import UserList from './components/Userlist'; 
import Product from './components/Product'; 
import FilteredUsers from './components/FilteredUsers'; 

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <UserList userList={userList} setUserList={setUserList} />
      <Product />
      <FilteredUsers userList={userList} />
    </div>
  );
}

export default App;
