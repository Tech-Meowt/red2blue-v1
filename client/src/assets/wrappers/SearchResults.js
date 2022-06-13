import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .border {
    background: rgb(0,131,202);
    border-bottom: 2rem solid var(--r2b-blue);
    margin: 4rem 0;
  }
`;
export default Wrapper;
