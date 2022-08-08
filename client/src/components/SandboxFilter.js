import Wrapper from '../assets/wrappers/SearchResults';
import SearchSelectWrapper from '../assets/wrappers/SearchSelect';
import { useState } from 'react';
import { OneSandbox } from '../components'

const SandboxFilter = ({
  placeholder,
  data,
  getId,
  id,
  deleteHandler,
  updateSandbox,
  updateUser,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  interests,
  label,
  type,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [noResults, setNoResults] = useState(true);

  const handleUsersFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.state.toLowerCase().includes(searchWord.toLowerCase());
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
                --Select an option--
              </option>
              <option value='AL'>AL</option>
              <option value='AK'>AK</option>
              <option value='AZ'>AZ</option>
              <option value='AR'>AR</option>
              <option value='CA'>CA</option>
              <option value='CO'>CO</option>
              <option value='CT'>CT</option>
              <option value='DE'>DE</option>
              <option value='DC'>DC</option>
              <option value='FL'>FL</option>
              <option value='GA'>GA</option>
              <option value='HI'>HI</option>
              <option value='ID'>ID</option>
              <option value='IL'>IL</option>
              <option value='IN'>IN</option>
              <option value='IA'>IA</option>
              <option value='KS'>KS</option>
              <option value='KY'>KY</option>
              <option value='LA'>LA</option>
              <option value='ME'>ME</option>
              <option value='MD'>MD</option>
              <option value='MA'>MA</option>
              <option value='MI'>MI</option>
              <option value='MN'>MN</option>
              <option value='MS'>MS</option>
              <option value='MO'>MO</option>
              <option value='MT'>MT</option>
              <option value='NE'>NE</option>
              <option value='NV'>NV</option>
              <option value='NH'>NH</option>
              <option value='NJ'>NJ</option>
              <option value='NM'>NM</option>
              <option value='NY'>NY</option>
              <option value='NC'>NC</option>
              <option value='ND'>ND</option>
              <option value='OH'>OH</option>
              <option value='OK'>OK</option>
              <option value='OR'>OR</option>
              <option value='PA'>PA</option>
              <option value='RI'>RI</option>
              <option value='SC'>SC</option>
              <option value='SD'>SD</option>
              <option value='TN'>TN</option>
              <option value='TX'>TX</option>
              <option value='UT'>UT</option>
              <option value='VT'>VT</option>
              <option value='VA'>VA</option>
              <option value='WA'>WA</option>
              <option value='WV'>WV</option>
              <option value='WI'>WI</option>
              <option value='WY'>WY</option>
            </select>

            <button className='btn btn-block btn-danger clear-btn' onClick={handleClear}>
              clear results
            </button>
          </div>
        </form>
      </SearchSelectWrapper>

      <Wrapper>
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
          filteredData.slice(0, 15).map((value, key) => {
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
                    id={value.id}
                    deleteHandler={deleteHandler}
                    updateSandbox={updateSandbox}
                  />
                </div>
              </>
            );
          })}
      </Wrapper>

    </>
  );
};

export default SandboxFilter;
