import React from 'react';
import "./Home.css"

const Home = () => {
  const handleAnswerClick = () => {
    const IE = 0;
    const NS = 0;
    const FT = 0;
    const PJ = 0;
    window.location.href = `/question1/${IE}/${NS}/${FT}/${PJ}`
  };

  
  return (
    <>
      <div class="container">
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%">NUP-BTI</text>
          </symbol>
          <g class="g-ants">
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
          </g>
        </svg>
      </div>
      <div>
        <button onClick={handleAnswerClick}>Test Start</button>
      </div>
    </>
  );
};

export default Home;
