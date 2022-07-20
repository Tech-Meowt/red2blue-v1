import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AllVolunteers } from '../../components';
export default function Volunteers() {
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
