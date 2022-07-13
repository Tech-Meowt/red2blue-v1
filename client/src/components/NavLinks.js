import links from '../utils/links';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { ImProfile } from 'react-icons/im';
import { FiHelpCircle } from 'react-icons/fi';
import { SiCodesandbox } from 'react-icons/si';
import { ImNotification } from 'react-icons/im';

const NavLinks = ({ toggleSidebar }) => {
  const [dbUsers, setDbUsers] = useState([]);
  const [notification, setNotification] = useState();
  const { user } = useAppContext();
  const role = user.role;

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/auth/allUsers')
      .then((res) => {
        setDbUsers(res.data);
        if (!dbUsers.approved) {
          setNotification(true)
        } 
        // const now = new Date();
        // const createdDate = new Date(dbUsers.createdAt);
        // let hours = Math.abs(now - createdDate) / (60 * 60 * 1000);
        // let hoursRounded = Math.round(hours);
        // if (hoursRounded <= 36) {
        //   setNotification(true);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      {role === 'admin' && (
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
          {notification && (
            <div className='notification'>
              <span className='r2b-red text-small icon-small'>
                <ImNotification />
              </span>
            </div>
          )}
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
        to='/sandbox'
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
};

export default NavLinks;
