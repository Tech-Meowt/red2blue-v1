import { AllDbUsers } from '../../components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

export default function UserAccounts() {
  useEffect(() => {
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
