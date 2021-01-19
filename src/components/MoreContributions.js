import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const MoreContributions = () => {
  return (
    <>
      <Header />
      <Container className='moreContributions outerContainer'>
      <div className=' innerContainer'>
        <div className="returnHome">
          <Link to='/'>RETURN HOME</Link>
        </div>
        <Contribution href={data.one.href} desc={data.one.desc} />
        <Contribution href={data.two.href} desc={data.two.desc} />
        <Contribution href={data.two.href} desc={data.two.desc} />
        <Contribution href={data.two.href} desc={data.two.desc} />
        <Contribution href={data.two.href} desc={data.two.desc} />
        <Contribution href={data.two.href} desc={data.two.desc} />
      </div>
    </Container>
    </>
  )
}
export default MoreContributions;

const Contribution = (props) => {
  return (
    <ul>
      <li>
        <div className="desc">
          <p className='moreContDesc'>{props.desc}</p>
        </div>
        <div className="link">
          <a href={props.href} target='_blank' rel='noreferrer'>MERGED CODE</a>
        </div>
      </li>
    </ul>
  )
}

const data = {
  one: {
    href:'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2572038/',
    desc: 'Fixed the order in which a visited pages mimeType was set. Added a new mimeType to recognize and allow the formatting of minified asset files when directly visited on a webpage.',
  },
  two: {
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2493185',
    desc: 'Changed a style property on the “Emulated Devices” h1 to prevent it from wrapping to the next line and clashing with the "Add custom device” button when the DevTools window is resized.',
  },
}