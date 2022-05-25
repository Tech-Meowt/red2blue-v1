import styled from 'styled-components';

const Wrapper = styled.nav`
height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: rgba(237, 28, 36, .25);
  border-radius: var(--borderRadius);
  margin-bottom: 1rem;
  h4 {
    margin: 0;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    top: 0;

    .nav-center {
      width: 90%;
    }
  }
`;
export default Wrapper;
