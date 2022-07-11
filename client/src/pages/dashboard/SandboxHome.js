import {
  Banner,
  AllSandbox,
} from '../../components';
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function SandboxHome() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox</title>
        </Helmet>
      </HelmetProvider>
      <Banner />
      <AllSandbox />
    </>
  );
}
