import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { ProfileNavbar, BigSidebar, SmallSidebar } from '../../components';

const SharedLayoutProfile = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <ProfileNavbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayoutProfile;
