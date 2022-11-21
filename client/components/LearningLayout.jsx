import React from 'react';

const LearningLayout = ({children}) => {
  return (
    <>
      <main>
        <div className="flex flex-col lg:flex-row">
          {children}
        </div>
      </main>
    </>
  )
}

export default LearningLayout;