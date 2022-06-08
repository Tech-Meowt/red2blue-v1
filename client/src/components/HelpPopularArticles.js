import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FiMoreHorizontal } from 'react-icons/fi'

export default function HelpPopularArticles() {
  return (
    <Wrapper>
      <div className='popular-articles-container'>
        <h4 className='r2b-blue'>Popular Articles</h4>
        <div className='form-center article-container'>
          <Wrapper>
            <h5 className='r2b-red'>Getting Started</h5>
            <p>
              A short article that summarizes key features of the
              database—recommended before using the sandbox
            </p>
            <div className='more-btn'>
              <a href='/help/getting-started' className='more-text link'>
                <p>Read more</p>
                <div className='more-icon'>
                  <FiMoreHorizontal />
                </div>
              </a>
            </div>
          </Wrapper>
          <Wrapper>
            <h5 className='r2b-red'>What's Coming In Version 2.0</h5>
            <p>
              Donec rhoncus ligula at est iaculis, at mollis justo pretium.
              Praesent eu pretium nisi. Nulla magna massa, imperdiet in eros at,
              aliquam aliquet sapien. Sed rutrum, lectus id semper pulvinar,
              libero nisl sodales nisl, vitae ultrices dui ante ut urna.
            </p>
            <div className='more-btn'>
              <a href='/help/getting-started' className='more-text link'>
                <p>Read more</p>
                <div className='more-icon'>
                  <FiMoreHorizontal />
                </div>
              </a>
            </div>
          </Wrapper>
          <Wrapper>
            <h5 className='r2b-red'>Mauris vel</h5>
            <p>
              Donec rhoncus ligula at est iaculis, at mollis justo pretium.
              Praesent eu pretium nisi. Nulla magna massa, imperdiet in eros at,
              aliquam aliquet sapien. Sed rutrum, lectus id semper pulvinar,
              libero nisl sodales nisl, vitae ultrices dui ante ut urna.
            </p>
            <div className='more-btn'>
              <a href='/help/getting-started' className='more-text link'>
                <p>Read more</p>
                <div className='more-icon'>
                  <FiMoreHorizontal />
                </div>
              </a>
            </div>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
}
