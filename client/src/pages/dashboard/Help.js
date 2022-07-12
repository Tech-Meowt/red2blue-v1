import {
  HelpBanner,
  HelpPopularArticles,
  HelpArticles,
} from '../../components';
import { Helmet, HelmetProvider} from 'react-helmet-async';

const Help = () => {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Help</title>
        </Helmet>
      </HelmetProvider>
      <HelpBanner />
      <HelpPopularArticles />
      <HelpArticles />
    </>
  );
};

export default Help;
