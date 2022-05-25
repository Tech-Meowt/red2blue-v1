import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import SearchWrapper from '../assets/wrappers/SearchContainer';
import { FormRow, Alert, FormRowSelect, Search } from '../components';
import DbUser from './DbUser';
import PageBtnContainer from './PageBtnContainer';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  const [search, setSearch] = useState();
  const [usersList, setUsersList] = useState([]);
  const [item, setItem] = useState('');
  const [foundItem, setFoundItem] = useState(false);
  const [values, setValues] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setDbUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const updateUser = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/auth/${id}`, values)
      .then((res) => {
        values(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    const searchTerm = search.split(' ')
    const user = usersList.find(({ firstName }) => firstName == searchTerm) || usersList.find(({ lastName }) => lastName == searchTerm) || usersList.find(({ email }) => email == searchTerm )
    setFoundItem(true)
    console.log(user)
    console.log(user.firstName)
    setId(user._id)
    console.log(user._id)
    setItem(user)
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearch('')
    setFoundItem(false)
  }

  return (
    <>
      <h4>Database: User Accounts</h4>
      <SearchWrapper>
        <form className='form' onSubmit={onSubmit}>
          <h4>Search</h4>
          <div className='form-center'>
            <div className='form-row'>
              <label className='form-label lowercase'>
                Search by first name, last name, or email. Search is case
                sensitive.
              </label>
              <input
                className='form-input'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='btn submit-btn'>
            submit
          </button>
          <button type='text' className='btn btn-danger' onClick={handleClear}>
            clear
          </button>
        </form>
      </SearchWrapper>

      {foundItem && (
        <Wrapper>
          <div className='jobs'>
            <DbUser id={item._id} {...item} />
          </div>
        </Wrapper>
      )}

      {!foundItem && (
        <Wrapper>
          <div className='jobs'>
            {dbUsers.map((dbUser) => {
              return <DbUser key={dbUser._id} {...dbUser} />;
            })}
          </div>
        </Wrapper>
      )}
    </>
  );
}
