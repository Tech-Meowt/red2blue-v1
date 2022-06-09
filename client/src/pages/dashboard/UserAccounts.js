import { useState, useEffect } from 'react';
import { AllDbUsers, ScrollButtonUp, ScrollButtonDown } from '../../components';

export default function UserAccounts() {
  const [targetId, setTargetId] = useState('scroll-up');
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div id='scroll-up'></div>
      <ScrollButtonUp targetId={targetId} />
      <AllDbUsers />
      <ScrollButtonDown targetIdDown={targetIdDown} />
      <div id='scroll-down'></div>
    </>
  );
}
