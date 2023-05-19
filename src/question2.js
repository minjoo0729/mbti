import React from 'react';
import { Link } from 'react-router-dom';

const QuestionPage2 = () => {
  return (
    <div>
      <h1>What is the capital of France?</h1>
      <Link to="/answer/">Paris</Link>
      <Link to="/answer/">London</Link>
    </div>
  );
};

export default QuestionPage2;
