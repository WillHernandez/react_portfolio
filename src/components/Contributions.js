import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Contributions = () => {
  return (
    <Container className='outerContainer'>
      <div className='innerContainer'>
        <h3>Google Chromium Devtools Contributions</h3>
        <ContribComponent title={data.five.title} issue={data.five.issue} href={data.five.href} src={data.five.img} desc={data.five.desc}/>
        <ContribComponent title={data.three.title} issue={data.three.issue} href={data.three.href} src={data.three.img} desc={data.three.desc}/>
        <ContribComponent title={data.one.title} issue={data.one.issue} href={data.one.href} src={data.one.img} desc={data.one.desc}/>
        <ContribComponent title={data.two.title} issue={data.two.issue} href={data.two.href} src={data.two.img} desc={data.two.desc}/>
        <ContribComponent title={data.four.title} issue={data.four.issue} href={data.four.href} src={data.four.img} desc={data.four.desc}/>
        <Link to='/contributions'>MORE CONTRIBUTIONS</Link>
      </div>
    </Container>
  )
}
export default Contributions;

const ContribComponent = (props) => {
  return (
    <div className="contrib">
      <h5>{props.title}</h5>
      <a href={props.issue} target='_blank'm rel='noreferrer'>Link to original issue</a>
      <div className="contribContent">
        <div className="contribImg">
          <a href={props.href} target='_blank' rel='noreferrer'>
            <img className='image__img' src={props.src} alt=""/>
            <div className="image__overlay">
              <div className="image__title">MERGED CODE</div>
            </div>
          </a>
        </div>
        <div className='contribDescContainer'>
          <ul>
            <li>
              <p className='contribDesc'>{props.desc}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const data = {
  one: {
    title: 'Pretty-print directly visited minified asset files.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1019785&hotlist_id=10185&sort=%20rank%20-ID',
    href:'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2572038/',
    img:'/img/2572038.jpg',
    desc: 'Fixed the order in which a visited pages mimeType was set. Added a new mimeType to recognize and allow the formatting of minified asset files when directly visited on a webpage.'
  },
  two: {
    title: 'URL.createObjectURL() creates valid links.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1100124',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2991382/',
    img: '/img/2991383.jpg',
    desc: 'URL.createObjectURL() creates a clickable link that does not include \'blob\' which is a required for correct webpage routing. If url is type \'blob\', include all sections when creating a clickable link.'
  },
  three: {
    title: 'Created a check on our document for any custom css varibles.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1153053&q=component%3APlatform%3EDevTools%20status%3DAvailable%20type%3DBug&can=2',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2803333',
    img: '/img/2803333.jpg',
    desc: 'Created a check for shorthand css properties. Used a regex to extract any longhand css properties from our current shorthand property. Added each extracted longhand property to our activeProperties map which will add a check to the property and uncheck any following conflicting css properties.'
  },
  four: {
    title: 'Opening a new tab on formatted files opens an invalid window.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=911623&q=component%3APlatform%3EDevTools%20status%3DAvailable%20type%3DBug&can=2&start=500',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2769978/',
    img: '/img/2769978.jpg',
    desc: 'Added a check for tabs that are formatted. If the tab we are attempting to open a new tab on is formatted, return and open the url of its unformatted equivalent.'
  },
  five: {
    title: 'Allow JSON responses to be pretty printed.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=998674',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2909881',
    img: '/img/2909881.jpg',
    desc: 'Created a JSON parser that allows .json format network responses to be Pretty Printed. Enabled Pretty Print button on .json file types. Wrote Mocha tests to confirm parser worked as expected.'
  },
};