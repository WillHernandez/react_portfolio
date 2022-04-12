import React from 'react';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import { projectLinks } from './Data';
import PropTypes from 'prop-types';

const Projects = () => (
  <Container className='outerContainer'>
    <div className="innerContainer projectsContainer">
      <h3>Projects</h3>
      <div className="projects">
      <ul>
        <RenderWebsite sites={projectLinks} />
      </ul>
      </div>
    </div>
  </Container>
)

const RenderWebsite = ({sites}) => ( 
  sites.map(site => (
    <li key={site.key}>
      <a href={site.live} target='_blank' rel='noreferrer'>Live Website</a> |  
      <a href={site.url} target='_blank' rel='noreferrer'>Exchange Rate API</a> |  
      <a href={site.git} target='_blank' rel='noreferrer'>GitHub</a> - Django REST framework
    </li>
  ))
)
RenderWebsite.propTypes = {
  sites: PropTypes.array,
}

export default Projects;