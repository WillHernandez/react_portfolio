import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillMail, AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaCity } from "react-icons/fa";
import { email, github, linkedIn } from './Data';

const Header = () => (
  <Container className='headerContainer'>
    <Row>
      <div className='infoContainer'>
        <h2>Will Hernandez</h2>
        <h3>Software Developer</h3>
      </div>
      <div className="contactContainer">
        <ul>
          <li>
            <AiFillMail id='faIcon' />
            <a href={email}>w.hernandez.code@gmail.com</a>
          </li>
          <li>
            <FaGithubSquare id='faIcon' />
            <a href={github} rel='noreferrer' target='_blank'>github.com/WillHernandez</a>
          </li>
          <li>
            <AiOutlineLinkedin id='faIcon' />
            <a href={linkedIn} rel='noreferrer' target='_blank'>linkedin.com/Will-Hernandez</a>
          </li>
          <li className='mobileHide'>
            <FaCity id='faIcon' /> New York, NY
          </li>
        </ul>
      </div>
    </Row>
  </Container>
)

export default Header;
