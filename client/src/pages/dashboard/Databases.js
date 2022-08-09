import { Helmet, HelmetProvider } from 'react-helmet-async'
import Wrapper from '../../assets/wrappers/Databases';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

const Databases = () => {
  const { user } = useAppContext();
  // eslint-disable-next-line
  const role = user.role;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Databases</title>
        </Helmet>
      </HelmetProvider>
      <Wrapper>
        <div className='main-container'>
          <h3 className='r2b-red'>Access your databases</h3>
          <div className='database-container'>
              <div>
                <Link to={'/sandbox/home'}>
                  <h5>Dummy Data</h5>
                </Link>
              </div>
           

            {user.role === 'admin' ? (
              <div>
                <Link to={'/databases/user-accounts'}>
                  <h5>User Accounts</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/databases/volunteers'}>
                  <h5>Volunteers</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/databases/volunteers'}>
                  <h5>Volunteers</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/databases/volunteer-skills'}>
                  <h5>Volunteers | Skills</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/databases/volunteer-skills'}>
                  <h5>Volunteers | Skills</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Events | 2021</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Events | 2021</h5>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/'}>
                  <h5>Events | 2020</h5>
                </Link>
              </div>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Events | 2020</h5>
                </Link>
              </div>
            ) : (
              <Link to={'/'}>
                <h5>Events | 2019</h5>
              </Link>
            )}

            {user.role === 'admin' ? (
              <div>
                <Link to={'/'}>
                  <h5>Events | 2019</h5>
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
