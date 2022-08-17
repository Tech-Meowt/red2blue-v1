import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, StateSelect } from '.';
import { ImPointRight } from 'react-icons/im';

const OneLifeSkill = ({
  id,
  firstName,
  lastName,
  email,
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
}) => {
  const initialState = {
    firstName,
    lastName,
    email,
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
  };

  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [basicClicked, setBasicClicked] = useState(false);
  const [showBasicEditForm, setShowBasicEditForm] = useState(false);
  const [values, setValues] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // eslint-disable-next-line
  const [newValues, setNewValues] = useState({
    firstName,
    lastName,
    email,
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
  });

  const hideAll = (e) => {
    const id = e.target.name;
    console.log(id);
    setHidden(!hidden);
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

  const updateLifeSkill = (id) => {
    axios
      .patch(`http://localhost:8000/api/v1/life/${id}`, values)
      .then((res) => {
        setNewValues(res.data.lifeSkills);
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
      .delete(`http://localhost:8000/api/v1/life/${e.target.name}`)
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
      <footer className='content no-margin'>
        <div className='actions'>
          {hidden && (
            <button className='button' name={id} onClick={hideAll}>
              View Skills
            </button>
          )}
          {!hidden && (
            <button className='button delete-btn' name={id} onClick={hideAll}>
              Hide
            </button>
          )}
        </div>
      </footer>
      {!hidden && (
        <div className='content'>
          <h5>Life Skills</h5>
          <div className='content-center'>
            <div>
              <ImPointRight className='icon' />
              Actor/Actress: <span className='status'>{actor}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Artist: <span className='status'>{artist}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Board of Directors:{' '}
              <span className='status'>{boardOfDirectors}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Data science: <span className='status'>{dataScience}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Database management <span className='status'>{dbMgmt}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Editor: <span className='status'>{editor}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Educator | Teacher/Professor:{' '}
              <span className='status'>{professor}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Educator | Trainer: <span className='status'>{trainer}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Fundraising: <span className='status'>{fundraising}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Graphic design: <span className='status'>{graphicDesign}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Human resources: <span className='status'>{hr}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Information technology (IT): <span className='status'>{it}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Legal | Lawyer/Paralegal: <span className='status'>{legal}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Linguist: <span className='status'>{linguist}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Messaging/Communications:{' '}
              <span className='status'>{msgComms}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Musician: <span className='status'>{musician}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Newsletter creation + design:{' '}
              <span className='status'>{newsletterCreateDesign}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Newsletter writing (content):{' '}
              <span className='status'>{newsletterWrite}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Nonprofit management:{' '}
              <span className='status'>{nonprofMgmt}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Public relations: <span className='status'>{pr}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Public speaker: <span className='status'>{publicSpeak}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Recruitment: <span className='status'>{recruitment}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Research: <span className='status'>{research}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Second (or more) language:{' '}
              <span className='status'>{otherLanguage}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Social media content creation:{' '}
              <span className='status'>{socialMediaContentCreate}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Social media management:{' '}
              <span className='status'>{socialMediaMgmt}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Speech writer: <span className='status'>{speechWriter}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Strategic planning:{' '}
              <span className='status'>{strategicPlanning}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Video editing/creation:{' '}
              <span className='status'>{videoEditCreate}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Volunteer management: <span className='status'>{volMgmt}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Website design: <span className='status'>{webDesign}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Website management: <span className='status'>{webMgmt}</span>
            </div>
            <div>
              <ImPointRight className='icon' />
              Anything else:{' '}
              <span className='status'>{anythingElse}</span>
            </div>
          </div>
        </div>
      )}
    </OneRecordWrapper>
  );
};

export default OneLifeSkill;
