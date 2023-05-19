import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage1 = () => {
  return (
    <div>
      <h1>1 + 1 = ?</h1>
      <Link to="/question2/0/0/0/0">1</Link>
      <h1>   hi   </h1>
      <Link to="/question2/0/0/0/0">2</Link>
    </div>
  );
};

export default QuestionPage1;
