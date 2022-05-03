import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>
          <div className='center'>
            <IoArrowBackCircleOutline className='back-hover back-btn' />
          </div>
          Back
        </Link>
      </div>
    </Wrapper>
  );
}

export default Error
