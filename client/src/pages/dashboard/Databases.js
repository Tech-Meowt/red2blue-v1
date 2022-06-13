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
                <Link to={'/databases/phonebanking'}>
                  <h5>Phonebanking</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/databases/phonebanking'}>
                  <h5>Phonebanking</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Phonebanking 2021</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Phonebanking 2021</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Canvassing</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Canvassing</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Texting 2021</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Texting 2021</h5>
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
