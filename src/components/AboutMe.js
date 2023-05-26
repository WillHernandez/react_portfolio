import React from 'react'
import Container from 'react-bootstrap/Container';

const AboutMe = () => (
  <Container className='outerContainer'>
    <div className="innerContainer aboutmeContainer">
      <p className='aboutText' style={{marginBottom: '20px'}}>
        I am a self-taught programmer currently residing in the vibrant city of New York. With a strong passion for open source software and its communities, I have actively contributed to the Google Chromium developer tools for several years. What truly captivates me about programming is the exhilarating challenge of applying logical thinking to solve intricate problems. I find great satisfaction in the ability to create innovative and inspiring solutions. Additionally, I am open to the possibility of relocating to explore new opportunities.
      </p>
     <p className='aboutText'>
        Becoming a proficient software engineer isn't memorizing the syntax of a programming language but rather the ability so solve problems with it.
     </p>
    </div>
  </Container>
)

export default AboutMe;