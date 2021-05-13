import React, { useContext } from 'react'
import ClassContext from 'ClassContext';import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectsNavBar from './ProjectsNavBar'
import './style.scss';
import CardProjects from 'components/CardProjects';
import TalkToUs from 'components/TalkToUs';

const Projects = () => {

  const {currentClass} = useContext(ClassContext);


  return (
    <ClassContext.Provider  value={{
      currentClass}}>
        <div className={"Projects" + currentClass}>
          <div className = "About">
            <h2>NOS PROJETS</h2>
            <h3>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</h3>
            <div className= "BeautifulCards">
              <ProjectsNavBar />
            </div>
            <main>
              <Switch>
                <Route path="/projects/:typeSlug">
                <CardProjects />
                </Route>
                <TalkToUs />
              </Switch>
              </main>
          </div>
        </div>
    </ClassContext.Provider>
  );

};

export default Projects;
