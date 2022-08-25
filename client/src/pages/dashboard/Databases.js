import { Helmet, HelmetProvider } from 'react-helmet-async'
import Wrapper from '../../assets/wrappers/Databases';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

const Databases = () => {
  const { user } = useAppContext();
  // eslint-disable-next-line
  const role = user.role;
  const navigate = useNavigate();

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

            {/* sandbox */}
            <div>
              <Link to={'/sandbox/home'}>
                <h5>Dummy Data</h5>
              </Link>
            </div>

            {/* user accounts */}
            {user.role === 'admin' && (
              <div>
                <Link to={'/databases/user-accounts'}>
                  <h5>User Accounts</h5>
                </Link>
              </div>
            )}

            {/* volunteers */}
            {user.volunteersDb === true && (
              <div>
                <Link to={'/databases/volunteers'}>
                  <h5>Volunteers</h5>
                </Link>
              </div>
            )}

            {/* skills */}
            {user.skillsDb === true && (
              <div>
                <Link to={'/databases/volunteer-skills'}>
                  <h5>Volunteers | Skills</h5>
                </Link>
              </div>
            )}

            {/* events—all, yearly—2019-2022 */}
            <div>
              <Link to={'/'}>
                <h5>Events</h5>
              </Link>
            </div>
            <div>
              <Link to={'/'}>
                <h5>Events | 2022</h5>
              </Link>
            </div>
            <div>
              <Link to={'/'}>
                <h5>Events | 2021</h5>
              </Link>
            </div>
            <div>
              <Link to={'/'}>
                <h5>Events | 2020</h5>
              </Link>
            </div>
            <div>
              <Link to={'/'}>
                <h5>Events | 2019</h5>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Databases;
