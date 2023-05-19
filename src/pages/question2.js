import React from 'react';
import { useParams } from 'react-router-dom';

const QuestionPage2 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 2;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 2;
    window.location.href = `/question3/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 4;
    const updatedNS = parseInt(NS) + 4;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 9;
    window.location.href = `/question3/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 9;
    const updatedNS = parseInt(NS) + 5;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 1;
    window.location.href = `/question3/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 0;
    window.location.href = `/question3/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  return (
    <div>

      <h1 className='question-number'>Q2.</h1>
      <p className='question-content'>
        교수님의 개인 사정으로 갑작스레 휴강이 되었다! 
        이 소중한 시간을 무엇을 하며 보낼까?</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click}>1.
        <p className='answer-content'>
          아싸! 빨리 기숙사나 가야지… 혼자 방에서 핸드폰을 본다.</p>
        <br/></button>

        <button onClick={handleAnswer2Click}>2.
        <p className='answer-content'>
          너무 갑작스럽다… 무엇을 할지 몰라 방황한다.</p>
        <br/></button>

        <button onClick={handleAnswer3Click}>3.
        <p className='answer-content'>
          오늘 바빠? 나랑 놀자! 친구에게 전화해서 약속을 잡는다.</p>
        <br/></button>

        <button onClick={handleAnswer4Click}>4.
        <p className='answer-content'>
          발등에 불 떨어졌는데… 다행이다! 오늘이 due인 밀린 과제를 부랴부랴 한다.</p>
        <br/></button>
    </div>
  );
};

export default QuestionPage2;
