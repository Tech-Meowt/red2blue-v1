import { useState } from 'react';
import { OneVolunteer } from '../components';

const SearchBarAllVols = ({
  placeholder,
  data,
  getId,
  id,
  deleteHandler,
  updateVolunteer,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  events,
  userId,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [range, setRange] = useState('');
  const [noResults, setNoResults] = useState(true);

  const handleFilter = (e) => {
    const checkbox25 = document.querySelector('#range25')
    const checkbox50 = document.querySelector('#range50')
    const checkbox51 = document.querySelector('#range51')
    if (checkbox25.checked === true) {
      setRange(25)
    } else if (checkbox50.checked === true) {
      setRange(50)
    } else if (checkbox51.checked === true) {
      setRange(51)
    } else {
      setRange(0)
    }

    let newFilter;
    let attended = events.length
    if (range <= attended) {
      newFilter = data.filter((value) => {
        return (value.events.length <= range) 
      });
      setFilteredData(newFilter);
      setNoResults(false);
    } else if (range === 51) {
      newFilter = data.filter((value) => {
        return (value.events.length >= range);
      });
      setFilteredData(newFilter);
      setNoResults(false);
    } else {
      setFilteredData([])
    }
   
    // const searchWord = e.target.value;
    // setWordEntered(searchWord);
    // const newFilter = data.filter((value) => {
    //   return (
    //     value.firstName.toLowerCase().includes(searchWord.toLowerCase()),
    //     value.lastName.toLowerCase().includes(searchWord.toLowerCase()),
    //     value.email.toLowerCase().includes(searchWord.toLowerCase())
    //   );
    // });

    // if (searchWord === '') {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(newFilter);
    //   setNoResults(false);
    // }
  };

  // const handleClear = (e) => {
  //   e.preventDefault();

  //   setWordEntered('');
  //   setFilteredData([]);
  //   setNoResults(true);
  // };

  return (
    <>
      <div className='search-container'>
        <div className='search-container-child'>
          <h4 className='title'>📆 SELECT A RANGE</h4>
          <form>
            <div className='search-input-container'>
              <div className='input-container-child'>
                <label htmlFor='1-25'>1-25</label>
                <input
                  className='form-input'
                  type='checkbox'
                  name='range25'
                  id='range25'
                  onChange={handleFilter}
                />
                <label htmlFor='26-50'>26-50</label>
                <input
                  className='form-input'
                  type='checkbox'
                  name='range50'
                  id='range50'
                  onChange={handleFilter}
                />
                <label htmlFor='51+'>51+</label>
                <input
                  className='form-input'
                  type='checkbox'
                  name='range51'
                  id='range51'
                  onChange={handleFilter}
                />
                {/* <button
                  className='btn btn-block btn-danger clear-btn'
                  onClick={handleClear}
                >
                  clear results
                </button> */}
              </div>
            </div>
          </form>
        </div>

        {filteredData.length === 0 && !noResults && (
          <h5>Found {filteredData.length} records</h5>
        )}
        {filteredData.length === 1 && (
          <h5>Found {filteredData.length} record</h5>
        )}
        {filteredData.length > 1 && (
          <h5>Found {filteredData.length} records</h5>
        )}
        {filteredData.length !== 0 &&
          filteredData.slice(0, 50).map((value, key) => {
            return (
              <>
                <div className='space-larger border-state'>
                  <OneVolunteer
                    firstName={value.firstName}
                    lastName={value.lastName}
                    email={value.email}
                    usersDb={value.usersDb}
                    volunteersDb={value.volunteersDb}
                    isActive={value.isActive}
                    approved={value.approved}
                    role={value.role}
                    getId={getId}
                    _id={value._id}
                    deleteHandler={deleteHandler}
                    updateVolunteer={updateVolunteer}
                  />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default SearchBarAllVols;
