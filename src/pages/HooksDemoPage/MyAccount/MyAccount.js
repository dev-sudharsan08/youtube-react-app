import React, { useState } from 'react'

const MyAccount = () => {
  console.log('Program Started');
  // Returns a stateful value, and a function to update it
  const [myName, setMyName] = useState('Lakshmi');
  const [age, setAge] = useState(20);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleChangeName = () => {
    console.log('Change Name Btn Clicked');
    setMyName('Narasimman'); // updating the new Name
  }

  console.log('Program Ended');
  return (
    <div>
      <h3>MyAccount</h3>
      <p>Name: {myName}</p>
      <button type='button' className='btn btn-success' onClick={handleChangeName}>Change Name</button>

      <p>Age: {age}</p>
      <button type='button' className='btn btn-warning' onClick={() => {
        setAge(30);
      }}>Update Age</button>

      <hr />
      <button type='button' className='btn btn-danger' onClick={() => {
        setIsLoggedIn(!isLoggedIn)
      }}>{isLoggedIn ? 'Log out' : 'Login'}</button>
    </div>
  )
}

export default MyAccount;

// <ul>
// {todoList?.map((todo) => {
//   return (
//     <div className='d-flex mt-2' key={todo.id}>
//       <input type='checkbox' value={todo.isCompleted} onChange={handleChange.bind(this, index)} />
//       <li className='list-group-item ms-2'>{todo.title}</li>
//     </div>
//   );
// })}
// </ul>

// const handleChange = (event, index) => {
//   // for (let i = 0; i <= todoList.length; i++) {
//   //   const todoList1 = todoList[i];
//   console.log(event);
//   if (event.target.checked) {
//     todoList[1].isCompleted = true;
//   } else {
//     todoList[1].isCompleted = false;
//   }
//   // };
//   todoDispatch((current) => !current);
// };
