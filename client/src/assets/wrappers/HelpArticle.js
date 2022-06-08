import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 2rem auto;
    padding: 2rem 0;
  }
  .gif {
    border: 2px solid var(--r2b-red);
    border-radius: 10px 10px 10px 10px;
    box-shadow: var(--shadow-1);
    margin: 2rem auto;
    width: 70%;
    height: auto;
  }
  .emphasis {
    font-weight: bold;
    color: var(--r2b-blue);
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
