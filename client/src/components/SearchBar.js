import { FormRow } from '.'
import SearchWrapper from '../assets/wrappers/SearchContainer';
import Wrapper from '../assets/wrappers/SearchResults';
import SearchSelectWrapper from '../assets/wrappers/SearchSelect';
import { useState } from 'react';
import { DbUser } from '../components'

const SearchBar = ({
  placeholder,
  data,
  getId,
  _id,
  deleteHandler,
  updateUser,
  firstName,
  lastName,
  email,
  usersDb,
  volunteersDb,
  approved,
  isActive,
  role,
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
      setNoResults(false)
    }
  };

  const handleClear = (e) => {
    e.preventDefault();

    setWordEntered('')
    setFilteredData([])
    setNoResults(true)
  }

  return (
    <>
      <SearchSelectWrapper>
        <h5 className='r2b-blue'>Search + Filter</h5>
        <form className='form'>
          <div className='form-row form-center '>
            <label htmlFor='wordEntered'>
              Search by first name, last name, or email
            </label>
            <input
              className='form-input'
              type='text'
              placeholder='Enter first name, last name, or email'
              value={wordEntered}
              onChange={handleFilter}
            />
            <button className='btn btn-block btn-danger' onClick={handleClear}>
              clear
            </button>
          </div>
        </form>

        {filteredData.length == 0 && !noResults && (
          <h5>Found {filteredData.length} records</h5>
        )}
        {filteredData.length == 1 && (
          <h5>Found {filteredData.length} record</h5>
        )}
        {filteredData.length > 1 && (
          <h5>Found {filteredData.length} records</h5>
        )}
        {filteredData.length != 0 &&
          filteredData.slice(0, 15).map((value, key) => {
            return (
              <>
                <div className='space-larger border-state'>
                  <DbUser
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
                    updateUser={updateUser}
                  />
                </div>
              </>
            );
          })}
      </SearchSelectWrapper>
    </>
  );
};


export default SearchBar
