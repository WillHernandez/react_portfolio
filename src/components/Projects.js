import React from 'react'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects(props) {
  return (
    <Container className='outerContainer'>
      <div className="innerContainer projectsContainer">
        <h3>Projects</h3>
        <div className="projects">
        <ul>
          <li><a href={links.one.url} target='_blank' rel='noreferrer'>Exchange Rate API</a> | <a href={links.one.git} target='_blank' rel='noreferrer'>GitHub</a> - Django REST framework</li>
        </ul>
        </div>
      </div>
    </Container>
  )
}

const links = {
  one: {
    url: "https://currency-api-will-h.herokuapp.com/currencies/",
    git: "https://github.com/WillHernandez/currencyapi",
  }
}
