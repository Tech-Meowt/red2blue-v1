import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ScrollButtonUp,
  ScrollButtonDown,
} from '../../components';

const DashboardHome = () => {
  const [dogImgUrl, setDogImgUrl] = useState('');
  const [targetId, setTargetId] = useState('scroll-up');
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

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
      <div id='scroll-up'></div>
      <ScrollButtonUp targetId={targetId} />
      <div className='dog-div'>
        <h3>Here are some dogs! 🐶</h3>
      </div>
      <img src={dogImgUrl} alt='dog' className='img dog-img' />
      <div className='cat-div'>
        <h3>Coming soon... cats! 😼</h3>
      </div>
      <ScrollButtonDown targetIdDown={targetIdDown} />
      <div id='scroll-down'></div>
    </>
  );
};

export default DashboardHome;
