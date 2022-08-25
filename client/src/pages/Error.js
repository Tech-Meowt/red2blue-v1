import { useNavigate } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
          <div>
            <IoArrowBackCircleOutline className='back-btn icon' onClick={goBack}/>
          </div>
          <h4>Back</h4>
      </div>
    </Wrapper>
  );
}

export default Error
