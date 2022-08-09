import OneRecordWrapper from '../assets/wrappers/OneRecordWrapper';
import { useState } from 'react';
import axios from 'axios';
import { EventDetails } from '.';
import Modal from 'react-modal';
import { BiCategory } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';

const OneEvent = ({
  _id,
  eventName,
  eventType,
  eventDate,
  eventYear,
  // volunteers,
}) => {
  // eslint-disable-next-line
  const initialState = {
    eventName,
    eventType,
    eventDate,
    eventYear,
    // volunteers,
  };
  const [alertText, setAlertText] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [detailClicked, setDetailClicked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // eslint-disable-next-line
  const [newValues, setNewValues] = useState({
    eventName,
    eventType,
    eventDate,
    eventYear,
    // volunteers,
  });

  const getId = (e) => {
    const id = e.target.name;
    console.log(id);
    setClicked(!clicked);
  };

  const getIdDetails = (e) => {
    setDetailClicked(!detailClicked);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/v1/event/${e.target.name}`)
      .then((res) => {
        setNewValues(res.data);
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
          <div className='main-icon capitalize'>
            <FaBriefcase />
          </div>
          <div className='info'>
            <h5 className='capitalize r2b-blue'>{eventName}</h5>
          </div>
        </header>
        <div className='content'>
          <div className='event-content'>
            {/* <div>
              <HiUserGroup className='icon' />
              Volunteers: <span className='status'>{volunteers.length}</span>
            </div> */}
            <div>
              <BiCategory className='icon' />
              Event Type: <span className='status'>{eventType}</span>
            </div>
            <div>
              <BsCalendarDate className='icon' />
              Event Date:{' '}
              {eventDate !== '' ? (
                <span className='status'>{eventDate}</span>
              ) : (
                <span className='status'> Date not provided</span>
              )}
            </div>
          </div>
          <footer>
            <div className='actions'>
              {!detailClicked && (
                <>
                  <button
                    className='details-btn btn'
                    name={_id}
                    onClick={getIdDetails}
                  >
                    Details
                  </button>
                  <button className='btn edit-btn' name={_id} onClick={getId}>
                    Edit
                  </button>
                  <button
                    type='button'
                    className='btn delete-btn'
                    name={_id}
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
                        name={_id}
                      >
                        Delete
                      </button>
                    </div>
                  </Modal>
                </>
              )}
              <EventDetails
                eventName={eventName}
                eventType={eventType}
                eventDate={eventDate}
                eventYear={eventYear}
                // volunteers={volunteers}
              />
            </div>
          </footer>
        </div>
      </OneRecordWrapper>
    </>
  );
};

export default OneEvent;
