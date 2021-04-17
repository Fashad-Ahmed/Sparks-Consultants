import React from 'react';
import './home.css';
import Common from './Common';
import illus from '../images/Humaaans - 2 Characters.png';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <>
      <Common
        name='About '
        imgsrc={illus}
        visit='/contact'
        btname='Conatact Now !'
      />
    </>
  );
}

export default About;
