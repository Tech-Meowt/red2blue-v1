import { FormRow, FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSettingsInputAntenna } from 'react-icons/md';

export default function AddDbUser() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    isAdmin: true,
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [reset, setReset] = useState('')
  const {
    user,
    logoutUser,
    showAlert,
    displayAlert,
    setupUser,
    isEditing,
    createDbUser,
    approvedOptions,
    usersDatabaseOptions,
    volunteersDatabaseOptions,
    activeUserOptions,
    roleOptions,
    clearValues,
  } = useAppContext();
 
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const clearState = () => {
    setValues({ values, name: '', email: '', password: '' })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    setupUser({
      currentUser,
      endPoint: 'register',
      alertText: 'User Created! Redirecting...',
    });
    setTimeout(() => {
      clearState()
      navigate('/user-accounts')
      window.location.reload();
    }, 3000)

  }
  

  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <h3>{isEditing ? 'edit user' : 'add new user'} </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            placeholder='Enter full name'
            type='text'
            id='name'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
          {/* email */}
          <FormRow
            placeholder='jane.doe@gmail.com'
            type='email'
            id='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          {/* password */}
          <FormRow
            placeholder='********'
            type='password'
            id='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
          {/* approval status */}
          <FormRowSelect
            name='approved'
            value={values.approved}
            handleChange={handleChange}
            list={approvedOptions}
          />
          {/* users database access */}
          <FormRowSelect
            name='users database access'
            value={values.usersDb}
            handleChange={handleChange}
            list={usersDatabaseOptions}
          />
          {/* volunteers database access */}
          <FormRowSelect
            name='volunteers database access'
            value={values.volunteersDb}
            handleChange={handleChange}
            list={volunteersDatabaseOptions}
          />

          {/* active status */}
          <FormRowSelect
            name='active user'
            value={values.isActive}
            handleChange={handleChange}
            list={activeUserOptions}
          />
          {/* role */}
          <FormRowSelect
            name='role'
            value={values.role}
            handleChange={handleChange}
            list={roleOptions}
          />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
        
            >
              submit
            </button>
            <button className='btn btn-block clear-btn'>clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
