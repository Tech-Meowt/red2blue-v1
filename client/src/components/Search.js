import { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Pagination,
  RefinementList,
  ClearRefinements,
} from 'react-instantsearch-dom';
import { OneSandbox } from '../components'

export default function Search() {
  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_SEARCH_API
  );
  const index = process.env.REACT_APP_ALGOLIA_SANDBOX_INDEX;

  return (
    <>
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
          <Hits hitComponent={Hit}/>
          <Pagination totalPages={2} />
        </InstantSearch>
      </div>
    </>
  );
}

const Hit = ({ hit, id, updateSandbox, deleteHandler, firstName, lastName, email, street, city, state, zip, phone, interests}) => (
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
