import { useState } from 'react';
import { OneSandbox } from '.';

const SandboxSearchBar = ({
  placeholder,
  data,
  getId,
  id,
  deleteHandler,
  updateSandbox,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  interests,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [noResults, setNoResults] = useState(true);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.firstName.toLowerCase().includes(searchWord.toLowerCase()),
        value.lastName.toLowerCase().includes(searchWord.toLowerCase()),
        value.email.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setNoResults(false);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();

    setWordEntered('');
    setFilteredData([]);
    setNoResults(true);
  };

  return (
    <>
      <div className='search-container'>
        <div className='search-container-child'>
          <h4 className='title'>🕵️ WHAT ARE YOU LOOKING FOR?</h4>
          <form>
            <div className='search-input-container'>
              <div className='input-container-child'>
                <input
                  className='form-input'
                  type='text'
                  placeholder='Enter first name, last name, or email'
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <button
                  className='button btn-block btn-danger'
                  onClick={handleClear}
                >
                  clear results
                </button>
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
          filteredData.slice(0, 99).map((value, key) => {
            return (
              <>
                <div className='space-larger border-state'>
                  <OneSandbox
                    firstName={value.firstName}
                    lastName={value.lastName}
                    email={value.email}
                    street={value.street}
                    city={value.city}
                    state={value.state}
                    zip={value.zip}
                    phone={value.phone}
                    interests={value.interests}
                    getId={getId}
                    _id={value._id}
                    deleteHandler={deleteHandler}
                    updateSandbox={updateSandbox}
                  />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default SandboxSearchBar;
