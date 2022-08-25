import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AllSkills } from '../../components'
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

export default function Skills() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user.skillsDb) {
      navigate('/unauthorized');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteer Skills</title>
        </Helmet>
      </HelmetProvider>
      <AllSkills />
    </>
  )
}
