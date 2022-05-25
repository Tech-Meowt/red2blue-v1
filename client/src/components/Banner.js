import Wrapper from '../assets/wrappers/Banner';
import { GrStatusWarning } from 'react-icons/gr'


export default function Banner() {

  return (
    <Wrapper>
      <div className='nav-center'>
        <GrStatusWarning className='toggle-btn' />
        <h4>You are in a sandbox environment.</h4>
        <GrStatusWarning className='toggle-btn' />
      </div>
    </Wrapper>
  );
}
