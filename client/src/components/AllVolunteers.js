import { useEffect, useRef, useState } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import FilterWrapper from '../assets/wrappers/FilterContainer'
import Wrapper from '../assets/wrappers/AllDbUsers.js'
import { Hit, SearchBarAllVols, OneVolunteer } from '../components';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import algoliasearch from 'algoliasearch';
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
import { CSVLink } from 'react-csv'


export default function AllVolunteers() {
  const [allVolunteers, setAllVolunteers] = useState([])
  const [volunteersList, setVolunteersList] = useState([])
  const [events, setEvents] = useState(0)
  const printRef = useRef();
  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_API
  );
  const index = process.env.REACT_APP_ALGOLIA_INDEX;

  const headers = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' }
  ];

  const data = volunteersList

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'report.csv'
  }

  const handleDownloadPdf = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png', 3.0);

    let imgWidth = 210;
    let pageHeight = 296;
    let imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;

    const pdf = new jsPDF('p', 'mm');
    let position = 0;

    pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight
    };
    pdf.save('print.pdf');
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios.get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setAllVolunteers(res.data.volunteer)
      }).catch((error) => {
      console.log(error)
      })
    
    axios.get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
      setVolunteersList(res.data.volunteer)
      }).catch((error) => {
      console.log(error)
    })
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

      <Wrapper>
        <button className='btn btn-success' onClick={handleDownloadPdf}>
          Download PDF
        </button>
        <CSVLink {...csvReport}>
          <button className='btn btn-success'>Export as CSV</button>
        </CSVLink>

        <h4>All Records</h4>
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
      </Wrapper>

      {/* <div className='search-container'>
        <InstantSearch searchClient={searchClient} indexName={index}>
          <Configure hitsPerPage={25} />
          <div className='search-container-child'>
            <h4 className='title'>🕵️ WHAT ARE YOU LOOKING FOR?</h4>
            <SearchBox
              translations={{
                placeholder: 'Enter first name, last name, or email',
              }}
              showLoadingIndicator
            />
          </div>
          <h5 className='no-bottom-margin'>Filters</h5>
          <p className='r2b-blue no-margin'>
            💡 You can combine filters to refine your search results even more
          </p>
          <div className='filters'>
            <div className='filter-children'>
              <p className='r2b-red less-filter'>🌎 State</p>
              <RefinementList attribute='state' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>📅 Events attended</p>
              <RangeInput attribute='events' />
            </div>
          </div>
          <ClearRefinements />
          <h5 className='no-bottom-margin'>🗳️ Political Experience</h5>
          <div className='skills-filters'>
            <div className='filter-children'>
              <p className='r2b-red'>Campaign management</p>
              <MenuSelect attribute='campaignMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Canvassing</p>
              <MenuSelect attribute='canvassing' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Community organizing</p>
              <MenuSelect attribute='communityOrganizing' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Campaign management</p>
              <MenuSelect attribute='campaignMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Elected official (current)</p>
              <MenuSelect attribute='electedOfficialCurr' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Elected official (past)</p>
              <MenuSelect attribute='electedOfficialPast' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Peer-to-Peer texting management</p>
              <MenuSelect attribute='p2pTextingMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Peer-to-Peer texting volunteer</p>
              <MenuSelect attribute='p2pTextingVol' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Phone Banking</p>
              <MenuSelect attribute='phonebanking' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Poll worker</p>
              <MenuSelect attribute='pollWorker' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Postcard planning + management</p>
              <MenuSelect attribute='postcardMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Postcard writing</p>
              <MenuSelect attribute='postcardWriting' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Texting + phone banking script editing</p>
              <MenuSelect attribute='txtPhoneScriptEdit' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Texting + phone banking script writing</p>
              <MenuSelect attribute='txtPhoneScriptWrite' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Texting + phone banking script editing</p>
              <MenuSelect attribute='txtPhoneScriptEdit' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>VAN/Votebuilder experience</p>
              <MenuSelect attribute='vanVoteBuildExp' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Voter registration</p>
              <MenuSelect attribute='voterReg' />
            </div>
          </div>
          <ClearRefinements />
          <h5 className='space-larger no-bottom-margin'>🧑‍🤝‍🧑 Life Experience</h5>
          <div className='skills-filters'>
            <div className='filter-children'>
              <p className='r2b-red'>Actor</p>
              <MenuSelect attribute='actor' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Artist</p>
              <MenuSelect attribute='artist' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Board of Directors</p>
              <MenuSelect attribute='boardOfDirectors' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Data science</p>
              <MenuSelect attribute='dataScience' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Database management</p>
              <MenuSelect attribute='dbMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Editor</p>
              <MenuSelect attribute='editor' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Professor</p>
              <MenuSelect attribute='professor' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Trainer</p>
              <MenuSelect attribute='trainer' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Fundraising</p>
              <MenuSelect attribute='fundraising' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Graphic design</p>
              <MenuSelect attribute='graphicDesign' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Human resources</p>
              <MenuSelect attribute='hr' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Information technology (IT)</p>
              <MenuSelect attribute='it' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Legal (lawyer/paralegal)</p>
              <MenuSelect attribute='legal' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Linguist</p>
              <MenuSelect attribute='linguist' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Messaging/Communications</p>
              <MenuSelect attribute='msgComms' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Musician</p>
              <MenuSelect attribute='musician' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Newsletter creation + design</p>
              <MenuSelect attribute='newsletterCreateDesign' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Newsletter writing</p>
              <MenuSelect attribute='newsletterWrite' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Nonprofit management</p>
              <MenuSelect attribute='nonprofMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Public relations</p>
              <MenuSelect attribute='pr' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Public speaking</p>
              <MenuSelect attribute='publicSpeak' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Recruitment</p>
              <MenuSelect attribute='recruitment' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Research</p>
              <MenuSelect attribute='research' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Second+ language</p>
              <MenuSelect attribute='otherLanguage' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Social media content creation</p>
              <MenuSelect attribute='socialMediaContentCreate' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Social media management</p>
              <MenuSelect attribute='socialMediaMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Speech writer</p>
              <MenuSelect attribute='speechWriter' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Strategic planning</p>
              <MenuSelect attribute='strategicPlanning' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Video editing + creation</p>
              <MenuSelect attribute='videoEditCreate' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Volunteer management</p>
              <MenuSelect attribute='volMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Website design</p>
              <MenuSelect attribute='webDesign' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Website management</p>
              <MenuSelect attribute='webMgmt' />
            </div>
            <div className='filter-children'>
              <p className='r2b-red'>Anything else</p>
              <MenuSelect attribute='anythingElse' />
            </div>
          </div>
          <ClearRefinements />
          <Stats />
          <button className='btn btn-success' onClick={handleDownloadPdf}>
            Download PDF
          </button>
          <div ref={printRef}>
            <Hits hitComponent={Hit} />
          </div>
          <Pagination padding={2} showLast={true} />
        </InstantSearch>
      </div> */}
    </>
  );
}
// const Hit = ({
//   hit,
//   getId,
//   id,
//   deleteHandler,
//   updateVolunteer,
//   objectID,
//   firstName,
//   lastName,
//   email,
//   street,
//   city,
//   state,
//   zip,
//   phone,
//   userId,
//   events,
//   campaignMgmt,
//   canvassing,
//   communityOrganizing,
//   electedOfficialCurr,
//   electedOfficialPast,
//   p2pTextingMgmt,
//   p2pTextingVol,
//   phonebanking,
//   pollWorker,
//   postcardMgmt,
//   postcardWriting,
//   txtPhoneScriptEdit,
//   txtPhoneScriptWrite,
//   vanVoteBuildExp,
//   voterReg,
//   actor,
//   artist,
//   boardOfDirectors,
//   dataScience,
//   dbMgmt,
//   editor,
//   professor,
//   trainer,
//   fundraising,
//   graphicDesign,
//   hr,
//   it,
//   legal,
//   linguist,
//   msgComms,
//   musician,
//   newsletterCreateDesign,
//   newsletterWrite,
//   nonprofMgmt,
//   pr,
//   publicSpeak,
//   recruitment,
//   research,
//   otherLanguage,
//   socialMediaContentCreate,
//   socialMediaMgmt,
//   speechWriter,
//   strategicPlanning,
//   videoEditCreate,
//   volMgmt,
//   webDesign,
//   webMgmt,
//   anythingElse,
// }) => {
  
//   return (
//     <>
//       <OneVolunteer
//         firstName={hit.firstName}
//         lastName={hit.lastName}
//         email={hit.email}
//         street={hit.street}
//         city={hit.city}
//         state={hit.state}
//         zip={hit.zip}
//         phone={hit.phone}
//         userId={hit.userId}
//         events={hit.events}
//         campaignMgmt={hit.campaignMgmt}
//         getId={getId}
//         id={hit.id}
//         deleteHandler={deleteHandler}
//         updateVolunteer={updateVolunteer}
//         objectID={hit.objectID}
//         canvassing={hit.canvassing}
//         communityOrganizing={hit.communityOrganizing}
//         electedOfficialCurr={hit.electedOfficialCurr}
//         electedOfficialPast={hit.electedOfficialPast}
//         p2pTextingMgmt={hit.p2pTextingMgmt}
//         p2pTextingVol={hit.p2pTextingVol}
//         phonebanking={hit.phonebanking}
//         pollWorker={hit.pollWorker}
//         postcardMgmt={hit.postcardMgmt}
//         postcardWriting={hit.postcardWriting}
//         txtPhoneScriptEdit={hit.txtPhoneScriptEdit}
//         txtPhoneScriptWrite={hit.txtPhoneScriptWrite}
//         vanVoteBuildExp={hit.vanVoteBuildExp}
//         voterReg={hit.voterReg}
//         actor={hit.actor}
//         artist={hit.artist}
//         boardOfDirectors={hit.boardOfDirectors}
//         dataScience={hit.dataScience}
//         dbMgmt={hit.dbMgmt}
//         editor={hit.editor}
//         professor={hit.professor}
//         trainer={hit.trainer}
//         fundraising={hit.fundraising}
//         graphicDesign={hit.graphicDesign}
//         hr={hit.hr}
//         it={hit.it}
//         legal={hit.legal}
//         linguist={hit.linguist}
//         msgComms={hit.msgComms}
//         musician={hit.musician}
//         newsletterCreateDesign={hit.newsletterCreateDesign}
//         newsletterWrite={hit.newsletterWrite}
//         nonprofMgmt={hit.nonprofMgmt}
//         pr={hit.pr}
//         publicSpeak={hit.publicSpeak}
//         recruitment={hit.recruitment}
//         research={hit.research}
//         otherLanguage={hit.otherLanguage}
//         socialMediaContentCreate={hit.socialMediaContentCreate}
//         socialMediaMgmt={hit.socialMediaMgmt}
//         speechWriter={hit.speechWriter}
//         strategicPlanning={hit.strategicPlanning}
//         videoEditCreate={hit.videoEditCreate}
//         volMgmt={hit.volMgmt}
//         webDesign={hit.webDesign}
//         webMgmt={hit.webMmgmt}
//         anythingElse={hit.anythingElse}
//       />
//     </>
//   );
// };
