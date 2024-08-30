import React from 'react';
import Profile from './components/profile';
import HorizontalNavbar from './components/horizontalNavbar';
import VerticalNavbar from './components/verticalNavbar';
import "./assets/constants/global.scss";

function App() {
  const userId = 12;

  return (
    <div className="main">
      <HorizontalNavbar />
      <div className='main-core'>
        <VerticalNavbar/>
        <Profile userId={userId}/>
      </div>
    </div>
  );
}

export default App;
