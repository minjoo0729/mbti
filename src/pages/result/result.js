import React from "react";
import "./result.css";

const move = (destination) =>{
  window.location.href = destination;
}

const Result = (props) => {
  return (
    <div className="result-container">
      <h3>당신의 NUP-BTI를 확인해보세요</h3>
      <button class="custom-result btn-result" onClick={ (e) => move(props.result) }>나의 NUP-BTI 확인하기</button>
    </div>

  );
};
export default Result;
