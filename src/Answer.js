import React from 'react';

const Answer = ({ match }) => {
  const { number } = match.params;
  return <h1>You pressed {number}</h1>;
};

export default Answer;
