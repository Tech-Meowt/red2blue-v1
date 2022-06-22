import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/EventDetails';

export default function EventDetails({
  _id,
  eventName,
  eventType,
  eventDate,
  eventYear,
  // volunteers,
  totals,
}) {

  return (
    <>
      <Wrapper>
        <div>
          <h4 className='r2b-red'>Details</h4>
          
          <div className='details-container'>
            <h5>
              Event Name: <span>{eventName}</span>
            </h5>

            <h5>
              Event Type: <span>{eventType}</span>
            </h5>

            <h5>
              Event Date:{' '}
              {eventDate != '' ? (
                <span>{eventDate}</span>
              ) : (
                <span>Date not provided</span>
              )}
            </h5>
            <h5>
              Event Year: <span>{eventYear}</span>
            </h5>
          </div>
          {/* <h5>
            Volunteers: <span className='r2b-blue'>{volunteers.length}</span>
          </h5>
          <div className='volunteers-container'>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>
                      <h5>First Name</h5>
                    </th>
                    <th>
                      <h5>Last Name</h5>
                    </th>
                    <th>
                      <h5>Total Events</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map((volunteer) => (
                    <tr
                      key={volunteer._id}
                    >
                      <td>{volunteer.volFirstName}</td>
                      <td>{volunteer.volLastName}</td>
                      <td>TODO</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </Wrapper>
    </>
  );
}
