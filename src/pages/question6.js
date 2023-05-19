import React from 'react';
import { useParams } from 'react-router-dom';

const QuestionPage6 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 8;
    const updatedNS = parseInt(NS) + 2;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 8;
    window.location.href = `/question7/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 8;
    const updatedNS = parseInt(NS) + 0;
    const updatedFT = parseInt(FT) + 8;
    const updatedPJ = parseInt(PJ) + 6;
    window.location.href = `/question7/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 4;
    const updatedNS = parseInt(NS) + 7;
    const updatedFT = parseInt(FT) + 4;
    const updatedPJ = parseInt(PJ) + 4;
    window.location.href = `/question7/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 7;
    const updatedNS = parseInt(NS) + 8;
    const updatedFT = parseInt(FT) + 2;
    const updatedPJ = parseInt(PJ) + 6;
    window.location.href = `/question7/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };
  return (
    <div>
      <h1 className='question-number'>Q6.</h1>
      <p className='question-content'>
      카이스트 학생들이 TV 프로그램에 나오고 있다! 나는...</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click}>1.
        <p className='answer-content'>
        나도 카이스트 학생이니까 언젠가는 TV에 나갈 수 있겠지? 미리 피부관리 좀 해야겠다.</p>
        <br/></button>

        <button onClick={handleAnswer2Click}>2.
        <p className='answer-content'>
        만약 내가 TV에 나가면 이렇게 말해야지! 똑똑한 사람으로 이슈가 되면 재밌겠군</p>
        <br/></button>

        <button onClick={handleAnswer3Click}>3.
        <p className='answer-content'>
        저 친구 학교에서 본 것 같은데!</p>
        <br/></button>

        <button onClick={handleAnswer4Click}>4.
        <p className='answer-content'>
        오늘 내 친구가 나오는 날이니까 본방사수해야지</p>
        <br/></button>

    </div>
  );
};

export default QuestionPage6;
