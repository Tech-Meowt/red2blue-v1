import { useState } from 'react';
import links from '../utils/links';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext'
import { ImProfile } from 'react-icons/im';
import { FiHelpCircle } from 'react-icons/fi'
import { SiCodesandbox } from 'react-icons/si';

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext()
  const [admin, setAdmin] = useState(user.isAdmin)

  const handleClick = () => {

  }

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className='icon'>{icon}</span>

            {text}
          </NavLink>
        );
      })}
      {admin === 'yes' && (
        <NavLink
          to='/user-accounts'
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <span className='icon'>
            <ImProfile />
          </span>
          User Accounts
        </NavLink>
      )}
      <NavLink
        to='/help'
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        <span className='icon'>
          <FiHelpCircle />
        </span>
        Help
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        <span className='icon'>
          <SiCodesandbox />
        </span>
        Sandbox
      </NavLink>
    </div>
  );
}

export default NavLinks
