import React from 'react';
import { useRouter } from 'next/router';

const Steps = ({stepOne, stepTwo}) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <ul className="steps steps-vertical w-[70vw] text-neutral-content text-2xl font-bold lg:steps-horizontal">
      <li className={`step step-primary`}>{stepOne}</li>
      <li className={`step ${pid && 'step-primary'}`}>{stepTwo}</li>
    </ul>
  )
}

export default Steps;