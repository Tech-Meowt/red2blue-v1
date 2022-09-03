import { FormRow } from '../../components';
import SandboxWrapper from '../../assets/wrappers/Sandbox';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import { ImPointRight } from 'react-icons/im';

export default function AddVolunteer() {
  const [volunteerInfo, setVolunteerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    events: 'none',
  });
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  // eslint-disable-next-line
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const { displayAlert, showAlert, user } = useAppContext();

  useEffect(() => {
    if (!user.usersDb || user.role === 'viewer') {
      navigate('/unauthorized');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [navigate, user.role, user.usersDb]);

  const handleChange = (e) => {
    setVolunteerInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const createRecord = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      phone,
      events,
    } = volunteerInfo;

    if (!firstName || !lastName || !email || !events) {
      displayAlert();
      return;
    }

    axios
      .post(
        'http://localhost:8000/api/v1/volunteer/addVolunteer',
        volunteerInfo
      )
      .then((res) => {
        setVolunteerInfo({
          firstName: '',
          lastName: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          phone: '',
          events: '',
        });
        console.log(res.data.message);
        setAlert(true);
        setAlertText('Record created! Redirecting...');
        setAlertType('success');
        setTimeout(() => {
          navigate('/databases/volunteers');
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

    setVolunteerInfo({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      events: '',
    });
    navigate('/databases/volunteers');
  };

  return (
    <>
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
          <button className='button delete-btn' onClick={handleCancel}>
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
                value={volunteerInfo.firstName}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter last name'
                type='text'
                name='lastName'
                labelText={'Last name'}
                value={volunteerInfo.lastName}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter email'
                type='email'
                name='email'
                labelText={'Email'}
                value={volunteerInfo.email}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter street address'
                type='text'
                name='street'
                labelText={'Street'}
                value={volunteerInfo.street}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='Enter city'
                type='text'
                name='city'
                labelText={'City'}
                value={volunteerInfo.city}
                handleChange={handleChange}
              />
              <StateSelect
                value={volunteerInfo.state}
                handleChange={handleChange}
                required
              />
              <FormRow
                placeholder='Enter zip'
                type='text'
                name='zip'
                labelText={'Zip'}
                value={volunteerInfo.zip}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='555-555-5555'
                type='text'
                name='phone'
                labelText={'Phone'}
                value={volunteerInfo.phone}
                handleChange={handleChange}
              />
              <div className='r2b-red'>
                <FormRow
                  placeholder='Enter event name'
                  type='text'
                  name='events'
                  labelText={'**Events**'}
                  value={volunteerInfo.events}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <h4 className='r2b-red no-margin'>**EVENTS**</h4>
            <ul>
              <li>
                <ImPointRight className='icon r2b-red' />
                <span>
                  {' '}
                  If you <span className='emphasis'>are not</span> adding a new
                  event, you <span className='emphasis'>must enter 'none'</span>{' '}
                  or the record <span className='emphasis'>will not save</span>.
                </span>
              </li>
              <li>
                <ImPointRight className='icon r2b-red' />
                <span>
                  {' '}
                  Enter the event name <span className='emphasis'>
                    exactly
                  </span>{' '}
                  as it appears in the database
                </span>
              </li>
              <li>
                <ImPointRight className='icon r2b-red' />
                <span>
                  {' '}
                  Separate <span className='emphasis'>
                    multiple events
                  </span>{' '}
                  with a comma
                </span>
              </li>
            </ul>
            <button type='submit' className='button edit-btn'>
              Submit
            </button>
          </form>
        </div>
      </SandboxWrapper>
    </>
  );
}
