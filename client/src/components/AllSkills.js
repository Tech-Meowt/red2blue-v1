import { useEffect, useRef, useState, useMemo } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { OnePoliticalSkill, OneLifeSkill, PoliticalTable } from '../components'
import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { ImPointRight } from 'react-icons/im';
import { AiFillCaretDown } from 'react-icons/ai'
import { SelectColumnFilter } from './Filter'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AllSkills() {
  const [allPoliticalSkills, setAllPoliticalSkills] = useState([]);
  const [allLifeSkills, setAllLifeSkills] = useState([]);
  const [politicalToggle, setPoliticalToggle] = useState(false);
  const [lifeToggle, setLifeToggle] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [noResults, setNoResults] = useState(true);
  const printRef = useRef();

  const politicalHeaders = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Campaign management', key: 'campaignMgmt' },
    { label: 'Canvassing', key: 'canvassing' },
    { label: 'Community organizing', key: 'communityOrganizing' },
    { label: 'Elected official (current)', key: 'electedOfficialCurr' },
    { label: 'Elected official (past)', key: 'electedOfficialPast' },
    { label: 'Peer-to-peer texting management', key: 'p2pTextingMgmt' },
    { label: 'Peer-to-peer texting volunteer', key: 'p2pTextingVol' },
    { label: 'Poll worker', key: 'pollWorker' },
    { label: 'Postcard planning + management', key: 'postcardMgmt' },
    { label: 'Postcard writing', key: 'postcardWriting' },
    {
      label: 'Texting + phone banking script editing',
      key: 'txtPhoneScriptEdit',
    },
    {
      label: 'Texting + phone banking script writing',
      key: 'txtPhoneScriptWrite',
    },
    { label: 'VAN/Votebuilder experience', key: 'vanVoteBuildExp' },
    { label: 'Voter registration', key: 'voterReg' },
  ];

  const politicalData = allPoliticalSkills

  const politicalReport = {
    data: politicalData,
    headers: politicalHeaders,
    filename: 'report.csv'
  }

  const lifeHeaders = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Actor/Actress', key: 'actor' },
    { label: 'Artist', key: 'artist' },
    { label: 'Board of Directors', key: 'boardOfDirectors' },
    { label: 'Data science', key: 'dataScience' },
    { label: 'Database management', key: 'dbMgmt' },
    { label: 'Editor', key: 'editor' },
    { label: 'Educator | Teacher/Professor', key: 'professor' },
    { label: 'Educator | Trainer', key: 'trainer' },
    { label: 'Fundraising', key: 'fundraising' },
    { label: 'Graphic design', key: 'graphicDesign' },
    { label: 'Human resources', key: 'hr' },
    { label: 'Information technology (IT)', key: 'it' },
    { label: 'Legal | Lawyer/Paralegal', key: 'legal' },
    { label: 'Linguist', key: 'linguist' },
    { label: 'Messaging/Communications', key: 'msgComms' },
    { label: 'Musician', key: 'musician' },
    { label: 'Newsletter creation + design', key: 'newsletterCreateDesign' },
    { label: 'Newsletter writing (content)', key: 'newsletterWrite' },
    { label: 'Nonprofit management', key: 'nonprofMgmt' },
    { label: 'Public relations', key: 'pr' },
    { label: 'Public speaker', key: 'publicSpeak' },
    { label: 'Recruitment', key: 'recruitment' },
    { label: 'Research', key: 'research' },
    { label: 'Second (or more) language', key: 'otherLanguage' },
    { label: 'Social media content creation', key: 'socialMediaContentCreate' },
    { label: 'Social media management', key: 'socialMediaMgmt' },
    { label: 'Speech writer', key: 'speechWriter' },
    { label: 'Strategic planning', key: 'strategicPlanning' },
    { label: 'Video editing/creation', key: 'videoEditCreate' },
    { label: 'Volunteer management', key: 'volMgmt' },
    { label: 'Website design', key: 'webDesign' },
    { label: 'Website management', key: 'webMgmt' },
    { label: 'Anything else', key: 'anythingElse' },
  ];

  const lifeData = allLifeSkills;

  const lifeReport = {
    data: lifeData,
    headers: lifeHeaders,
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

  const columns = useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'firstName',
        // disableSortBy: true,
        // Filter: SelectColumnFilter,
        // filter: 'equals',
      },
      { Header: 'Last name', accessor: 'lastName' },
      { Header: 'Email', accessor: 'email' },
      {
        Header: 'Canvassing',
        accessor: 'canvassing',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Community organizing',
        accessor: 'communityOrganizing',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Elected official (current)',
        accessor: 'electedOfficialCurr',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Elected official (past)',
        accessor: 'electedOfficialPast',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Peer-to-peer texting management',
        accessor: 'p2pTextingMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Peer-to-peer texting volunteer',
        accessor: 'p2pTextingVol',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Poll worker',
        accessor: 'pollWorker',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Postcard planning + management',
        accessor: 'postcardMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Postcard writing',
        accessor: 'postcardWriting',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Texting + phone banking script editing',
        accessor: 'txtPhoneScriptEdit',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Texting + phone banking script writing',
        accessor: 'txtPhoneScriptWrite',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'VAN/Votebuilder experience',
        accessor: 'vanVoteBuildExp',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Voter registration',
        accessor: 'voterReg',
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

    axios.get('http://localhost:8000/api/v1/political/')
      .then((res) => {
        setAllPoliticalSkills(res.data.politicalSkills);
      })
      .catch((error) => {
        console.log(error);
      });
    
    axios.get('http://localhost:8000/api/v1/life/')
      .then((res) => {
        setAllLifeSkills(res.data.lifeSkills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handlePoliticalToggle = (e) => {
    e.preventDefault();

    setPoliticalToggle(true);
    setLifeToggle(false)
  }

  const handleLifeToggle = (e) => {
    e.preventDefault();

    setLifeToggle(true)
    setPoliticalToggle(false)
  }

  // const skills = skillOptions.map((option) => {
  //   console.log(option)
  // })
  

  const handleFilter = (e) => {
//     const searchWord = e.target.value;
//     setWordEntered(searchWord);

//     const searchOptions = allPoliticalSkills.map((skill, value) => {
//       return skill, value, console.log(skill.value)
//     })
    
//     const newFilter = allPoliticalSkills.filter((value) => {
// return value, console.log(value)
//     })

//     // const newFilter = allPoliticalSkills.filter((value) => {
//     //   return value.campaignMgmt.toLowerCase().includes(searchWord.toLowerCase())
//     // })

//     if (searchWord === '') {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//       setNoResults(false);
//     }
  }

  return (
    <>
      <h3 className='r2b-red'>Database: Volunteers | Skills</h3>
      <VolunteersWrapper>
        <div className='actions'>
          <button className='button space-right' onClick={handlePoliticalToggle}>
            View Political Skills
          </button>
          <button className='button' onClick={handleLifeToggle}>
            View Life Skills
          </button>
        </div>
      </VolunteersWrapper>

      <Container style={{ marginTop: 100 }}>
        <PoliticalTable columns={columns} data={allPoliticalSkills} />
      </Container>

      {/* <VolunteersWrapper>
        <div className='actions'>
          <Link to={''}>
            <button className='button edit-btn space'>
              Add New Record
            </button>
          </Link>
        </div>
      </VolunteersWrapper> */}

      {/* {filteredData.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Campaign management</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((key) => {
              return (
                <>
                  <tr key={key.id}>
                    <td>{key.firstName}</td>
                    <td>{key.lastName}</td>
                    <td>{key.email}</td>
                    <td>{key.campaignMgmt}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )} */}

      {/* <div ref={printRef}>
        <table className='table'>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>
                Campaign management
                <span className='left'>
                  <select
                    name='wordEntered'
                    id='wordEntered'
                    className='form-select'
                    value={wordEntered}
                    onChange={handleFilter}
                  >
                    <option value='' disabled selected hidden>
                      Filter
                    </option>
                    <option value='Expert'>Expert</option>
                    <option value='Advanced'>Advanced</option>
                  </select>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allPoliticalSkills.map((skill) => {
              return (
                <>
                  <tr key={skill.id}>
                    <td>{skill.firstName}</td>
                    <td>{skill.lastName}</td>
                    <td>{skill.email}</td>
                    <td>{skill.campaignMgmt}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div> */}

      {politicalToggle && (
        <>
          {/* // TODO: search */}

          <Wrapper>
            <button
              className='button btn-success no-margin'
              onClick={handleDownloadPdf}
            >
              Download PDF
            </button>
            <CSVLink {...politicalReport}>
              <button className='button btn-success'>Export as CSV</button>
            </CSVLink>
            <button className='button btn-success no-margin' onClick={handleClick}>
              {clicked ? 'View As List' : 'View As Table'}
            </button>
            <h4>All Records</h4>
            <div ref={printRef}>
              <div className='jobs'>
                {allPoliticalSkills.map((polSkill) => {
                  return (
                    <>
                      <div className='border-state'>
                        <OnePoliticalSkill key={polSkill.id} {...polSkill} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </Wrapper>
        </>
      )}

      {lifeToggle && (
        <>
          {/* // TODO: search */}

          <Wrapper>
            <button
              className='button btn-success no-margin'
              onClick={handleDownloadPdf}
            >
              Download PDF
            </button>
            <CSVLink {...lifeReport}>
              <button className='button btn-success'>Export as CSV</button>
            </CSVLink>
            <button className='button btn-success no-margin' onClick={handleClick}>
              {clicked ? 'View As List' : 'View As Table'}
            </button>
            <h4>All Records</h4>
            <div ref={printRef}>
              <div className='jobs'>
                {allLifeSkills.map((lifeSkill) => {
                  return (
                    <>
                      <div className='border-state'>
                        <OneLifeSkill key={lifeSkill.id} {...lifeSkill} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
}
