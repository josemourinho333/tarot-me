import React, {useState} from 'react';
import ReadingType from '../components/ReadingType';
import Steps from '../components/Steps';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ReadingLayout from '../components/ReadingLayout';

const Reading = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [readingType, setReadingType] = useState(null);
  const [cueAnimation, setCueAnimation] = useState(false);

  //proceed to next step when reading type is clicked
  // const nextStep = (readingType) => {
  //   setCueAnimation(true);
  //   setTimeout(() => {
  //     setCurrentStep(prev => (prev + 1));
  //     setReadingType(readingType);
  //     setCueAnimation(false);
  //   }, 3000)
  // };

  return (
    // <div className="min-h-[100vh] bg-neutral rounded-xl flex flex-nowrap flex-col p-16 items-center align-middle">
    //   <div className="mb-10 flex items-start">
    //   </div>
    //   {
    //     cueAnimation
    //       ? <div className="text-neutral-content">Loading animation...</div>
    //       : currentStep === 0 && 
    //       <div className="flex flex-wrap justify-center gap-5">
    //         <ReadingType type="One Card Spread" description="One card to rule them all." next={nextStep}/>
    //         <ReadingType type="Three Card Spread" description="Three aspects of you. The past, present and the future. or anything really." next={nextStep}/>
    //         <ReadingType type="Five Card Spread" description="Cross spread, represents past, present future, core reason for circumstances and representing potential of situation." next={nextStep}/>
    //         <ReadingType type="Five Card Spread" description="Rectangle spread. Represents present, influences, challenges, final outcome and the theme." next={nextStep}/>
    //         <ReadingType type="Celtic Cross Spread" description="Advanced. Represents present, challenge, subsconscious, past, future, near future, internal and external influences, hopes/fears and the outcome" next={nextStep}/>
    //       </div>
    //   }
    //   {
    //     currentStep === 1 &&
    //     <div className="text-neutral">Step 2</div>
    //   }

    // </div>
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