import React from 'react';
import LearnNavBar from './LearnNavBar';

const LearningLayout = ({children}) => {
  return (
    <div className="flex">
      <LearnNavBar />
      <main className="w-full">
        {children}
      </main>
    </div>
   
  )
}

export default LearningLayout;