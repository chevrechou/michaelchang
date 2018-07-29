import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import '../style/WelcomePage.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { Container } from 'reactstrap';


export class WelcomePage extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){

    return(
      this.props.history.push('/home')
    )
  }
  render(){
    return(

        <Container className='greet-container'>
          <div className='greetings'>
            <div className='name'>
              <h2> Michael Chang </h2>
            </div>
          </div>


            <div className="welcome-txt">
              <h1> Welcome! </h1>
              <br/>
            </div>

            <div className='slogan'>
                <h2>
                  Lets
                </h2>

                <Typing speed={70} loop={true}>
                      <h3> Design.
                        <Typing.Delay ms={1100} />
                        <Typing.Backspace count={20} />
                          Innovate.
                        <Typing.Delay ms={1100} />
                        <Typing.Backspace count={20} />
                          Inspire.
                        <Typing.Delay ms={1200} />
                        <Typing.Backspace count={20} />
                      </h3>
                </Typing>
            </div>

            <div className='enter'>
              <ButtonToolbar>
                <Button className='button-enter' bsSize="large" onClick={this.handleClick}> <h3> Get to know me </h3> </Button>
              </ButtonToolbar>
            </div>

        </Container>
    );
  }
}
export default WelcomePage;
