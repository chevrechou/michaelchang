import React, { Component, PropTypes } from 'react';
import NavBar from '../components/Nav';
import '../style/Home.css';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ContactMe from '../components/ContactMe';
import Overview from '../components/Overview';
import { Container } from 'reactstrap';

export class Home extends Component {

  render() {
    var divStyle = {
    color: 'black',

  };
    return (
      <div>
        <div className='nav'>
          <NavBar/>
        </div>
        <div className='about'>
          <About/>
        </div>
        <div className='overview'>
          <Overview/>
        </div>
        <div className='experience'>
          <Experience />
        </div>

        <div className='education'>
          <Education/>
        </div>
        <div className='contact'>
          <ContactMe/>
        </div>


      </div>
    )
  }
}
export default Home;
