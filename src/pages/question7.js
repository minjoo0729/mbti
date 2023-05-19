import React from 'react';
import { useParams } from 'react-router-dom';

const QuestionPage7 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 5;
    const updatedNS = parseInt(NS) + 9;
    const updatedFT = parseInt(FT) + 5;
    const updatedPJ = parseInt(PJ) + 8;
    window.location.href = `/question8/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 8;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 7;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/question8/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 5;
    const updatedFT = parseInt(FT) + 4;
    const updatedPJ = parseInt(PJ) + 1;
    window.location.href = `/question8/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 4;
    const updatedNS = parseInt(NS) + 10;
    const updatedFT = parseInt(FT) + 4;
    const updatedPJ = parseInt(PJ) + 5;
    window.location.href = `/question8/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };
  return (
    <div>
      <h1 className='question-number'>Q7.</h1>
      <p className='question-content'>
      헉, 늦잠을 자버렸다...!
      수업시간까지는 5분이 남아있고, 평소 걸음걸이로는 강의실까지 가는데 10분이 걸린다. 
      이럴 때 나는...</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click}>1.
        <p className='answer-content'>
        일단 뛰고 봐야지! 부랴부랴 모자만 쓰고 뛰어나간다.</p>
        <br/></button>

        <button onClick={handleAnswer2Click}>2.
        <p className='answer-content'>
        겹강인 애들 많으니까… 친구에게 대리출석을 부탁한다.</p>
        <br/></button>

        <button onClick={handleAnswer3Click}>3.
        <p className='answer-content'>
        에라이… 그냥 오늘은 안 가고 만다. 다시 침대에 누워 잠에 든다.</p>
        <br/></button>

        <button onClick={handleAnswer4Click}>4.
        <p className='answer-content'>
        아파서 늦었다고 하면 봐주실까? 화장실 갔다 온 척 할까?
        온갖 상황을 시뮬레이션 하며 어떻게 해야 지각을 면할지 고민한다.</p>
        <br/></button>

    </div>
  );
};

export default QuestionPage7;
