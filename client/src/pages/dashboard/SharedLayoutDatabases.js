import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { DatabasesNavbar, BigSidebar, SmallSidebar, ScrollButtonUp, ScrollButtonDown } from '../../components';
import { useState, useEffect } from 'react';


const SharedLayoutDatabases = () => {
  const [targetId, setTargetId] = useState('scroll-up');
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
          <DatabasesNavbar />
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

export default SharedLayoutDatabases;
