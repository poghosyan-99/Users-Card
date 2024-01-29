import AddUser from './Components/AddUser/AddUser';
import Users from './Components/Users/Users';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(data => data.json())
      .then(usersData => setUsers(usersData.users));
  }, []);


  const previous = () => {
    setIndex(index - 1);
    if(index === 0){
      setIndex(users.length-1);
    }
  };

  const next = () => {
    setIndex(index + 1);
    if(index === users.length-1){
      setIndex(0)
    }
  };

  const addData = (data) => {
    setUsers([...users, data])
  };


  return (
    <div className="App">
      <div className='Slider-div'>
        <i className="fa-solid fa-circle-arrow-left" onClick={previous}></i>
        <Users 
          users={users} 
          index={index} 
          setUsers={setUsers} 
          setIndex={setIndex}
        />
        <i className="fa-solid fa-circle-arrow-right" onClick={next}></i>
      </div>
      <div className='Add-User'>
        <AddUser addData={addData} users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
