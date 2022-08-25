import { AllDbUsers } from '../../components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

export default function UserAccounts() {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.usersDb) {
      navigate('/unauthorized');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>User Accounts</title>
        </Helmet>
      </HelmetProvider>
      <AllDbUsers />
    </>
  );
}
