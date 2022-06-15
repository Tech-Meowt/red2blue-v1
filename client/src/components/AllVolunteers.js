import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import {
  SearchBar,
  OneVolunteer,
  StateSearchSelectWithClear,
} from '../components';
import { Link } from 'react-router-dom';

export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [volunteersList, setVolunteersList] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);
  
  useEffect(() => {
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
  }, []);

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
            <SearchBar
              data={volunteersList}
              searchText={'Search by first name, last name, email, or event category'}
            />
          </FilterWrapper>

          <FilterWrapper>
            <div className='form'>
              <StateSearchSelectWithClear
                data={volunteersList}
                label={'Filter by state'}
                clearBtn={'show'}
              />
            </div>
          </FilterWrapper>
        </>
      )}

      <VolunteersWrapper>
        <div className='actions'>
          <Link to={''}>
            <button className='btn edit-btn actions space'>Add New Record</button>
          </Link>
        </div>
      </VolunteersWrapper>

      <Wrapper>
        <h4>All Volunteers</h4>
        <div className='jobs'>
          {volunteersList.map((volunteer) => {
            return <OneVolunteer key={volunteer._id} {...volunteer} />
          })}
        </div>
      </Wrapper>
    </>
    
  );
}
