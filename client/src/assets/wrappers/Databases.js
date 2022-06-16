import styled from 'styled-components';

const Wrapper = styled.section`
  h3 {
    text-align: center;
  }
  h5 {
    color: var(--r2b-blue);
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  .main-container {
    border: 1px #9ba3af solid;
    border-radius: var(--borderRadius);
    margin-top: 3rem;
    padding: 1rem;
  }
  .database-container {
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .database-container div {
    background-color: #f9fafb;
    border: none;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    padding: 3rem;
    text-align: center;
  }
  .database-container div:hover {
    box-shadow: var(--shadow-3);
    transform: translateY(-0.25rem);
    transition: 0.5s ease-in-out;
  }
`;

export default Wrapper;
