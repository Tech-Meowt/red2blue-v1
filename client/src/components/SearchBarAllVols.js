import { useState, useRef } from 'react';
import { OneVolunteer } from '../components';
import { CSVLink } from 'react-csv'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import statesData from '.././utils/states.json'

const SearchBarAllVols = ({
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
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [noResults, setNoResults] = useState(true);
  const [optionEntered, setOptionEntered] = useState('');
  const printRef = useRef();

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

  const handleVolunteersFilter = (e) => {
    const optionWord = e.target.value;
    setOptionEntered(optionWord);
    const newFilter = data.filter((value) => {
      return value.state.toLowerCase().includes(optionWord.toLowerCase())
    })

    if (optionWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setNoResults(false)
    }
}

  // const handleFilter = (e) => {
  //   const checkbox25 = document.querySelector('#range25')
  //   const checkbox50 = document.querySelector('#range50')
  //   const checkbox51 = document.querySelector('#range51')
  //   if (checkbox25.checked === true) {
  //     setRange(25)
  //   } else if (checkbox50.checked === true) {
  //     setRange(50)
  //   } else if (checkbox51.checked === true) {
  //     setRange(51)
  //   } else {
  //     setRange(0)
  //   }

  //   let newFilter;
  //   let attended = events.length
  //   if (range <= attended) {
  //     newFilter = data.filter((value) => {
  //       return (value.events.length <= range) 
  //     });
  //     setFilteredData(newFilter);
  //     setNoResults(false);
  //   } else if (range === 51) {
  //     newFilter = data.filter((value) => {
  //       return (value.events.length >= range);
  //     });
  //     setFilteredData(newFilter);
  //     setNoResults(false);
  //   } else {
  //     setFilteredData([])
  //   }
   
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = description.filter((value) => {
      return (
        value.firstName.toLowerCase().includes(searchWord.toLowerCase()),
        value.lastName.toLowerCase().includes(searchWord.toLowerCase()),
        value.email.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setNoResults(false);
    }
  };


  const handleClear = (e) => {
    e.preventDefault();

    setWordEntered('');
    setFilteredData([]);
    setNoResults(true);
  };


  return (
    <>
      <div className='search-container'>
        <div className='search-container-child'>
          <h4 className='title'>🕵️ WHAT ARE YOU LOOKING FOR?</h4>
          <form>
            <div className='search-input-container'>
              <div className='input-container-child'>
                <input
                  className='form-input'
                  type='text'
                  placeholder='Enter first name, last name, or email'
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <button
                  className='btn btn-block btn-danger'
                  onClick={handleClear}
                >
                  clear results
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className='search-container'>
          <h5 className='r2b-red'>Filters</h5>
          <form className='filter-form'>
            <label htmlFor='state' className='right'>
              State
            </label>
            <select name='optionEntered' id='optionEntered' value={optionEntered} onChange={handleVolunteersFilter}>
              {statesData.states.map((state) => {
                const { id, optionValue, name } = state
                return (
                  <option key={id} value={optionValue}>{name}</option>
                )
              })}
            </select>
            <label htmlFor='state' className='right left'>
              Events attended
            </label>
            <select name='' id=''></select>
          </form>
        </div>

        {filteredData.length === 0 && <h5>Found 0 records</h5>}

        {filteredData.length >= 1 && (
          <>
            <button className='btn btn-success' onClick={handleDownloadPdf}>
              Download PDF
            </button>
            <CSVLink {...csvReport}>
              <button className='btn btn-success'>Export as CSV</button>
            </CSVLink>
          </>
        )}
        {filteredData.length === 1 && (
          <h5>Found {filteredData.length} record</h5>
        )}
        {filteredData.length > 1 && (
          <h5>Found {filteredData.length} records</h5>
        )}
        <div ref={printRef}>
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
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchBarAllVols;
