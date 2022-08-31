import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AllEvents } from '../../components';
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.eventsDb) {
      navigate('/unauthorized');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [navigate, user.eventsDb]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Events | All Years</title>
        </Helmet>
      </HelmetProvider>
      <AllEvents />
    </>
  );
}
