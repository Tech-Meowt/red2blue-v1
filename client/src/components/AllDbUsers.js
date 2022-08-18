import { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/AllDbUsers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import { TableView, DbUser, BannerWarning } from '../components';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CSVLink } from 'react-csv';
import { SelectColumnFilter } from './Filter';
import { HashLink as Link } from 'react-router-hash-link';

export default function AllDbUsers() {
  const [dbUsers, setDbUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const printRef = useRef();

  const usersDbHeaders = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Sandbox database', key: 'sandboxDb' },
    { label: 'User Accounts database', key: 'usersDb' },
    { label: `Volunteers database`, key: 'volunteersDb' },
    { label: 'Skills database', key: 'skillsDb' },
    { label: 'Account status', key: 'isActive' },
    { label: 'Approval status', key: 'approved' },
    { label: 'Role', key: 'role' },
  ];

  const userData = dbUsers;

  const userReport = {
    data: userData,
    headers: usersDbHeaders,
    filename: 'user_accounts_report.csv',
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
    pdf.save('user_accounts_report.pdf');
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
            <Link to={`/databases/user-accounts/#${d._id}`}>
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
            <Link to={`/databases/user-accounts/#${d._id}`}>
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
        Header: 'Sandbox database',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        accessor: (d) => {
          return d.sandboxDb ? 'access' : 'no access';
        },
        id: 'sandboxDb',
      },
      {
        Header: 'User accounts database',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        id: 'usersDb',
        accessor: (d) => {
          return d.usersDb ? 'access' : 'no access';
        },
      },
      {
        Header: 'Volunteers database',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        id: 'volunteersDb',
        accessor: (d) => {
          return d.volunteersDb ? 'access' : 'no access';
        },
      },
      {
        Header: 'Skills database',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        id: 'skillsDb',
        accessor: (d) => {
          return d.skillsDb ? 'access' : 'no access';
        },
      },
      {
        Header: 'Account status',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        id: 'isActive',
        accessor: (d) => {
          return d.isActive ? 'active' : 'deactivated';
        },
      },
      {
        Header: 'Approval status',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        id: 'approved',
        accessor: (d) => {
          return d.usersDb ? 'approved' : 'waiting on approval';
        },
      },
      {
        Header: 'Role',
        accessor: 'role',
        disableSortBy: true,
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setDbUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3 className='r2b-red'>Database: User Accounts</h3>

      <h4>🕵️ Need to search for something?</h4>
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
      <CSVLink {...userReport}>
        <button className='button btn-success'>Export as CSV</button>
      </CSVLink>
      <button className='button btn-success no-margin' onClick={handleClick}>
        {clicked ? 'View As List' : 'View As Table'}
      </button>

      <Wrapper>
        <h4>All Records</h4>

        {!clicked && !showEditForm && (
          <div ref={printRef}>
            <div className='jobs'>
              {dbUsers.map((dbUser) => {
                return (
                  <>
                    <div className='border-state'>
                      <DbUser key={dbUser._id} {...dbUser} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}

        {clicked && !showEditForm && (
          <div ref={printRef}>
            <TableView columns={columns} data={dbUsers} />
          </div>
        )}

        {showEditForm && (
          <>
            <div ref={printRef}>
              <TableView columns={columns} data={dbUsers} />
            </div>
            <div ref={printRef}>
              <div className='jobs'>
                {dbUsers.map((dbUser) => {
                  return (
                    <>
                      <div className='border-state'>
                        <DbUser key={dbUser._id} {...dbUser} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
}
