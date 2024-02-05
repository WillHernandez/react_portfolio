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
			<i>
				<p>Websites may take time to load as they are hosted/deployed on free services.</p>
			</i>
        <RenderWebsite sites={projectLinks} />
      </ul>
      </div>
    </div>
  </Container>
)

const RenderWebsite = ({sites}) => ( 
  sites.map(site => (
    <li key={site.key}>
      <a href={site.live} target='_blank' rel='noreferrer'>
				<>
					{site.website}
					&nbsp;
				</>
			</a>  
					| 
      {site.frontGit && 
				<>
				&nbsp;
        <a href={site.frontGit}target='_blank' rel='noreferrer'> 
					{site.backGit ? "Client-Side Code" : "Code"}
				</a>
				&nbsp;
				</>
      }
       | 
      {site.backGit &&
				<>
        	<a href={site.backGit} target='_blank' rel='noreferrer'> Server-Side Code </a>
					| 
				</>
      }
			<>
				&nbsp;
				{site.tech}
			</>
    </li>
  ))
)
RenderWebsite.propTypes = {
  sites: PropTypes.array,
}

export default Projects;