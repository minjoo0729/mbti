import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage5 = () => {
  return (
    <div>
      <h1 className='question-number'>Q5.</h1>
      <p className='question-content'>
      나는 기숙사 침대에 누워서 자기 전에...</p>
        <br/> <hr/> <br/>

        <Link Link to="/question6" className='answer-number'>1. </Link>
        <p className='answer-content'>
        ‘오늘 너무 힘들었다… 그때 그 말 하지 말 걸… 아까 걔 표정 안 좋아보이던데…에휴…’</p>
        <br/>

        <Link Link to="/question6" className='answer-number'>2. </Link>
        <p className='answer-content'>
        ‘오늘 과제를 다 못했는데 내일 일찍 일어나서 해야지’</p>
        <br/>

        <Link Link to="/question6" className='answer-number'>3. </Link>
        <p className='answer-content'>
        ‘못 한 과제는 내일로 미루고 우선 자자!’</p>
        <br/>

        <Link Link to="/question6" className='answer-number'>4. </Link>
        <p className='answer-content'>
        ‘늦잠자서 내일 수업을 못가면 어떡하지? 근데 수업 못 갔는데 휴강하면 기분 되게 좋겠다. 그러고보니 왜 내 수업은 휴강이 하나도 없지?’</p>
        <br/>

    </div>
  );
};

export default QuestionPage5;
