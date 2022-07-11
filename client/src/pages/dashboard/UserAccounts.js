import { AllDbUsers } from '../../components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function UserAccounts() {

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
