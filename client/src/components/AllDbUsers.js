import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import { DbUsersSearchBar, DbUser, DbUsersFilter, BannerWarning } from '../components';
import { SiTeradata } from 'react-icons/si';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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

  const toggleSearch = (e) => {
    e.preventDefault();

    setOpened(!opened);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
      <h3 className='r2b-red'>Database: User Accounts</h3>

      <button className='btn' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      {opened && (
        <>
          <FilterWrapper>
            <DbUsersSearchBar
              data={usersList}
            />
          </FilterWrapper>

          <FilterWrapper>
            <h4>Filters</h4>
            <div className='form'>
              <DbUsersFilter
                data={usersList}
                word={'access'}
                query={'User Accounts database access'}
                value1={'access'}
                value2={'denied'}
                option1={'access'}
                option2={'denied'}
              />

              <DbUsersFilter
                data={usersList}
                word={'access'}
                query={'Volunteers database access'}
                value1={'access'}
                value2={'denied'}
                option1={'access'}
                option2={'denied'}
              />

              <DbUsersFilter
                data={usersList}
                word={'active'}
                query={'Account status'}
                value1={'active'}
                value2={'deactivated'}
                option1={'active'}
                option2={'deactivated'}
              />
              <DbUsersFilter
                data={usersList}
                word={'approved'}
                query={'Approval status'}
                value1={'approved'}
                value2={'waitingOnApproval'}
                option1={'approved'}
                option2={'waiting on approval'}
              />
              <DbUsersFilter
                data={usersList}
                word={'role'}
                query={'Role'}
                value1={'viewer'}
                value2={'editor'}
                value3={'admin'}
                option1={'viewer'}
                option2={'editor'}
                option3={'admin'}
              />
            </div>
          </FilterWrapper>
        </>
      )}

      <Wrapper>
        <h4>All Records</h4>
        <div className='jobs'>
          {dbUsers.map((dbUser) => {
            return <DbUser key={dbUser._id} {...dbUser} />;
          })}
        </div>
      </Wrapper>
    </>
  );
}
