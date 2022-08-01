import { useEffect, useRef, useState, useMemo } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import {
  SearchBarAllVols,
  OneVolunteer,
  RecordTable,
  VolunteerFilter,
} from '../components';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
  RefinementList,
  ClearRefinements,
  Configure,
  RangeInput,
  MenuSelect,
} from 'react-instantsearch-dom';
import { BiHotel } from 'react-icons/bi';
import { IoConstructOutline } from 'react-icons/io5';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { MdDisabledVisible } from 'react-icons/md';

export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [volunteersList, setVolunteersList] = useState([]);
  const [events, setEvents] = useState(0);
  const [clicked, setClicked] = useState(false);
  const printRef = useRef();

  const headers = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
  ];

  const data = volunteersList;

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'report.csv',
  };

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png', 3.0);

    let imgWidth = 210;
    let pageHeight = 296;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    const pdf = new jsPDF('p', 'mm');
    let position = 0;

    pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save('print.pdf');
  };

  const handleClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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
          <Link to={''}>
            <button className='btn edit-btn actions space'>
              Add New Record
            </button>
          </Link>
        </div>
      </VolunteersWrapper>

      <FilterWrapper>
        <SearchBarAllVols description={volunteersList} />
      </FilterWrapper>

      <FilterWrapper>
        <VolunteerFilter description={volunteersList} />
      </FilterWrapper>

      <Wrapper>
        <button
          className='btn btn-success no-margin'
          onClick={handleDownloadPdf}
        >
          Download PDF
        </button>
        <CSVLink {...csvReport}>
          <button className='btn btn-success'>Export as CSV</button>
        </CSVLink>
        <button className='btn btn-success no-margin' onClick={handleClick}>
          {clicked ? 'View As List' : 'View As Table'}
        </button>

        <h4>All Records</h4>
        {!clicked && (
          <div ref={printRef}>
            <div className='jobs'>
              {allVolunteers.map((volunteer) => {
                return (
                  <>
                    <div className='border-state'>
                      <OneVolunteer
                        key={volunteer.id}
                        {...volunteer}
                        events={volunteer.events.length}
                        className='border-state'
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}

        {clicked && (
          <div ref={printRef}>
            <table className='table'>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {allVolunteers.map((volunteer) => {
                  return (
                    <>
                      <tr key={volunteer.id}>
                        <td>{volunteer.firstName}</td>
                        <td>{volunteer.lastName}</td>
                        <td>{volunteer.email}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Wrapper>
    </>
  );
}
