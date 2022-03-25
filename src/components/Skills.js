import React from 'react';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  return (
    <Container className='outerContainer'>
      <div className='innerContainer'>
        <div className="skillsContainer">
          <h3>Skills</h3>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>Python</li>
            <li>Django</li>
            <li>Jest testing</li>
            <li>Mocha testing</li>
            <li>Karma testing</li>
            <li>Git/Mercurial</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Skills; 