import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage1 = () => {
  return (
    <div>
      <h1 className='question-number'>Q1.</h1>
      <p className='question-content'>
        오늘은 새터반 첫 회식날이다!
        참가자 명단을 보니, 대부분 모르는 친구이다.
        기숙사에서 오가며 마주친 애들도 몇 보이기는 한다.
        그럴 때 나는…</p>
        <br/> <hr/> <br/>

        <Link Link to="/question2" className='answer-number-1'>1. </Link>
        <p className='answer1-content'>
          피곤해… 시간 낭비다. 그냥 안 간다.</p>
        <br/>

        <Link Link to="/question2" className='answer-number-2'>2. </Link>
        <p className='answer2-content'>
          가만히 구석에 앉아서 아무생각 없이 멍때린다.</p>
        <br/>

        <Link Link to="/question2" className='answer-number-3'>3. </Link>
        <p className='answer3-content'>
          뭔가 익숙한데… 어디서 많이 봤던 친구에게 말을 건다.</p>
        <br/>

        <Link Link to="/question2" className='answer-number-4'>4. </Link>
        <p className='answer4-content'>
          애들이랑 빨리 친해지고 싶어! 프락터마냥 활발하게 여기저기 말을 걸어본다.</p>
        <br/>

    </div>
  );
};

export default QuestionPage1;
