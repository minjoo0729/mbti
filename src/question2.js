import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage2 = () => {
  return (
    <div>
      <h1 className='question-number'>Q2.</h1>
      <p className='question-content'>
        교수님의 개인 사정으로 갑작스레 휴강이 되었다! 
        이 소중한 시간을 무엇을 하며 보낼까?</p>
        <br/> <hr/> <br/>

        <Link Link to="/question3" className='answer-number'>1. </Link>
        <p className='answer-content'>
          아싸! 빨리 기숙사나 가야지… 혼자 방에서 핸드폰을 본다.</p>
        <br/>

        <Link Link to="/question3" className='answer-number'>2. </Link>
        <p className='answer-content'>
          너무 갑작스럽다… 무엇을 할지 몰라 방황한다.</p>
        <br/>

        <Link Link to="/question3" className='answer-number'>3. </Link>
        <p className='answer-content'>
          오늘 바빠? 나랑 놀자! 친구에게 전화해서 약속을 잡는다.</p>
        <br/>

        <Link Link to="/question3" className='answer-number'>4. </Link>
        <p className='answer-content'>
          발등에 불 떨어졌는데… 다행이다! 오늘이 due인 밀린 과제를 부랴부랴 한다.</p>
        <br/>

    </div>
  );
};

export default QuestionPage2;
