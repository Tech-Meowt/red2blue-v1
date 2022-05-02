import { useState } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import Helmet from 'react-helmet';
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [firstName, setFirstName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !email || !lastName) {
      displayAlert();
      return;
    }
    updateUser({ firstName, lastName, email });
  };

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
          <h3>profile</h3>
          {showAlert && <Alert />}
          <div className='form-center'>
            <FormRow
              type='text'
              name='first name'
              value={firstName}
              handleChange={(e) => setFirstName(e.target.value)}
            />
            <FormRow
              type='text'
              labelText='last name'
              name='lastName'
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
            <FormRow
              type='email'
              name='email'
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='btn btn-block'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Profile;
