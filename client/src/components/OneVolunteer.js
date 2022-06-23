import { Link } from 'react-router-dom';
import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, Alert } from '../components';
import Modal from 'react-modal';
import { FaRegAddressCard } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';

const OneVolunteer = ({
  id,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  events
}) => {
  const initialState = {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    events
  };
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    events
  });

  const getId = (e) => {
    const id = e.target.name;
    console.log(id);
    setClicked(!clicked);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const updateVolunteer = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/volunteer/${id}`, values)
      .then((res) => {
        newValues(res.data.volunteer);
        console.log(res.data.volunteer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/v1/volunteer/${e.target.name}`)
      .then((res) => {
        setValues(res.data.volunteer);
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
          <div className='main-icon capitalize'>{firstName.charAt(0)}</div>
          <div className='info'>
            <h5 className='capitalize'>
              {firstName} {lastName}
            </h5>
            <p className='lowercase'>{email}</p>
            {/* {events.map((event) => {
              return <p>{event.eventName}</p>
            })} */}
          </div>
        </header>
        <div className='content'>
          <div className='content-center'>
            <div>
              <FaRegAddressCard className='icon' />
              Address: {street != '' ? (
                <span className='status'>{' '}{street}</span>
              ) : <span className='status'>{' '}Street not provided</span>}
              <div className='address'>
                <p className='status'>
                  {city != '' ? (
                    `${city},`
                  ) : `City not provided—`}
                  {state != '' ? (
                    ` ${state}`
) : ` State not provided`}
                </p>
                <p className='status'>
                  {zip != '' ? (
                    ` ${zip}`
) : ` Zip code not provided`}
                </p>

              </div>
            </div>

            <div>
              <AiOutlinePhone className='icon' />

              Phone: {phone != '' ? (
                <span className='status'>{' '}{phone}</span>
            ) : <span className='status'>{' '}Phone not provided</span>}
            </div>

          
          </div>
        </div>
      </OneRecordWrapper>
    </>
  );
}

export default OneVolunteer
