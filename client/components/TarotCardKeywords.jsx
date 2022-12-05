import React from 'react';
import { GiHeraldicSun } from 'react-icons/gi';

const TarotCardKeywords = ({keywords}) => {
  return (
    <div className="alert shadow-lg my-5">
      <div>
        <GiHeraldicSun />
        <div>
          <h3 className="font-bold text-lg">Keywords</h3>
          <div className="text-sm">{keywords}</div>
        </div>
      </div>
    </div>
  )
}

export default TarotCardKeywords;