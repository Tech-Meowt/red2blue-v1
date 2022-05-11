import { FormRow, FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useState } from 'react'
import axios from 'axios';

export default function AddDbUser() {
  const { isLoading, isEditing, showAlert, displayAlert, approvedOptions, usersDatabaseOptions, volunteersDatabaseOptions, activeUserOptions, roleOptions, clearValues, createDbUser } = useAppContext();
  const { newUser, setNewUser } = useState({
    name: '',
    email: '',
    approved: '',
    usersDb: '',
    volunteersDb: '',
    isActive: '',
    role: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('user created');
    if (isEditing) {
      return
    }
    const createUser = () => {
      axios.post('http:localhost:8000/api/v1/auth/addUser')
        .then(res => {
          setNewUser(res.data)
      })
    }
  };

  // const handleAdminInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   handleChange({ name, value });
  // };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit user' : 'add new user'} </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={newUser.name}
          />
          {/* email */}
          <FormRow
            type='email'
            name='email'
            value={newUser.email}
          />
          {/* password */}
          <FormRow
            type='password'
            name='password'
            // value={password}
          />
          {/* approval status */}
          <FormRowSelect
            name='approved'
            // value={approved}
            list={approvedOptions}
          />
          {/* users database access */}
          <FormRowSelect
            name='users database access'
            // value={usersDb}
            list={usersDatabaseOptions}
          />
          {/* volunteers database access */}
          <FormRowSelect
            name='volunteers database access'
            // value={volunteersDb}
            list={volunteersDatabaseOptions}
          />

          {/* active status */}
          <FormRowSelect
            name='active user'
            // value={isActive}
            list={activeUserOptions}
          />
          {/* role */}
          <FormRowSelect
            name='role'
            // value={role}
            list={roleOptions}
          />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
