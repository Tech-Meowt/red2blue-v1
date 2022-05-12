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
    user,
    adminUpdateUser,
  } = useAppContext();
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [deleted, setDeleted] = useState(false);

    // useEffect(() => {
    //   axios
    //     .get('http://localhost:8000/api/v1/auth/allUsers')
    //     .then((res) => {
    //       setValues(res.data);
    //       console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, [deleted]);
  
    const getId = (e) => {
      const id = e.target.name;
      console.log(id);
      setClicked(!clicked);
    };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateUser = (_id) => {
    axios.patch(`http://localhost:8000/api/v1/auth/${_id}`)
      .then(res => {
        // setUpdatedUser(res.data);
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
                <button type='button' className='btn delete-btn' name={_id} onClick={deleteHandler}>
                  Delete
                </button>
              </>
            )}

            {clicked && (
              <>
                <button className='btn delete-btn' name={_id} onClick={getId}>
                  Close
                </button>
                <form>
                  <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                  />
                  <FormRow type='text' name='email' value={email} />
                  <FormRowSelect
                    name='approved'
                    value={approved}
                    list={approvedOptions}
                  />
                  <FormRowSelect
                    name='users database access'
                    value={usersDb}
                    list={usersDatabaseOptions}
                  />
                  <FormRowSelect
                    name='volunteers database access'
                    value={volunteersDb}
                    list={volunteersDatabaseOptions}
                  />
                  <FormRowSelect
                    name='active user'
                    value={isActive}
                    list={activeUserOptions}
                  />
                  <FormRowSelect name='role' value={role} list={roleOptions} />
                  <button
                    type='button'
                    className='btn edit-btn'
                    onClick={() => {
                      updateUser(_id);
                    }}
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
