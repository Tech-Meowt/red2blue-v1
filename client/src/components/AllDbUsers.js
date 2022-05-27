import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import { SearchBar, DbUser, SearchSelect } from '../components';
import PageBtnContainer from './PageBtnContainer';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [values, setValues] = useState('');

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

  return (
    <>
      <h4>Database: User Accounts</h4>
      <SearchBar data={usersList} />
      <SearchSelect
        data={usersList}
        word={'access'}
        query={'User Accounts database access'}
      />

      <Wrapper>
        <div className='jobs'>
          {dbUsers.map((dbUser) => {
            return <DbUser key={dbUser._id} {...dbUser} />;
          })}
        </div>
      </Wrapper>
    </>
  );
}
