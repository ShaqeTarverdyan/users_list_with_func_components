import React, { useEffect, useState }  from 'react';
import UsersList from './components/UsersList';
const URL = "https://api.github.com/users";

const App = () =>  {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  },[]);

  const fetchUsers = () => {
    fetch(URL)
      .then(res => res.json())
      .then(res => setUsers(res))
  }

  const deleteCurrentUser = (id) => {
      const updatedUsers = users.filter(user => user.id != id);
      setUsers(updatedUsers)
  }

  const editCurrentUser = (currentUser) => {
      const updatedUsers = users.map(user => 
        user.id === currentUser.id ? {...user,...currentUser} : user
      );
      setUsers(updatedUsers)
  }

  return (
      <UsersList 
        users={users}
        deleteCurrentUser={deleteCurrentUser}
        editCurrentUser={editCurrentUser}
      />
  );
}

export default App;
