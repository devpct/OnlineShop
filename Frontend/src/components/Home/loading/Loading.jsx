import React, { useState, useEffect } from 'react';
import './loading.scss';

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      document.body.style.backgroundColor = '#f1f3f5';
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className='loading'>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
        </div>
      )}
    </>
  );
}

export default Loading;
