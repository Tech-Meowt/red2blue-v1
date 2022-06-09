import sandbox from '../../assets/images/sandbox.jpeg'
import enter from '../../assets/images/enter-sign.png'
import { Link } from 'react-router-dom';
import { Banner, ScrollButtonDown, ScrollButtonUp } from '../../components';
import { useState, useEffect } from 'react';

export default function Sandbox() {
  const[targetId, setTargetId] = useState('scroll-up');
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <div id='scroll-up'></div>
      <ScrollButtonUp targetId={targetId} />
      <Banner />
      <div className='sandbox-div'>
        <h3>👋 Welcome to the sandbox!</h3>
        <img src={sandbox} alt='sandbox' className='img sandbox-img' />
        <h3>What's a sandbox?</h3>
        <h3 className='black'>
          💻 A sandbox is a place for you to get familiar with the database. It
          contains dummy data, and it's a safe space for you to learn and
          practice any time that you want without having to worry about "messing
          anything up." Each sandbox page will be identified with a banner like
          the one above.
          <br /> <br />
          😕 Feeling a little lost? Not sure where to start? Check out the{' '}
          <Link to={'/help/getting-started'}>
            <h3 className='r2b-blue inline'>Getting Started</h3>
          </Link>{' '}
          portion of the Help Section.
        </h3>
        <Link to={'/sandbox/home'}>
          <img src={enter} alt="green enter sign" />
        </Link>
      </div>
      <ScrollButtonDown targetIdDown={targetIdDown} />
      <div id='scroll-down'></div>
    </>
  );
}
