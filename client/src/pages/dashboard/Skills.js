import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AllSkills } from '../../components'

export default function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteer Skills</title>
        </Helmet>
      </HelmetProvider>
      <AllSkills />
    </>
  )
}
