import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import { OneSandbox, SandboxSearchBar, StateSearchSelect } from '../components';
import { Link } from 'react-router-dom';

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [sandboxList, setSandboxList] = useState([]);
  const [values, setValues] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setAllSandbox(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/sandbox')
      .then((res) => {
        setSandboxList(res.data);
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
        values(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h4>Database: Volunteers (Dummy Data)</h4>

      <FilterWrapper>
        <SandboxSearchBar data={sandboxList} />
      </FilterWrapper>

      <FilterWrapper>
        <div className='form'>
          <StateSearchSelect data={sandboxList} />
        </div>
      </FilterWrapper>

      <SandboxWrapper>
        <div className='actions'>
          <Link to={'/sandbox/add'}>
            <button className='btn edit-btn actions'>Add New Record</button>
          </Link>
        </div>
      </SandboxWrapper>

      <Wrapper>
        <h4>All Records</h4>
        <div className='jobs'>
          {allSandbox.map((record) => {
            return <OneSandbox key={record._id} {...record} />;
          })}
        </div>
      </Wrapper>
    </>
  );
}
