import { Link } from 'react-router-dom';
import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow } from '../components';
import { FaRegAddressCard } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineUnorderedList } from 'react-icons/ai';
import Modal from 'react-modal';

const OneSandbox = ({
  _id,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  interests,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const initialState = {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    interests,
  };
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    interests,
  });

  const getId = (e) => {
    const id = e.target.name;
    console.log(id);
    setClicked(!clicked);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateSandbox = (_id) => {
    axios
      .patch(`http://localhost:8000/api/v1/sandbox/${_id}`, values)
      .then((res) => {
        newValues(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/v1/sandbox/${e.target.name}`)
      .then((res) => {
        setValues(res.data);
      });
    setShowAlert(true);
    setAlertText('Delete successful!');
    setAlertType('success');
    closeModal(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000).catch((error) => {
      console.log(error);
      setShowAlert(true);
      setAlertText('There was an error. Please try again...');
      setAlertType('danger');
    });
  };

  return (
    <>
      <OneRecordWrapper>
        {showAlert && (
          <div className={`alert alert-${alertType}`}>{alertText}</div>
        )}
        <header>
          <div className='main-icon'>{firstName.charAt(0)}</div>
          <div className='info'>
            <h5>
              {firstName} {lastName}
            </h5>
            <p className='lowercase'>{email}</p>
          </div>
        </header>
        <div className='content-special'>
          <div className='content-center content-centered'>
            <div>
              <FaRegAddressCard className='icon' />
              Address: <span className='status'>{street}</span>
              <div className='address'>
                <p className='status'>
                  {city}, {state}
                </p>
                <p className='status'>{zip}</p>
              </div>
            </div>
            <div>
              <AiOutlinePhone className='icon' />
              Phone: <span className='status'>{phone}</span>
            </div>
            <div>
              <AiOutlineUnorderedList className='icon' />
              Interests: <span className='status'>{interests}</span>
            </div>
          </div>
          <footer>
            <div className='actions'>
              {!clicked && (
                <>
                  <button className='btn edit-btn' name={_id} onClick={getId}>
                    Edit
                  </button>
                  <button
                    type='button'
                    className='btn delete-btn'
                    name={_id}
                    onClick={openModal}
                  >
                    Delete
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(140, 141, 143, .75)',
                      },
                      content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '5px',
                        outline: 'none',
                        padding: '20px',
                        width: '500px',
                        height: '250px',
                      },
                    }}
                  >
                    <h3 className='modal-header'>
                      🚨 Heads up! Are you sure you want to{' '}
                      <span className='r2b-red'>permanently </span>
                      delete this record?
                    </h3>
                    <div className='confirm-btns'>
                      <button
                        onClick={closeModal}
                        className='btn-success height'
                      >
                        Cancel
                      </button>
                      <button
                        onClick={deleteHandler}
                        className='btn-danger height'
                        name={_id}
                      >
                        Delete
                      </button>
                    </div>
                  </Modal>
                </>
              )}

              {clicked && (
                <>
                  <br />
                  <div className='info'>
                    <h3>Edit Record</h3>
                    <p className='instructions'>
                      Update <span className='emphasis'>only</span> the fields
                      that you wish to change.
                    </p>
                  </div>

                  <button className='btn delete-btn' name={_id} onClick={getId}>
                    Close
                  </button>
                  <h1></h1>
                  <form
                    onSubmit={() => {
                      updateSandbox(_id);
                    }}
                  >
                    <div className='content-centered content-center'>
                      <FormRow
                        placeholder='Enter first name'
                        type='text'
                        name='firstName'
                        labelText={'First name'}
                        value={values.firstName}
                        handleChange={handleChange}
                      />
                      <FormRow
                        placeholder='Enter last name'
                        type='text'
                        name='lastName'
                        labelText={'Last name'}
                        value={values.lastName}
                        handleChange={handleChange}
                      />
                      <FormRow
                        placeholder='Enter email'
                        type='email'
                        name='email'
                        labelText={'Email'}
                        value={values.email}
                        handleChange={handleChange}
                      />
                      <FormRow
                        placeholder='15 Yemen Rd'
                        type='text'
                        name='street'
                        labelText={'Street'}
                        value={values.street}
                        handleChange={handleChange}
                      />
                      <FormRow
                        placeholder='Enter city'
                        type='text'
                        name='city'
                        labelText={'City'}
                        value={values.city}
                        handleChange={handleChange}
                      />
                      <div className='form-row'>
                        <label htmlFor='state' className='form-label'>
                          State
                        </label>
                        <select
                          name='state'
                          id='state'
                          className='form-select'
                          value={values.state}
                          onChange={handleChange}
                        >
                          <option value='AL'>AL</option>
                          <option value='AK'>AK</option>
                          <option value='AZ'>AZ</option>
                          <option value='AR'>AR</option>
                          <option value='CA'>CA</option>
                          <option value='CO'>CO</option>
                          <option value='CT'>CT</option>
                          <option value='DC'>DC</option>
                          <option value='DE'>DE</option>
                          <option value='FL'>FL</option>
                          <option value='GA'>GA</option>
                          <option value='HI'>HI</option>
                          <option value='ID'>ID</option>
                          <option value='IL'>IL</option>
                          <option value='IN'>IN</option>
                          <option value='IA'>IA</option>
                          <option value='KS'>KS</option>
                          <option value='KY'>KY</option>
                          <option value='LA'>LA</option>
                          <option value='ME'>ME</option>
                          <option value='MD'>MD</option>
                          <option value='MA'>MA</option>
                          <option value='MI'>MI</option>
                          <option value='MN'>MN</option>
                          <option value='MS'>MS</option>
                          <option value='MO'>MO</option>
                          <option value='MT'>MT</option>
                          <option value='NE'>NE</option>
                          <option value='NV'>NV</option>
                          <option value='NH'>NH</option>
                          <option value='NJ'>NJ</option>
                          <option value='NM'>NM</option>
                          <option value='NY'>NY</option>
                          <option value='NC'>NC</option>
                          <option value='ND'>ND</option>
                          <option value='OH'>OH</option>
                          <option value='OK'>OK</option>
                          <option value='OR'>OR</option>
                          <option value='PA'>PA</option>
                          <option value='RI'>RI</option>
                          <option value='SC'>SC</option>
                          <option value='SD'>SD</option>
                          <option value='TN'>TN</option>
                          <option value='TX'>TX</option>
                          <option value='UT'>UT</option>
                          <option value='VT'>VT</option>
                          <option value='VA'>VA</option>
                          <option value='WA'>WA</option>
                          <option value='WV'>WV</option>
                          <option value='WI'>WI</option>
                        </select>
                      </div>
                      <FormRow
                        placeholder='Enter zip code'
                        type='text'
                        name='zip'
                        labelText={'Zip Code'}
                        value={values.zip}
                        handleChange={handleChange}
                      />
                      <FormRow
                        placeholder='555-555-5555'
                        type='text'
                        name='phone'
                        labelText={'Phone'}
                        value={values.phone}
                        handleChange={handleChange}
                      />
                      <FormRow
                        placeholder='Enter interests, separated by commas'
                        type='text'
                        name='interests'
                        labelText={'Interests'}
                        value={values.interests}
                        handleChange={handleChange}
                      />
                    </div>
                    <button type='submit' className='btn edit-btn'>
                      Submit
                    </button>
                  </form>
                </>
              )}
            </div>
          </footer>
        </div>
      </OneRecordWrapper>
    </>
  );
};

export default OneSandbox;
