import { useState } from 'react'
import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)
  const [email, setEmail] = useState(user?.email)
  const [usersDb, setUsersDb] = useState(user?.usersDb)
  const [volunteersDb, setVolunteersDb] = useState(user?.volunteersDb)
 const [role, setRole] = useState(user?.role)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !email ) {
      displayAlert()
      return
    }
    updateUser({ firstName, lastName, email, usersDb, volunteersDb, role})
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
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
          <FormRow
            type='email'
            labelText={'email*'}
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='btn btn-block space'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      
        <p className='r2b-red no-edit'>
          *If you edit your email address, make sure to log in with the new one.
        </p>
     
    </Wrapper>
  );
}

export default Profile
