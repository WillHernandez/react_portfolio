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
        <Contribution link={data.three.link} href={data.three.href} desc={data.three.desc} />
        <Contribution link={data.one.link} href={data.one.href} desc={data.one.desc} />
        <Contribution link={data.two.link} href={data.two.href} desc={data.two.desc} />
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
          <a href={props.link} target='_blank' rel='noreferrer'>Bug Report</a> | <a href={props.href} target='_blank' rel='noreferrer'>Merged Code</a>
        </div>
      </li>
    </ul>
  )
}

const data = {
  three: {
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=998674&q=component%3APlatform%3EDevTools%20json&can=2&start=100',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/3055035/',
    desc:"Corrected a previous patch I had submitted. JSON formatter now respects the user's indentation level provided in Chrome Settings > Preference > Sources section > Default indentation",
  },
  one: {
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1137733',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2493185',
    desc:'Prevent “Emulated Devices” text from wrapping. Changed a style property on the “Emulated Devices” h1 to prevent it from wrapping to the next line and clashing with the "Add custom device” button when the DevTools window is resized.',
  },
  two: {
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1070605',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2606131/',
    desc: 'Work In Progress.',
  },
}