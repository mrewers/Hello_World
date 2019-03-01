import React from 'react';
import { getSeason } from '../../utils/season';

import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    iconName: 'sun',
    text: 'Let\'s head to the beach'
  },
  winter: {
    iconName: 'snowflake',
    text: 'Burr, it\'s chilly'
  }
}


const SeasonDisplay = ( { latitude } ) => {
  const month = new Date().getMonth();
  const season = getSeason( latitude, month );
  const { iconName, text } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon icon-left`} />
      <h1>{ text }</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  )
}

export default SeasonDisplay;