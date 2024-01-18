import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';
import "../Landing/Landing.scss"

const Landing = () => {
  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');

    document.body.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    function onMouseMove(e) {
      TweenMax.to(bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      TweenMax.to(smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    }

    function onMouseHover() {
      TweenMax.to(bigBall, 0.3, {
        scale: 4,
      });
    }

    function onMouseHoverOut() {
      TweenMax.to(bigBall, 0.3, {
        scale: 1,
      });
    }

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      for (let i = 0; i < hoverables.length; i++) {
        hoverables[i].removeEventListener('mouseenter', onMouseHover);
        hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
      }
    };
  }, []); 

  return (
    <div className="landing">
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>

      <div className="centre-main">
        <div className="content-wrapper">
          <h1 className="header">The Debating Society</h1>
          <p className="description">announces</p>
          <a className="hoverable">the Audition</a>
        </div>
        <div className="content-wrapper">
           <hr  className='bar'/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
