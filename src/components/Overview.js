import React, {Component} from 'react';
import {Button,Image, Label, bsClass } from 'react-bootstrap';
import { Container } from 'reactstrap';
import '../style/Overview.css';
import { Progress } from 'reactstrap';


export class Overview extends Component{
  render(){
    return(
      <Container className='container-fluid'>
        <div className='title-4'>
          <h1> Overview </h1>
        </div>


        <Container className='languages'>

            <div className='intro'> <h2>Languages Spoken: </h2> </div>
              <div className='each-language'>
                <ul>
                 <h3>English </h3>
                </ul>
                <Progress animated className='progress' color="info" value="99"> Proefficient </Progress>

                <ul>
                  <h3>French </h3>
                </ul>
                <Progress animated color="info" value="99" > Proefficient </Progress>

                <ul>
                 <h3> Chinese </h3>
                </ul>
                <Progress animated color="info" value="70" > Intermediate </Progress>
              </div>

        </Container>

        <Container className='skillset'>

            <div className='intro'>
              <h2> Skills: </h2>
            </div>
              <div className='each-skill'>
                <Label bsClass="skill-but"> ReactJS </Label> {' '}
                <Label bsClass="skill-but">  HTML / CSS </Label> {' '}
                <Label bsClass="skill-but">C++</Label>{' '}
                <Label bsClass="skill-but">iOS / Swift</Label>{' '}
                <Label bsClass="skill-but"> UI/UX Design</Label>{' '}
                <Label bsClass="skill-but">Bootstrap</Label>{' '}
                <Label bsClass="skill-but">macOS</Label>{' '}
                <Label bsClass="skill-but">Windows</Label>{' '}
              </div>



        </Container>
        <Container className='interest'>
          <h2>
            <div className='intro'>
              <h2> Interest: </h2>
            </div>
              <div className='each-interest'>
                <ul> Tennis </ul>
                <ul> Basketball </ul>
                <ul> Movies  </ul>
                <ul> Photography </ul>
                <ul> Music </ul>
                <ul> Travelling </ul>
              </div>
          </h2>
        </Container>
      </Container>
    )
  }
}
export default Overview;
