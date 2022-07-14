import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import { SearchBar, DbUser, SearchSelect, BannerWarning } from '../components';
import { SiTeradata } from 'react-icons/si';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);
  const [showNotificationBanner, setShowNotificationBanner] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setDbUsers(res.data);
        if (!dbUsers.approved) {
          setShowNotificationBanner(true)
          let option = [false];
          let newFilter = dbUsers.filter((value) => option.includes(value.approved));
          setFilteredData(newFilter);
          console.log(newFilter)
        }
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
      {showNotificationBanner && (
        <BannerWarning
          bannerText={`You have new accounts waiting on approval`}
        />
      )}

      {filteredData.slice(0, 15).map((value, key) => {
        return (
          <>
            <div className='border-state space-largest'>
              <DbUser
                firstName={value.firstName}
                lastName={value.lastName}
                email={value.email}
                usersDb={value.usersDb}
                volunteersDb={value.volunteersDb}
                isActive={value.isActive}
                approved={value.approved}
                role={value.role}
              />
            </div>
          </>
        );
      })}
      <h3></h3>
      <h3 className='r2b-red'>Database: User Accounts</h3>

      <button className='btn' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      {opened && (
        <>
          <FilterWrapper>
            <SearchBar
              data={usersList}
              searchText={
                'Search by first name, last name, email, role, account status, or approval status'
              }
            />
          </FilterWrapper>

          <FilterWrapper>
            <div className='form'>
              <SearchSelect
                data={usersList}
                word={'access'}
                query={'User Accounts database access'}
                value1={'access'}
                value2={'denied'}
                option1={'access'}
                option2={'denied'}
              />

              <SearchSelect
                data={usersList}
                word={'access'}
                query={'Volunteers database access'}
                value1={'access'}
                value2={'denied'}
                option1={'access'}
                option2={'denied'}
              />

              <SearchSelect
                data={usersList}
                word={'active'}
                query={'account status'}
                value1={'active'}
                value2={'deactivated'}
                option1={'active'}
                option2={'deactivated'}
              />
              <SearchSelect
                data={usersList}
                word={'approved'}
                query={'approval status'}
                value1={'approved'}
                value2={'waitingOnApproval'}
                option1={'approved'}
                option2={'waiting on approval'}
              />
              <SearchSelect
                data={usersList}
                word={'role'}
                query={'role'}
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
