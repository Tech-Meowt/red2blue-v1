import { Link } from 'react-router-dom';
import JobWrapper from '../assets/wrappers/Job';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, Alert, FormRowSelect, FormCheckbox } from '../components';
import { FaRegAddressCard } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineUnorderedList } from 'react-icons/ai';

const OneSandbox = ({ _id, firstName, lastName, email, street, city, state, zip, phone, interests }) => {
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
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
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

  // const updateOneSandbox = (_id) => {
  //   axios
  //     .patch(`http://localhost:8000/api/v1/auth/${_id}`, values)
  //     .then((res) => {
  //       newValues(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const deleteHandler = (e) => {
  //   axios
  //     .delete(`http://localhost:8000/api/v1/auth/${e.target.name}`)
  //     .then((res) => {
  //       setValues(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   window.location.reload();
  // };
  
  return (
    <>
      <JobWrapper>
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
                  <button type='button' className='btn delete-btn' name={_id}>
                    Delete
                  </button>
                </>
              )}

              {clicked && (
                <>
                  <br />
                  <div className='info'>
                    <h3>Edit User</h3>
                    <p className='instructions'>
                      Update <span className='emphasis'>only</span> the fields
                      that you wish to change.
                    </p>
                  </div>
                  <button className='btn delete-btn' name={_id} onClick={getId}>
                    Close
                  </button>
                  <h1></h1>
                  <form action=''></form>
                </>
              )}
            </div>
          </footer>
        </div>
      </JobWrapper>
    </>
  );
}

export default OneSandbox;
