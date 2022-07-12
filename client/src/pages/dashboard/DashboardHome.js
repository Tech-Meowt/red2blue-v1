import { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const DashboardHome = () => {
  const [dogImgUrl, setDogImgUrl] = useState('');
  
  const getDog = async () => {
    try {
      const dogPic = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImgUrl(dogPic.data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getDog().then(() => {
      const interval = setInterval(() => {
        getDog();
      }, 5000);
      return () => clearInterval(interval);
    });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <div className='dog-div'>
        <h3>Here are some dogs! 🐶</h3>
      </div>
      <img src={dogImgUrl} alt='dog' className='img dog-img' />
      <div className='cat-div'>
        <h3>Coming soon... cats! 😼</h3>
      </div>
    </>
  );
};

export default DashboardHome;
