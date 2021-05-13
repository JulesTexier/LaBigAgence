import React, { useContext } from 'react'
import slide from 'images/undraw_Development_re_g5hq.svg'
import Buttons from 'components/Buttons';
import ClassContext from 'ClassContext';
import './style.scss'


const TalkToUs = () => {

  const {currentClass} = useContext(ClassContext);


  return (

  <ClassContext.Provider  value={{
    currentClass}}>
    <div className = {"TalkToUs" + currentClass}>
      <div className = "TextTalkToUs">
        <h2>Confiez vos rêves à des experts du Web</h2>
        <Buttons text={"En savoir plus"}/>
      </div>
      <div className="image">
        <img alt=""src={slide}></img>
      </div>
    </div>
    </ClassContext.Provider>
  );

};

export default TalkToUs;
