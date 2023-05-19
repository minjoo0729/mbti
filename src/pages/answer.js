import React from 'react';
import { useParams } from 'react-router-dom';

const Answer = () => {
  const { IE, NS, FT, PJ } = useParams();
  let modifiedIE = parseInt(IE) <= 41.5 ? 'I' : 'E';
  let modifiedNS = parseInt(NS) <= 40 ? 'N' : 'S';
  let modifiedFT = parseInt(FT) <= 41.5 ? 'F' : 'T';
  let modifiedPJ = parseInt(PJ) <= 38 ? 'P' : 'J';
  if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'P') {
    window.location.href = `/result/INFP`;
  } else if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'J') {
    window.location.href = `/result/INFJ`;
  } else if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'P') {
    window.location.href = `/result/INTP`;
  } else if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'J') {
    window.location.href = `/result/INTJ`;
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'P') {
    window.location.href = `/result/ISFP`;
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'J') {
    window.location.href = `/result/ISFJ`;
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'P') {
    window.location.href = `/result/ISTP`;
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'J') {
    window.location.href = `/result/ISTJ`;
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'P') {
    window.location.href = `/result/ENFP`;
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'J') {
    window.location.href = `/result/ENFJ`;
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'P') {
    window.location.href = `/result/ENTP`;
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'J') {
    window.location.href = `/result/ENTJ`;
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'P') {
    window.location.href = `/result/ESFP`;
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'J') {
    window.location.href = `/result/ESFJ`;
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'P') {
    window.location.href = `/result/ESTP`;
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'J') {
    window.location.href = `/result/ESTJ`;
  }

  return (
    <div id="load">
        <h1>Your result: {modifiedIE} {modifiedNS} {modifiedFT} {modifiedPJ}</h1>
        <h2>result : {IE} {NS} {FT} {PJ} </h2>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
    </div>
  );
};

export default Answer;
