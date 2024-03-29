import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormRow } from '.';
import { FiDatabase } from 'react-icons/fi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import Modal from 'react-modal';

const DbUser = ({
  _id,
  firstName,
  lastName,
  email,
  usersDb,
  volunteersDb,
  approved,
  isActive,
  role,
  sandboxDb,
  skillsDb,
}) => {
  const initialState = {
    firstName,
    lastName,
    email,
    usersDb,
    volunteersDb,
    isActive,
    approved,
    role,
    sandboxDb,
    skillsDb,
  };
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [values, setValues] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // eslint-disable-next-line
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
    approved,
    usersDb,
    volunteersDb,
    isActive,
    role,
    skillsDb,
    sandboxDb,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

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

  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000';
  } else {
    baseURL = 'https://r2bdb.herokuapp.com';
  }

  const updateUser = (_id) => {
    axios
      .patch(baseURL + `/api/v1/auth/${_id}`, values)
      .then((res) => {
        setNewValues(res.data);
        console.log(res.data);
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
      .delete(baseURL + `/api/v1/auth/${e.target.name}`)
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
          <div className='info' id={_id}>
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
              Sandbox database:{' '}
              <span className='status'>
                {sandboxDb ? 'access' : 'no access'}
              </span>
            </div>
            <div>
              <FiDatabase className='icon' />
              User Accounts database:{' '}
              <span className='status'>{usersDb ? 'access' : 'no access'}</span>
            </div>
            <div>
              <FiDatabase className='icon' />
              Volunteers database:{' '}
              <span className='status'>
                {volunteersDb ? 'access' : 'no access'}
              </span>
            </div>
            <div>
              <FiDatabase className='icon' />
              Skills database:{' '}
              <span className='status'>
                {skillsDb ? 'access' : 'no access'}
              </span>
            </div>
            <div>
              <MdOutlineManageAccounts className='icon' />
              Account status:{' '}
              <span className='status'>
                {isActive ? 'active' : 'deactivated'}
              </span>
            </div>
            <div>
              <AiOutlineCheck className='icon' />
              Approval status:{' '}
              <span className='status'>
                {approved ? 'approved' : 'waiting on approval'}
              </span>
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
                  <button
                    className='button edit-btn'
                    name={_id}
                    onClick={getId}
                  >
                    Edit
                  </button>
                  <button
                    type='button'
                    className='button delete-btn'
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
                      🚨 Heads up! Are you sure you want to permanently delete this record?
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
                    <h3>Edit User</h3>
                    {showAlert && (
                      <div className={`alert alert-${alertType}`}>
                        {alertText}
                      </div>
                    )}
                    <p className='instructions'>
                      Update <span className='emphasis'>only</span> the fields
                      that you wish to change.
                    </p>
                  </div>

                  <button
                    className='button delete-btn'
                    name={_id}
                    onClick={getId}
                  >
                    Close
                  </button>
                  <h4>{''}</h4>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
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
                          User Accounts database
                        </label>
                        <select
                          name='usersDb'
                          id='usersDb'
                          className='form-select'
                          value={values.usersDb}
                          onChange={handleChange}
                        >
                          <option value='true'>Access</option>
                          <option value='false'>No access</option>
                        </select>
                      </div>

                      <div className='form-row'>
                        <label htmlFor='volunteersDb' className='form-label'>
                          Volunteers database
                        </label>
                        <select
                          name='volunteersDb'
                          id='volunteersDb'
                          className='form-select'
                          value={values.volunteersDb}
                          onChange={handleChange}
                        >
                          <option value='true'>Access</option>
                          <option value='false'>No access</option>
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
                          <option value='true'>Approved</option>
                          <option value='false'>Waiting on approval</option>
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

                    <button type='submit' className='button edit-btn'>
                      Submit
                    </button>
                    <button
                      type='button'
                      className='button delete-btn'
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
                        🚨 Heads up! Are you sure you want to permanently delete this record?
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

export default DbUser;
