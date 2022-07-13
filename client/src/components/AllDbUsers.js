import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import { SearchBar, DbUser, SearchSelect } from '../components';
import ReactPaginate from 'react-paginate';
import { SiTeradata } from 'react-icons/si';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [data, setData] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(20);

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
    getData()
  }, [offset]);

  const getData = async () => {
    const res = await axios.get('http://localhost:8000/api/v1/auth/allUsers');
    const data = res.data;
    const slice = data.slice(offset, offset + perPage)
    const userData = slice.map((dbUser) => {
      return <DbUser key={dbUser._id} {...dbUser} />;
    });
    setData(userData);
    setPageCount(Math.ceil(data.length / perPage))
    if (offset === 0) {
      setEnd(end);
      setStart(start);
    } else {
      setStart(offset * 20 - 19);
      setEnd(offset * 20);
    } 
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

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
        {end < dbUsers.length ? (
          <h4>
            Viewing {start} - {end} of {dbUsers.length} records
          </h4>
        ) : (
          <h4>
            Viewing {start} - {dbUsers.length} of {dbUsers.length} records
          </h4>
        )}

        <div className='jobs'>
          {data}
          <ReactPaginate
            previousLabel={'<< prev'}
            nextLabel={'next >>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </Wrapper>
    </>
  );
}
