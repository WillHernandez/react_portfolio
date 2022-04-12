import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { moreContribData } from './Data';
import PropTypes from 'prop-types';

const MoreContributions = () => (
  <>
    <Header />
    <Container className='moreContributions outerContainer'>
    <div className=' innerContainer'>
      <div className="returnHome">
        <Link to='/'>RETURN HOME</Link>
      </div>
      <RenderContribs contribs={moreContribData}/>
    </div>
  </Container>
  </>
)

const RenderContribs = ({contribs}) => (
  contribs.map(contrib => (
    <Contribution contrib={contrib} key={contrib.key} />
  ))
)
RenderContribs.propTypes = {
  contrib: PropTypes.array,
}

const Contribution = ({contrib}) => {
  const { desc, link, href } = contrib;
  return (
    <ul>
      <li>
        <div className="desc">
          <p className='moreContDesc'>{desc}</p>
        </div>
        <div className="link">
          <a href={link} target='_blank' rel='noreferrer'>Bug Report</a> | 
          <a href={href} target='_blank' rel='noreferrer'>Merged Code</a>
        </div>
      </li>
    </ul>
  )
}

export default MoreContributions;