import axios from 'axios';
import Helmet from 'react-helmet';
import Wrapper from '../../assets/wrappers/Databases';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

const Databases = () => {
  const { user } = useAppContext();
  const role = user.role;

  return (
    <>
      <Helmet>
        <title>Databases</title>
      </Helmet>
      <Wrapper>
        <div className='main-container'>
          <h3 className='r2b-red'>Access your databases</h3>
          <div className='database-container'>
            {user.role === 'admin' ? (
              <div>
                <Link to={'/user-accounts'}>
                  <h5>User Accounts</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/sandbox/home'}>
                  <h5>Dummy Data</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/sandbox/home'}>
                  <h5>Dummy Data</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/databases/volunteers-2017'}>
                  <h5>Volunteers | 2017</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/databases/volunteers-2017'}>
                  <h5>Volunteers | 2017</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2018</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2018</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2019</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2019</h5>
                </Link>
              </div>
            ) : (
              <Link to={'/'}>
                <h5>Volunteers | 2020</h5>
              </Link>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2020</h5>
                </Link>
              </div>
            ) : (
              <Link to={'/'}>
                <h5>Volunteers | 2021</h5>
              </Link>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2021</h5>
                </Link>
              </div>
            ) : (
              <Link to={'/'}>
                <h5>Volunteers | 2022</h5>
              </Link>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | 2022</h5>
                </Link>
              </div>
            ) : (
              <Link to={'/'}>
                <h5>Volunteers | Skills</h5>
              </Link>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Volunteers | Skills</h5>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Databases;
