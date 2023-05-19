import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage4 = () => {
  return (
    <div>
      <h1 className='question-number'>Q4.</h1>
      <p className='question-content'>
      두발네발에서 사장님을 불렀는데 
      오시지 않을 때 나는...</p>
        <br/> <hr/> <br/>

        <Link Link to="/question5" className='answer-number'>1. </Link>
        <p className='answer-content'>
        ‘사장님이라고 말해서 안오시는 건가?’라고 생각하며 이번에는 ‘언니~’ 또는 ‘누나~’를 외쳐본다.</p>
        <br/>

        <Link Link to="/question5" className='answer-number'>2. </Link>
        <p className='answer-content'>
        다시 한 번 큰 소리로 사장님을 부른다.</p>
        <br/>

        <Link Link to="/question5" className='answer-number'>3. </Link>
        <p className='answer-content'>
        옆에 있는 친구에게 “못 들으셨나봐..”라고 말하며 친구가 시도하길 기다린다.</p>
        <br/>

        <Link Link to="/question5" className='answer-number'>4. </Link>
        <p className='answer-content'>
        부끄러워하며 아무것도 하지 않는다.</p>
        <br/>

    </div>
  );
};

export default QuestionPage4;
