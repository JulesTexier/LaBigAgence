import React from 'react'
import './style.scss'
import icon1 from '../../images/slide.svg'
import icon2 from '../../images/newWordpress.png'
import icon3 from '../../images/newWordpress.png'
const Cards =() => {

  return (


  <div className = "ArgumentSection">
    <div className="Bloc">
    <img className="CardImg" alt="" src={icon1}></img>
      <div className="ColumnCards">
        <h2>Developpement Web</h2>
        <p> Je développe des application web dynamique sur React et Ruby On Rails</p>
        <h4>Outils</h4>
        <p>React</p>
        <p>Javascript</p>
        <p>Github</p>
        <p>Ruby On Rails</p>
     </div>
    </div>
    <div className="Bloc2">
      <div className="ColumnCards">
        <h2>Gestion de projet</h2>
        <p> Je vous accompagne dans votre projet pour le mettre en oeuvre et le faire connaître</p>
        <h4>Outils</h4>
        <p>Trello</p>
        <p>ActiveCampaign</p>
        <p>Hubspot</p>
        <p>Mailchimp</p>
     </div>
     <img className="CardImg" alt="" src={icon2}></img>
    </div>
    <div className="Bloc">
      <img className="CardImg" alt="" src={icon3}></img>
      <div className="ColumnCards">
        <h2>Wordpress</h2>
        <p> Je vous propose d'améliorer votre site Wordpress pour améliore votre conversion</p>
        <h4>Outils</h4>
        <p>Trello</p>
        <p>ActiveCampaign</p>
        <p>Hubspot</p>
        <p>Mailchimp</p>
     </div>
    </div>
  </div>



















    // <div className = "Cards">
    //   <div className = "ColumnCards">
    //     <img alt="" src={icon1}></img>
    //     <h3>Developpement Web</h3>
    //     <p> Je développe des application web dynamique sur React et Ruby On Rails</p>
    //     <h3>Outils</h3>
    //       <p>React</p>
    //       <p>Javascript</p>
    //       <p>Github</p>
    //       <p>Ruby On Rails</p>
    //   </div>
    //   <div className = "ColumnCards">
    //     <img alt="" src={icon2}></img>
    //     <h3>Gestion de projet</h3>
    //     <p> Je vous accompagne dans votre projet pour le mettre en oeuvre et le faire connaître</p>
    //     <h3>Outils</h3>


    //   </div>
    //   <div className = "ColumnCards">
    //     <img alt="" src={icon3}></img>
    //     <h3>Wordpress</h3>
    //     <p> Je vous propose d'améliorer votre site Wordpress pour améliore votre conversion</p>
    //     <h3>Outils</h3>
    //     <ul>
    //       <p></p>
    //       <p></p>
    //       <p></p>
    //       <p></p>
    //     </ul>
    //   </div>
    // </div>
  )
}

export default Cards