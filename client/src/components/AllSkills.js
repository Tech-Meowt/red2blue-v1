import { useEffect, useRef, useState, useMemo } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { OnePoliticalSkill, OneLifeSkill, TableView } from '../components';
import { ImPointRight } from 'react-icons/im';
import { SelectColumnFilter } from './Filter';
import napoleonDynamite from '../assets/images/napoleon-dynamite.jpeg';

export default function AllSkills() {
  const [allPoliticalSkills, setAllPoliticalSkills] = useState([]);
  const [allLifeSkills, setAllLifeSkills] = useState([]);
  const [politicalToggle, setPoliticalToggle] = useState(false);
  const [lifeToggle, setLifeToggle] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showPolTable, setShowPolTable] = useState(false);
  const [showNapoleon, setShowNapoleon] = useState(true);
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

  const politicalData = allPoliticalSkills;

  const politicalReport = {
    data: politicalData,
    headers: politicalHeaders,
    filename: 'political_skills_report.csv',
  };

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
    filename: 'life_skills_report.csv',
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
    pdf.save('skills_report.pdf');
  };

  const columns = useMemo(
    () => [
      { Header: 'First name', accessor: 'firstName' },
      { Header: 'Last name', accessor: 'lastName' },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
      },
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

  const lifeSkillColumns = useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'firstName',
      },
      { Header: 'Last name', accessor: 'lastName' },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
      },
      {
        Header: 'Actor/Actress',
        accessor: 'actor',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Artist',
        accessor: 'artist',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Board of Directors',
        accessor: 'boardOfDirectors',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Data science',
        accessor: 'dataScience',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Database management',
        accessor: 'dbMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Editor',
        accessor: 'editor',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Educator | Teacher/Professor',
        accessor: 'professor',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Educator | Trainer',
        accessor: 'trainer',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Fundraising',
        accessor: 'fundraising',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Graphic design',
        accessor: 'graphicDesign',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Human resources',
        accessor: 'hr',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Information technology (IT)',
        accessor: 'it',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Legal | Lawyer/Paralegal',
        accessor: 'legal',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Linguist',
        accessor: 'linguist',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Messaging/Communications',
        accessor: 'msgComms',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Musician',
        accessor: 'musician',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Newsletter creation + design',
        accessor: 'newsletterCreateDesign',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Newsletter writing (content)',
        accessor: 'newsletterWrite',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Nonprofit management',
        accessor: 'nonprofMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Public relations',
        accessor: 'pr',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Public speaker',
        accessor: 'publicSpeak',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Recruitment',
        accessor: 'recruitment',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Research',
        accessor: 'research',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Second (or more) language',
        accessor: 'otherLanguage',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Social media content creation',
        accessor: 'socialMediaContentCreate',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Social media management',
        accessor: 'socialMediaMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Speech writer',
        accessor: 'speechWriter',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Strategic planning',
        accessor: 'strategicPlanning',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Video editing/creation',
        accessor: 'videoEditCreate',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Volunteer management',
        accessor: 'volMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Website design',
        accessor: 'webDesign',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Website management',
        accessor: 'webMgmt',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Anything else',
        accessor: 'anythingElse',
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

  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000';
  } else {
    baseURL = 'https://r2bdb.herokuapp.com';
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios
      .get(baseURL + '/api/v1/political/')
      .then((res) => {
        setAllPoliticalSkills(res.data.politicalSkills);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(baseURL + '/api/v1/life/')
      .then((res) => {
        setAllLifeSkills(res.data.lifeSkills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePoliticalToggle = (e) => {
    e.preventDefault();

    setPoliticalToggle(true);
    setLifeToggle(false);
    setShowNapoleon(false)
  };

  const handleLifeToggle = (e) => {
    e.preventDefault();

    setLifeToggle(true);
    setPoliticalToggle(false);
    setShowNapoleon(false)
  };

  return (
    <>
      <h3 className='r2b-red'>Database: Volunteers | Skills</h3>
      <VolunteersWrapper>
        <div className='actions'>
          <button
            className='button space-right'
            onClick={handlePoliticalToggle}
          >
            View Political Skills
          </button>
          <button className='button' onClick={handleLifeToggle}>
            View Life Skills
          </button>
        </div>
        <br />
        {showNapoleon && (
          <img
            src={napoleonDynamite}
            alt="napoleon dynamite's skills"
            className='img napoleon-dynamite-img'
          />
        )}
      </VolunteersWrapper>

      {politicalToggle && (
        <>
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
          <CSVLink {...politicalReport}>
            <button className='button btn-success'>Export as CSV</button>
          </CSVLink>
          <button
            className='button btn-success no-margin'
            onClick={handleClick}
          >
            {clicked ? 'View As List' : 'View As Table'}
          </button>

          <Wrapper>
            <h4 className='space'>All Records</h4>

            {!clicked ? (
      
                <div className='jobs' ref={printRef}>
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

            ) : (
              <div ref={printRef}>
                <TableView columns={columns} data={allPoliticalSkills} />
              </div>
            )}
          </Wrapper>
        </>
      )}

      {lifeToggle && (
        <>
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
          <CSVLink {...lifeReport}>
            <button className='button btn-success'>Export as CSV</button>
          </CSVLink>
          <button
            className='button btn-success no-margin'
            onClick={handleClick}
          >
            {clicked ? 'View As List' : 'View As Table'}
          </button>

          <Wrapper>
            <h4>All Records</h4>

            {!clicked ? (
   
                <div className='jobs' ref={printRef}>
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
      
            ) : (
              <div ref={printRef}>
                <TableView columns={lifeSkillColumns} data={allLifeSkills} />
              </div>
            )}
          </Wrapper>
        </>
      )}
    </>
  );
}
