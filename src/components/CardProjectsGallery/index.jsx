import React, { useContext } from 'react';
import ClassContext from 'ClassContext';
import './style.scss'
import projects from './../CardProjects/data/projects'
import { Link } from 'react-router-dom'


const CardProjectsGallery = () => {

  const {currentClass} = useContext(ClassContext);
 
  return (
  
    <ClassContext.Provider value={{
      currentClass}}>
        <div className="Gallery">
          <h2>NOS PROJETS</h2>
        <div className="ContentCard">{projects.map((project, i) => (
          <div className={"OneCard" + currentClass} key={i}>
          <Link to={"/projects/" + project.name}><img alt="" src={project.url}></img></Link>
          <Link to={"/projects/" + project.name}><h3>{project.name}</h3></Link>
          </div>
          ))}
        </div>
      </div>
    </ClassContext.Provider>
  )
}


export default CardProjectsGallery




