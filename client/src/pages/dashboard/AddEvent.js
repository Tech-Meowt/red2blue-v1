import { FormRow } from '../../components';
import SandboxWrapper from '../../assets/wrappers/Sandbox';
import SearchSelectWrapper from '../../assets/wrappers/SearchSelect';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../components';
import { useAppContext } from '../../context/appContext';

export default function AddEvent() {
  const [eventInfo, setEventInfo] = useState({
    eventName: '',
    eventDate: '',
    eventYear: '',
    eventType: '',
  });
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  // eslint-disable-next-line
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const { displayAlert, showAlert, user } = useAppContext();

  useEffect(() => {
    if (!user.eventsDb || user.role === 'viewer') {
      navigate('/unauthorized');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [navigate, user.role, user.eventsDb]);

  const handleChange = (e) => {
    setEventInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = process.env.DEV_URL;
  } else {
    baseURL = process.env.PROD_URL;
  }

  const createRecord = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const { eventName, eventDate, eventYear, eventType } = eventInfo;

    if (!eventName) {
      displayAlert();
      return;
    }

    axios
      .post(baseURL + '/api/v1/event/addEvent', eventInfo)
      .then((res) => {
        setEventInfo({
          eventName: '',
          eventDate: '',
          eventYear: '',
          eventType: '',
        });
        console.log(res.data.message);
        setAlert(true);
        setAlertText('Record created! Redirecting...');
        setAlertType('success');
        setTimeout(() => {
          navigate('/databases/events');
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

    setEventInfo({
      eventName: '',
      eventDate: '',
      eventYear: '',
      eventType: '',
    });
    navigate('/databases/events');
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
                placeholder='Enter event name'
                type='text'
                name='eventName'
                labelText={'Event name'}
                value={eventInfo.eventName}
                handleChange={handleChange}
              />
              <FormRow
                placeholder='MM/DD/YY'
                type='text'
                name='eventDate'
                labelText={'Event date'}
                value={eventInfo.eventDate}
                handleChange={handleChange}
              />
            </div>
            <div className='form-row'>
              <label htmlFor='eventYear' className='form-label'>
                Event year
              </label>
              <select
                name='eventYear'
                id='eventYear'
                value={eventInfo.eventYear}
                onChange={handleChange}
                required
              >
                <option value='' disabled selected hidden>
                  --Select an option--
                </option>
              </select>
            </div>
          </form>
        </div>
      </SandboxWrapper>
    </>
  );
}
