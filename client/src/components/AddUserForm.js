import { FormRow, FormRowSelect, Alert } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

export default function AddUserForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    approved: '',
    usersDb: '',
    volunteersDb: '',
    isActive: '',
    role: '',
  })
  const {
    approvedOptions,
    usersDatabaseOptions,
    volunteersDatabaseOptions,
    activeUserOptions,
    roleOptions,
  } = useAppContext();

  const handleChange = (e) => {
    setUserInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/v1/auth/addUser', userInfo)
      .then((res) => {
        setUserInfo({
          name: '',
          email: '',
          password: '',
          approved: '',
          usersDb: '',
          volunteersDb: '',
          isActive: '',
          role: '',
        });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(`Error`);
        console.log(err.message);
      });
}
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>{'Add new user'} </h3>
        {/* {showAlert && <Alert />} */}

        {/* name */}
        <div className='form-center'>
          <FormRow
            placeholder='Enter full name'
            type='text'
            id='name'
            name='name'
            value={userInfo.name}
            handleChange={handleChange}
          />
          {/* email */}
          <FormRow
            placeholder='jane.doe@gmail.com'
            type='email'
            id='email'
            name='email'
            value={userInfo.email}
            handleChange={handleChange}
          />
          {/* password */}
          <FormRow
            placeholder='********'
            type='password'
            id='password'
            name='password'
            value={userInfo.password}
            handleChange={handleChange}
          />
          {/* approval status */}
          <FormRowSelect name='approved' list={approvedOptions} />
          {/* users database access */}
          <FormRowSelect
            name='users database access'
            value={userInfo.usersDb}
            handleChange={handleChange}
            list={usersDatabaseOptions}
          />
          {/* volunteers database access */}
          <FormRowSelect
            name='volunteers database access'
            value={userInfo.volunteersDb}
            handleChange={handleChange}
            list={volunteersDatabaseOptions}
          />

          {/* active status */}
          <FormRowSelect
            name='active user'
            value={userInfo.isActive}
            handleChange={handleChange}
            list={activeUserOptions}
          />
          {/* role */}
          <FormRowSelect
            name='role'
            value={userInfo.role}
            handleChange={handleChange}
            list={roleOptions}
          />

          <div className='btn-container'>
            <button className='btn btn-block submit-btn' type='submit'>
              submit
            </button>
            <button className='btn btn-block clear-btn'>clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
