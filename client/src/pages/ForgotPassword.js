import { useState } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');

const forgotPasswordHandler = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post('http://localhost:8000/api/v1/auth/forgotPassword', { email });
    setShowAlert(true);
    setAlertText(`Password reset email sent to ${email}`)
    setAlertType('success');
    setEmail('')
    setTimeout(() => {
      navigate('/')
    }, 3000);
  } catch (error) {
    console.log(error.response.data.error);
    setEmail('');
    setShowAlert(true);
    setAlertText('There was an error. Please try again...')
    setAlertType('danger')
  }
}

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Forgot Password</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper classNAme='full-page'>
        <form className='form' onSubmit={forgotPasswordHandler}>
          <Logo />
          {showAlert && (
            <div className={`alert alert-${alertType}`}>{alertText}</div>
          )}
          <h5>Enter the email address associated with your account</h5>
          <FormRow
            placeholder='jane.doe@gmail.com'
            type='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
      </Wrapper>
    </>
  );
}
