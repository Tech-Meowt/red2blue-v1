import { OneEvent } from '.'
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import EventsWrapper from '../assets/wrappers/EventsWrapper';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AllEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [opened, setOpened] = useState(false);
  


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
  }, [])


  const toggleSearch = (e) => {
    e.preventDefault();

    setOpened(!opened);
  };

  
  return (
    <>
      <h3 className='r2b-red'>Database: Events | All Years</h3>

      <button className='button' onClick={toggleSearch}>
        {!opened ? 'Search' : 'Close'}
      </button>

      <EventsWrapper>
        <div className='actions'>
          <Link to={''}>
            <button className='button edit-btn actions space'>
              Add New Record
            </button>
          </Link>
        </div>
      </EventsWrapper>

      <Wrapper>
        <h4>All Records</h4>
        <div className='jobs'>
          {allEvents.map((event) => {
            return <OneEvent key={event.id} {...allEvents} />
          })}
        </div>
      </Wrapper>
    </>
  );
}
