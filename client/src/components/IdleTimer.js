import { useEffect, useState, useRef, useCallback } from 'react';
import { useAppContext } from '../context/appContext';
import moment from 'moment';
import Modal from 'react-modal';

export default function IdleTimer() {
  const [events, setEvents] = useState([
    'click',
    'load',
    'scroll',
    'keyup',
    'keydown',
    'keypress',
    'mousemove',
    'wheel',
  ]);
  const [second, setSecond] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { logoutUser, user } = useAppContext();

  let timeStamp;
  let warningInactiveInterval = useRef();
  let startTimerInterval = useRef();

  // start inactive check
  let timeChecker = () => {
    startTimerInterval.current = setTimeout(() => {
      let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
      warningInactive(storedTimeStamp);
    }, 60000);
  };

  // warning timer
  let warningInactive = (timeString) => {
    clearTimeout(startTimerInterval.current);

    warningInactiveInterval.current = setInterval(() => {
      const maxTime = 15;
      const popTime = 1;

      const diff = moment.duration(moment().diff(moment(timeString)));
      const minPast = diff.minutes();
      const leftSecond = 60 - diff.seconds();

      if (minPast === popTime) {
        setSecond(leftSecond);
        setModalIsOpen(true);
      }

      if (minPast === maxTime) {
        clearInterval(warningInactiveInterval.current);
        setModalIsOpen(false);
        sessionStorage.removeItem('lastTimeStamp');
        logoutUser();
      }
    }, 1000);
  };

  // reset interval timer
  let resetTimer = useCallback(() => {
    clearTimeout(startTimerInterval.current);
    clearInterval(warningInactiveInterval.current);

    if (user) {
      timeStamp = moment();
      sessionStorage.setItem('lastTimeStamp', timeStamp);
    } else {
      clearInterval(warningInactiveInterval.current);
      sessionStorage.removeItem('lastTimeStamp');
    }
    timeChecker();
    setModalIsOpen(false);
  }, [user]);

  // handle close popup
  const handleClose = () => {
    setModalIsOpen(false);

    resetTimer();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    timeChecker();

    return () => {
      clearTimeout(startTimerInterval.current);
      resetTimer();
    };
  }, [resetTimer, events, timeChecker]);

  console.log(second);

  if (!modalIsOpen) {
    return null;
  }
  
  return (
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
        🚨 Heads up! You will be logged out due to inactivity in{' '}
        <span className='r2b-red'>{second} </span>
        seconds.
      </h3>
      <div className='confirm-btns'>
        <button onClick={handleClose} className='btn-success height'>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
