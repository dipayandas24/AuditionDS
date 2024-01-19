import React, { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import "./Loader.scss";

const Loader = ({ onFinishLoading }) => {
  useEffect(() => {
    const debatingSociety = document.querySelector('.debating-society');
    const textWrapper = document.querySelector('.text-wrapper');
    const dAndS = document.querySelector('.d-and-s');

    // Initial Animation
    TweenMax.fromTo(debatingSociety, 2, { opacity: 0 }, { opacity: 1, ease: Power3.easeInOut });
    TweenMax.to(textWrapper, 1, { y: '-100%', delay: 2, onComplete: () => onFinishLoading() });
    
    // D and S Animation
    TweenMax.from(dAndS, 1, { y: '100%', delay: 3 });
    TweenMax.to(dAndS, 1, { x: '0%', y: '0%', delay: 4, onComplete: () => onFinishLoading() });
  }, [onFinishLoading]);

  return (
    <div className="loader">
      <div className="debating-society">Debating Society</div>
      <div className="text-wrapper">
        <div className="d-and-s">D<span>&</span>S</div>
      </div>
    </div>
  );
};

export default Loader;
