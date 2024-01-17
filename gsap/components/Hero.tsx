"use client";
import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap';

// type Props = {}

const Hero = () => {

  const header = useRef(null);
  const header2 = useRef(null);

useLayoutEffect(() => {
  const h1 = header.current;
  const h2 = header2.current;
  const tl = gsap.timeline()
  tl.fromTo(h1, {y: +50, duration: 1},
    {y: 0, stagger: .3, duration: 1, ease: 'power2.out'})
  .fromTo(h2, {y: +70, opacity: 0, duration: 1},
    {y: 0, opacity: 1, duration: 1, ease: 'power2.out'}, '-=0.5')

  return () => {
    tl.kill();
  }

}, [])


  return (
    <header className='hero__header'>
        <h1 ref={header}>Cleve Momanyi</h1>
        <h2 ref={header2}>Software Engineer</h2>
      </header>
  )
}

export default Hero