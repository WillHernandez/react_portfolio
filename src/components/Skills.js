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
            <li>Javscript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node</li>
            <li>Mocha testing</li>
            <li>Karma testing</li>
            <li>Jest testing</li>
            <li>Git/Mercurial</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Skills; 