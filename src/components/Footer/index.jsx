import React, { useContext } from 'react'
import ClassContext from 'ClassContext';
import logo from 'images/logo.png'
import './style.scss'


const Footer = () => {

  const {currentClass} = useContext(ClassContext);


  return (
    <ClassContext.Provider  value={{
      currentClass}}>
      <div className = {"Footer" + currentClass}>
        <div className = "FooterContent">
          <div className = "TextFooter">
            <p>Nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO. </p>
          </div>
          <img alt=""src={logo}></img>
          <div>
            <h5>contact@labigagence.fr</h5>
            <p>+33 6 52 24 78 20</p>
          </div>
        </div>
        <p className="cgv"><b> Labigagence. All Right Reserved</b></p>
      </div>
    </ClassContext.Provider>


  );

};

export default Footer;
