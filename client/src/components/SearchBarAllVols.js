import { useState, useRef , useEffect} from 'react';
import { OneVolunteer } from '.';
import { CSVLink } from 'react-csv'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from 'axios'

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
  const [clicked, setClicked] = useState(false);
  const [allResults, setAllResults] = useState([]);
  const printRef = useRef();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/volunteer')
      .then((res) => {
        setAllResults(res.data.volunteer);
      })
      .catch((error) => console.log(error));
  }, []);

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
                  className='button button-block btn-danger'
                  onClick={handleClear}
                >
                  clear results
                </button>
              </div>
            </div>
          </form>
        </div>

        {filteredData.length === 0 && <h5>Found 0 records</h5>}

        {filteredData.length >= 1 && (
          <>
            <div className='space'>
              <button className='button btn-success no-margin' onClick={handleDownloadPdf}>
                Download PDF
              </button>
              <CSVLink {...csvReport}>
                <button className='button btn-success'>Export as CSV</button>
              </CSVLink>
              <button className='button btn-success no-margin' onClick={handleClick}>
                {clicked ? 'View As List' : 'View As Table'}
              </button>
            </div>
          </>
        )}

        {filteredData.length === 1 && (
          <h5>Found {filteredData.length} record</h5>
        )}
        {filteredData.length > 1 && (
          <h5>Found {filteredData.length} records</h5>
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
                          events={value.events.length}
                          state={value.state}
                          street={value.street}
                          phone={value.phone}
                          city={value.city}
                          zip={value.zip}
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
    </>
  );
};

export default SearchBarAllVols;
