import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { contribData, chromeProfile, chromeImg } from './Data';
import PropTypes from 'prop-types';

const Contributions = () => (
  <Container className='outerContainer'>
    <div className='innerContainer'>
      <h3>Google Chromium Devtools Contributions</h3>
      <div className='userProfileContainer'>
        <a href={chromeProfile} target='_blank'm rel='noreferrer'>
          <div className='userProfile'>
            <img src={chromeImg} alt="" />Chromium User Profile
          </div>
        </a>
      </div>
      <RenderContribs contribs={contribData}/>
      <Link to='/contributions'>MORE CONTRIBUTIONS</Link>
    </div>
  </Container>
)

const RenderContribs = ({contribs}) => (
  contribs.map(contrib => ( 
    <ContribComponent contrib={contrib} key={contrib.key}/>
  ))
)
RenderContribs.propTypes = {
  contribs: PropTypes.array.isRequired,
}

const ContribComponent = ({contrib}) => {
  const { title, issue, href, img, desc } = contrib;
  return (
    <div className="contrib">
      <h5>{title}</h5>
      <a href={issue} target='_blank'm rel='noreferrer'>Bug Report</a>
      <div className="contribContent">
        <div className="contribImg">
          <a href={href} target='_blank' rel='noreferrer'>
            <img className='image__img' src={img} alt=""/>
            <div className="image__overlay">
              <div className="image__title">MERGED CODE</div>
            </div>
          </a>
        </div>
        <div className='contribDescContainer'>
          <ul>
            <li>
              <p className='contribDesc'>{desc}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contributions;