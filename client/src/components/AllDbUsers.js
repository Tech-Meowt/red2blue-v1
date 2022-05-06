import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/auth/allUsers')
      .then(res => {
        setDbUsers(res.data);
        console.log(dbUsers)
      }).catch ((error) => {
        console.log(error);
    })
  }, [])
  return (
    <div>
      <h1>All Users</h1>
      {dbUsers.map((dbUser) => {
        return (
          <div key={dbUser._id}>
            <h4 className='r2b-blue'>{dbUser.name}</h4>
            <h5>{dbUser.email}</h5>
          </div>
        )
      })}
    </div>
  )
}
