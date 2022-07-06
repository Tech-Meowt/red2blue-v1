import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import {
  AllVolunteers,
  OneSandbox,
  SandboxSearchBar,
  StateSearchSelectWithClear,
} from '../components';
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
} from 'react-instantsearch-dom';

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [sandboxList, setSandboxList] = useState([]);
  const [values, setValues] = useState('');
  
  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_SEARCH_API
  );
  const index = process.env.REACT_APP_ALGOLIA_SANDBOX_INDEX;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setAllSandbox(res.data.sandbox);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setSandboxList(res.data.sandbox);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const updateSandbox = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/sandbox/${id}`, values)
      .then((res) => {
        values(res.data.sandbox);
        console.log(res.data.sandbox);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h4>Database: Volunteers (Dummy Data)</h4>
      {/* <FilterWrapper>
        <SandboxSearchBar data={sandboxList} />
      </FilterWrapper>

      <FilterWrapper>
        <div className='form'>
          <StateSearchSelectWithClear
            data={sandboxList}
            label={'Filter by state'}
            clearBtn={'show'}
            type={'sandbox'}
          />
        </div>
      </FilterWrapper> */}

      <SandboxWrapper>
        <div className='actions'>
          <Link to={'/sandbox/add'}>
            <button className='btn edit-btn actions'>Add New Record</button>
          </Link>
        </div>
      </SandboxWrapper>

      <div className='search-container'>
        <InstantSearch searchClient={searchClient} indexName={index}>
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
          <Pagination
            padding={2}
            showLast={true}
          />
        </InstantSearch>
      </div>

      {/* <Wrapper>
        <div className='jobs'>
          {allSandbox.map((record) => {
            return <OneSandbox key={record.id} {...record} />;
          })}
        </div>
      </Wrapper> */}
    </>
  );
}

const Hit = ({
  hit,
  id,
  updateSandbox,
  deleteHandler,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  interests
}) => (
  <OneSandbox
    firstName={hit.firstName}
    lastName={hit.lastName}
    email={hit.email}
    street={hit.street}
    city={hit.city}
    state={hit.state}
    zip={hit.zip}
    phone={hit.phone}
    interests={hit.interests}
    id={hit.id}
    deleteHandler={deleteHandler}
    updateSandbox={updateSandbox}
  />
);
