import { OneEvent } from '../components'
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import EventsWrapper from '../assets/wrappers/EventsWrapper';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

export default function AllEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [data, setData] = useState([]);
  const [values, setValues] = useState('');
  const [opened, setOpened] = useState(false);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(20);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get('http://localhost:8000/api/v1/event')
      .then((res) => {
        setAllEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    axios
      .get('http://localhost:8000/api/v1/event')
      .then((res) => {
        setEventsList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    getData();

  }, [offset])

  const getData = async () => {
    const res = await axios.get('http://localhost:8000/api/v1/event');
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const eventData = slice.map((event) => {
      return <OneEvent key={event._id} {...event} />;
    });
    setData(eventData);
    setPageCount(Math.ceil(data.length / perPage));
    if (offset === 0) {
      setEnd(end);
      setStart(start);
    } else {
      setStart(offset * 20 - 19);
      setEnd(offset * 20);
    }
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const toggleSearch = (e) => {
    e.preventDefault();

    setOpened(!opened);
  };

  
  return (
    <>
      <h3 className='r2b-red'>Database: Events | All Years</h3>

      <button className='btn' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      <EventsWrapper>
        <div className='actions'>
          <Link to={''}>
            <button className='btn edit-btn actions space'>
              Add New Record
            </button>
          </Link>
        </div>
      </EventsWrapper>

      <Wrapper>
        {end < allEvents.length ? (
          <h4>
            Viewing {start} - {end} of {allEvents.length} records
          </h4>
        ) : (
          <h4>
            Viewing {start} - {allEvents.length} of {allEvents.length} records
          </h4>
        )}

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
        </div>
      </Wrapper>
    </>
  );
}
