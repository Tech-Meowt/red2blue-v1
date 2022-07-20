import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import { SearchBarAllVols, OneVolunteer } from '../components';
import { Link } from 'react-router-dom';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
  RefinementList,
  ClearRefinements,
  Configure,
} from 'react-instantsearch-dom';

export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [volunteersList, setVolunteersList] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);
  const [dbUser, setDbUser] = useState(false);
  const [eventsAttended, setEventsAttended] = useState(0);
  const eName = ''

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_API
  );
  const index = process.env.REACT_APP_ALGOLIA_INDEX;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setAllVolunteers(res.data.volunteer);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setVolunteersList(res.data.volunteer);
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
        values(res.data.volunteer);
        console.log(res.data.volunteer);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
      <h3 className='r2b-red'>Database: Volunteers</h3>

      <button className='btn' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      {opened && (
        <>
          {/* <FilterWrapper>
            <SearchBarAllVols
              data={allVolunteers}
            />
          </FilterWrapper> */}

          <FilterWrapper>
            {/* <div className='form'>
              <StateSearchSelectWithClear
                data={volunteersList}
                label={'Filter by state'}
                clearBtn={'show'}
                type={'volunteers'}
              />
            </div> */}
          </FilterWrapper>
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

      <div className='search-container'>
        <InstantSearch searchClient={searchClient} indexName={index}>
          <Configure hitsPerPage={25} />
          <div className='search-container-child'>
            <h4 className='title'>🕵️ WHAT ARE YOU LOOKING FOR?</h4>
            <SearchBox
              translations={{
                placeholder: 'Enter first name, last name, or email',
              }}
              showLoadingIndicator
            />
          </div>
          <h5 className='r2b-red'>🌎 Filter by state</h5>
          <RefinementList attribute='state' />
          <ClearRefinements />
          <Stats />
          <Hits hitComponent={Hit} />
          <Pagination padding={2} showLast={true} />
        </InstantSearch>
      </div>

      {/* <Wrapper>
        <h4>All Records</h4>
        <div className='jobs'>
          {allVolunteers.map((volunteer) => {
            return <OneVolunteer key={volunteer.id} {...volunteer} />;
          })}
        </div>
      </Wrapper> */}
    </>
  );
}

const Hit = ({
  hit,
  getId,
  id,
  deleteHandler,
  updateVolunteer,
  objectID,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  userId,
  events
}) => (
  <OneVolunteer
    firstName={hit.firstName}
    lastName={hit.lastName}
    email={hit.email}
    street={hit.street}
    city={hit.city}
    state={hit.state}
    zip={hit.zip}
    phone={hit.phone}
    userId={hit.userId}
    events={hit.events}
    getId={getId}
    id={hit.id}
    deleteHandler={deleteHandler}
    updateVolunteer={updateVolunteer}
    objectID={hit.objectID}
  />
);
