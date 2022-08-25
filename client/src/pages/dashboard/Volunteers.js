import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AllVolunteers } from '../../components';
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

export default function Volunteers() {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.volunteersDb) {
      navigate('/unauthorized');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteers</title>
        </Helmet>
      </HelmetProvider>
      <AllVolunteers />
    </>
  );
}
