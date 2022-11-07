import React from 'react';

const TarotCardCollapse = ({title, keywords, meaning}) => {
  return (
    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content"> 
        <p>{meaning}</p> <br/>
        <p><strong>Keywords: </strong>{keywords.join(', ')}</p>
      </div>
    </div>
  )
}

export default TarotCardCollapse