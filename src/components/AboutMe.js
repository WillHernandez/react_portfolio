import React from 'react'
import Container from 'react-bootstrap/Container';

function AboutMe() {
  return (
    <Container className='outerContainer'>
      <div className="innerContainer aboutmeContainer">
        <p>
          Self-taught programmer currently based in New York City. Proponent of open source softwares and their communities. Over the last year I have been a steady contributor to the Google Chromium Devtools. Some of the many aspects of programming I enjoy the most is the ability to create something new and inspiring and the never ending process of cultivating your own style. I am open and excited to the idea of relocating.
        </p>
      </div>
    </Container>
  )
}

export default AboutMe;