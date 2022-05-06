import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { BiCheckShield } from 'react-icons/bi';
import { FiDatabase } from 'react-icons/fi';
import { VscVmActive } from 'react-icons/vsc';
import { GrUserAdmin } from 'react-icons/gr';


export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  let date = moment(dbUsers.createdAt, dbUsers.updatedAt, dbUsers.lastLoggedIn);
  date = date.format('MMM Do, YYYY');


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
    <Wrapper>
      <div>
        {dbUsers.map((dbUser) => {
          return (
            <div key={dbUser._id}>
              <header>
                <div className='main-icon'>{dbUser.name.charAt(0)}</div>
                <div className='info'>
                  <h5>{dbUser.name}</h5>
                  <p className='lowercase'>{dbUser.email}</p>
                </div>
              </header>
              <div className='content'>
                <div className='content-center'>
                  <div>Approval Status: {dbUser.approved}</div>
                  <div>User Accounts Database: {dbUser.usersDb}</div>
                  <div>Volunteers Database: {dbUser.volunteersDb}</div>
                  <div>Account Status: {dbUser.isActive}</div>
                  <div>Role: {dbUser.role}</div>
                </div>
                <footer>
                  <div className='actions'>
                    <Link
                      to='/add-job'
                      className='btn edit-btn'
                      // onClick={() => setEditJob(_id)}
                    >
                      Edit
                    </Link>
                    <button type='button' className='btn delete-btn'>
                      Delete
                    </button>
                  </div>
                </footer>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
