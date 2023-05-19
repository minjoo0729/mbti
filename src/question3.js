import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage3 = () => {
  return (
    <div>
      <h1 className='question-number'>Q3.</h1>
      <p className='question-content'>
        코딩과제를 하는 중에 에러가 났다!
        이럴 때 나는 가장 먼저...</p>
        <br/> <hr/> <br/>

        <Link Link to="/question4" className='answer-number'>1. </Link>
        <p className='answer-content'>
          동기 친구들이나 선배 또는 조교님께 물어본다.</p>
        <br/>

        <Link Link to="/question4" className='answer-number'>2. </Link>
        <p className='answer-content'>
          내가 짠 코드가 올바른지 내 코드와 instruction을 계속 확인한다.</p>
        <br/>

        <Link Link to="/question4" className='answer-number'>3. </Link>
        <p className='answer-content'>
        코드가 아니라 컴퓨터가 오류라고 생각하며 자러 간다.</p>
        <br/>

        <Link Link to="/question4" className='answer-number'>4. </Link>
        <p className='answer-content'>
        내가 해결할 수 있다고 생각하며 인터넷으로 에러의 원인을 찾아본다.</p>
        <br/>

    </div>
  );
};

export default QuestionPage3;
