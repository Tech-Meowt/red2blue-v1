import { Helmet } from 'react-helmet';
import { AllVolunteers } from '../../components';
export default function Volunteers() {
  return (
    <>
    <Helmet><title>Volunteers | All</title></Helmet>
    <AllVolunteers />
    </>
  )
}
