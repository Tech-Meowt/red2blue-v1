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
  ClearRefinements
} from 'react-instantsearch-dom';
import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { OneSandbox } from '.';

const searchClient = algoliasearch(
  'R09QEE164L',
  '7381ee2bbf457ce7bf24686e1dd38bc2'
);

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName='sandbox'>
      <Header />
      <Content />
    </InstantSearch>
  )
}

const Header = () => (
  <SearchBox translations={{ placeholder: 'Search' }}/>
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
<RefinementList attribute='state'/>
    <Hits hitComponent={Hit} />
    <Pagination />
  </div>
)
