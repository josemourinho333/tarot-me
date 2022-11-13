import React from 'react';
import ReadingType from '../components/ReadingType';
import ReadingLayout from '../components/ReadingLayout';

const Reading = () => {

  return (
    <ReadingLayout>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <ReadingType type="One Card Spread" description="One card to rule them all." />
        <ReadingType type="Three Card Spread" description="Three aspects of you. The past, present and the future. or anything really." />
        <ReadingType type="Cross Five Card Spread" description="Cross spread, represents past, present future, core reason for circumstances and representing potential of situation." />
        <ReadingType type="Rectangle Five Card Spread" description="Rectangle spread. Represents present, influences, challenges, final outcome and the theme." />
        <ReadingType type="Celtic Cross Spread" description="Advanced. Represents present, challenge, subsconscious, past, future, near future, internal and external influences, hopes/fears and the outcome" />
      </div>
    </ReadingLayout>
  )
};

export default Reading;