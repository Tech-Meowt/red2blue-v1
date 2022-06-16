import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import {
  AllVolunteers,
  OneSandbox,
  SandboxSearchBar,
  StateSearchSelectWithClear
} from '../components';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [sandboxList, setSandboxList] = useState([]);
  const [values, setValues] = useState('');
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(20);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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
    getData();
  }, [offset]);

  const getData = async () => {
    const res = await axios.get('http://localhost:8000/api/v1/sandbox');
    const data = res.data;
    const slice = data.slice(offset, offset + perPage)
    const sandData = slice.map((record) => {
      return <OneSandbox key={record._id} {...record} />;
    });
    setData(sandData);
    setPageCount(Math.ceil(data.length / perPage))
    if (offset === 0) {
      setEnd(end);
      setStart(start);
    } else {
      setStart(offset * 20 - 19);
      setEnd(offset * 20);
    }
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

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
          <StateSearchSelectWithClear
            data={sandboxList}
            label={'Filter by state'}
            clearBtn={'show'}
            type={'sandbox'}
          />
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
        {end < allSandbox.length ? (
          <h4>
            Viewing {start} - {end} of {allSandbox.length} records
          </h4>
        ) : <h4>
            Viewing {start} - {allSandbox.length} of {allSandbox.length} records
        </h4>}
        
        <div className='jobs'>
          {data}
          <ReactPaginate
            previousLabel={'<< prev'}
            nextLabel={'next >>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
          {/* {allSandbox.map((record) => {
            return <OneSandbox key={record._id} {...record} />;
          })} */}
        </div>
      </Wrapper>
    </>
  );
}
