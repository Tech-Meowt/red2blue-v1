import { FormRow } from '../../components';
import SandboxWrapper from '../../assets/wrappers/Sandbox';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BannerWarning, StateSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';

export default function AddSandbox() {
  const [sandboxInfo, setSandboxInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    state: '',
    phone: '',
    interests: '',
  });
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  // eslint-disable-next-line
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const { displayAlert, showAlert } = useAppContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setSandboxInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const createRecord = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const { firstName, lastName, email, state, phone, interests } = sandboxInfo;

    if (!firstName || !lastName || !email) {
      displayAlert();
      return;
    }

    axios
      .post('http://localhost:8000/api/v1/sandbox/create', sandboxInfo)
      .then((res) => {
        setSandboxInfo({
          firstName: '',
          lastName: '',
          email: '',
          state: '',
          phone: '',
          interests: '',
        });
        console.log(res.data.message);
        setAlert(true);
        setAlertText('Record created! Redirecting...');
        setAlertType('success');
        setTimeout(() => {
          navigate('/sandbox/home');
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setAlert(true);
        setAlertText('There was an error. Please try again...');
        setAlertType('danger');
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setSandboxInfo({
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      phone: '',
      interests: '',
    });
    navigate('/sandbox/home');
  };

  return (
    <>
      <BannerWarning bannerText={'You are in a sandbox environment'} />
      <SandboxWrapper>
        <br />
        <div className='info actions'>
          <h3>Add Record</h3>
          {showAlert && <Alert />}
          {displayAlert && (
            <div className={`alert alert-${alertType}`}>{alertText}</div>
          )}
          <p className='instructions'>
            Fill out <span className='emphasis'>all</span> fields.
          </p>
        </div>
        <div className='actions'>
          <button className='btn delete-btn' onClick={handleCancel}>
            Cancel
          </button>
          <h1> </h1>
          <form onSubmit={createRecord}>
            <div className='content-centered content-center'>
              <FormRow
                placeholder='Enter first name'
                type='text'
                name='firstName'
                labelText={'First name'}
                value={sandboxInfo.firstName}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter last name'
                type='text'
                name='lastName'
                labelText={'Last name'}
                value={sandboxInfo.lastName}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter email'
                type='email'
                name='email'
                labelText={'Email'}
                value={sandboxInfo.email}
                handleChange={handleChange}
              />
              <StateSelect
                value={sandboxInfo.state}
                handleChange={handleChange}
                required
              />
              <FormRow
                placeholder='(555) 555-5555'
                type='text'
                name='phone'
                labelText={'Phone'}
                value={sandboxInfo.phone}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter interests, separated by commas'
                type='text'
                name='interests'
                labelText={'Interests'}
                value={sandboxInfo.interests}
                handleChange={handleChange}
              />
            </div>
            <button type='submit' className='btn edit-btn'>
              Submit
            </button>
          </form>
        </div>
      </SandboxWrapper>
    </>
  );
}
