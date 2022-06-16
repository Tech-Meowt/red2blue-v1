import styled from 'styled-components';

const VolunteersWrapper = styled.section`
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
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      color: var(--r2b-blue);
      letter-spacing: var(--letterSpacing);
    }
  }
  .instructions {
    color: black !important;
    font-size: 1.25rem;
    font-weight: bold;
    padding-bottom: 1rem;
    grid-column: span 3;
  }
  .emphasis {
    color: var(--r2b-blue);
    font-size: 1.5rem;
    text-decoration: underline;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-special {
    padding: 1rem 0 1rem 1rem;
  }
  .content-centered {
    grid-template-columns: 1fr 1fr 1fr !important;
    column-gap: 20rem !important;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default VolunteersWrapper;
