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
  const [newRecord, setNewRecord] = useState('');
  const [clicked, setClicked] = useState(false);
  const [allSandbox, setAllSandbox] = useState([]);
  const [search, setSearch] = useState();
  const [sandboxList, setSandboxList] = useState([]);
  const [item, setItem] = useState('');
  const [foundItem, setFoundItem] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    interests: '',
  });
  const [id, setId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setAllSandbox(res.data);
        console.log(res.data);
      })
      .catch((error) => {
      console.log(error)
      })
    
    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setSandboxList(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
  }

  // const updateUser = (id) => {
  //   axios
  //     .patch(`http://localhost:8000/api/v1/auth/${id}`, values)
  //     .then((res) => {
  //       values(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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

      {/* {clicked && (
        <>
          <SandboxWrapper>
            <br />
            <div className='info actions'>
              <h3>Add Record</h3>
              <p className='instructions'>
                Fill out <span className='emphasis'>all</span> fields.
              </p>
            </div>
            <div className='actions'>
              <button className='btn delete-btn' onClick={handleClick}>
                Cancel
              </button>
              <h1></h1>
              <form onSubmit={createRecord}>
                <div className='content-centered content-center'>
                  <FormRow
                    placeholder='Enter first name'
                    type='text'
                    name='firstName'
                    labelText={'First name'}
                    value={values.firstName}
                    handleChange={handleChange}
                  />
                  <FormRow
                    placeholder='Enter last name'
                    type='text'
                    name='lastName'
                    labelText={'Last name'}
                    value={values.lastName}
                    handleChange={handleChange}
                  />
                  <FormRow
                    placeholder='Enter email'
                    type='email'
                    name='email'
                    labelText={'Email'}
                    value={values.email}
                    handleChange={handleChange}
                  />
                  <FormRow
                    placeholder='15 Yemen Rd'
                    type='text'
                    name='street'
                    labelText={'Street'}
                    value={values.street}
                    handleChange={handleChange}
                  />
                  <FormRow
                    placeholder='Enter city'
                    type='text'
                    name='city'
                    labelText={'City'}
                    value={values.city}
                    handleChange={handleChange}
                  />
                  <div className='form-row'>
                    <label htmlFor='city' className='form-label'>
                      State
                    </label>
                    <Select
                      options={options}
                      handleChange={handleChange}
                      value={values.state}
                      className='form-select'
                    />
                  </div>
                  <FormRow
                    placeholder='Enter zip code'
                    type='text'
                    name='zip'
                    labelText={'Zip Code'}
                    value={values.zip}
                    handleChange={handleChange}
                  />
                  <FormRow
                    placeholder='Enter interests'
                    type='text'
                    name='interests'
                    labelText={'Interests'}
                    value={values.interests}
                    handleChange={handleChange}
                  />
                </div>
                <button type='submit' className='btn edit-btn'>
                  Submit
                </button>
              </form>
            </div>
          </SandboxWrapper>
        </>
      )} */}

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
