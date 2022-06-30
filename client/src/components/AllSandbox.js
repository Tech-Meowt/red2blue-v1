import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import {
  AllVolunteers,
  OneSandbox,
  SandboxSearchBar,
  SearchSelectWithClear,
  Search,
} from '../components';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [sandboxList, setSandboxList] = useState([]);
  const [values, setValues] = useState('');

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

  const handleChange = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const updateSandbox = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/sandbox/${id}`, values)
      .then((res) => {
        values(res.data.sandbox);
        console.log(res.data.sandbox);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h4>Database: Volunteers (Dummy Data)</h4>
      <h5>{allSandbox.length} records found</h5>
      <SandboxWrapper>
        <div className='actions'>
          <Link to={'/sandbox/add'}>
            <button className='btn edit-btn actions'>Add New Record</button>
          </Link>
        </div>
      </SandboxWrapper>
      <Search />
    </>
  );
}
