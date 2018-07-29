import React, {Component} from 'react';
import USC from '../images/usc.jpg';
import ReactContactForm from 'react-mail-form';
import { Container } from 'reactstrap';


import '../style/ContactMe.css';


export class ContactMe extends Component{
  render(){
    return(
      <Container className="contact-container">
        <h1> Contact Me </h1>
        <div className='contact-div'>
          <div className='through-coffee'>
            <h4>
               Always available to talk over coffee!
               <div className='coffee'>
                 <i class="fas fa-coffee"></i>
                </div>
            </h4>
          </div>
          <div className='through-socio'>
            <h4>
              Or contact me through social media.
            </h4>
            <div className='socio-icons'>
            <a href="https://www.facebook.com/michael.chang.5059?ref=bookmarks" target="blank" id='hyperlink'> <i class="fab fa-facebook"></i> </a>
            <a href="https://www.linkedin.com/in/michael-chang-usc" target="blank" id='hyperlink'>   <i class="fab fa-linkedin"></i> </ a>
            <a  href="" target="_top" id='hyperlink'> <i class="fas fa-at"></i> </a>
            </div>
          </div>



        </div>




      </Container>
    )
  }
}
export default ContactMe;
