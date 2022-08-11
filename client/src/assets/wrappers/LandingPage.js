import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
  }
  button {
    background-color: var(--r2b-blue);
    border-color: transparent;
    border-width: 1px;
    border-radius: 0.375rem;
    box-shadow: 2px 2px 2px #c8c8c8;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    text-align: center;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
