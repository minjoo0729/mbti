import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import QuestionPage1 from './question1'; // Update the import statement
import QuestionPage2 from './question2'; // Update the import statement
import Answer from './Answer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="main">
        <b>MBTI</b>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/question1" element={<QuestionPage1 />} />
          <Route path="/question2/:IE/:NS/:FT/:PJ" element={<QuestionPage2 />} />
          <Route path="/answer/:IE/:NS/:FT/:PJ" element={<Answer/>} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
