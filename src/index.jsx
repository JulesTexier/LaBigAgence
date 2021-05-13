import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import React, { useState } from 'react';
import ClassContext from './ClassContext';
import './font/Quicksand-Medium.ttf'; 
import 'style.scss'
import 'antd/dist/antd.css';

const App = () => {

  const [currentClass, setCurrentClass] = useState('Day');
  
  return (
    <ClassContext.Provider value={{
      currentClass,
      changeDay: () => setCurrentClass("Day"),
      changeNight: () => setCurrentClass("Night")
  }}>
    <div className={currentClass}>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/projects" >
              <Projects />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  </ClassContext.Provider>

  )
}

export default App;
ReactDOM.render(<App/>, document.getElementById('root'))
