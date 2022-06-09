import { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollButtonUp, ScrollButtonDown } from '../../components';

const Databases = () => {
  const [dogImgUrl, setDogImgUrl] = useState('');
  const [targetId, setTargetId] = useState('scroll-up');
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const getDog = async () => {
    try {
      const dogPic = await axios.get('https://www.tronalddump.io/random/meme');
      setDogImgUrl(dogPic.config.url);
      console.log(dogPic.config.url);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getDog();
  }, []);
  return (
    <>
      <div id='scroll-up'></div>
      <ScrollButtonUp targetId={targetId} />
      <div className='dog-div'>
        <h3>Under construction, but...</h3>
        <h3>Here is a real thing that Donald Trump has said!</h3>
      </div>
      <img src={dogImgUrl} alt='dog' className='img dog-img' />
      <ScrollButtonDown targetIdDown={targetIdDown} />
      <div id='scroll-down'></div>
    </>
  );
};

export default Databases;
