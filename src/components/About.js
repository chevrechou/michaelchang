import React, {Component} from 'react';
import USC from '../images/usc.jpg'
import Globe from '../images/Earth.svg';
import {Button } from 'react-bootstrap';
import Profile from '../images/profile.jpg';
import '../style/About.css';
import { Container } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import ShadowScrollbars from './ShadowScrollbars';

export class About extends Component{
  render(){
    return(
      <Container  className="about-container" >
        <div className='intro'>
          <div className='title-1'>
            <h1>About</h1>
          </div>

          <div className='picture-holder'>
            <div className="pic-thumb"></div>
          </div>

          <div className='description-1'>

            <ShadowScrollbars style={{height: 300}}>
            <h3>
              I am Michael Chang and I am an ambitious software developer with a unique set of skills and interests.
              My motto: Leave a positive impact everywhere I go! <br/> <br/> I love learning about
              new technology advancements, debating politics, reading thought provoking books and playing sports.
              <br/>

            {/*  <div className='icons'>
                <ul><i class="fa fa-code"></i></ul>
                <ul><i class="fa fa-book"></i></ul>
                <ul><i class="fas fa-basketball-ball"></i></ul>
              </div> */}

              {/*I am a <strong> global citizen</strong>. Working in technology gives me the unqiue power to impact the
              lives of millions across the world. I have the responsability to make a positive impact on their lives
              by innovating new applications, pushing the limits of technological knowledge and designing a better tomorrow for
              everyone.*/}
              <br/>
              <br/>
              Currently solving <strong> " </ strong><i>unsolvable</i> <strong> " </strong>problems ...
            </h3>
              </ShadowScrollbars>
          </div>

        </div>


      </Container>
    )
  }
}
export default About;
