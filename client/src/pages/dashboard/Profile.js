import { useState } from 'react'
import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading, approvedOptions, usersDatabaseOptions, volunteersDatabaseOptions, activeUserOptions, roleOptions } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [approved, setApproved] = useState(user?.approved)
  const [usersDb, setUsersDb] = useState(user?.usersDb)
  const [volunteersDb, setVolunteersDb] = useState(user?.volunteersDb)
  const [isActive, setIsActive] = useState(user?.isActive);
  const [role, setRole] = useState(user?.role);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email ) {
      displayAlert()
      return
    }
    updateUser({ name, email, approved, usersDb, volunteersDb, isActive, role })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          {role === 'admin' && (
            <FormRowSelect
              name='approved'
              value={approved}
              handleChange={(e) => setApproved(e.target.value)}
              list={approvedOptions}
            />
          )}

          {role != 'admin' && (
            <FormRow type='text' name='approved*' value={approved} readonly />
          )}

          {role === 'admin' && (
            <FormRowSelect
              name='users database access'
              value={usersDb}
              handleChange={(e) => setUsersDb(e.target.value)}
              list={usersDatabaseOptions}
            />
          )}

          {role != 'admin' && (
            <FormRow
              type='text'
              name='volunteers database access*'
              value={usersDb}
              readonly
            />
          )}

          {role === 'admin' && (
            <FormRowSelect
              name='volunteers database access'
              value={volunteersDb}
              handleChange={(e) => setVolunteersDb(e.target.value)}
              list={volunteersDatabaseOptions}
            />
          )}

          {role != 'admin' && (
            <FormRow
              type='text'
              name='volunteers database access*'
              value={volunteersDb}
              readonly
            />
          )}

          {role === 'admin' && (
            <FormRowSelect
              name='active user'
              value={isActive}
              handleChange={(e) => setIsActive(e.target.value)}
              list={activeUserOptions}
            />
          )}

          {role === 'admin' && (
            <FormRowSelect
              name='role'
              value={role}
              handleChange={(e) => setRole(e.target.value)}
              list={roleOptions}
            />
          )}

          {role != 'admin' && (
            <FormRow type='text' name='role*' value={role} readonly />
          )}

          <button
            className='btn btn-block space'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      {role != 'admin' && (
        <p className='r2b-red no-edit'>
          *Fields with an asterisk cannot be edited.
        </p>
      )}
    </Wrapper>
  );
}

export default Profile
