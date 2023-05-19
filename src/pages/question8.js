import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/question.css"

const QuestionPage8 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 5;
    const updatedNS = parseInt(NS) + 2;
    const updatedFT = parseInt(FT) + 0;
    const updatedPJ = parseInt(PJ) + 2;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 7;
    const updatedNS = parseInt(NS) + 5;
    const updatedFT = parseInt(FT) + 7;
    const updatedPJ = parseInt(PJ) + 1;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 5;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 3;
    const updatedPJ = parseInt(PJ) + 5;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 5;
    const updatedNS = parseInt(NS) + 6;
    const updatedFT = parseInt(FT) + 10;
    const updatedPJ = parseInt(PJ) + 9;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  return (
    <div>
      <h1 className='question-number'>Q8.</h1>
      <p className='question-content'>
      시험이 끝난 날!<br/>
      생각보다 시험을 잘 봐서 기분이 좋은데 룸메의 얼굴이 심상치 않다.<br/>
      알고보니 노력한 만큼 시험을 잘 보지 못했다고 한다.<br/>
      이럴 때 나는...</p>
        <br/> <hr/> <br/>

        <button onClick={handleAnswer1Click} class='custom-question btn-answer-big'>
        <p className='answer-content'>
        침울한 룸메를 보니 열심히 하던 룸메의 모습이 떠올라 속상해져 눈시울이 붉어진다.<br/>
        촉촉해진 눈가로 룸메를 토닥여준다.</p>
        <br/></button>  
        <br/>
        <button onClick={handleAnswer2Click} class='custom-question btn-answer'>
        <p className='answer-content'>
        이미 끝난 시험 다 잊어버리고 술이나 마시러 가자!</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer3Click} class='custom-question btn-answer-big'>
        <p className='answer-content'>
        결과가 기대랑 달라서 많이 실망했겠다ㅠㅠ<br/>
        그래도 노력한 만큼 최선을 다한거니까 다음번에는 훨씬 더 좋은 결과를 얻을 수 있을거야!</p>
        <br/></button>
        <br/>
        <button onClick={handleAnswer4Click} class='custom-question btn-answer-big'>
        <p className='answer-content'>
        왜 못 봤는데? 아~ 그럼 다음 시험에는 어떻게 하면 될 것 같냐면...<br/>
        친구에게 솔루션을 제공해준다.</p>
        <br/></button>

    </div>
  );
};

export default QuestionPage8;
