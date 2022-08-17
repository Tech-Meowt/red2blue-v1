import Wrapper from '../assets/wrappers/SearchResults';
import SearchSelectWrapper from '../assets/wrappers/SearchSelect';
import { useState } from 'react';
import { DbUser } from '.';

const DbUsersFilter = ({
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
  value1,
  value2,
  option1,
  option2,
  value3,
  option3,
  option4,
  value4,
  option5,
  value5,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [noResults, setNoResults] = useState(true);

  const handleUsersFilter = (e) => {
    if (query === 'User Accounts database access') {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      if (searchWord === word) {
        let option = [true];
        let newFilter = data.filter((value) => option.includes(value.usersDb));
        setFilteredData(newFilter);
        setNoResults(false);
      } else {
        let option = [false];
        let newFilter = data.filter((value) => option.includes(value.usersDb));
        setFilteredData(newFilter);
        setNoResults(false);
      }
    } else if (query === 'Volunteers database access') {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      if (searchWord === word) {
        let option = [true];
        let newFilter = data.filter((value) =>
          option.includes(value.volunteersDb)
        );
        setFilteredData(newFilter);
        setNoResults(false);
      } else {
        let option = [false];
        let newFilter = data.filter((value) =>
          option.includes(value.volunteersDb)
        );
        setFilteredData(newFilter);
        setNoResults(false);
      }
    } else if (query === 'account status') {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      if (searchWord === word) {
        let option = [true];
        let newFilter = data.filter((value) => option.includes(value.isActive));
        setFilteredData(newFilter);
        setNoResults(false);
      } else {
        let option = [false];
        let newFilter = data.filter((value) => option.includes(value.isActive));
        setFilteredData(newFilter);
        setNoResults(false);
      }
    } else if (query === 'approval status') {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      if (searchWord === word) {
        let option = [true];
        let newFilter = data.filter((value) => option.includes(value.approved));
        setFilteredData(newFilter);
        setNoResults(false);
      } else {
        let option = [false];
        let newFilter = data.filter((value) => option.includes(value.approved));
        setFilteredData(newFilter);
        setNoResults(false);
      }
    } else if (query === 'role') {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      // eslint-disable-next-line
      let option = searchWord;
      const newFilter = data.filter((value) => {
        return value.role.toLowerCase().includes(searchWord.toLowerCase());
      });
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
      <SearchSelectWrapper>
        <form>
          <div className='form-center'>
              <select
                name='wordEntered'
                id='wordEntered'
                className='form-select'
                value={wordEntered}
                onChange={handleUsersFilter}
                required
              >
                <option value='' disabled selected hidden>
                  --{query}--
                </option>
                <option value={value1}>{option1}</option>
                <option value={value2}>{option2}</option>
                {query === 'role' && <option value={value3}>{option3}</option>}
              </select>
              <button
                className='button btn-block btn-danger clear-btn'
                onClick={handleClear}
              >
                clear results
              </button>

          </div>
        </form>
      </SearchSelectWrapper>

      <Wrapper>
        {filteredData.length === 0 && !noResults && (
          <h5>
            Found {filteredData.length} records: {query}
          </h5>
        )}
        {filteredData.length === 1 && (
          <h5>
            Found {filteredData.length} record: {query}
          </h5>
        )}
        {filteredData.length > 1 && (
          <h5>
            Found {filteredData.length} records: {query}
          </h5>
        )}
        {filteredData.length !== 0 &&
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
      </Wrapper>
    </>
  );
};

export default DbUsersFilter;
