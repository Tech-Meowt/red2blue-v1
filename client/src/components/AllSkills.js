import { useEffect, useRef, useState } from 'react';
import VolunteersWrapper from '../assets/wrappers/Volunteers';
import FilterWrapper from '../assets/wrappers/FilterContainer';
import Wrapper from '../assets/wrappers/AllDbUsers.js';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { CSVLink } from 'react-csv';

export default function AllSkills() {
  const [allPoliticalSkills, setAllPoliticalSkills] = useState([]);
  const [allLifeSkills, setAllLifeSkills] = useState([]);
  const printRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    axios.get('http://localhost:8000/api/v1/')
  })

  return <div>hello world</div>;
}
