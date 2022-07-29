import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, StateSelect } from '../components';
import Modal from 'react-modal';
import { useTable } from 'react-table'

const RecordTable = ({
  id,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  userId,
  events,
  columns,
  data,
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
    userId,
  };
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [clicked, setClicked] = useState(false)
  const [values, setValues] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // eslint-disable-next-line
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    userId,
    events,
  });

   const getId = (e) => {
     const id = e.target.name;
     console.log(id);
     setClicked(true);
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
        setNewValues(res.data.volunteer);
      });
    setShowAlert(true);
    setAlertText('Update successful!');
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

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/v1/volunteer/${e.target.name}`)
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
      <table className='styled-table'>
        <thead>
          <tr>
            <th>
              First name
            </th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className='active-row'>
            {values.map((value) => {
              return (
                <>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                </>
              );
            })}
           
          </tr>
        </tbody>

      </table>
    </>
 )
  
}

export default RecordTable
