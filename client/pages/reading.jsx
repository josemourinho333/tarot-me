import React from 'react';
import ReadingType from '../components/ReadingType';

const Reading = () => {
  return (
    <div className="min-h-[80vh] bg-primary rounded-xl flex flex-nowrap p-16 gap-5">
      <ReadingType type="One Card Spread" description="One card to rule them all."/>
      <ReadingType type="Three Card Spread" description="Three aspects of you. The past, present and the future. or anything really."/>
      <ReadingType type="Five Card Spread" description="Cross spread, represents past, present future, core reason for circumstances and representing potential of situation."/>
      <ReadingType type="Five Card Spread" description="Rectangle spread. Represents present, influences, challenges, final outcome and the theme."/>
      <ReadingType type="Celtic Cross Spread" description="Advanced. Represents present, challenge, subsconscious, past, future, near future, internal and external influences, hopes/fears and the outcome"/>
    </div>
  )
};

export default Reading;