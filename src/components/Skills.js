import React from 'react';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import { skills } from './Data';
import PropTypes from 'prop-types';

const Skills = () => (
  <Container className='outerContainer'>
    <div className='innerContainer'>
      <div className="skillsContainer">
        <h3>Skills</h3>
        <ul>
          <RenderSkills skills={skills} />
        </ul>
      </div>
    </div>
  </Container>
)

const RenderSkills = ({ skills }) => (
  skills.map((skill, i) => (
    <li key={i}>{skill}</li>
  ))
)
RenderSkills.propTypes = {
  skills: PropTypes.array,
}

export default Skills; 
