import React from 'react';
import '../assets/components/verticalNavbar.scss';
import { ReactComponent as Zen } from '../assets/icons/zen.svg';
import { ReactComponent as Bike } from '../assets/icons/bike.svg';
import { ReactComponent as Swim } from '../assets/icons/swim.svg';
import { ReactComponent as Weight } from '../assets/icons/weight.svg';

const VerticalNavbar = () => {
  return (
    <nav id="vertical-navbar">
      <ul className=''>
        <li>
          <a href='#zen'>
            <div>
              <Zen className="logo"/>
            </div>
          </a>
          
        </li>
        <li>
          <a href='#swim'>
            <div>
              <Swim className="logo"/>
            </div>
          </a>
        </li>
        <li>
          <a href='#bike'>
            <div>
              <Bike className="logo"/>
            </div>
          </a>
        </li>
        <li>
          <a href='#weight'>
            <div>
              <Weight className="logo"/>
            </div>
          </a>
        </li>
      </ul>
      <p className='copyright'>Copyright, SportSee 2020</p>
    </nav>
  );
};

export default VerticalNavbar;