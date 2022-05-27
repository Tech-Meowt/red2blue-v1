import { FormRow } from '.';
import SearchWrapper from '../assets/wrappers/SearchContainer';
import Wrapper from '../assets/wrappers/SearchResults';
import { useState } from 'react';
import { DbUser } from '../components';

const SearchSelect = ({
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
  word,
  query,

}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleUsersFilter = (e) => {
    const searchWord = e.target.value;

    if (query === 'User Accounts database access') {
      setWordEntered(searchWord);
      if (searchWord === word) {
        let option = [true];
        let newFilter = data.filter((value) => option.includes(value.usersDb));
        setFilteredData(newFilter);
      } else {
        let option = [false];
        let newFilter = data.filter((value) => option.includes(value.usersDb));
        setFilteredData(newFilter);
      }
    } 
    } 


  const handleClear = (e) => {
    e.preventDefault();

    setWordEntered('');
    setFilteredData([]);
  };

  return (
    <>
      <SearchWrapper>
        <form>
          {query === 'User Accounts' && <h4>Filter</h4>}
          <div className='form-row form-center'>
            <label htmlFor='wordEntered'>Filter by {query}</label>
            <select
              name='wordEntered'
              id='wordEntered'
              className='form-select'
              value={wordEntered}
              onChange={handleUsersFilter}
            >
              <option hidden selected>
                --Select an option--
              </option>
                  <>
                    <option value='access'>access</option>
                    <option value='denied'>denied</option>
                  </>
            </select>
            <button className='btn btn-block btn-danger' onClick={handleClear}>
              clear
            </button>
          </div>
        </form>
      </SearchWrapper>

      <Wrapper>
        {filteredData.length == 1 && (
          <h3>Found {filteredData.length} record</h3>
        )}
        {filteredData.length > 1 && (
          <h3>Found {filteredData.length} records</h3>
        )}
        {filteredData.length != 0 &&
          filteredData.slice(0, 15).map((value, key) => {
            return (
              <>
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
              </>
            );
          })}
      </Wrapper>
    </>
  );
};

export default SearchSelect;
