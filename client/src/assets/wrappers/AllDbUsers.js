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
`;
export default Wrapper;
