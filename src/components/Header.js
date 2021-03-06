import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillMail } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

const Header = () => {
  const github = "https://github.com/WillHernandez";
  const email = "mailto:w.hernandez.code@gmail.com";

  return (
    <Container className='headerContainer'>
      <Row>
        <img src= '/img/profileImg.jpg' alt=''/>
        <div className='infoContainer'>
          <h2>Will Hernandez</h2>
          <h3>Software Developer</h3>
        </div>
        <div className="contactContainer">
          <ul>
            <li>
              <AiFillMail id='faIcon'/>
              <a href={email}>w.hernandez.code@gmail.com</a>
            </li>
            <li>
              <FaGithubSquare id='faIcon'/>
              <a href={github} rel='noreferrer' target='_blank'>github.com/WillHernandez</a>
            </li>
            <li className='mobileHide'>
              <FaCity id='faIcon' /> New York, NY
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  )
}

export default Header;