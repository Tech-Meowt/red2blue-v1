import { FaRegUserCircle } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai';

const links = [
  { id: 1, text: 'home', path: '/', icon: <AiOutlineHome /> },
  { id: 2, text: 'databases', path: '/databases', icon: <FiDatabase /> },
  { id: 3, text: 'profile', path: '/profile', icon: <FaRegUserCircle /> },
];

export default links
