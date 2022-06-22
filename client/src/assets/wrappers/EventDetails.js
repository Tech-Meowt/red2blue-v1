import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark) !important;
    background: var(--green-light) !important;
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark) !important;
    background: var(--red-light) !important;
  }
  &:hover .actions {
    visibility: visible;
  }

  .details-container {
    display: flex;
    justify-content: space-between;
  }
  .details-container span {
    color: var(--r2b-blue);
  }
  .volunteers-container {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }
  .volunteers-container table {
    border-collapse: collapse;
    width: 100%;
  }
  .volunteers-container th {
    background: var(--r2b-blue);
    color: white;
  }
  .volunteers-container td,
  .volunteers-container th {
    border: 1px solid #ddd;
  }
  .volunteers-container h5 {
    margin: auto;
    text-align: left;
    padding: 1rem;
  }
  .volunteers-container td {
    padding: 0.75rem 0 0.75rem 1rem;
  }
  .volunteers-container tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  .volunteers-container tr:hover {
    background-color: #ddd;
  }
`;
export default Wrapper;
