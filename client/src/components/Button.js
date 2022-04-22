import { useState } from 'react';
import { useAppContext } from '../context/appContext';

export default function Button(props) {
  const [btnText] = useState(props.btnText);
  const { isLoading } = useAppContext();

  return (
    <button type='submit' className='btn' disabled={isLoading}>
      {btnText}
    </button>
  );
}
