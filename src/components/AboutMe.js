import React from 'react'
import Container from 'react-bootstrap/Container';

const AboutMe = () => (
  <Container className='outerContainer'>
    <div className="innerContainer aboutmeContainer">
      <p className='aboutText' style={{marginBottom: '20px'}}>
        Self-taught programmer currently based in New York City. Proponent of open source softwares and their communities. Over the past several years I have been a steady contributor to the Google Chromium developer tools. The most rewarding part of programming to me, would be the process of using logic to solve difficult problems. I also appreciate the ability to create something new and inspiring. I am open to the idea of relocating.
      </p>
     <p className='aboutText'>
      Becoming a proficient software engineer isn't memorizing the syntax of a programming language but rather the ability so solve problems with it.
     </p>
    </div>
  </Container>
)

export default AboutMe;