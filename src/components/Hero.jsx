import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-[calc(100vh-22vh)] px-2 overflow-hidden'>
      <div className='w-full h-full bg-black relative'>
        <FontAwesomeIcon icon={faChevronDown} size="xl" color="white" className='absolute bottom-7 left-0 right-0 mx-auto'/>
      </div>
    </section>
  )
}

export default Hero;