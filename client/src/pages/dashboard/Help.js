import { useState, useEffect } from 'react';
import { HelpBanner, HelpPopularArticles, HelpArticles } from '../../components';
import axios from 'axios';

const Help = () => {
  return (
    <>
      <HelpBanner />
      <HelpPopularArticles />
      <HelpArticles />
    </>
  );
};

export default Help;
