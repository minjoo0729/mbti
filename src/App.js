import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuestionPage1 from "./pages/question1";
import QuestionPage2 from "./pages/question2";
import QuestionPage3 from "./pages/question3";
import QuestionPage4 from "./pages/question4";
import QuestionPage5 from "./pages/question5";
import QuestionPage6 from "./pages/question6";
import QuestionPage7 from "./pages/question7";
import QuestionPage8 from "./pages/question8";
import Header from "./header/header";
import Answer from "./pages/answer";
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
          <Route path='/question1/:IE/:NS/:FT/:PJ' element={<QuestionPage1 />} />
          <Route path='/question2/:IE/:NS/:FT/:PJ' element={<QuestionPage2 />} />
          <Route path='/question3/:IE/:NS/:FT/:PJ' element={<QuestionPage3 />} />
          <Route path='/question4/:IE/:NS/:FT/:PJ' element={<QuestionPage4 />} />
          <Route path='/question5/:IE/:NS/:FT/:PJ' element={<QuestionPage5 />} />
          <Route path='/question6/:IE/:NS/:FT/:PJ' element={<QuestionPage6 />} />
          <Route path='/question7/:IE/:NS/:FT/:PJ' element={<QuestionPage7 />} />
          <Route path='/question8/:IE/:NS/:FT/:PJ' element={<QuestionPage8 />} />
          <Route path='/answer/:IE/:NS/:FT/:PJ' element={<Answer />} />
        </Routes>
      </div>
      
    </Router>
    
    </>

  );
};
export default App;
