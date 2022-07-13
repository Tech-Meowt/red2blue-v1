import styled from 'styled-components'

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    background: white;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--r2b-red);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--black);
    padding: 1rem 0;
    text-transform: capitalize;
  }
  .nav-link:hover {
    background-color: var(--r2b-blue);
    border-radius: 40px 40px 40px 40px;
    color: white;
    padding-left: 2rem;
    padding-right: 2rem;
    text-decoration: underline;
    text-decoration-color: white !important;
    transition: none;
  }
  .nav-link:hover .icon {
    color: white;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .icon-small {
    margin-left: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--r2b-blue);
  }
  .active .icon {
    color: var(--r2b-blue);
  }
`;
export default Wrapper
