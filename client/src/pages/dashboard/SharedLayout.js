import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, BigSidebar, SmallSidebar, ScrollButtonUp, ScrollButtonDown } from '../../components'
import { useEffect, useState } from 'react';

const SharedLayout = () => {
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
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
      <ScrollButtonDown targetIdDown={targetIdDown}/>
      <div id='scroll-down'></div>
    </Wrapper>
  );
}

export default SharedLayout
