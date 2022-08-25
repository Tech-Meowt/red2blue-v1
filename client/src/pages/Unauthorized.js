import img from '../assets/images/unauthorized.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-2);
  };

  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='unauthorized image' className='unauthorized' loading='eager'/>
        <h3>You are not authorized to view this page</h3>
        <p>If you have questions or need to change your permission level, please contact an admin.</p>
        <div>
          <IoArrowBackCircleOutline
            className='back-btn icon'
            onClick={goBack}
          />
        </div>
        <h4>Back</h4>
      </div>
    </Wrapper>
  );
}
