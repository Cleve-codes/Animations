import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// type Props = {}

const ScrollSection = () => {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  return (
    <section className='scroll-section-outer'>
        <div>
          <div className='scroll-section-inner'>
            <div className='scroll-section'>
              <h3>Section 1</h3>
            </div>
            <div className='scroll-section'>
            <h3>Section 2</h3>
            </div>
            <div className='scroll-section'>
            <h3>Section 3</h3>
            </div>
            <div className='scroll-section'>
            <h3>Section 4</h3>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ScrollSection;