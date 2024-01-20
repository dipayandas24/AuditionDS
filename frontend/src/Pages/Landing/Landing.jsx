import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import "../Landing/Landing.scss";
import Button from "./Button";
import styles from "./audition.module.scss";
import work from "../../Media/work.jpg";
import group from "../../Media/group.jpg";
import party from "../../Media/party.jpg";
import all from "../../Media/all.jpg";
import contentwriting from "../../Media/contentwriting.gif";
import webdev from "../../Media/webdev.gif";
import videoedit from "../../Media/videoedit.gif";
import debating from "../../Media/debating.gif";
import event from "../../Media/event.gif";

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

  function WhyDSCard({ src, text, rotate }) {
    if (window.innerWidth < 700) {
      rotate = { x: 0, y: 0 };
    }
    return (
      <div
        className={styles.whyCard}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img src={src} alt={text} />
        <h2>{text}</h2>
      </div>
    );
  }

  function Section3() {
    const [text, setText] = useState("your best self");
    const [ratio, setRatio] = useState(0);
    useLayoutEffect(() => {
      const onScroll = () => {
        var scrollRatio = window.scrollY / window.innerHeight;
        if (scrollRatio >= 6) {
          setText("the next generation");
          setRatio(6);
        } else if (scrollRatio >= 3) {
          setRatio(scrollRatio);
          if (scrollRatio >= 3.9 && scrollRatio <= 4.2) {
            setText("your best self");
          } else if (scrollRatio >= 4.4 && scrollRatio <= 4.7) {
            setText("part of the fam");
          } else if (scrollRatio >= 5.38) {
            setText("the next generation");
          }
        } else {
          setRatio(0);
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <div
        className={`${styles.section} ${styles.section1} ${styles.centred} ${styles.section6}`}
      >
        <div
          className={styles.line}
          style={{
            position: ratio >= 4 && ratio !== 6 ? "fixed" : "absolute",
            top: ratio >= 6 ? "250vh" : "50vh",
          }}
        >
          <div>
            <h2>ready to be</h2>
            <h1 style={{ opacity: Math.abs(Math.cos((3.9 - ratio) * Math.PI)) }}>
              {text}?
            </h1>
          </div>
        </div>
      </div>
    );
  }

  function Section2() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref_whyCards = useRef(null);
    const [scrollRatio, setScrollRatio] = useState(0);
    useLayoutEffect(() => {
      ref.current.style.top = window.innerHeight - 60 + "px";
      const onScroll = () => {
        var ratio = window.scrollY / window.innerHeight;
        setScrollRatio(ratio);
        if (ratio >= 4) {
          return;
        } else {
          if (ratio >= 3) {
            ratio = 4 - ratio;
            ref.current.style.borderRadius = "48px";
            ref.current.style.width =
              ratio * window.innerWidth > 48
                ? ratio * window.innerWidth + "px"
                : "48px";
            ref.current.style.height =
              ratio * window.innerHeight > 48
                ? ratio * window.innerHeight + "px"
                : "48px";
            ref.current.style.top =
              window.innerHeight - 60 - (window.innerHeight * ratio) / 2 + "px";
            ref.current.style.left =
              (window.innerWidth - 48) * (1 - ratio) + "px";
            ref.current.style.transform = `translateX(${
              -24 + 24 * ratio
            }px) translateY(-${ratio * 50}%)`;
            ref2.current.style.opacity = ratio;
            ref_whyCards.current.style.opacity = ratio;
            ref_whyCards.current.style.top =
              (window.innerHeight * (ratio - 2)) / 2 + "px";
          } else if (ratio >= 1) {
            ref.current.style.width = "100vw";
            ref.current.style.height = "100vh";
            ref.current.style.top = window.innerHeight / 2 + "px";
            ref.current.style.borderRadius = 0;
            ref.current.style.left = 0;
            ref.current.style.transform = `translateX(0px) translateY(-50%)`;
            ref2.current.style.opacity = 1;
            ref_whyCards.current.style.opacity = (ratio - 1) * 0.65;
            ref_whyCards.current.style.top =
              window.innerHeight / 2 -
              (window.innerHeight * (ratio - 1)) / 2 +
              "px";
          } else if (ratio < 1) {
            ref.current.style.borderRadius = "48px";
            ref.current.style.width =
              ratio * window.innerWidth > 48
                ? ratio * window.innerWidth + "px"
                : "48px";
            ref.current.style.height =
              ratio * window.innerHeight > 48
                ? ratio * window.innerHeight + "px"
                : "48px";
            ref.current.style.top =
              window.innerHeight - 60 - (window.innerHeight * ratio) / 2 + "px";
            ref.current.style.left = 48 - 48 * ratio + "px";
            ref.current.style.transform = `translateX(${
              -24 + 24 * ratio
            }px) translateY(-${ratio * 50}%)`;
            ref2.current.style.opacity = ratio;
          }
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <div className={styles.section2}>
        <div className={styles.ball} ref={ref}>
          <div className={styles.content} ref={ref2}>
            <h1>Why DEBSOC?</h1>
            <div className={styles.imageGallery} ref={ref_whyCards}>
              <div className={styles.imageGalleryRow}>
                <WhyDSCard
                  src={group}
                  text="Always n forever The Debsoc Fam"
                  rotate={{ x: scrollRatio > 1 ? 15 * (scrollRatio - 1) : 15, y: 15 }}
                />
                <WhyDSCard
                  src={work}
                  text="Unforgettable experiences & moments"
                  rotate={{ x: scrollRatio > 1 ? 15 * (scrollRatio - 1) : 15, y: -15 }}
                />
              </div>
              <div className={styles.imageGalleryRow}>
                <WhyDSCard
                  src={all}
                  text="Voice your Thoughts n Opinions"
                  rotate={{ x: scrollRatio > 1 ? -15 * (scrollRatio - 1) : -15, y: 15 }}
                />
                <WhyDSCard
                  src={party}
                  text="Moments to cherish"
                  rotate={{ x: scrollRatio > 1 ? -15 * (scrollRatio - 1) : -15, y: -15 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Section4() {
    return (
      <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
        <h1 style={{}}>Roles we recruit for</h1>
        <div className={styles.card}>
          <div className={styles.section3}>
            <div className={styles.circle}>
              <img className={styles.img2} src={debating.src} />
            </div>
            <h1 className={styles.celldiv}>Debating</h1>
          </div>
          <div className={styles.section3}>
            <div className={styles.circle}>
              <img className={styles.img2} src={webdev.src} />
            </div>
            <h1 className={styles.celldiv}>Web Dev</h1>
          </div>
          <div className={styles.section3}>
            <div className={styles.circle}>
              <img className={styles.img2} src={contentwriting.src} />
            </div>
            <h1 className={styles.celldiv}>Content</h1>
          </div>
  
          <div className={styles.section3}>
            <div className={styles.circle}>
              <img className={styles.img2} src={videoedit.src} />
            </div>
            <h1 className={styles.celldiv}>Graphic & Video</h1>
          </div>
          <div className={styles.section3}>
            <div className={styles.circle}>
              <img className={styles.img2} src={event.src} />
            </div>
            <h1 className={styles.celldiv}>Event Management </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing">
      <div className="nav-menu-button">
        <div className="hambutton">
          <div className="styles_burger__ah8ak"></div>
        </div>
      </div>

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
          {/* <p className="description">announces</p> */}
          <a className="hoverable">Audition 2024</a>
        </div>

        <div className="content-wrapper">
           <hr  className='bar'/>
        </div>
      </div>

     {/* Arrow Section */}
      {/* <div className="arrow-container">
        <div className="flex self-center flex-row relative h-[230px] w-[230px] justify-center items-center circcnt">
          <svg className="circcirc absolute" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100">
            <circle id="test" stroke="white" strokeWidth="2" fill="none" cx="50" cy="50" r="40"></circle>
          </svg>
          <svg className="circcirc absolute" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100">
            <circle id="test" stroke="white" strokeWidth="2" fill="none" cx="50" cy="50" r="40"></circle>
          </svg>
          <img
            alt="hero pointer down circpointer"
            loading="lazy"
            width="42"
            height="42"
            decoding="async"
            data-nimg="1"
            className="xs:w-[29px] w-[35px]"
            style={{ color: 'transparent' }}
            src="../../public/assets/arrow-199-64.png"
          />
        </div>
      </div> */}
      
      <div className={`${styles.container} ${styles.fixed}`}>
      <div className={`${styles.section} ${styles.section1} ${styles.centred}`}>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <div className={`${styles.centred} ${styles.website}`}>
        <div>
          The website you just scrolled through is completely made by Debsoc
          Tech Team. So you see we just don&apos;t debate, we excel in every
          sphere.
        </div>
      </div>
    </div>

  </div>
  );
};

export default Landing;
