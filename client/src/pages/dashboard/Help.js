import { useState, useEffect } from 'react';
import { StatsContainer, Loading, ChartsContainer } from '../../components';
import axios from 'axios';

const Help = () => {
  const [dogImgUrl, setDogImgUrl] = useState('');

  const getDog = async () => {
    try {
      const dogPic = await axios.get('https://www.tronalddump.io/random/meme');
      setDogImgUrl(dogPic.config.url);
      console.log(dogPic.config.url)
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getDog()
  }, []);
  return (
    <>
      <div className='dog-div'>
        <h3>Under construction, but...</h3>
        <h3>Here is a real thing that Donald Trump has said!</h3>
      </div>
      <img src={dogImgUrl} alt='dog' className='img dog-img' />
    </>
  );
};

export default Help;
