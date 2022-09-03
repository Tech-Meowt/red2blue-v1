import { useState, useEffect, useRef, useMemo } from 'react';
import EventsWrapper from '../assets/wrappers/EventsWrapper.js';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import { OneEvent, TableView } from '../components';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { SelectColumnFilter } from './Filter';
import { HashLink as Link } from 'react-router-hash-link';
import { useAppContext } from '../context/appContext';

export default function AllEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [names, setNames] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const printRef = useRef();
  const { user } = useAppContext();

  const headers = [
    { label: 'Event name', key: 'eventName' },
    { label: 'Date', key: 'eventDate' },
    { label: 'Year', key: 'eventYear' },
    { label: 'Event type', key: 'eventType' },
    { label: 'Volunteers', key: 'volunteers.length' },
  ];

  const data = eventsList;

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'events_report.csv',
  };

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png', 3.0);

    let imgWidth = 275;
    let pageHeight = 296;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // const pdf = new jsPDF('p', 'mm');
    const pdf = new jsPDF({ orientation: 'landscape' });
    let position = 0;

    pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save('events_report.pdf');
  };

  const getId = (e) => {
    const id = e.target.name;
    setShowEditForm(!showEditForm);
    console.log(id);
  };

  const adminColumns = useMemo(
    () => [
      {
        Header: 'Delete',
        disableSortBy: true,
        disableFilters: true,
        accessor: (d) => {
          return (
            <Link to={`/databases/events/#${d.id}`}>
              <button className='button delete-btn' onClick={getId} name={d.id}>
                Delete
              </button>
            </Link>
          );
        },
      },
      { Header: 'Event name', accessor: 'eventName' },
      {
        Header: 'Date',
        accessor: 'eventDate',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Year',
        accessor: 'eventYear',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Event type',
        accessor: 'eventType',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Volunteers',
        id: 'volunteers',
        accessor: (d) => {
          return d.volunteers.length;
        },
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
    ],
    []
  );

  const editorColumns = useMemo(
    () => [
      { Header: 'Event name', accessor: 'eventName' },
      {
        Header: 'Date',
        accessor: 'eventDate',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Year',
        accessor: 'eventYear',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Event type',
        accessor: 'eventType',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Volunteers',
        id: 'volunteers',
        accessor: (d) => {
          return d.volunteers.length;
        },
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
    ],
    []
  );

  const viewerColumns = useMemo(
    () => [
      { Header: 'Event name', accessor: 'eventName' },
      {
        Header: 'Date',
        accessor: 'eventDate',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Year',
        accessor: 'eventYear',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Event type',
        accessor: 'eventType',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Volunteers',
        id: 'volunteers',
        accessor: (d) => {
          return d.volunteers.length;
        },
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
    ],
    []
  );

  const handleClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
  };

  // const volNames = allEvents.map((event) => {
  //   const eventVols = event.volunteers
  //   eventVols.map((vol) => {
  //     return vol.firstName,
  //     console.log(vol.firstName)
  //   })
  // })
  
  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000';
  } else {
    baseURL = 'https://r2bdb.herokuapp.com';
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get(baseURL + '/api/v1/event')
      .then((res) => {
        setAllEvents(res.data.event);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(baseURL + '/api/v1/event')
      .then((res) => {
        setEventsList(res.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3 className='r2b-red'>Database: Events | All Years</h3>
      {user.role !== 'viewer' && (
        <EventsWrapper>
          <div className='actions'>
            <Link to={'/databases/events/add'}>
              <button className='button edit-btn actions space'>
                Add New Record
              </button>
            </Link>
          </div>
        </EventsWrapper>
      )}
      <h4 className='space-larger'>🕵️ Need to search for something?</h4>
      <h5 className='r2b-blue'>
        👉 Click on 'View As Table' to sort and filter your data
        <br />
        👉 You can combine filters to narrow down your results
      </h5>

      <button
        className='button btn-success no-margin'
        onClick={handleDownloadPdf}
      >
        Download PDF
      </button>
      <CSVLink {...csvReport}>
        <button className='button btn-success'>Export as CSV</button>
      </CSVLink>
      <button className='button btn-success no-margin' onClick={handleClick}>
        {clicked ? 'View As List' : 'View As Table'}
      </button>

      <Wrapper>
        <h4>All Records</h4>
        {!clicked && !showEditForm && (
          <div className='jobs' ref={printRef}>
            {allEvents.map((event) => {
              return (
                <>
                  <div className='border-state'>
                    <OneEvent
                      key={event.id}
                      {...event}
                      volunteers={event.volunteers.length}
                      // volFirstName={event.volunteers.map((fName) => fName.firstName)}
                      // volLastName={event.volunteers.map((lName) => lName.lastName)}
                    />
                  </div>
                </>
              );
            })}
          </div>
        )}

        {clicked && !showEditForm && user.role === 'admin' && (
          <div ref={printRef}>
            <TableView columns={adminColumns} data={allEvents} />
          </div>
        )}

        {clicked && !showEditForm && user.role === 'editor' && (
          <div ref={printRef}>
            <TableView columns={editorColumns} data={allEvents} />
          </div>
        )}

        {clicked && !showEditForm && user.role === 'viewer' && (
          <div ref={printRef}>
            <TableView columns={viewerColumns} data={allEvents} />
          </div>
        )}

        {showEditForm && (
          <>
            <div ref={printRef}>
              {user.role === 'admin' && (
                <TableView columns={adminColumns} data={allEvents} />
              )}
              {user.role === 'viewer' && (
                <TableView columns={editorColumns} data={allEvents} />
              )}
            </div>

            <div className='jobs' ref={printRef}>
              {allEvents.map((event) => {
                return (
                  <>
                    <div className='border-state'>
                      <OneEvent
                        key={event.id}
                        {...event}
                        volunteers={event.volunteers.length}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
}
