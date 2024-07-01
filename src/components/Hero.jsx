import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import { collectionBannerImg, mainBannerImg, newarrivalBannerImg, saleBannerImg } from '../lib';

const Hero = () => {

  const [ activeIndex, setActiveIndex ] = useState(0);

  const length = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
    }, 4000)

    return () => clearInterval(interval);
  }, [activeIndex])

  return (
    <section className='w-full h-[calc(100vh-22vh)] px-2 overflow-hidden'>
      <div className='w-full h-full relative'>
      
        <div className={activeIndex === 0 ? "slides active bg-black" : "inactive"}>
          <img className='w-full h-full object-cover' src={mainBannerImg} alt="banner" />
        </div>

        <div className={activeIndex === 1 ? "slides active bg-black" : "inactive"}>
          <img className='w-full h-full object-contain' src={collectionBannerImg} alt="banner" />
        </div>

        <div className={activeIndex === 2 ? "slides active bg-black" : "inactive"}>
          <img className='w-full h-full object-cover' src={newarrivalBannerImg} alt="banner" />
        </div>

        <div className={activeIndex === 3 ? "slides active bg-black" : "inactive"}>
          <img className='w-full h-full object-contain' src={saleBannerImg} alt="banner" />
        </div>

        <div className='absolute z-20 h-full top-0 my-auto left-3 flex flex-col justify-center gap-y-2'>
          <span onClick={() => {setActiveIndex(0)}} className={`dot hover:bg-white cursor-pointer rounded-full w-2 h-2 ${activeIndex === 0 ? "bg-white" : "bg-[rgba(255,255,255,0.4)]"} transition-all duration-150`}/>
          <span onClick={() => {setActiveIndex(1)}} className={`dot hover:bg-white cursor-pointer rounded-full w-2 h-2 ${activeIndex === 1 ? "bg-white" : "bg-[rgba(255,255,255,0.4)]"} transition-all duration-150`}/>
          <span onClick={() => {setActiveIndex(2)}} className={`dot hover:bg-white cursor-pointer rounded-full w-2 h-2 ${activeIndex === 2 ? "bg-white" : "bg-[rgba(255,255,255,0.4)]"} transition-all duration-150`}/>
          <span onClick={() => {setActiveIndex(2)}} className={`dot hover:bg-white cursor-pointer rounded-full w-2 h-2 ${activeIndex === 3 ? "bg-white" : "bg-[rgba(255,255,255,0.4)]"} transition-all duration-150`}/>
        </div>

        <FontAwesomeIcon icon={faChevronDown} size="xl" color="white" className='absolute z-20 bottom-7 left-0 right-0 mx-auto'/>
        
      </div>
    </section>
  )
}

export default Hero;