import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/question.css"

const QuestionPage1 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 0;
    const updatedNS = parseInt(NS) + 5;
    const updatedFT = parseInt(FT) + 8;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/question2/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 2;
    const updatedNS = parseInt(NS) + 7;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 4;
    window.location.href = `/question2/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 6;
    const updatedNS = parseInt(NS) + 5;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 6;
    window.location.href = `/question2/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 10;
    const updatedNS = parseInt(NS) + 5;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 4;
    window.location.href = `/question2/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  return (
    <div>
      <h1 className='question-number'>Q1.</h1>
      <p className='question-content'>
        오늘은 새터반 첫 회식날이다!<br/>
        참가자 명단을 보니, 대부분 모르는 친구이다.<br/>
        기숙사에서 오가며 마주친 애들도 몇 보이기는 한다.<br/>
        그럴 때 나는…</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click} class='custom-question btn-answer'>
        <p className='answer-content'>
          피곤해… 시간 낭비다. 그냥 안 간다.</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer2Click} class='custom-question btn-answer'>
        <p className='answer-content'>
          가만히 구석에 앉아서 아무생각 없이 멍때린다.</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer3Click} class='custom-question btn-answer'>
        <p className='answer-content'>
          뭔가 익숙한데… 어디서 많이 봤던 친구에게 말을 건다.</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer4Click} class='custom-question btn-answer'>
        <p className='answer-content'>
          애들이랑 빨리 친해지고 싶어! 프락터마냥 활발하게 여기저기 말을 걸어본다.</p>
        <br/></button>
    </div>
  );
};

export default QuestionPage1;
