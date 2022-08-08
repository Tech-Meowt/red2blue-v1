import Wrapper from '../assets/wrappers/BannerWarning';
import { GrStatusWarning } from 'react-icons/gr'


export default function BannerWarning({ bannerText,}) {

  return (
    <Wrapper>
      <div className='nav-center'>
        <GrStatusWarning className='toggle-btn' />
        <h4>{bannerText}</h4>
        <GrStatusWarning className='toggle-btn' />
      </div>
    </Wrapper>
  );
}
