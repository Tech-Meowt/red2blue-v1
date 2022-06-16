import {
  HelpBanner,
  HelpPopularArticles,
  HelpArticles,
} from '../../components';
import Helmet from 'react-helmet';

const Help = () => {

  return (
    <>
      <Helmet><title>Help</title></Helmet>
      <HelpBanner />
      <HelpPopularArticles />
      <HelpArticles />
    </>
  );
};

export default Help;
