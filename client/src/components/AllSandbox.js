import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import {
  OneSandbox,
  SandboxFilter,
  SandboxSearchBar,
} from '../components';
import { Link, useNavigate } from 'react-router-dom';

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [sandboxList, setSandboxList] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setAllSandbox(res.data.sandbox);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setSandboxList(res.data.sandbox);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleSearch = (e) => {
    e.preventDefault();

    setOpened(!opened);
  };


  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <>
      <h4>Database: Volunteers (Dummy Data)</h4>

      <SandboxWrapper>
        <div className='actions'>
          <Link to={'/sandbox/add'}>
            <button className='btn edit-btn actions'>Add New Record</button>
          </Link>
        </div>
      </SandboxWrapper>

      <button className='btn space' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      {opened && (
        <>
          <FilterWrapper>
            <SandboxSearchBar data={sandboxList} />
          </FilterWrapper>

          <FilterWrapper>
            <h4>Filter by state</h4>
            <div className='form'>
              <SandboxFilter data={sandboxList} />
            </div>
          </FilterWrapper>
        </>
      )}
      <Wrapper>
        <h4>All Records</h4>
        <div className='jobs'>
          {allSandbox.map((sandbox) => {
            return <OneSandbox key={sandbox._id} {...sandbox} />;
          })}
        </div>
      </Wrapper>
    </>
  );
}
