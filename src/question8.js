import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage8 = () => {
  return (
    <div>
      <h1 className='question-number'>Q8.</h1>
      <p className='question-content'>
      시험이 끝난 날!
      생각보다 시험을 잘 봐서 기분이 좋은데 룸메의 얼굴이 심상치 않다.
      알고보니 노력한 만큼 시험을 잘 보지 못했다고 한다. 
      이럴 때 나는...</p>
        <br/> <hr/> <br/>

        <Link Link to="/Answer" className='answer-number'>1. </Link>
        <p className='answer-content'>
        침울한 룸메를 보니 열심히 하던 룸메의 모습이 떠올라 속상해져 눈시울이 붉어진다. 
        촉촉해진 눈가로 룸메를 토닥여준다.</p>
        <br/>

        <Link Link to="/Answer" className='answer-number'>2. </Link>
        <p className='answer-content'>
        이미 끝난 시험 다 잊어버리고 술이나 마시러 가자!</p>
        <br/>

        <Link Link to="/Answer" className='answer-number'>3. </Link>
        <p className='answer-content'>
        결과가 기대랑 달라서 많이 실망했겠다ㅠㅠ
        그래도 노력한 만큼 최선을 다한거니까 다음번에는 훨씬 더 좋은 결과를 얻을 수 있을거야!</p>
        <br/>

        <Link Link to="/Answer" className='answer-number'>4. </Link>
        <p className='answer-content'>
        왜 못 봤는데? 아~ 그럼 다음 시험에는 어떻게 하면 될 것 같냐면...
        친구에게 솔루션을 제공해준다.</p>
        <br/>

    </div>
  );
};

export default QuestionPage8;
