import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { FormRow, Alert, FormRowSelect } from '../components';
import DbUser from './DbUser';
import Loading from './Loading';


export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([])
  const { isLoading } = useAppContext();
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/auth/allUsers')
      .then(res => {
        setDbUsers(res.data);
        console.log(res.data)
      }).catch ((error) => {
        console.log(error);
    })
  }, [])

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className='jobs'>
        {dbUsers.map((dbUser) => {
          return <DbUser key={dbUser._id} {...dbUser}/>
        })}
      </div>
    </Wrapper>
  );
}
