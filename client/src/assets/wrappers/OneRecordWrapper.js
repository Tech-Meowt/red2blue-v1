import styled from 'styled-components';

const OneRecordWrapper = styled.article`
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--r2b-red);
    border-radius: var(--borderRadius);
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin-right: 2rem;
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
  .address {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0 5.5rem;
    }
    inline-size: max-content;
  }
  .interests {
    margin: 0 1.75rem;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .instructions {
    color: black !important;
    font-size: 1.25rem;
    font-weight: bold;
    padding-bottom: 1rem;
    grid-column: span 3;
  }
  .icon {
    color: var(--r2b-red);
    margin-right: 0.75rem;
  }
  .status {
    color: var(--r2b-blue);
    font-weight: bold;
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
    column-gap: 10rem;
  }
  .event-content {
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
      grid-template-columns: 1fr 1fr 1fr;
    }
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
  .content-center-skills {
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
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 0.75rem;
    }
  }
.check {
  padding-top: 1rem;
}
  footer {
    margin-top: 1rem;
  }
  .details-btn {
    margin-top: 1rem;
    z-index: 100;
  }
  .edit-btn,
  .delete-btn,
  .details-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .details-btn,
  .edit-btn {
    margin-right: 0.5rem;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default OneRecordWrapper;
