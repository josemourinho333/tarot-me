import React from 'react';
import Steps from './Steps';

const ReadingLayout = ({ children }) => {
  return (
    <div className="min-h-[90vh] w-[95vw] mx-auto bg-neutral rounded-xl flex flex-nowrap flex-col p-6 items-center align-middle justify-around my-20 lg:w-2/3 lg:mx-auto">
      <Steps stepOne="Select Reading" stepTwo="See Your Cards"/>
      {children}
    </div>
  )
}

export default ReadingLayout;