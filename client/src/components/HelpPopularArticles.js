import Wrapper from '../assets/wrappers/DashboardFormPage'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function HelpPopularArticles() {
  return (
    <Wrapper>
      <div className='popular-articles-container'>
        <h4 className='r2b-blue'>Popular Articles</h4>
        <div className='form-center article-container'>
          <Wrapper>
            <h5>What's Coming In Version 2.0</h5>
            <p>
              Donec rhoncus ligula at est iaculis, at mollis justo pretium.
              Praesent eu pretium nisi. Nulla magna massa, imperdiet in eros at,
              aliquam aliquet sapien. Sed rutrum, lectus id semper pulvinar,
              libero nisl sodales nisl, vitae ultrices dui ante ut urna.
            </p>
            <div className='more-btn'>
              <FiMoreHorizontal />
            </div>
          </Wrapper>
          <Wrapper>
            <h5>Mauris vel</h5>
            <p>
              Donec rhoncus ligula at est iaculis, at mollis justo pretium.
              Praesent eu pretium nisi. Nulla magna massa, imperdiet in eros at,
              aliquam aliquet sapien. Sed rutrum, lectus id semper pulvinar,
              libero nisl sodales nisl, vitae ultrices dui ante ut urna.
            </p>
            <div className='more-btn'>
              <FiMoreHorizontal />
            </div>
          </Wrapper>
          <Wrapper>
            <h5>Mauris vel</h5>
            <p>
              Donec rhoncus ligula at est iaculis, at mollis justo pretium.
              Praesent eu pretium nisi. Nulla magna massa, imperdiet in eros at,
              aliquam aliquet sapien. Sed rutrum, lectus id semper pulvinar,
              libero nisl sodales nisl, vitae ultrices dui ante ut urna.
            </p>
            <div className='more-btn'>
              <FiMoreHorizontal />
            </div>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
}
