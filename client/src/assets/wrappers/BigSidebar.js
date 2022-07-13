import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: white;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
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
      padding-left: 2.5rem;
      text-transform: capitalize;
    }

    .nav-link:hover {
      background-color: var(--r2b-blue);
      border-radius: 40px 40px 40px 40px;
      color: white;
      text-decoration: underline;
      text-decoration-color: white !important;
      margin: 0 1rem;
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }

    .icon-small {
      margin-bottom: .75rem;
      display: grid;
      place-items: center;
    }
    
    .active {
      color: var(--r2b-blue);
    }
  }
`;
export default Wrapper
