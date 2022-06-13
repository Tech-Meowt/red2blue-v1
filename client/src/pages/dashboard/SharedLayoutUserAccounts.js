import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { UserAccountsNavbar, BigSidebar, SmallSidebar, ScrollButtonDown, ScrollButtonUp } from '../../components';
import { useEffect, useState } from 'react';

const SharedLayoutUserAccounts = () => {
  const [targetId, setTargetId] = useState('scroll-up');
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Wrapper>
      <main className='dashboard' id='scroll-up'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <UserAccountsNavbar />
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

export default SharedLayoutUserAccounts;
