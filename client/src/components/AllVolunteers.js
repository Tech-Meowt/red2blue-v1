import { useEffect } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import { OneVolunteer } from '../components';
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
  RangeInput
} from 'react-instantsearch-dom';

export default function AllVolunteers() {

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_API
  );
  const index = process.env.REACT_APP_ALGOLIA_INDEX;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }, []);

  return (
    <>
      <h3 className='r2b-red'>Database: Volunteers</h3>
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
          <h5>Filters</h5>
          <div className='filters'>
            <div className='filter-children'>
              <h5 className='r2b-red less-filter'>🌎 State</h5>
              <RefinementList attribute='state' />
            </div>
            <div className='filter-children'>
              <h5 className='r2b-red'>📅 Events attended</h5>
              <RangeInput attribute='events' />
            </div>
          </div>
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
}) => {
  return (
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
};
