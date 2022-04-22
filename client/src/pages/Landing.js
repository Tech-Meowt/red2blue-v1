import main from '../assets/images/Red2BlueHeader.png'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1 className='r2b-blue'>Red2Blue Database</h1>
          <p>
            We are volunteers, using our time, skills, and passion to help
            diverse and progressive candidates, up and down the ballot, flip
            seats from red to blue.
          </p>
          <Link to='/register'>
            <button className='btn'>Login/Register</button>
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}

export default Landing
