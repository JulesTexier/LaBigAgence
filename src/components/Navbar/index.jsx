import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ClassContext from 'ClassContext';
import { Switch } from 'antd';
import logo from 'images/logo.png'
import './style.scss'

const Navbar = () => {

  const classChange = useContext(ClassContext);
  const {currentClass} = useContext(ClassContext);

  const [dayMode, Setclick] = React.useState(true)

  const handleClick = () => {
    if (!dayMode) {
      Setclick(true)
      classChange.changeDay();
      localStorage.setItem('theme', 'Day');
    } else{
      Setclick(false);
      classChange.changeNight();
      localStorage.setItem('theme', 'Night');
    }
  }


  if(localStorage.getItem('theme')) {
    if(localStorage.getItem('theme') === 'Night') {
      modeSombre();
    };
  };

  function modeSombre() {
    classChange.changeNight();
    localStorage.setItem('theme','Night');
  };


return (
  
  <ClassContext.Provider value={{
    currentClass}}>
    <div className={'nav' + currentClass}>
    <Link to="/"> <img src={logo} alt=""></img></Link>
      <nav>
        <div className="Menu">
          <div className="firstNav">
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
            <ul>
              <li><Link to="/about">About</Link></li>
            </ul>
            <ul>
              <li><Link to="/projects">Projets</Link></li>
            </ul> 
          </div>
          <div className="SwitchButton">
            <Switch onClick={handleClick} checkedChildren="Mode Nuit" unCheckedChildren="Mode Jour" />
          </div>
        </div>
      </nav>
    </div>
  </ClassContext.Provider>

);

}

export default Navbar