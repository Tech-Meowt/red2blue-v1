import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { SandboxNavbar, BigSidebar, SmallSidebar, ScrollButtonDown, ScrollButtonUp } from '../../components';
import { useState, useEffect } from 'react'

const SharedLayoutSandbox = () => {
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
          <SandboxNavbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
      <ScrollButtonDown targetIdDown={targetIdDown} />
      <div id='scroll-down'></div>
    </Wrapper>
  );
};

export default SharedLayoutSandbox;
