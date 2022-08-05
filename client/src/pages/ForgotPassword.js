import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [dbUsers, setDbUsers] = useState([])
  const [searchEmail, setSearchEmail] = useState('')
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  // eslint-disable-next-line
  const [alert, setAlert] = useState(false);


   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
     
    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setDbUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
   }, []);
  
  const sendPasswordResetEmail = () => {
    console.log('sent')
  }

  const handleChange = (e) => {
    setSearchEmail(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const emails = dbUsers.map((dbUser) => {
      return dbUser.email
    })
    const foundEmail = emails.filter((value) => {
     console.log(value)
      
    })
   
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Forgot Password</title>
        </Helmet>
      </HelmetProvider>
      <form className='form' onSubmit={onSubmit}>
        <FormRow
          placeholder='jane.doe@gmail.com'
          type='email'
          name='searchEmail'
          labelText={'Email'}
          value={searchEmail}
          handleChange={handleChange}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  );
}
