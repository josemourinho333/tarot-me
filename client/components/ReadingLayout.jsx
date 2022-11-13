import React from 'react';
import Steps from './Steps';

const ReadingLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] bg-neutral rounded-xl flex flex-nowrap flex-col p-16 items-center align-middle">
      <Steps stepOne="Select Reading" stepTwo="See Your Cards"/>
        {children}
    </div>
  )
}

export default ReadingLayout;