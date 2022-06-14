import { AllDbUsers } from '../../components';
import Helmet from 'react-helmet';

export default function UserAccounts() {

  return (
    <>
      <Helmet>
        <title>User Accounts</title>
      </Helmet>
      <AllDbUsers />
    </>
  );
}
