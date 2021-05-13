import React, { useContext } from 'react';
import ClassContext from 'ClassContext';
import slide from 'images/undraw_Development_re_g5hq.svg'
import Buttons from 'components/Buttons';
import { Link } from 'react-router-dom'
import './style.scss'


const Slider = (props) => {

  const {currentClass} = useContext(ClassContext);

  
  return (
    <ClassContext.Provider value={{
      currentClass}}>
          <div className = {'Header' + currentClass}>
            <div className = "TextHeader">
              <h1 className="typing-demo">{props.title}</h1>
              <h5>{props.subtitle}</h5>
              <Link to={"/projects"}><Buttons text={"Découvrir nos projets"}/></Link>
            </div>
            <img alt=""src={slide}></img>
          </div>
    </ClassContext.Provider>

  );

};

export default Slider;
