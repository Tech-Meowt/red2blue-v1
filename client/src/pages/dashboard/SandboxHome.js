import {
  Banner,
  AllSandbox,
} from '../../components';
import Helmet from 'react-helmet';

export default function SandboxHome() {

  return (
    <>
      <Helmet><title>Sandbox</title></Helmet>
      <Banner />
      <AllSandbox />
    </>
  );
}
