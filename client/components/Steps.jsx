import React, {useState, useEffect} from 'react';

const Steps = ({stepOne, stepTwo, stepThree, currentStep}) => {

  return (
    <ul className="steps steps-vertical w-[70vw] text-neutral text-2xl font-bold lg:steps-horizontal">
      <li className={`step ${currentStep >= 0 && 'step-primary'}`}>{stepOne}</li>
      <li className={`step ${currentStep >= 1 && 'step-primary'}`}>{stepTwo}</li>
      <li className={`step ${currentStep >= 2  && 'step-primary'}`}>{stepThree}</li>
    </ul>
  )
}

export default Steps;