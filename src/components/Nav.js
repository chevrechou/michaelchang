import React, {Component} from 'react';

import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import { FaBars, FaClose } from 'react-icons/lib/fa';
import '../style/Nav.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Container } from 'reactstrap';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav} from  'react-bootstrap';


export class NavBar extends Component {
  render() {
    return (

      <div className='menu'>

        <ResponsiveMenu
          changeMenuOn="500px"
          menuOpenButton={<FaBars size={30} color="MediumPurple" />}
          menuCloseButton={<FaClose size={30} color="MediumPurple" />}

          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={

              <ul>


                <li>
                  <Link activeClass="active" to="contact" spy={true} smooth={true}> Contact me </Link>
                </li>

                <li>
                  <Link activeClass="active" to="education" spy={true} smooth={true}>Education</Link>
                </li>
                
                <li>
                  <Link activeClass="active" to="overview" spy={true} smooth={true}>  Overview </Link>
                </li>

                <li>
                  <Link activeClass="active" to="experience" spy={true} smooth={true}>Experience</Link>
                </li>

                <li>
                  <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
                </li>
              </ul>


          }
        />

      </div>


    );
  }



}
export default NavBar;
