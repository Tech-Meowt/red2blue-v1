import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
  RefinementList,
  ClearRefinements,
  Configure
} from 'react-instantsearch-dom';
import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { OneSandbox } from '../components'

export default function Search() {
  const searchClient = algoliasearch(
    'R09QEE164L',
    '7381ee2bbf457ce7bf24686e1dd38bc2'
  );

  return (
    <>
      <h5 className='r2b-blue space'>Search</h5>
      <InstantSearch searchClient={searchClient} indexName='sandbox'>
        <Configure hitsPerPage={10} />
        <Header />
        <h5 className='r2b-blue'>Filter by state</h5>
        <RefinementList attribute='state' />
        <RefinementList attribute='lastName' />
        <ClearRefinements />
        <Content />
      </InstantSearch>
    </>
  );
}

const Header = () => (
  <SearchBox translations={{ placeholder: 'Enter first name, last name, or email' }}/>
)

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
    <Pagination />
  </div>
);
