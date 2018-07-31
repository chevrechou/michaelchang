import React, {Component} from 'react';
import css from 'dom-css';
import {Button,Image, Label, bsClass } from 'react-bootstrap';
import '../style/Experience.css';
import IBM from '../images/IBMLogo.png';
import CIHR from '../images/CIHR.jpg';
import SHAD from '../images/shad.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,  Row, Col, CardDeck } from 'reactstrap';
import { Container } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import ShadowScrollbars from './ShadowScrollbars';


export class Experience extends Component{

  render(){
    return(
      <Container className="experience-container">
        <div className='title-2'>
          <h1> Experience </h1>
        </div>




      <div className='description-2'>
      <CardDeck className='card-container'>
      <Card>
        <CardBody >
          <CardTitle>
            <h3> Software Development Intern with IBM Canada Advanced Studies (CAS) </h3>
          </CardTitle>
          <CardSubtitle>
            <h5> May 2018 - August 2018 </h5>
          </CardSubtitle>
          <CardText>
            <div className='work-description'>
              <div className="player-holder1">
                <div className="player-thumb1"></div>
              </div>

              <ShadowScrollbars style={{height: 270}}>
                <h4> During my internship at the IBM Toronto Software Lab, I designed, from the ground-up,
                  a new IBM website called myCAS,
                  using ReactJS, HTML and CSS. Using the IBM Design Thinking protocol, I also designed a
                  more user-friendly and intuitive User-Interface (UI)
                  for the IBM myCAS website, optimizing its User Experience (UX).  This unique and eye-catching UI that would distinguish this new
                  website from its predecessor. 
                </h4>
                <br/>
                <h5><a href="https://www-01.ibm.com/ibm/cas/canada/" target="_blank"> Learn More about IBM CAS </a> </h5>

              </ShadowScrollbars>


              <br/>
              <div className="skills">
                <Label bsClass="but"> ReactJS </Label> {' '}
                <Label bsClass="but"> Front-end development</Label> {' '}
                <Label bsClass="but"> Database</Label>{' '}
              </div>
            </div>
          </CardText>
        </CardBody>
      </Card>



          {/*<h3>
            MENTR

          </h3>
          <h5>Ongoing project</h5>
          <div className='work-description'>
            <h4>
              MENTR is a web application that I built as a way to connect tutors with students seeking help.
              Users can sign up and filter through classes to view available tutors.
            </h4>
          </div>*/}
            <br/>
      <Card className="card">
        <CardBody>
          <CardTitle>
            <h3>
              Program Ambassador for Canadian Institutes of Health Research (CIHR)
            </h3>
          </CardTitle>
          <CardSubtitle>
            <h5>Spring 2017</h5>
          </CardSubtitle>
          <CardText>
            <div className='work-description'>
              <div class="player-holder2">
                <div class="player-thumb2"></div>
              </div>
              <ShadowScrollbars style={{height: 270}}>
                <h4>
                  I was chosen, along 50 of my peers, amongst over 500 applicants
                  for the Canadian Gene Cure
                  Foundation's prestigious genetics and molecular biology internship program. I was placed in Dr. Gustavo Turecki's
                  labarotary at the Douglas Institute of Mental Health in Montreal.
                  During the program, I extracted DNA and RNA from brain cells, sliced brain
                  tissues and performed qPCR and Western Blots. Currently, I am one of the program
                  ambassadors in Quebec.
                </h4>
              </ShadowScrollbars>
              <br/>
              <h5><a href="http://grfaw.ca/" target="_blank">Learn More </a> </h5>
                <div className="skills">
                    <Label bsClass="but"> People Management </Label>{' '}
                    <Label bsClass="but"> Rapid Learning</Label>{' '}
                    <Label bsClass="but"> Public Relations</Label>
                </div>
              </div>
            </CardText>
          </CardBody>
        </Card>


          <br/>
          <Card >
          <CardBody>
          <CardTitle>
          <h3>
            Co-Founder of STETIX
          </h3>
          </CardTitle>
          <CardSubtitle>
          <h5>Summer 2016</h5>
          </CardSubtitle>
           <CardText>
          <div className='work-description'>
          <div class="player-holder3">
            <div class="player-thumb3"></div>
          </div>

          <ShadowScrollbars  style={{height:270}}>
            <h4>
              I participated in the prestigious month long SHAD program hosted at Carleton University,
              in Ottawa, Canada. During the program, my friends and I founded a biomedical startup company called <strong>
              STETIX </strong>. Our team designed a specialized water tank to grow edible spirulina algae. Spirulina algae
              is incredibly nutritious and helps to provide more vitamins to our diet.

              <br/>
              <br/>  Our team placed 3rd place for Best Prototype at the 2016 John Dobson Entrepreneurial Cup in Toronto.

               <br/> <br/>The SHAD Alumni network
              includes 30 Rhodes Scholars, Top 40 under 40 & Top 20 Under 20 award recipients.
            </h4>
          </ShadowScrollbars>

          </div>
          <br/>
          <h5><a href="http://shad.ca/" target="_blank">Learn More </a> </h5>
          <div className="skills">

              <Label bsClass="but"> Leadership </Label>{' '}

              <Label bsClass="but"> Entrepreneurship </Label>{' '}

              <Label bsClass="but"> Marketing </Label>{' '}

          </div>
           </CardText>
          </CardBody>
          </Card>

          </CardDeck>

          <CardDeck className='card-container'>
          </CardDeck>
        </div>

      </Container>

    )
  }
}
export default Experience;
