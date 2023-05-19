import React from "react";

const move = (destination) =>{
  window.location.href = destination;
}

const Result = (props) => {
  return (
    <>
    <h3>당신은 {props.mbti}넙죽이 입니다.</h3>
    <button onClick={ (e) => move(props.result) }>자세히 알아보기</button>
    </>

  );
};
export default Result;
