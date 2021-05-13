import React, { useContext, useState, useEffect } from 'react'
import ClassContext from 'ClassContext';
import './style.scss'
import projects from './data/projects'
import { useParams } from "react-router-dom";


const CardProjects = () => {
  const { typeSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

  
  useEffect(() => {
    const foundProject = projects.find((type) => type.name === typeSlug);
    setCurrentProject(foundProject);
  }, [typeSlug])

  console.log({currentProject})

  if (currentProject === undefined){
    return (<h1>Oh Noo</h1>)

  } return (
  
    <div className="All">
      <div class="Card">
          <div class="myCard"> 
            <img alt="" src={currentProject.url}></img>
            <h3>{currentProject.name}</h3>
            <h4>{currentProject.intro}</h4>
          </div>
          <div class="textCard">
            <p>{currentProject.text}</p>
          </div>
      </div>
    </div>

  )
}


export default CardProjects




