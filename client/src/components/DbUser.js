import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, Alert, FormRowSelect } from '../components';
import { useAppContext } from '../context/appContext'

const DbUser = ({_id, name, email, approved, usersDb, volunteersDb, isActive, role}) => {
  const initialState = {
    name,
    email,
    approved,
    usersDb,
    volunteersDb,
    isActive,
    role
  }
  const {
    showAlert,
    displayAlert,
    isLoading,
    setEditJob,
    approvedOptions,
    usersDatabaseOptions,
    volunteersDatabaseOptions,
    activeUserOptions,
    roleOptions,
    dbUsers,
  } = useAppContext();
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [deleted, setDeleted] = useState(false);
  const [newValues, setNewValues] = useState({
    name: '',
    email: '',
    approved: '',
    usersDb: '',
    volunteersDb: '',
    isActive: '',
    role: '',
  })
  
    const getId = (e) => {
      const id = e.target.name;
      console.log(id);
      setClicked(!clicked);
    };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateUser = (_id) => {
    axios.patch(`http://localhost:8000/api/v1/auth/${_id}`, values)
      .then(res => {
        newValues(res.data)
        console.log(res.data)
      }).catch((error) => {
      console.log(error)
    })
  }

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:8000/api/v1/auth/${e.target.name}`)
      .then(res => {
        setValues(res.data);
      }).catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   updateUser({
  //     name,
  //     email,
  //     approved,
  //     usersDb,
  //     volunteersDb,
  //     isActive,
  //     role,
  //   });
  // }

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p className='lowercase'>{email}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <div>Approval Status: {approved}</div>
          <div>User Accounts Database: {usersDb}</div>
          <div>Volunteers Database: {volunteersDb}</div>
          <div>Account Status: {isActive}</div>
          <div>Role: {role}</div>
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
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </>
            )}

            {clicked && (
              <>
                <button className='btn delete-btn' name={_id} onClick={getId}>
                  Close
                </button>
                <form onSubmit={() => {
                    updateUser(_id);
                  }}>
                  <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                  />
                  <FormRow type='text' name='email' value={values.email} handleChange={handleChange}/>
                  <FormRowSelect
                    name='approved'
                    value={values.approved}
                    list={approvedOptions}
                    handleChange={handleChange}
                  />
                  <FormRowSelect
                    name='users database access'
                    value={values.usersDb}
                    list={usersDatabaseOptions}
                    handleChange={handleChange}
                  />
                  <FormRowSelect
                    name='volunteers database access'
                    value={values.volunteersDb}
                    list={volunteersDatabaseOptions}
                    handleChange={handleChange}
                  />
                  <FormRowSelect
                    name='active user'
                    value={values.isActive}
                    list={activeUserOptions}
                    handleChange={handleChange}
                  />
                  <FormRowSelect name='role' value={values.role} list={roleOptions} />
                  <button
                    type='submit'
                    className='btn edit-btn'
                  >
                    Submit
                  </button>
                  <button type='button' className='btn delete-btn'>
                    Delete
                  </button>
                </form>
              </>
            )}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

// const DbUser = ({
//   _id,
//   name,
//   email,
//   approved,
//   usersDb,
//   volunteersDb,
//   isActive,
//   role,
// }) => {
//   const {
//     isLoading,
//     showAlert,
//     displayAlert,

//   } = useAppContext();
//   const [clicked, setClicked] = useState(false);

//   const getId = (e) => {
//     const id = e.target.name;
//     console.log(id);
//     setClicked(!clicked);
//   };


// };


export default DbUser
