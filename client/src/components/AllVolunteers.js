import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import {
  SearchBarAllVols,
  OneVolunteer,
} from '../components';
import { Link } from 'react-router-dom';

export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [volunteersList, setVolunteersList] = useState([]);
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
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setAllVolunteers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setVolunteersList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    getData();

  }, [offset]);

  const getData = async () => {
    const res = await axios.get('http://localhost:8000/api/v1/volunteer');
    const data = res.data;
    const slice = data.slice(offset, offset + perPage)
    const volData = slice.map((volunteer) => {
      return <OneVolunteer key={volunteer._id} {...volunteer} />;
    });
    setData(volData);
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
    setOffset(selectedPage + 1)
  }

  const toggleSearch = (e) => {
    e.preventDefault();

    setOpened(!opened);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const updateVolunteer = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/volunteer/${id}`, values)
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
      <h3 className='r2b-red'>Database: Volunteers | All</h3>

      <button className='btn' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      {opened && (
        <>
          <FilterWrapper>
            <SearchBarAllVols
              data={volunteersList}
              searchText={
                'Search by first name, last name, email, or event category'
              }
            />
          </FilterWrapper>

          {/* <FilterWrapper>
            <div className='form'>
              <StateSearchSelectWithClear
                data={volunteersList}
                label={'Filter by state'}
                clearBtn={'show'}
                type={'volunteers'}
              />
            </div>
          </FilterWrapper> */}
        </>
      )}

      <VolunteersWrapper>
        <div className='actions'>
          <Link to={''}>
            <button className='btn edit-btn actions space'>
              Add New Record
            </button>
          </Link>
        </div>
      </VolunteersWrapper>

      <Wrapper>
        {end < allVolunteers.length ? (
          <h4>
            Viewing {start} - {end} of {allVolunteers.length} records
          </h4>
        ) : (
          <h4>
            Viewing {start} - {allVolunteers.length} of {allVolunteers.length}{' '}
            records
          </h4>
        )}

        {/* <div className='jobs'>
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
        </div> */}
      </Wrapper>
    </>
  );
}
