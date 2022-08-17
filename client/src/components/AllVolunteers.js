import { useEffect, useRef, useState } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import {
  SearchBarAllVols,
  OneVolunteer,
  VolunteerFilter,
} from '.';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { CSVLink } from 'react-csv';

export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([]);
  const [volunteersList, setVolunteersList] = useState([]);
  const [allPoliticalSkills, setAllPoliticalSkills] = useState([]);
  const [clicked, setClicked] = useState(false);
  const printRef = useRef();
  
  const headers = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'State', key: 'state' },
    { label: 'Events attended (subtract 1)', key: 'events.length' }
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
            <button className='button edit-btn actions space'>
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
                  <th>State</th>
                  <th>Events attended</th>
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
                        <td>{volunteer.state}</td>
                        {volunteer.events.length >= 1 ? (
                          <td>{volunteer.events.length - 1}</td>
                        ) : (
                            <td>{0}</td>
                        )}
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
