import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import SandboxWrapper from '../../assets/wrappers/Sandbox';
import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Banner } from '../../components';

export default function AddSandbox() {
  const [sandboxInfo, setSandboxInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    interests: '',
  });
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSandboxInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  const createRecord = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/v1/sandbox/allSandbox', sandboxInfo)
      .then((res) => {
        setSandboxInfo({
          firstName: '',
          lastName: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          phone: '',
          interests: '',
        });
        console.log(res.data.message);
        setShowAlert(true);
        setAlertText('Record created! Redirecting...')
        setAlertType('success')
        setTimeout(() => {
          navigate('/sandbox-home');
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setShowAlert(true);
        setAlertText('There was an error. Please try again...')
        setAlertType('danger')
      });
  };

  return (
    <>
      <Banner />
      <SandboxWrapper>
        <br />
        <div className='info actions'>
          <h3>Add Record</h3>
          {showAlert && (
            <div className={`alert alert-${alertType}`}>{alertText}</div>
          )}
          <p className='instructions'>
            Fill out <span className='emphasis'>all</span> fields.
          </p>
        </div>
        <div className='actions'>
          <button className='btn delete-btn'>Cancel</button>
          <h1></h1>
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
              <FormRow
                placeholder='15 Yemen Rd'
                type='text'
                name='street'
                labelText={'Street'}
                value={sandboxInfo.street}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter city'
                type='text'
                name='city'
                labelText={'City'}
                value={sandboxInfo.city}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='NY'
                type='text'
                name='state'
                labelText={'State'}
                value={sandboxInfo.state}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter zip code'
                type='text'
                name='zip'
                labelText={'Zip Code'}
                value={sandboxInfo.zip}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='555-555-5555'
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
