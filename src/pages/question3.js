import React from 'react';
import { useParams } from 'react-router-dom';

const QuestionPage3 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 8;
    const updatedNS = parseInt(NS) + 7;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 6;
    window.location.href = `/question4/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 2;
    const updatedNS = parseInt(NS) + 7;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 6;
    window.location.href = `/question4/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 4;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/question4/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 4;
    window.location.href = `/question4/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  return (
    <div>
      <h1 className='question-number'>Q3.</h1>
      <p className='question-content'>
        코딩과제를 하는 중에 에러가 났다!
        이럴 때 나는 가장 먼저...</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click}>1.
        <p className='answer-content'>
          동기 친구들이나 선배 또는 조교님께 물어본다.</p>
        <br/></button>

        <button onClick={handleAnswer2Click}>2.
        <p className='answer-content'>
          내가 짠 코드가 올바른지 내 코드와 instruction을 계속 확인한다.</p>
        <br/></button>

        <button onClick={handleAnswer3Click}>3.
        <p className='answer-content'>
        코드가 아니라 컴퓨터가 오류라고 생각하며 자러 간다.</p>
        <br/></button>

        <button onClick={handleAnswer4Click}>4.
        <p className='answer-content'>
        내가 해결할 수 있다고 생각하며 인터넷으로 에러의 원인을 찾아본다.</p>
        <br/></button>

    </div>
  );
};

export default QuestionPage3;
