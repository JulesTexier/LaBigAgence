import React, { useContext } from 'react'
import ClassContext from 'ClassContext';
import Buttons from 'components/Buttons'
import './style.scss';
import slide from 'images/undraw_Development_re_g5hq.svg'

const About = () => {

  const {currentClass} = useContext(ClassContext);


  return (
    <ClassContext.Provider  value={{
      currentClass}}>
        <div className="AllAbout">
          <div className = {"About" + currentClass}>
            <h2>ABOUT</h2>
            <h3>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
      Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</h3>
            <img alt=""src={slide}></img>
            <Buttons text={"Contactez-Nous"}/>

          </div>
        </div>
  </ClassContext.Provider>
  );

};

export default About;
