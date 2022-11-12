import React, {useState} from 'react';
import ReadingType from '../components/ReadingType';
import Steps from '../components/Steps';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Reading = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [readingType, setReadingType] = useState(null);

  //proceed to next step when reading type is clicked
  const nextStep = (readingType) => {
    setCurrentStep(prev => (prev + 1));
    setReadingType(readingType);
  };

  // go back to selecting reading type
  const selectStep = () => {
    setCurrentStep(0);
    setReadingType(null);
  };

  return (
    <div className="min-h-[100vh] bg-warning rounded-xl flex flex-nowrap flex-col p-16 items-center align-middle">
      <div className="mb-10 flex items-start">
        {
          currentStep === 0
            ? <></>
            : currentStep === 2
            ? <></>
            : <button className="btn btn-md btn-primary" onClick={selectStep}><HiChevronLeft className="w-5 h-5"/></button>
        }
        <Steps stepOne="Select Reading" stepTwo="See Your Cards" stepThree="Your Readings" currentStep={currentStep}/>
        {/* {
          currentStep === 2
            ? <></>
            : <button className="btn btn-md btn-primary"><HiChevronRight className="w-5 h-5"/></button>
        } */}
      </div>
      {
        currentStep === 0 && 
        <div className="flex flex-wrap justify-center gap-5">
          <ReadingType type="One Card Spread" description="One card to rule them all." next={nextStep}/>
          <ReadingType type="Three Card Spread" description="Three aspects of you. The past, present and the future. or anything really." next={nextStep}/>
          <ReadingType type="Five Card Spread" description="Cross spread, represents past, present future, core reason for circumstances and representing potential of situation." next={nextStep}/>
          <ReadingType type="Five Card Spread" description="Rectangle spread. Represents present, influences, challenges, final outcome and the theme." next={nextStep}/>
          <ReadingType type="Celtic Cross Spread" description="Advanced. Represents present, challenge, subsconscious, past, future, near future, internal and external influences, hopes/fears and the outcome" next={nextStep}/>
        </div>
      }
      {
        currentStep === 1 &&
        <div>Step 2</div>
      }

    </div>
  )
};

export default Reading;