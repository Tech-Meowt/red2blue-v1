import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, Alert, FormRowSelect } from '../components';
import { useAppContext } from '../context/appContext'

const DbUser = ({_id, name, email, approved, usersDb, volunteersDb, isActive, role}) => {
  const {
    showAlert,
    displayAlert,
    isLoading,
    isEditing,
    approvedOptions,
    usersDatabaseOptions,
    volunteersDatabaseOptions,
    activeUserOptions,
    roleOptions,
    handleChange,
    dbUsers,
  } = useAppContext();
  const [clicked, setClicked] = useState(false);

    const getId = (e) => {
      const id = e.target.name;
      console.log(id);
      setClicked(!clicked);
    };

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p className='lowercase'>{email}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <div>Approval Status: {approved}</div>
          <div>User Accounts Database: {usersDb}</div>
          <div>Volunteers Database: {volunteersDb}</div>
          <div>Account Status: {isActive}</div>
          <div>Role: {role}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link to='/add-user'>
              <button className='btn edit-btn' name={_id} onClick={getId}>
                Edit
              </button>
            </Link>

            {/* {clicked && (
              <>
                <FormRow
                  type='text'
                  name='name'
                  value={name}
                />
                <FormRow
                  type='text'
                  name='email'
                  value={email}
  
                />
                <FormRowSelect
                  name='approved'
                  value={approved}
                  list={approvedOptions}
  
                />
                <FormRowSelect
                  name='users database access'
                  value={usersDb}
                  list={usersDatabaseOptions}
  
                />
                <FormRowSelect
                  name='volunteers database access'
                  value={volunteersDb}
                  list={volunteersDatabaseOptions}
  
                />
                <FormRowSelect
                  name='active user'
                  value={isActive}
                  list={activeUserOptions}
  
                />
                <FormRowSelect
                  name='role'
                  value={role}
                  list={roleOptions}
  
                />
              </>
            )} */}
            <button type='button' className='btn delete-btn'>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

// const DbUser = ({
//   _id,
//   name,
//   email,
//   approved,
//   usersDb,
//   volunteersDb,
//   isActive,
//   role,
// }) => {
//   const {
//     isLoading,
//     showAlert,
//     displayAlert,

//   } = useAppContext();
//   const [clicked, setClicked] = useState(false);

//   const getId = (e) => {
//     const id = e.target.name;
//     console.log(id);
//     setClicked(!clicked);
//   };


// };


export default DbUser
