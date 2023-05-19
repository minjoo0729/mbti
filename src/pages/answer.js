import React from 'react';
import { useParams } from 'react-router-dom';
import Result from './result/result';

const Answer = () => {
  const { IE, NS, FT, PJ } = useParams();
  console.log(useParams());
  let modifiedIE = parseInt(IE) <= 41.5 ? 'I' : 'E';
  let modifiedNS = parseInt(NS) <= 40 ? 'N' : 'S';
  let modifiedFT = parseInt(FT) <= 41.5 ? 'F' : 'T';
  let modifiedPJ = parseInt(PJ) <= 38 ? 'P' : 'J';
  console.log(modifiedIE);
  console.log(modifiedNS);
  console.log(modifiedFT);
  console.log(modifiedPJ);

  let result;
  let mbti;

  if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'P') {
    mbti = "INFP"
    result = "/result/INFP";
  } else if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'J') {
    mbti = "INFJ"
    result = "/result/INFJ";
  } else if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'P') {
    mbti = "INTP"
    result = "/result/INTP";
  } else if (modifiedIE === 'I' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'J') {
    mbti = "INTJ"
    result = "/result/INTJ";
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'P') {
    mbti = "ISFP"
    result = "/result/ISFP";
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'J') {
    mbti = "INFJ"
    result = "/result/ISFJ";
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'P') {
    mbti = "ISTP"
    result = "/result/ISTP";
  } else if (modifiedIE === 'I' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'J') {
    mbti = "ISTJ"
    result = "/result/ISTJ";
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'P') {
    mbti = "ENFP"
    result = "/result/ENFP";
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'F' && modifiedPJ === 'J') {
    mbti = "ENFJ"
    result = "/result/ENFJ";
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'P') {
    mbti = "ENTP"
    result = "/result/ENTP";
  } else if (modifiedIE === 'E' && modifiedNS === 'N' && modifiedFT === 'T' && modifiedPJ === 'J') {
    mbti = "ENTJ"
    result = "/result/ENTJ";
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'P') {
    mbti = "ESFP"
    result = "/result/ESFP";
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'F' && modifiedPJ === 'J') {
    mbti = "ESFJ"
    result = "/result/ESFJ";
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'P') {
    mbti = "ESTP"
    result = "/result/ESTP";
  } else if (modifiedIE === 'E' && modifiedNS === 'S' && modifiedFT === 'T' && modifiedPJ === 'J') {
    mbti = "ESTJ"
    result = "/result/ESTJ";
  }

  return (
    <div id="load">
        <h1>Your result: {modifiedIE} {modifiedNS} {modifiedFT} {modifiedPJ}</h1>
        <h2>result : {IE} {NS} {FT} {PJ} </h2>
        <Result result={result} mbti = {mbti}/>
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
