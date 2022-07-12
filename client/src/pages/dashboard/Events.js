import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AllEvents } from '../../components';

export default function Events() {
  return (
    <>
      <HelmetProvider>
        <Helmet><title>Events | All Years</title></Helmet>
      </HelmetProvider>
      <AllEvents />
    </>
  )
}
