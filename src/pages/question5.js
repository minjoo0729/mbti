import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/question.css"

const QuestionPage5 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 2;
    const updatedNS = parseInt(NS) + 1;
    const updatedFT = parseInt(FT) + 2;
    const updatedPJ = parseInt(PJ) + 4;
    window.location.href = `/question6/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 5;
    const updatedNS = parseInt(NS) + 8;
    const updatedFT = parseInt(FT) + 8;
    const updatedPJ = parseInt(PJ) + 6;
    window.location.href = `/question6/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 5;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 2;
    const updatedPJ = parseInt(PJ) + 0;
    window.location.href = `/question6/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 2;
    const updatedNS = parseInt(NS) + 0;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 8;
    window.location.href = `/question6/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };
  return (
    <div>
      <h1 className='question-number'>Q5.</h1>
      <p className='question-content'>
      나는 기숙사 침대에 누워서 자기 전에...</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        ‘오늘 너무 힘들었다… 그때 그 말 하지 말 걸… 아까 걔 표정 안 좋아보이던데…에휴…’</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer2Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        ‘오늘 과제를 다 못했는데 내일 일찍 일어나서 해야지’</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer3Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        ‘못 한 과제는 내일로 미루고 우선 자자!’</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer4Click} class='custom-question btn-answer-big'>
        <p className='answer-content'>
        ‘늦잠자서 내일 수업을 못가면 어떡하지? <br/>
        근데 수업 못 갔는데 휴강하면 기분 되게 좋겠다. 그러고보니 왜 내 수업은 휴강이 하나도 없지?’</p>
        </button>

    </div>
  );
};

export default QuestionPage5;
