import { Link } from 'react-router-dom';
import JobWrapper from '../assets/wrappers/Job';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, Alert, FormRowSelect, FormCheckbox } from '../components';
import { useAppContext } from '../context/appContext';
import { FiDatabase } from 'react-icons/fi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { GrUserAdmin } from 'react-icons/gr'
import { RiAdminLine } from 'react-icons/ri'
import { AiOutlineCheck } from 'react-icons/ai'
const DbUser = ({ _id, firstName, lastName, email, usersDb, volunteersDb, approved, isActive, role })=> {
  const initialState = {
    firstName,
    lastName,
    email,
    usersDb,
    volunteersDb,
    isActive,
    approved,
    role,
  };
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [deleted, setDeleted] = useState(false);
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
    approved,
    usersDb,
    volunteersDb,
    isActive,
    role,
  });



  const getId = (e) => {
    const id = e.target.name;
    console.log(id);
    setClicked(!clicked)
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateUser = (_id) => {
    axios
      .patch(`http://localhost:8000/api/v1/auth/${_id}`, values)
      .then((res) => {
        newValues(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/v1/auth/${e.target.name}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

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
        <div className='content'>
          <div className='content-center'>
            <div>
              <FiDatabase className='icon' />
              User Accounts Database: <span className='status'>{usersDb}</span>
            </div>
            <div>
              <FiDatabase className='icon' />
              Volunteers Database:{' '}
              <span className='status'>
                {volunteersDb}
              </span>
            </div>
            <div>
              <MdOutlineManageAccounts className='icon' />
              Account Status: <span className='status'>{isActive}</span>
            </div>
            <div>
              <AiOutlineCheck className='icon' />
              Approval Status: <span className='status'>{approved}</span>
            </div>
            <div>
              <RiAdminLine className='icon' />
              Role: {''}
              <span className='status'>{role}</span>
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
                    onClick={deleteHandler}
                  >
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
                  <form
                    onSubmit={() => {
                      updateUser(_id);
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

                      <div className='form-row'>
                        <label htmlFor='usersDb' className='form-label'>
                          User Accounts Database
                        </label>
                        <select
                          name='usersDb'
                          id='usersDb'
                          className='form-select'
                          value={values.usersDb}
                          onChange={handleChange}
                        >
                          <option value='access'>Access</option>
                          <option value='no access'>No access</option>
                        </select>
                      </div>

                      <div className='form-row'>
                        <label htmlFor='volunteersDb' className='form-label'>
                          Volunteers Database
                        </label>
                        <select
                          name='volunteersDb'
                          id='volunteersDb'
                          className='form-select'
                          value={values.volunteersDb}
                          onChange={handleChange}
                        >
                          <option value='access'>Access</option>
                          <option value='no access'>No access</option>
                        </select>
                      </div>

                      <div className='form-row'>
                        <label htmlFor='approved' className='form-label'>
                          Approval Status
                        </label>
                        <select
                          name='approved'
                          id='approved'
                          className='form-select'
                          value={values.approved}
                          onChange={handleChange}
                        >
                          <option value='approved'>Approved</option>
                          <option value='waiting on approval'>
                            Waiting on approval
                          </option>
                        </select>
                      </div>

                      <div className='form-row'>
                        <label htmlFor='role' className='form-label'>
                          Role
                        </label>
                        <select
                          name='role'
                          id='role'
                          className='form-select'
                          value={values.role}
                          onChange={handleChange}
                        >
                          <option value='viewer'>Viewer</option>
                          <option value='editor'>Editor</option>
                          <option value='admin'>Admin</option>
                        </select>
                      </div>

                      <div className='form-row'>
                        <label htmlFor='isActive' className='form-label'>
                          Active Account
                        </label>
                        <select
                          name='isActive'
                          id='isActive'
                          className='form-select'
                          value={values.isActive}
                          onChange={handleChange}
                        >
                          <option value='active'>Active</option>
                          <option value='deactivated'>Deactivated</option>
                        </select>
                      </div>
                    </div>

                    <button type='submit' className='btn edit-btn'>
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
      </JobWrapper>
    </>
  );
};

export default DbUser;
