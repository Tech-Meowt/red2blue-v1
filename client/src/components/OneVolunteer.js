import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, StateSelect } from '../components';
import Modal from 'react-modal';
import { FaRegAddressCard } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';
import { MdOutlineEventAvailable } from 'react-icons/md'
import { IoPersonOutline } from 'react-icons/io5'
import { BsCheck2All } from 'react-icons/bs'

const OneVolunteer = ({
  id,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  userId,
  events,
  // campaignMgmt,
  // canvassing,
  // communityOrganizing,
  // electedOfficialCurr,
  // electedOfficialPast,
  // p2pTextingMgmt,
  // p2pTextingVol,
  // phonebanking,
  // pollWorker,
  // postcardMgmt,
  // postcardWriting,
  // txtPhoneScriptEdit,
  // txtPhoneScriptWrite,
  // vanVoteBuildExp,
  // voterReg,
  actor,
  artist,
  boardOfDirectors,
  dataScience,
  dbMgmt,
  editor,
  professor,
  trainer,
  fundraising,
  graphicDesign,
  hr,
  it,
  legal,
  linguist,
  msgComms,
  musician,
  newsletterCreateDesign,
  newsletterWrite,
  nonprofMgmt,
  pr,
  publicSpeak,
  recruitment,
  research,
  otherLanguage,
  socialMediaContentCreate,
  socialMediaMgmt,
  speechWriter,
  strategicPlanning,
  videoEditCreate,
  volMgmt,
  webDesign,
  webMgmt,
  anythingElse,
  politicalSkills,
  lifeSkills
}) => {
  const initialState = {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    userId,
    // campaignMgmt,
    // canvassing,
    // communityOrganizing,
    // electedOfficialCurr,
    // electedOfficialPast,
    // p2pTextingMgmt,
    // p2pTextingVol,
    // phonebanking,
    // pollWorker,
    // postcardMgmt,
    // postcardWriting,
    // txtPhoneScriptEdit,
    // txtPhoneScriptWrite,
    // vanVoteBuildExp,
    // voterReg,
    actor,
    artist,
    boardOfDirectors,
    dataScience,
    dbMgmt,
    editor,
    professor,
    trainer,
    fundraising,
    graphicDesign,
    hr,
    it,
    legal,
    linguist,
    msgComms,
    musician,
    newsletterCreateDesign,
    newsletterWrite,
    nonprofMgmt,
    pr,
    publicSpeak,
    recruitment,
    research,
    otherLanguage,
    socialMediaContentCreate,
    socialMediaMgmt,
    speechWriter,
    strategicPlanning,
    videoEditCreate,
    volMgmt,
    webDesign,
    webMgmt,
    anythingElse,
    politicalSkills,
    lifeSkills,
  };
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [basicClicked, setBasicClicked] = useState(false);
  const [showBasicEditForm, setShowBasicEditForm] = useState(false);
  const [values, setValues] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // eslint-disable-next-line
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    userId,
    events,
    politicalSkills,
  });

  const getId = (e) => {
    const id = e.target.name;
    console.log(id);
    setClicked(true);
    setBasicClicked(true);
  };

  const basicHide = (e) => {
    setBasicClicked(false);
    setClicked(false);
  };

  const showEditFormBasic = (e) => {
    e.preventDefault();

    setShowBasicEditForm(true);
  };

  const handleBasicCancel = (e) => {
    e.preventDefault();

    setBasicClicked(false);
    setClicked(false);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const updateVolunteer = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/volunteer/${id}`, values)
      .then((res) => {
        setNewValues(res.data.volunteer);
      });
    setShowAlert(true);
    setAlertText('Update successful!');
    setAlertType('success');
    closeModal(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000).catch((error) => {
      console.log(error);
      setShowAlert(true);
      setAlertText('There was an error. Please try again...');
      setAlertType('danger');
    });
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/v1/volunteer/${e.target.name}`)
      .then((res) => {
        setValues(res.data);
      });
    setShowAlert(true);
    setAlertText('Delete successful!');
    setAlertType('success');
    closeModal(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000).catch((error) => {
      console.log(error);
      setShowAlert(true);
      setAlertText('There was an error. Please try again...');
      setAlertType('danger');
    });
  };

  return (
    <>
      <OneRecordWrapper>
        {showAlert && (
          <div className={`alert alert-${alertType}`}>{alertText}</div>
        )}
        <header>
          <div className='main-icon capitalize'>{firstName.charAt(0)}</div>
          <div className='info'>
            <h5 className='capitalize'>
              {firstName} {lastName}
            </h5>
            <p className='lowercase'>{email}</p>
          </div>
        </header>
        <div className='content'>
          <div className='content-center'>
            <div>
              <FaRegAddressCard className='icon' />
              Address:{' '}
              <span className='status capitalize'>
                {street !== null ? ` ${street}` : `Street not provided`}
              </span>
              <div className='address'>
                <p className='status'>
                  {city !== null ? ` ${city},` : `City not provided—`}
                  {state !== null ? ` ${state}` : `State not provided`}
                </p>
                <p className='status'>
                  {zip !== null ? `${zip}` : `Zip code not provided`}
                </p>
              </div>
            </div>
            <div>
              <AiOutlinePhone className='icon' />
              Phone:{' '}
              {phone !== null ? (
                <span className='status'> {phone}</span>
              ) : (
                <span className='status'> Phone number not provided</span>
              )}
            </div>
            <div>
              <FiDatabase className='icon' />
              Database User:{' '}
              {userId !== null ? (
                <span className='status'> Yes</span>
              ) : (
                <span className='status'> No</span>
              )}
            </div>
            <div>
              <MdOutlineEventAvailable className='icon' />
              Events Attended:{' '}
              {events >= 1 ? (
                <span className='status'> {events - 1}</span>
              ) : (
                <span className='status'> {0}</span>
              )}
            </div>
          </div>
          <footer>
            <div className='actions'>
              {!clicked && (
                <>
                  <button className='btn edit-btn' name={id} onClick={getId}>
                    Details
                  </button>
                  <button
                    type='button'
                    className='btn delete-btn'
                    name={id}
                    onClick={openModal}
                  >
                    Delete
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(140, 141, 143, .75)',
                      },
                      content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '5px',
                        outline: 'none',
                        padding: '20px',
                        width: '500px',
                        height: '250px',
                      },
                    }}
                  >
                    <h3 className='modal-header'>
                      🚨 Heads up! Are you sure you want to{' '}
                      <span className='r2b-red'>permanently </span>
                      delete this record?
                    </h3>
                    <div className='confirm-btns'>
                      <button
                        onClick={closeModal}
                        className='btn-success height'
                      >
                        Cancel
                      </button>
                      <button
                        onClick={deleteHandler}
                        className='btn-danger height'
                        name={id}
                      >
                        Delete
                      </button>
                    </div>
                  </Modal>
                </>
              )}
              {basicClicked && (
                <>
                  <h4 className='space'>Basic Information</h4>

                  <div className='content-center'>
                    <div>
                      <IoPersonOutline className='icon' />
                      Name:{' '}
                      <span className='status capitalize'>
                        {firstName} {lastName}
                      </span>
                    </div>
                    <div>
                      <AiOutlineMail className='icon' />
                      Email: <span className='status'>{email}</span>
                    </div>
                    <div>
                      <AiOutlinePhone className='icon' />
                      Phone:{' '}
                      <span className='status'>
                        {phone !== null ? ` ${phone}` : `Phone not provided`}
                      </span>
                    </div>
                    <div>
                      <FaRegAddressCard className='icon' />
                      Address:{' '}
                      <span className='status capitalize'>
                        {street !== null ? ` ${street}` : `Street not provided`}
                      </span>
                      <div className='address'>
                        <p className='status'>
                          {city !== null ? ` ${city},` : `City not provided—`}
                          {state !== null ? ` ${state}` : `State not provided`}
                        </p>
                        <p className='status'>
                          {zip !== null ? `${zip}` : `Zip code not provided`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer>
                    <div className='actions'>
                      <button
                        className='btn edit-btn'
                        name={id}
                        onClick={showEditFormBasic}
                      >
                        Edit
                      </button>

                      <button
                        className='btn delete-btn'
                        name={id}
                        onClick={basicHide}
                      >
                        Hide
                      </button>
                    </div>
                    <>
                      <h4 className='space'>Political Skills</h4>
                      <div className='content-center-skills'>
                        <div>
                          ✔️ Campaign Management:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.campaignMgmt}
                          </p>
                        </div>
                        <div>
                          ✔️ Canvassing:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.canvassing}
                          </p>
                        </div>
                        <div>
                          ✔️ Community Organizing:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.communityOrganizing}
                          </p>
                        </div>
                        <div>
                          ✔️ Elected Official (Current):{' '}
                          <p className='status no-margin'>
                            {politicalSkills.electedOfficialCurr}
                          </p>
                        </div>
                        <div>
                          ✔️ Elected Official (Past):{' '}
                          <p className='status no-margin'>
                            {politicalSkills.electedOfficialPast}
                          </p>
                        </div>
                        <div>
                          ✔️ Peer-to-Peer Texting Management:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.p2pTextingMgmt}
                          </p>
                        </div>
                        <div>
                          ✔️ Peer-to-Peer Texting Volunteer:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.p2pTextingVol}
                          </p>
                        </div>
                        <div>
                          ✔️ Phone Banking:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.phonebanking}
                          </p>
                        </div>
                        <div>
                          ✔️ Poll Worker:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.pollWorker}
                          </p>
                        </div>
                        <div>
                          ✔️ Postcard Planning + Management:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.postcardMgmt}
                          </p>
                        </div>
                        <div>
                          ✔️ Postcard Writing:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.postcardWriting}
                          </p>
                        </div>
                        <div>
                          ✔️ Peer-to-Peer Texting Volunteer:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.p2pTextingVol}
                          </p>
                        </div>
                        <div>
                          ✔️ Texting + Phone Banking Script Editing:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.txtPhoneScriptEdit}
                          </p>
                        </div>
                        <div>
                          ✔️ Texting + Phone Banking Script Writing:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.txtPhoneScriptWrite}
                          </p>
                        </div>
                        <div>
                          ✔️ VAN/Votebuilder Experience:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.vanVoteBuildExp}
                          </p>
                        </div>
                        <div>
                          ✔️ Voter Registration:{' '}
                          <p className='status no-margin'>
                            {politicalSkills.voterReg}
                          </p>
                        </div>
                      </div>
                    </>
                    <hr />
                    <>
                      <h4 className='space'>Life Skills</h4>
                      <div className='content-center-skills'>
                        <div>
                          Actor/Actress:{' '}
                          <p className='status no-margin'>{actor}</p>
                        </div>
                        <div>
                          ✔️ Artist:{' '}
                          <p className='status no-margin'>{artist}</p>
                        </div>
                        <div>
                          ✔️ Board of Directors:{' '}
                          <p className='status no-margin'>{boardOfDirectors}</p>
                        </div>
                        <div>
                          ✔️ Data Science:{' '}
                          <p className='status no-margin'>{dataScience}</p>
                        </div>
                        <div>
                          ✔️ Database Management:{' '}
                          <p className='status no-margin'>{dbMgmt}</p>
                        </div>
                        <div>
                          ✔️ Editor:{' '}
                          <p className='status no-margin'>{editor}</p>
                        </div>
                        <div>
                          ✔️ Educator: Teacher/Professor:{' '}
                          <p className='status no-margin'>{professor}</p>
                        </div>
                        <div>
                          ✔️ Educator: Trainer:{' '}
                          <p className='status no-margin'>{trainer}</p>
                        </div>
                        <div>
                          ✔️ Fundraising:{' '}
                          <p className='status no-margin'>{fundraising}</p>
                        </div>
                        <div>
                          ✔️ Graphic Design:{' '}
                          <p className='status no-margin'>{graphicDesign}</p>
                        </div>
                        <div>
                          ✔️ Human Resources:{' '}
                          <p className='status no-margin'>{hr}</p>
                        </div>
                        <div>
                          ✔️ Information Technology:{' '}
                          <p className='status no-margin'>{it}</p>
                        </div>
                        <div>
                          ✔️ Legal: Lawyer/Paralegal:{' '}
                          <p className='status no-margin'>{legal}</p>
                        </div>
                        <div>
                          ✔️ Linguist:{' '}
                          <p className='status no-margin'>{linguist}</p>
                        </div>
                        <div>
                          ✔️ Messaging/Communications:{' '}
                          <p className='status no-margin'>{msgComms}</p>
                        </div>
                        <div>
                          ✔️ Musician:{' '}
                          <p className='status no-margin'>{musician}</p>
                        </div>
                        <div>
                          ✔️ Newsletter Creation + Design:{' '}
                          <p className='status no-margin'>
                            {newsletterCreateDesign}
                          </p>
                        </div>
                        <div>
                          ✔️ Nonprofit Management:{' '}
                          <p className='status no-margin'>{nonprofMgmt}</p>
                        </div>
                        <div>
                          ✔️ Public Relations:{' '}
                          <p className='status no-margin'>{pr}</p>
                        </div>
                        <div>
                          ✔️ Public Speaker:{' '}
                          <p className='status no-margin'>{publicSpeak}</p>
                        </div>
                        <div>
                          ✔️ Recruitment:{' '}
                          <p className='status no-margin'>{recruitment}</p>
                        </div>
                        <div>
                          ✔️ Research:{' '}
                          <p className='status no-margin'>{research}</p>
                        </div>
                        <div>
                          ✔️ Second+ Language:{' '}
                          <p className='status no-margin'>{otherLanguage}</p>
                        </div>
                        <div>
                          ✔️ Social Media Content Creation:{' '}
                          <p className='status no-margin'>
                            {socialMediaContentCreate}
                          </p>
                        </div>
                        <div>
                          ✔️ Social Media Management:{' '}
                          <p className='status no-margin'>{socialMediaMgmt}</p>
                        </div>
                        <div>
                          ✔️ Speech Writer:{' '}
                          <p className='status no-margin'>{speechWriter}</p>
                        </div>
                        <div>
                          ✔️ Strategic Planning:{' '}
                          <p className='status no-margin'>
                            {strategicPlanning}
                          </p>
                        </div>
                        <div>
                          ✔️ Video Editing/Creating:{' '}
                          <p className='status no-margin'>{videoEditCreate}</p>
                        </div>
                        <div>
                          ✔️ Volunteer Management:{' '}
                          <p className='status no-margin'>{volMgmt}</p>
                        </div>
                        <div>
                          ✔️ Website Design:{' '}
                          <p className='status no-margin'>{webDesign}</p>
                        </div>
                        <div>
                          ✔️ Website Management:{' '}
                          <p className='status no-margin'>{webMgmt}</p>
                        </div>
                        <div>
                          ✔️ Anything Else:{' '}
                          <p className='status no-margin'>{anythingElse}</p>
                        </div>
                      </div>
                    </>
                  </footer>

                  {showBasicEditForm && (
                    <>
                      <h3 className='space'>Edit Basic Information</h3>
                      <p className='instructions'>
                        Update <span className='emphasis'>only</span> the fields
                        that you wish to change.{' '}
                        <span className='r2b-red'>**PLEASE NOTE**</span> If you
                        are <span className='emphasis'>not</span> adding a new
                        event, you{' '}
                        <span className='emphasis'>must enter none</span> or the
                        record <span className='emphasis'>will not update</span>{' '}
                        in the database.
                      </p>
                      {showAlert && (
                        <div className={`alert alert-${alertType}`}>
                          {alertText}
                        </div>
                      )}
                      <Modal
                        isOpen={modalIsOpen}
                        style={{
                          overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(140, 141, 143, .75)',
                          },
                          content: {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '5px',
                            outline: 'none',
                            padding: '20px',
                            width: '500px',
                            height: '250px',
                          },
                        }}
                      >
                        <h3 className='modal-header'>
                          🚨 Heads up! If you{' '}
                          <span className='r2b-red'>
                            did not add a new event
                          </span>
                          , make sure to enter{' '}
                          <span className='r2b-red'>none</span> in the Add New
                          Event field.
                        </h3>
                        <div className='confirm-btns'>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              updateVolunteer(id);
                            }}
                            className='btn-success height'
                            name={id}
                            type='button'
                          >
                            Update
                          </button>
                          <button
                            onClick={closeModal}
                            className='btn-danger height'
                          >
                            Go back
                          </button>
                        </div>
                      </Modal>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                      >
                        <div className='content-centered content-center'>
                          <div className='r2b-red'>
                            <FormRow
                              placeholder='Enter event name OR enter none'
                              type='text'
                              name='events'
                              labelText={'**Add new event**'}
                              value={values.events}
                              handleChange={handleChange}
                            />
                          </div>
                          <FormRow
                            placeholder='Enter first name'
                            type='text'
                            name='firstName'
                            labelText={'First name'}
                            value={values.firstName}
                            handleChange={handleChange}
                          />
                          <FormRow
                            placeholder='Enter last name'
                            type='text'
                            name='lastName'
                            labelText={'Last name'}
                            value={values.lastName}
                            handleChange={handleChange}
                          />
                          <FormRow
                            placeholder='Enter email'
                            type='email'
                            name='email'
                            labelText={'Email'}
                            value={values.email}
                            handleChange={handleChange}
                          />
                          <FormRow
                            placeholder='Enter street'
                            type='text'
                            name='street'
                            labelText={'Street'}
                            value={values.street}
                            handleChange={handleChange}
                          />
                          <FormRow
                            placeholder='Enter city'
                            type='text'
                            name='city'
                            labelText={'City'}
                            value={values.city}
                            handleChange={handleChange}
                          />
                          <StateSelect
                            value={values.state}
                            handleChange={handleChange}
                          />
                          <FormRow
                            placeholder='Enter zip'
                            type='text'
                            name='zip'
                            labelText={'Zip'}
                            value={values.zip}
                            handleChange={handleChange}
                          />
                          <FormRow
                            placeholder='555-555-5555'
                            type='text'
                            name='phone'
                            labelText={'Phone'}
                            value={values.phone}
                            handleChange={handleChange}
                          />
                        </div>
                        <button type='submit' className='btn edit-btn'>
                          Submit
                        </button>
                        <button
                          className='btn delete-btn'
                          onClick={handleBasicCancel}
                        >
                          Cancel
                        </button>
                      </form>
                    </>
                  )}
                </>
              )}
            </div>
          </footer>
        </div>
      </OneRecordWrapper>
    </>
  );
};

export default OneVolunteer
