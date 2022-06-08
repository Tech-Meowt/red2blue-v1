import { useEffect } from 'react';
import { HelpBanner, HelpPopularArticles, HelpArticles } from '../../components';

const Help = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <HelpBanner />
      <HelpPopularArticles />
      <HelpArticles />
    </>
  );
};

export default Help;
