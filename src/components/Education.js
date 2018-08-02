import React, {Component} from 'react';
import USC from '../images/usc.jpg'
import '../style/Education.css';
import { Container } from 'reactstrap';
import { Label, bsClass } from 'react-bootstrap';

export class Education extends Component{
  render(){
    return(
      <Container className='education-container'>

        <div className='title-3'>
          <h1>Education</h1>
        </div>
        <Container className="one">
          <div className="usc-holder">
            <div className="usc-thumb"></div>
          </div>

          <div className='school-name'>
            <h2> Bachelors of Computer Science </h2>
          </div>
          <div className='gpa'>
            <h4>GPA: 3.7</h4>
          </div>
          <div className='education-description'>
            <h5>
              University of Southern California - Expected graduation in 2021
               <br/> <br/>
              USC is a world-class university that offers many excellent academic programs and provides extensive
              resources for its students. I consider USC to be an innovation incubator: students of all disciplines
              are inspired by their peers to step out of their comfort zones and explore new opportunities. Personally,
              I found interest in many new activities. You can often find me in lifting weights in the gym or on the sport courts, either
              playing basketball or tennis. Outside of athletics, entrepreneurship and innovation take most of my time. I like to
              learn new technologies and create tech projects that can impact my campus.

              Although I just finished my freshman year, I consider USC my home away from home.

            </h5>

          </div>
        </Container>

        <Container className="two">
          <div className="mari-holder">
            <div className="mari-thumb"></div>
          </div>

          <div className='school-name'>

            <h2> Honors Health Science High School Diploma</h2>
          </div>
          <div className='education-description'>
            <h5>
               Marianopolis College - Class of 2017
            </h5>
          </div>

        </Container>
      </Container>
    )
  }
}
export default Education;
