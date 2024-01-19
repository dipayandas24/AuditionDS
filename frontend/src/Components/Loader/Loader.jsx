import React, { useEffect, useRef } from 'react';
import gsap, { Power3, TimelineMax } from 'gsap';
import "./Loader.scss";

const Loader = ({ onFinishLoading }) => {
  const root = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useRef(false);

  const animate = () => {
    const tl = new TimelineMax();
    const t2 = new TimelineMax();
    const t3 = new TimelineMax();
    const t4 = new TimelineMax();

    
    tl.fromTo(root.current, 2, { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', ease: Power3.easeInOut });

    
    tl.to(containerRef.current, 1, { y: '-100%', delay: 2 })
      .to(root.current, 1, { opacity: 0, y: '-100%', ease: Power3.easeInOut }, '-=1')
      .from(containerRef.current, 1, { y: '100%' }, '-=1') 
    

    tl.to(containerRef.current, 1, { x: '0%', y: '0%', ease: Power3.easeInOut }, '-=0.5') 

   

    tl.to(containerRef.current, 0.5, { x: '10%', ease: Power3.easeInOut }) 
    tl.to(containerRef.current, 0.5, { x: '0%', onComplete: () => onFinishLoading() }); 
    isVisible.current = true;
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="loader">
      <div className="debating-society" ref={root}>Debating Society</div>
      <div className="text-wrapper" ref={containerRef}>
        <div className="d-and-s">D<span>&</span>S</div>
      </div>
    </div>
  );
};

export default Loader;
