import React, {useState} from 'react';
import ReadingType from '../components/ReadingType';
import Steps from '../components/Steps';

const Reading = () => {
  const [currentStep, setCurrentStep] = useState(0);

  //proceed to next step
  const nextStep = () => {
    setCurrentStep(prev => (prev + 1));
  };

  return (
    <div className="min-h-[100vh] bg-warning rounded-xl flex flex-nowrap flex-col p-16 items-center align-middle">
      <div className="mb-10">
        <Steps stepOne="Select Reading" stepTwo="See Your Cards" stepThree="Your Readings" currentStep={currentStep}/>
      </div>
      {
        currentStep === 0 && 
        <div className="flex flex-wrap justify-center gap-5">
          <ReadingType type="One Card Spread" description="One card to rule them all." next={nextStep}/>
          <ReadingType type="Three Card Spread" description="Three aspects of you. The past, present and the future. or anything really."/>
          <ReadingType type="Five Card Spread" description="Cross spread, represents past, present future, core reason for circumstances and representing potential of situation."/>
          <ReadingType type="Five Card Spread" description="Rectangle spread. Represents present, influences, challenges, final outcome and the theme."/>
          <ReadingType type="Celtic Cross Spread" description="Advanced. Represents present, challenge, subsconscious, past, future, near future, internal and external influences, hopes/fears and the outcome"/>
        </div>
      }

    </div>
  )
};

export default Reading;