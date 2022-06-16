import { Helmet } from 'react-helmet';
import { AllEvents } from '../../components';

export default function Events() {
  return (
    <>
      <Helmet><title>Events | All Years</title></Helmet>
      <AllEvents />
    </>
  )
}
