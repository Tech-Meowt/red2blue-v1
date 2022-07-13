import {
  BannerWarning,
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
      <BannerWarning bannerText={'You are in a sandbox environment'}/>
      <AllSandbox />
    </>
  );
}
