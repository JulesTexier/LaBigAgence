import React from 'react';
import './';
import Cards from 'components/Cards';
import Slider from 'components/Slider';
import CardProjectsGallery from 'components/CardProjectsGallery';
import TalkToUs from 'components/TalkToUs';
import './style.scss'


const Home = () => {

  return (
  <div className="myBody">
    <Slider title={"La Big Agence, App & Web Agency"} subtitle={"Nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO."} />
    <Cards />
    <TalkToUs />
    <CardProjectsGallery />
  </div>
  );

};

export default Home;
