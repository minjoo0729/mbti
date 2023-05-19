import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/question.css"

const QuestionPage4 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 10;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 3;
    const updatedPJ = parseInt(PJ) + 5;
    window.location.href = `/question5/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 8;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 5;
    window.location.href = `/question5/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 1;
    const updatedNS = parseInt(NS) + 4;
    const updatedFT = parseInt(FT) + 4;
    const updatedPJ = parseInt(PJ) + 5;
    window.location.href = `/question5/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 0;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 6;
    const updatedPJ = parseInt(PJ) + 5;
    window.location.href = `/question5/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };
  return (
    <div>
      <h1 className='question-number'>Q4.</h1>
      <p className='question-content'>
      두발네발에서 사장님을 불렀는데<br/>
      오시지 않을 때 나는...</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        ‘사장님이라고 말해서 안오시는 건가?’라고 생각하며 이번에는 ‘언니~’ 또는 ‘누나~’를 외쳐본다.</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer2Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        다시 한 번 큰 소리로 사장님을 부른다.</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer3Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        옆에 있는 친구에게 “못 들으셨나봐..”라고 말하며 친구가 시도하길 기다린다.</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer4Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        부끄러워하며 아무것도 하지 않는다.</p>
        <br/></button>

    </div>
  );
};

export default QuestionPage4;
