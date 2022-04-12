import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import MoreContributions from './components/MoreContributions';
import Projects from './components/Projects';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <Route path='/' exact component={Home} />
    <Route path='/contributions' component={MoreContributions} />
  </Router>
)

const Home = () => (
  <div className="homeComponent">
    <Header />
    <AboutMe />
    <Contributions />
    <Projects />
    <Skills />
  </div>
)

export default App;