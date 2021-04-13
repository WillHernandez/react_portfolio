import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Contributions = () => {
  return (
    <Container className='outerContainer'>
      <div className='innerContainer'>
        <h3>Google Chromium Devtools Contributions</h3>
        <ContribComponent title={data.three.title} href={data.three.href} src={data.three.img} desc={data.three.desc}/>
        <ContribComponent title={data.one.title} href={data.one.href} src={data.one.img} desc={data.one.desc}/>
        <ContribComponent title={data.four.title} href={data.four.href} src={data.four.img} desc={data.four.desc}/>
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
    title: 'Pretty-print directly visited minified asset files.',
    href:'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2572038/',
    img:'/img/2572038.jpg',
    desc: 'Fixed the order in which a visited pages mimeType was set. Added a new mimeType to recognize and allow the formatting of minified asset files when directly visited on a webpage.'
  },
  two: {
    title: 'Devtools incorrectly opens a new browser window when refreshed.',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2606131/',
    img: '/img/2606131.jpg',
    desc: 'WIP'
  },
  three: {
    title: 'Created a check on our document for any custom css varibles.',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2803333',
    img: '/img/2803333.jpg',
    desc: 'Created a check for shorthand css properties. Used a regex to extract any longhand css properties from our current shorthand property. Added each extracted longhand property to our activeProperties map which will add a check to the property and uncheck any following conflicting css properties.'
  },
  four: {
    title: 'Opening a new tab on formatted files opens an invalid window.',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2769978/',
    img: '/img/2769978.jpg',
    desc: 'Added a check for tabs that are formatted. If the tab we are attempting to open a new tab on is formatted, return and open the url of its unformatted equivalent.'
  }
}
