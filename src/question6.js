import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage6 = () => {
  return (
    <div>
      <h1 className='question-number'>Q6.</h1>
      <p className='question-content'>
      카이스트 학생들이 TV 프로그램에 나오고 있다! 나는...</p>
        <br/> <hr/> <br/>

        <Link Link to="/question7" className='answer-number'>1. </Link>
        <p className='answer-content'>
        나도 카이스트 학생이니까 언젠가는 TV에 나갈 수 있겠지? 미리 피부관리 좀 해야겠다.</p>
        <br/>

        <Link Link to="/question7" className='answer-number'>2. </Link>
        <p className='answer-content'>
        만약 내가 TV에 나가면 이렇게 말해야지! 똑똑한 사람으로 이슈가 되면 재밌겠군</p>
        <br/>

        <Link Link to="/question7" className='answer-number'>3. </Link>
        <p className='answer-content'>
        저 친구 학교에서 본 것 같은데!</p>
        <br/>

        <Link Link to="/question7" className='answer-number'>4. </Link>
        <p className='answer-content'>
        오늘 내 친구가 나오는 날이니까 본방사수해야지</p>
        <br/>

    </div>
  );
};

export default QuestionPage6;
