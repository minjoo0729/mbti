import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import QuestionPage1 from "./question1";
import QuestionPage2 from "./question2";
import QuestionPage3 from "./question3";
import QuestionPage4 from "./question4";
import QuestionPage5 from "./question5";
import QuestionPage6 from "./question6";
import QuestionPage7 from "./question7";
import QuestionPage8 from "./question8";
import Header from "./header";
import Answer from "./Answer";
import "./App.css";

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <div className='main'>
        <b>MBTI</b>
        <br />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/question1' element={<QuestionPage1 />} />
          <Route path='/question2' element={<QuestionPage2 />} />
          <Route path='/question3' element={<QuestionPage3 />} />
          <Route path='/question4' element={<QuestionPage4 />} />
          <Route path='/question5' element={<QuestionPage5 />} />
          <Route path='/question6' element={<QuestionPage6 />} />
          <Route path='/question7' element={<QuestionPage7 />} />
          <Route path='/question8' element={<QuestionPage8 />} />
          <Route path='/answer/:id' element={<Answer />} />
        </Routes>
      </div>
      
    </Router>
    
    </>

  );
};
export default App;
