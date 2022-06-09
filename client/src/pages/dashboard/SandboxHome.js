import {
  Banner,
  AllSandbox,
  ScrollButtonUp,
  ScrollButtonDown,
} from '../../components';
import { useEffect, useState } from 'react';

export default function SandboxHome() {
  const [targetId, setTargetId] = useState('scroll-up');
  const [targetIdDown, setTargetIdDown] = useState('scroll-down');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div id='scroll-up'></div>
      <ScrollButtonUp targetId={targetId} />
      <Banner />
      <AllSandbox />
      <ScrollButtonDown targetIdDown={targetIdDown} />
      <div id='scroll-down'></div>
    </>
  );
}
