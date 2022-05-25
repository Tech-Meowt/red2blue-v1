import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import SearchWrapper from '../assets/wrappers/SearchContainer';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import { FormRow, Alert, FormRowSelect, Search } from '../components';
import PageBtnContainer from './PageBtnContainer';
import { OneSandbox } from '../components'
import Select from 'react-select';
import { Link } from 'react-router-dom'

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [search, setSearch] = useState();
  const [sandboxList, setSandboxList] = useState([]);
  const [item, setItem] = useState('');
  const [foundItem, setFoundItem] = useState(false);
  const [values, setValues] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setAllSandbox(res.data);
      })
      .catch((error) => {
      console.log(error)
      })
    
    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setSandboxList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  

  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)
  };

  const updateSandbox = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/sandbox/${id}`, values)
      .then((res) => {
        values(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const searchTerm = search.split(' ');
    const sandbox =
      sandboxList.find(({ firstName }) => firstName == searchTerm) ||
      sandboxList.find(({ lastName }) => lastName == searchTerm) ||
      sandboxList.find(({ email }) => email == searchTerm);
    setFoundItem(true);
    console.log(sandbox);
    console.log(sandbox.firstName);
    setId(sandbox._id);
    console.log(sandbox._id);
    setItem(sandbox);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearch('');
    setFoundItem(false);
  };


  return (
    <>
      <h4>Database: Volunteers (Dummy Data)</h4>
      <SearchWrapper>
        <form className='form' onSubmit={onSubmit}>
          <h4>Search</h4>
          <div className='form-center'>
            <div className='form-row'>
              <label className='form-label lowercase'>
                Search by first name, last name, or email. Search is case
                sensitive.
              </label>
              <input
                className='form-input'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='btn submit-btn'>
            submit
          </button>
          <button type='text' className='btn btn-danger' onClick={handleClear}>
            clear
          </button>
        </form>
      </SearchWrapper>

      <SandboxWrapper>
        <div className='actions'>
          <Link to={'/add-sandbox'}>
            <button className='btn edit-btn actions'>
              Add New Record
            </button>
          </Link>
        </div>
      </SandboxWrapper>

      {foundItem && (
        <Wrapper>
          <div className='jobs'>
            <OneSandbox id={item._id} {...item} />
          </div>
        </Wrapper>
      )}

      {!foundItem && (
        <Wrapper>
          <div className='jobs'>
            {allSandbox.map((record) => {
              return <OneSandbox key={record._id} {...record} />;
            })}
          </div>
        </Wrapper>
      )}
    </>
  );
}
