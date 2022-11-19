import React from 'react';
import TarotCardKeywords from './TarotCardKeywords';

const TarotCardCollapseable = ({overview, title}) => {

  return (
    <div className="collapse collapse-arrow border rounded-xl">
      <input type="checkbox" /> 
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content"> 
        <p>{overview.meaning}</p>
        <TarotCardKeywords keywords={overview.keywords}/>
      </div>
    </div>
  )
}

export default TarotCardCollapseable;