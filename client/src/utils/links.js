import { FaDatabase } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiAdminLine } from 'react-icons/ri';
import { GiTeamIdea } from 'react-icons/gi';
import { FaTasks } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { BiHelpCircle } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';

const links = [
  { id: 1, text: 'databases', path: '/', icon: <FaDatabase /> },
  {
    id: 2,
    text: 'Admin',
    path: 'admin',
    icon: <RiAdminLine />,
  },
  {
    id: 3,
    text: 'notifications',
    path: 'notifications',
    icon: <IoNotificationsOutline />,
  },
  { id: 4, text: 'teams', path: 'teams', icon: <GiTeamIdea /> },
  { id: 4, text: 'tasks', path: 'tasks', icon: <FaTasks /> },
  { id: 4, text: 'profile', path: 'profile', icon: <CgProfile /> },
  { id: 4, text: 'help', path: 'help', icon: <BiHelpCircle /> },
];

export default links;
