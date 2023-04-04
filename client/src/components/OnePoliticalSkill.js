import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormRow, StateSelect } from '.';
import { ImPointRight } from 'react-icons/im';

const OnePoliticalSkill = ({
  id,
  firstName,
  lastName,
  email,
  campaignMgmt,
  canvassing,
  communityOrganizing,
  electedOfficialCurr,
  electedOfficialPast,
  p2pTextingMgmt,
  p2pTextingVol,
  phonebanking,
  pollWorker,
  postcardMgmt,
  postcardWriting,
  txtPhoneScriptEdit,
  txtPhoneScriptWrite,
  vanVoteBuildExp,
  voterReg,
}) => {
  const initialState = {
    firstName,
    lastName,
    email,
    campaignMgmt,
    canvassing,
    communityOrganizing,
    electedOfficialCurr,
    electedOfficialPast,
    p2pTextingMgmt,
    p2pTextingVol,
    phonebanking,
    pollWorker,
    postcardMgmt,
    postcardWriting,
    txtPhoneScriptEdit,
    txtPhoneScriptWrite,
    vanVoteBuildExp,
    voterReg,
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
    campaignMgmt,
    canvassing,
    communityOrganizing,
    electedOfficialCurr,
    electedOfficialPast,
    p2pTextingMgmt,
    p2pTextingVol,
    phonebanking,
    pollWorker,
    postcardMgmt,
    postcardWriting,
    txtPhoneScriptEdit,
    txtPhoneScriptWrite,
    vanVoteBuildExp,
    voterReg,
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

  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000';
  } else {
    baseURL = 'https://r2bdb.herokuapp.com';
  }

  const updatePolSkill = (id) => {
    axios.patch(baseURL + `/api/v1/political/${id}`, values).then((res) => {
      setNewValues(res.data.politicalSkills);
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
    axios.delete(baseURL + `/api/v1/political/${e.target.name}`).then((res) => {
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
            <h5>Political Skills</h5>
            <div className='content-center'>
              <div>
                <ImPointRight className='icon' />
                Campaign management:{' '}
                <span className='status'>{campaignMgmt}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Canvassing: <span className='status'>{canvassing}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Community organizing:{' '}
                <span className='status'>{communityOrganizing}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Elected official (current):{' '}
                <span className='status'>{electedOfficialCurr}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Elected official (past):{' '}
                <span className='status'>{electedOfficialPast}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Peer-to-peer texting management:{' '}
                <span className='status'>{p2pTextingMgmt}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Peer-to-peer texting volunteer:{' '}
                <span className='status'>{p2pTextingVol}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Phone banking: <span className='status'>{phonebanking}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Poll worker: <span className='status'>{pollWorker}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Postcard planning + management:{' '}
                <span className='status'>{postcardMgmt}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Postcard writing:{' '}
                <span className='status'>{postcardWriting}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Texting + phone banking script editing:{' '}
                <span className='status'>{txtPhoneScriptEdit}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Texting + phone banking script writing:{' '}
                <span className='status'>{txtPhoneScriptWrite}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                VAN/Votebuilder experience:{' '}
                <span className='status'>{vanVoteBuildExp}</span>
              </div>
              <div>
                <ImPointRight className='icon' />
                Voter registration: <span className='status'>{voterReg}</span>
              </div>
            </div>
          </div>
        )}
      </OneRecordWrapper>
    </>
  );
};

export default OnePoliticalSkill;
