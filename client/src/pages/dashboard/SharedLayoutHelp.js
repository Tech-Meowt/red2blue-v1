import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { HelpNavbar, BigSidebar, SmallSidebar, ScrollButtonUp, ScrollButtonDown } from '../../components';
import { useState, useEffect } from 'react';

const SharedLayoutHelp = () => {
  // eslint-disable-next-line
  const [targetId, setTargetId] = useState('scroll-up');
  // eslint-disable-next-line
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Wrapper>
      <main className='dashboard' id='scroll-up'>
        <ScrollButtonUp targetId={targetId} />
        <SmallSidebar />
        <BigSidebar />
        <div>
          <HelpNavbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
      <div id='scroll-down'></div>
      <ScrollButtonDown targetIdDown={targetIdDown} />
    </Wrapper>
  );
};

export default SharedLayoutHelp;
