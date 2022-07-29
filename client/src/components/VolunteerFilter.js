import { useState, useRef, useEffect } from 'react';
import { OneVolunteer } from '../components';
import { CSVLink } from 'react-csv';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { IoConstructOutline } from 'react-icons/io5';
import { FaAngellist } from 'react-icons/fa';

const VolunteerFilter = ({
  placeholder,
  description,
  getId,
  id,
  deleteHandler,
  updateVolunteer,
  firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  events,
  userId,
})=> {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [rangeChosen, setRangeChosen] = useState('')
  const [noResults, setNoResults] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [allResults, setAllResults] = useState([]);
  const [range, setRange] = useState()
  const printRef = useRef();

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
      setAllResults(res.data.volunteer)
    })
  }, [])

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png', 3.0);

    let imgWidth = 210;
    let pageHeight = 296;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    const pdf = new jsPDF('p', 'mm');
    let position = 0;

    pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save('print.pdf');
  };

  const headers = [
    { label: 'First name', key: 'firstName' },
    { label: 'Last name', key: 'lastName' },
    { label: 'Email', key: 'email' },
  ];

  const data = filteredData;

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'report.csv',
  };

  const handleClick = (e) => {
    e.preventDefault();

    setClicked(!clicked);
  };

  const handleVolunteersFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = description.filter((value) => {
      return value.state.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setNoResults(false);
    }
  }

  const handleEventRange = (e) => {
    const searchWord = parseInt(e.target.value, 10)
    setRangeChosen(searchWord)

    let newFilter = description.filter((value) => {
      if (searchWord === 5 && value.events.length > 0 && value.events.length <= 5) {
        return description
      } else if (searchWord === 10 && value.events.length - 1 > 5 && value.events.length <= 10) {
        return description
      } else if (searchWord === 100 && value.events.length - 1 > 10) {
        return description
      }
    })
    setFilteredData(newFilter)
    setNoResults(false)
    console.log(newFilter)
    }

  const handleClear = (e) => {
    e.preventDefault();

    setRangeChosen('');
    setFilteredData([]);
    setNoResults(true);
  };

  return (
    <div className='search-container'>
      <h5 className='r2b-red'>Filters</h5>
      <button
        className='btn btn-danger clear-btn space-bottom'
        onClick={handleClear}
      >
        Reset Filters
      </button>
      <div className='filter-form'>
        <form className='right'>
          <div className='filter-options'>
            <label htmlFor='state'>State</label>
            <select
              name='wordEntered'
              id='wordEntered'
              className='form-select'
              value={wordEntered}
              onChange={handleVolunteersFilter}
              required
            >
              <option value='' disabled selected hidden>
                --Select an option--
              </option>
              <option value='AL'>AL</option>
              <option value='AK'>AK</option>
              <option value='AZ'>AZ</option>
              <option value='AR'>AR</option>
              <option value='CA'>CA</option>
              <option value='CO'>CO</option>
              <option value='CT'>CT</option>
              <option value='DE'>DE</option>
              <option value='DC'>DC</option>
              <option value='FL'>FL</option>
              <option value='GA'>GA</option>
              <option value='HI'>HI</option>
              <option value='ID'>ID</option>
              <option value='IL'>IL</option>
              <option value='IN'>IN</option>
              <option value='IA'>IA</option>
              <option value='KS'>KS</option>
              <option value='KY'>KY</option>
              <option value='LA'>LA</option>
              <option value='ME'>ME</option>
              <option value='MD'>MD</option>
              <option value='MA'>MA</option>
              <option value='MI'>MI</option>
              <option value='MN'>MN</option>
              <option value='MS'>MS</option>
              <option value='MO'>MO</option>
              <option value='MT'>MT</option>
              <option value='NE'>NE</option>
              <option value='NV'>NV</option>
              <option value='NH'>NH</option>
              <option value='NJ'>NJ</option>
              <option value='NM'>NM</option>
              <option value='NY'>NY</option>
              <option value='NC'>NC</option>
              <option value='ND'>ND</option>
              <option value='OH'>OH</option>
              <option value='OK'>OK</option>
              <option value='OR'>OR</option>
              <option value='PA'>PA</option>
              <option value='RI'>RI</option>
              <option value='SC'>SC</option>
              <option value='SD'>SD</option>
              <option value='TN'>TN</option>
              <option value='TX'>TX</option>
              <option value='UT'>UT</option>
              <option value='VT'>VT</option>
              <option value='VA'>VA</option>
              <option value='WA'>WA</option>
              <option value='WV'>WV</option>
              <option value='WI'>WI</option>
              <option value='WY'>WY</option>
            </select>
          </div>
        </form>

        <form className='filter-form right'>
          <div className='filter-options'>
            <label htmlFor='state'>Number of events attended</label>
            <select
              name='rangeChosen'
              id='rangeChosen'
              className='form-select'
              value={rangeChosen}
              onChange={handleEventRange}
              required
            >
              <option value='' disabled selected hidden>
                --Select an option--
              </option>
              <option value='5'>1-5</option>
              <option value='10'>6-10</option>
              <option value='100'>10+</option>
            </select>
          </div>
        </form>
      </div>

      {filteredData.length === 0 && <h5 className='space'>Found 0 records</h5>}

      {filteredData.length >= 1 && (
        <>
          <div className='space'>
            <button
              className='btn btn-success no-margin'
              onClick={handleDownloadPdf}
            >
              Download PDF
            </button>
            <CSVLink {...csvReport}>
              <button className='btn btn-success'>Export as CSV</button>
            </CSVLink>
            <button className='btn btn-success' onClick={handleClick}>
              {clicked ? 'View As List' : 'View As Table'}
            </button>
          </div>
        </>
      )}

      {filteredData.length === 1 && (
        <h5 className='space'>Found {filteredData.length} record</h5>
      )}
      {filteredData.length > 1 && (
        <h5 className='space'>Found {filteredData.length} records</h5>
      )}

      {!clicked && (
        <div ref={printRef}>
          <div>
            {filteredData.length !== 0 &&
              filteredData.slice(0, 99).map((value, key) => {
                return (
                  <>
                    <div className='space-larger border-state'>
                      <OneVolunteer
                        id={value.id}
                        firstName={value.firstName}
                        lastName={value.lastName}
                        email={value.email}
                        events={value.events.length - 1}
                        state={value.state}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}

      {clicked && (
        <div ref={printRef}>
          <div>
            {filteredData.length !== 0 && (
              <table className='table'>
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((data) => {
                    return (
                      <>
                        <tr key={data.id}>
                          <td>{data.firstName}</td>
                          <td>{data.lastName}</td>
                          <td>{data.email}</td>
                          <td>{data.state}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
  
  export default VolunteerFilter
