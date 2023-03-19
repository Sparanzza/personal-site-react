import React from 'react';
import logo from './white-logo-simple.svg';
import CV_ES from './CV_ES_Aurelio_Munoz_Hijano_2304.pdf';
import CV_EN from './CV_EN_Aurelio_Munoz_Hijano_2304.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="Logo" />
  
      <div className="separator"></div>
      <div className="hashtags">
        <span className="hashtag">#FullStackDeveloper</span>
        <span className="separator"> | </span>
        <span className="hashtag">#UnderConstruction</span>
      </div>
      <div className="buttons">
        <a href={CV_ES} download>Curriculum-ES</a>
        <a href={CV_EN} download>Curriculum-EN</a>
      </div>
    </div>
  );
}

export default App;
