import { useState, useEffect, useRef, useMemo } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import { OneVolunteer, TableView } from '../components';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { SelectColumnFilter } from './Filter';
import { HashLink as Link } from 'react-router-hash-link';
import { useAppContext } from '../context/appContext';

export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [volunteersList, setVolunteersList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const printRef = useRef();
  const { user } = useAppContext();
  const [dbUser, setDbUser] = useState([]);

  const headers = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Phone', key: 'phone' },
    // { label: 'Events attended (subtract 1)', key: 'events.length' }
  ];

  const data = volunteersList;

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'volunteers_report.csv',
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
    pdf.save('volunteers_report.pdf');
  };

  const getId = (e) => {
    const id = e.target.name;
    setShowEditForm(!showEditForm);
    console.log(id);
  };

  const adminColumns = useMemo(
    () => [
      {
        Header: 'Edit',
        disableSortBy: true,
        disableFilters: true,
        accessor: (d) => {
          return (
            <Link to={`/databases/volunteers/#${d.id}`}>
              <button className='button edit-btn' onClick={getId} name={d.id}>
                Edit
              </button>
            </Link>
          );
        },
      },
      {
        Header: 'Delete',
        disableSortBy: true,
        disableFilters: true,
        accessor: (d) => {
          return (
            <Link to={`/databases/volunteers/#${d.id}`}>
              <button className='button delete-btn' onClick={getId} name={d.id}>
                Delete
              </button>
            </Link>
          );
        },
      },
      { Header: 'First name', accessor: 'firstName' },
      { Header: 'Last name', accessor: 'lastName' },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
      },
      {
        Header: 'Street',
        accessor: 'street',
        disableSortBy: true,
      },
      {
        Header: 'City',
        accessor: 'city',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'State',
        accessor: 'state',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        disableSortBy: true,
      },
      // {
      //   Header: 'Events',
      //   id: 'events',
      //   accessor: (d) => {
      //     if (d.events.length - 1 <= 0) {
      //       return '0'
      //     } else {
      //       return d.events.length - 1
      //     }
      //   }
      // }
    ],
    []
  );

  const editorColumns = useMemo(
    () => [
      {
        Header: 'Edit',
        disableSortBy: true,
        disableFilters: true,
        accessor: (d) => {
          return (
            <Link to={`/databases/volunteers/#${d.id}`}>
              <button className='button edit-btn' onClick={getId} name={d.id}>
                Edit
              </button>
            </Link>
          );
        },
      },
      { Header: 'First name', accessor: 'firstName' },
      { Header: 'Last name', accessor: 'lastName' },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
      },
      {
        Header: 'Street',
        accessor: 'street',
        disableSortBy: true,
      },
      {
        Header: 'City',
        accessor: 'city',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'State',
        accessor: 'state',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        disableSortBy: true,
      },
      // {
      //   Header: 'Events',
      //   id: 'events',
      //   accessor: (d) => {
      //     if (d.events.length - 1 <= 0) {
      //       return '0';
      //     } else {
      //       return d.events.length - 1;
      //     }
      //   },
      // },
    ],
    []
  );

  const viewerColumns = useMemo(
    () => [
      { Header: 'First name', accessor: 'firstName' },
      { Header: 'Last name', accessor: 'lastName' },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
      },
      {
        Header: 'Street',
        accessor: 'street',
        disableSortBy: true,
      },
      {
        Header: 'City',
        accessor: 'city',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'State',
        accessor: 'state',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        disableSortBy: true,
      },
      // {
      //   Header: 'Events',
      //   id: 'events',
      //   accessor: (d) => {
      //     if (d.events.length - 1 <= 0) {
      //       return '0';
      //     } else {
      //       return d.events.length - 1;
      //     }
      //   },
      // },
    ],
    []
  );

  const handleClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
  };

  // TODO 
  // show database access that lives in mongodb on volunteer card
  // const findMatches = () => {
  //   axios
  //     .get('http://localhost:8000/api/v1/auth/allUsers')
  //     .then((res) => {
  //       setDbUser(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   const newFilter = dbUser.filter((value) => {
  //     return value.email
  //       .toLowerCase()
  //       .includes(allVolunteers.email.toLowerCase());
  //   });

  //   if (dbUser.email === allVolunteers.email) {
  //     console.log(newFilter);
  //   } else {
  //     console.log('no matches found');
  //   }
  // };

  useEffect(() => {
    // TODO
    // call function to add database access to volunteer card
    // findMatches();

    axios
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setAllVolunteers(res.data.volunteer);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setVolunteersList(res.data.volunteer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3 className='r2b-red'>Database: Volunteers</h3>
      <VolunteersWrapper>
        <div className='actions'>
          <Link to={'/databases/volunteers/add'}>
            <button className='button edit-btn actions space'>
              Add New Record
            </button>
          </Link>
        </div>
      </VolunteersWrapper>

      <h4 className='space-larger'>🕵️ Need to search for something?</h4>
      <h5 className='r2b-blue'>
        👉 Click on 'View As Table' to sort and filter your data
        <br />
        👉 You can combine filters to narrow down your results
      </h5>

      {/* <button
        className='button btn-success no-margin'
        onClick={handleDownloadPdf}
      >
        Download PDF
      </button> */}
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
            {allVolunteers.map((volunteer) => {
              return (
                <>
                  <div className='border-state'>
                    {/* <OneVolunteer
                        key={volunteer.id}
                        {...volunteer}
                        events={volunteer.events.length}
                      /> */}
                    <OneVolunteer key={volunteer.id} {...volunteer} />
                  </div>
                </>
              );
            })}
          </div>
        )}

        {clicked && !showEditForm && user.role === 'admin' && (
          <div ref={printRef}>
            <TableView columns={adminColumns} data={allVolunteers} />
          </div>
        )}

        {clicked && !showEditForm && user.role === 'editor' && (
          <div ref={printRef}>
            <TableView columns={editorColumns} data={allVolunteers} />
          </div>
        )}

        {clicked && !showEditForm && user.role === 'viewer' && (
          <div ref={printRef}>
            <TableView columns={viewerColumns} data={allVolunteers} />
          </div>
        )}

        {showEditForm && (
          <>
            <div ref={printRef}>
              {user.role === 'admin' && (
                <TableView columns={adminColumns} data={allVolunteers} />
              )}
              {user.role === 'viewer' && (
                <TableView columns={editorColumns} data={allVolunteers} />
              )}
            </div>

            <div className='jobs' ref={printRef}>
              {allVolunteers.map((volunteer) => {
                return (
                  <>
                    <div className='border-state'>
                      {/* <OneVolunteer
                          key={volunteer.id}
                          {...volunteer}
                          events={volunteer.events.length}
                        /> */}
                      <OneVolunteer key={volunteer.id} {...volunteer} />
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
