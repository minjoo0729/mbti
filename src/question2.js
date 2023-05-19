import React from 'react';
import { Link, useParams } from 'react-router-dom';

const QuestionPage2 = () => {
  const { IE, NS, FT, PJ } = useParams();

  const handleAnswer1Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 3;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer2Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 3;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer3Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 3;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  const handleAnswer4Click = () => {
    const updatedIE = parseInt(IE) + 3;
    const updatedNS = parseInt(NS) + 3;
    const updatedFT = parseInt(FT) + 3;
    const updatedPJ = parseInt(PJ) + 3;
    window.location.href = `/answer/${updatedIE}/${updatedNS}/${updatedFT}/${updatedPJ}`;
  };

  return (
    <div>
      <h1>Question2</h1>
      <button onClick={handleAnswer1Click}>1. Answer1</button>
      <button onClick={handleAnswer2Click}>2. Answer2</button>
      <button onClick={handleAnswer3Click}>3. Answer3</button>
      <button onClick={handleAnswer4Click}>4. Answer4</button>
    </div>
  );
};

export default QuestionPage2;
