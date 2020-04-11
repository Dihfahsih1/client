import React form 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon';
import onlineIcon from '../../icons/onlineIcon';
const InfoBar = ({room }) =>(
  <div className="InfoBar">
    <div className="leftInnerContainer">
    <img className="onlineIcon" src="{onlineIcon}" alt="online Image"/>
      <h3>{room}</h3>

    </div>

    <div className="rightInnerContainer">
      <a href= "/"><img src={closeIcon} alt="close image" /></a>
    </div>
  </div>
)
export default InfoBar;
