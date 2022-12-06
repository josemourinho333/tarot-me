import React from 'react';
import ReadingType from '../components/ReadingType';
import ReadingLayout from '../components/ReadingLayout';
import Head from 'next/head';

const Reading = () => {
  return (
    <ReadingLayout>
      <Head><title>Tarot.Me - Reading</title></Head>
      <div className="w-full carousel carousel-center max-w-5xl my-5 space-x-4 bg-neutral rounded-box">
        <ReadingType type="One Card Spread" description="One card to rule them all." target={1}/>
        <ReadingType type="Three Card Spread" description="Three aspects of you. The past, present and the future. or anything really." target={3}/>
        <ReadingType type="Five Card Spread" description="Five card spread, represents past, present future, core reason for circumstances and representing potential of situation." target={5}/>
        <ReadingType type="Ten Card Spread" description="Advanced. Represents present, challenge, subsconscious, past, future, near future, internal and external influences, hopes/fears and the outcome" target={10}/>
      </div>
    </ReadingLayout>
  )
};

export default Reading;