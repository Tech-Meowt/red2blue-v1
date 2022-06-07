import { Banner, AllSandbox } from '../../components'
import { useEffect } from 'react'

export default function SandboxHome() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
      <Banner />
      <AllSandbox />
    </>
  )
}
