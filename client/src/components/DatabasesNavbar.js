import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import { useState } from 'react';

const DatabasesNavbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, logoutUser, user } = useAppContext();

  const str = user.firstName;

  return (
    <Wrapper>
      <div className='nav-center'>
        <div onClick={toggleSidebar}>
          <FaAlignLeft className='toggle-btn' />
        </div>

        <h1 className='logo-text r2b-blue'>📊 Your Databases</h1>

        <div className='btn-container'>
          <button
            type='button'
            className='button'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {str}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DatabasesNavbar;
