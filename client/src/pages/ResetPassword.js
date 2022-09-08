import { useState } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  const { resetToken } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');

  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = process.env.DEV_URL;
  } else {
    baseURL = process.env.PROD_URL;
  }

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setShowAlert(true);
      setAlertText(`Passwords do not match`);
      setAlertType('danger');
    }

    try {
      const { data } = await axios.patch(
        baseURL + `/api/v1/auth/passwordReset/${resetToken}`,
        { password }
      );
      setShowAlert(true);
      setAlertText(`Password updated successfully! Redirecting...`);
      setAlertType('success');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.log(error.response.data.data);
      setPassword('');
      setConfirmPassword('');
      setShowAlert(true);
      setAlertText('There was an error. Please try again...');
      setAlertType('danger');
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Reset Password</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper classNAme='full-page'>
        <form className='form' onSubmit={resetPasswordHandler}>
          <Logo />
          {showAlert && (
            <div className={`alert alert-${alertType}`}>{alertText}</div>
          )}
          <h5>Reset your password</h5>
          <FormRow
            placeholder='********'
            type='password'
            labelText={'New Password'}
            required
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormRow
            placeholder='********'
            type='password'
            labelText={'Confirm password'}
            required
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type='submit' className='button btn-block'>
            Submit
          </button>
        </form>
      </Wrapper>
    </>
  );
}
