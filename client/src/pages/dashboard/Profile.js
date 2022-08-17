import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  // eslint-disable-next-line
  const [usersDb, setUsersDb] = useState(user?.usersDb);
  // eslint-disable-next-line
  const [volunteersDb, setVolunteersDb] = useState(user?.volunteersDb);
  // eslint-disable-next-line
  const [role, setRole] = useState(user?.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      displayAlert();
      return;
    }
    updateUser({ firstName, lastName, email, usersDb, volunteersDb, role });
  };

  const handleCancel = (e) => {
    navigate('/');
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Profile</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
          <h3>Profile</h3>
          {showAlert && <Alert />}
          <div className='form-center extra-gap'>
            <FormRow
              type='text'
              labelText={'First name'}
              name='firstName'
              value={firstName}
              handleChange={(e) => setFirstName(e.target.value)}
            />
            <FormRow
              type='text'
              labelText={'Last name'}
              name='lastName'
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
            <div className='form-row'>
              <label htmlFor='email' className='form-label r2b-red'>
                email*
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                className='form-input'
              />
            </div>
            <div className='form-row'>
              <label htmlFor='role' className='form-label r2b-red'>
                role**
              </label>
              <input
                type='text'
                placeholder={role}
                name='role'
                className='form-input no-cursor'
              />
            </div>
            <>
              <button
                className='edit-btn button btn-block'
                type='submit'
                disabled={isLoading}
              >
                {isLoading ? 'Please Wait...' : 'save changes'}
              </button>
              <button
                className='delete-btn button'
                type='submit'
                disabled={isLoading}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          </div>
        </form>

        <p className='r2b-red no-edit'>
          *If you edit your email address, make sure to log in with the new one.
        </p>
        <p className='r2b-red no-edit no-top'>
          **Your role can't be edited. Please contact an admin if you think you
          need different permissions.
        </p>
      </Wrapper>
    </>
  );
};

export default Profile;
