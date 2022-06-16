import styled from 'styled-components';

const Wrapper = styled.section`
h2 {
  text-align: center;
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
`;
export default Wrapper;
