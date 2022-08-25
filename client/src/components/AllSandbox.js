import { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import SandboxWrapper from '../assets/wrappers/Sandbox';
import { OneSandbox, TableView } from '../components';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CSVLink } from 'react-csv';
import { SelectColumnFilter } from './Filter';
import { HashLink as Link } from 'react-router-hash-link';

export default function AllSandbox() {
  const [allSandbox, setAllSandbox] = useState([]);
  const [sandboxList, setSandboxList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const printRef = useRef();

  const sandboxHeaders = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'State', key: 'state' },
    { label: 'Phone', key: 'phone' },
    { label: 'Interests', key: 'interests' }
  ];

  const sandboxData = allSandbox;

  const sandboxReport = {
    data: sandboxData,
    headers: sandboxHeaders,
    filename: 'sandbox_report.csv'
  }

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
    pdf.save('sandbox_report.pdf');
  };

  const getId = (e) => {
    const id = e.target.name;
    setShowEditForm(!showEditForm);
    console.log(id);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Edit',
        disableSortBy: true,
        disableFilters: true,
        accessor: (d) => {
          return (
            <Link to={`/sandbox/home/#${d.id}`}>
              <button className='button edit-btn' onClick={getId} name={d._id}>
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
            <Link to={`/sandbox/home/#${d.id}`}>
              <button
                className='button delete-btn'
                onClick={getId}
                name={d._id}
              >
                Delete
              </button>
            </Link>
          );
        },
      },
      { Header: 'First name', accessor: 'firstName' },
      { Header: 'Last name', accessor: 'lastName' },
      { Header: 'Email', accessor: 'email' },
      {
        Header: 'State',
        accessor: 'state',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        disableSortBy: true,
      },
      {
        Header: 'Interests',
        id: 'interests',
        accessor: (d) => {
          return d.interests != '' ? `${d.interests}` : 'None';
        }
      },
    ],
    []
  );

  const handleClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
  };

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

  return (
    <>
      <h3 className='r2b-red'>Database: Dummy Data</h3>

      <SandboxWrapper>
        <div className='actions'>
          <a href='/sandbox/add'>
            <button className='button edit-btn actions'>Add New Record</button>
          </a>
        </div>
      </SandboxWrapper>

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
      <CSVLink {...sandboxReport}>
        <button className='button btn-success'>Export as CSV</button>
      </CSVLink>
      <button className='button btn-success no-margin' onClick={handleClick}>
        {clicked ? 'View As List' : 'View As Table'}
      </button>

      <Wrapper>
        <h4>All Records</h4>

        {!clicked && !showEditForm && (
          
            <div className='jobs' ref={printRef}>
              {allSandbox.map((sandbox) => {
                return (
                  <>
                    <div className='border-state'>
                      <OneSandbox key={sandbox.id} {...sandbox} />
                    </div>
                  </>
                );
              })}
            </div>
         
        )}

        {clicked && !showEditForm && (
          <div ref={printRef}>
            <TableView columns={columns} data={allSandbox} />
          </div>
        )}

        {showEditForm && (
          <>
            <div ref={printRef}>
              <TableView columns={columns} data={allSandbox} />
            </div>

              <div className='jobs' ref={printRef}>
                {allSandbox.map((sandbox) => {
                  return (
                    <>
                      <div className='border-state'>
                        <OneSandbox key={sandbox._id} {...sandbox} />
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
