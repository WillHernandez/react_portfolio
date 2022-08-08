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
      <a href={site.live} target='_blank' rel='noreferrer'> {site.website}</a> | 
      <a href={site.frontGit}target='_blank' rel='noreferrer'>  Front-End Code </a> |
      <a href={site.apiUrl} target='_blank' rel='noreferrer'> API </a> | 
      <a href={site.backGit} target='_blank' rel='noreferrer'> Back-End Code</a> | {site.tech}
    </li>
  ))
)
RenderWebsite.propTypes = {
  sites: PropTypes.array,
}

export default Projects;