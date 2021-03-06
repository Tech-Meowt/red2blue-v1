import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .align-container {
    padding: 0 !important;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center,
  .extra-gap {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .no-edit {
    font-weight: bold !important;
    margin: 0;
    margin-top: 1rem;
  }
  .no-top {
    margin: 0 !important;
  }
  .no-cursor {
    color: transparent;
  }
  .clear-btn {
    background: var(--r2b-blue);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  .popular-articles-container {
    text-align: center;
  }
  .article-container {
    text-align: left;
    position: relative;
  }
  .more-btn {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: end;
    text-align: right;
  }
  .more-icon {
    margin-top: 1.3rem;
  }
  .more-text {
    color: var(--r2b-blue);
    position: absolute;
    display: inline-flex;
    bottom: 0;
  }
  .link:hover {
    text-decoration: underline;
    text-decoration-color: var(--r2b-red);
    text-decoration-thickness: 0.15rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
    .extra-gap {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 4rem;
      row-gap: 2rem;
    }
  }
`;

export default Wrapper
