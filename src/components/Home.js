import React from 'react';
import './home.css';
import illus from '../images/undraw_Investing_re_bov7.svg';
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
  return (
    <>
      <Common
        name='Grow your buisness with '
        imgsrc={illus}
        visit='/about'
        btname='Begin the Journey !'
      />
    </>
  );
}

export default Home;
