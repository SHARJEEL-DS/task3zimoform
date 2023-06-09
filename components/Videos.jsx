/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';

const Videos = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      const rect = videoElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='video' className='h-screen relative'>
      <video ref={videoRef} loop controls autoPlay  className='w-full h-full object-cover' src='/assets/video.mp4'  />
      <div className='absolute bottom-0 left-[49%]'>
        <a href='#zimoteam'>
          <img src='/assets/downwhite.png' className='w-[40px] py-2 cursor-pointer animate-bounce hover:animate-ping' alt='asdas' />
        </a>
      </div>
    </div>
  );
};

export default Videos;