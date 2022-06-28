import { useState } from 'react';
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
import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { OneSandbox } from '../components'

export default function Search() {
  const [clicked, setClicked] = useState(false);

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_SEARCH_API
  );
  const index = process.env.REACT_APP_ALGOLIA_SANDBOX_INDEX;

  const handleToggle = (e) => {
    e.preventDefault();

    setClicked(!clicked)
  }

  return (
    <>
      <div className='search-container'>
        <InstantSearch searchClient={searchClient} indexName={index}>
          <Header />
          <h5 className='r2b-red'>🌎 Filter by state</h5>
          <RefinementList attribute='state' />
          <ClearRefinements />
          <Content />
        </InstantSearch>
      </div>
    </>
  );
}

const Header = () => (
  <div className='search-container-child'>
    <h4 className='title'>🕵️ WHAT ARE YOU LOOKING FOR?</h4>
    <SearchBox
      translations={{ placeholder: 'Enter first name, last name, or email' }}
      showLoadingIndicator
    />
  </div>
);

const Hit = ({ hit, updateSandbox }) => (
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
    updateSandbox={updateSandbox}
  />
);

const Content = () => (
  <div>
    <Stats />
    <Hits hitComponent={Hit} />
    <Pagination totalPages={2} />
  </div>
);
