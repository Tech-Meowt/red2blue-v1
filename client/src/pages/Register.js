import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isMember: true,
  lastLoggedIn: Date.now(),
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [lastLoggedIn, setLastLoggedIn] = useState('')
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, isMember, lastLoggedIn } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { firstName, lastName, email, password, lastLoggedIn };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login successful! Redirecting...',
      })
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User created! Redirecting...',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* first name input */}
        {!values.isMember && (
          <FormRow
            placeholder='Enter first name'
            type='text'
            name='firstName'
            labelText={'First name'}
            value={values.firstName}
            handleChange={handleChange}
          />
        )}

        {!values.isMember && (
          <FormRow
            placeholder='Enter last name'
            type='text'
            name='lastName'
            labelText={'Last name'}
            value={values.lastName}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          placeholder='jane.doe@gmail.com'
          type='email'
          name='email'
          labelText={'Email'}
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          placeholder='********'
          type='password'
          labelText={'Password'}
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='button btn-block' disabled={isLoading}>
          Submit
        </button>
        <p className=''>
          {values.isMember ? "Don't have an account yet?" : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
        <Link to={'/forgot-password'}>
          <p className='no-margin r2b-red'>Forgot your password?</p>
        </Link>
      </form>
    </Wrapper>
  );
};
export default Register;
