import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Contributions = () => {
  return (
    <Container className='outerContainer'>
      <div className='innerContainer'>
        <h3>Google Chrome Devtools Contributons</h3>
        <ContribComponent title={data.one.title} href={data.one.href} src={data.one.img} desc={data.one.desc}/>
        <ContribComponent title={data.three.title} href={data.three.href} src={data.three.img} desc={data.three.desc}/>
        <ContribComponent title={data.two.title} href={data.two.href} src={data.two.img} desc={data.two.desc}/>
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
    title: 'Pretty-print directly visited minified asset files',
    href:'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2572038/',
    img:'/img/contrib1.jpg',
    desc: 'Fixed the order in which a visited pages mimeType was set. Added a new mimeType to recognize and allow the formatting of minified asset files when directly visited on a webpage.'
  },
  two: {
    title: 'Prevent “Emulated Devices” text from wrapping',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2493185',
    img: '/img/contrib2.jpg',
    desc: 'Changed a style property on the “Emulated Devices” h1 to prevent it from wrapping to the next line and clashing with the "Add custom device” button when the DevTools window is resized.'
  },
  three: {
    title: 'Devtools incorrectly opens a new browser window when refreshed',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2606131/',
    img: '/img/contrib3.jpg',
    desc: 'Added an additional if statement that checks if our current dockController instance has been given a dockside. Devtools on devtools is not given a dockside therefor will return and not open a new toolboxwindow.'
  }
}
