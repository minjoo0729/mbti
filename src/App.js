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
import Infp from './pages/result/infp';
import Infj from './pages/result/infj';
import Intp from './pages/result/intp';
import Intj from './pages/result/intj';
import Isfp from './pages/result/isfp';
import Isfj from './pages/result/isfj';
import Istp from './pages/result/istp';
import Istj from './pages/result/istj';
import Enfp from './pages/result/enfp';
import Enfj from './pages/result/enfj';
import Entp from './pages/result/entp';
import Entj from './pages/result/entj';
import Esfp from './pages/result/esfp';
import Esfj from './pages/result/esfj';
import Estp from './pages/result/estp';
import Estj from './pages/result/estj';


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
          <Route path='/result/INFP' element={<Infp />} />
          <Route path='/result/INFJ' element={<Infj />} />
          <Route path='/result/INTP' element={<Intp />} />
          <Route path='/result/INTJ' element={<Intj />} />
          <Route path='/result/ISFP' element={<Isfp />} />
          <Route path='/result/ISFJ' element={<Isfj />} />
          <Route path='/result/ISTP' element={<Istp />} />
          <Route path='/result/ISTJ' element={<Istj />} />
          <Route path='/result/ENFP' element={<Enfp />} />
          <Route path='/result/ENFJ' element={<Enfj />} />
          <Route path='/result/ENTP' element={<Entp />} />
          <Route path='/result/ENTJ' element={<Entj />} />
          <Route path='/result/ESFP' element={<Esfp />} />
          <Route path='/result/ESFJ' element={<Esfj />} />
          <Route path='/result/ESTP' element={<Estp />} />
          <Route path='/result/ESTJ' element={<Estj />} />
        </Routes>
      </div>
      
    </Router>
    
    </>

  );
};
export default App;
