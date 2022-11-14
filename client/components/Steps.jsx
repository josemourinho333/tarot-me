import React from 'react';
import { useRouter } from 'next/router';

const Steps = ({stepOne, stepTwo}) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <ul className="steps steps-vertical w-[70vw] justify-items-center text-neutral-content text-2xl font-bold lg:steps-horizontal lg:justify-items-stretch">
      <li className={`step step-primary`}><a href="/reading">{stepOne}</a></li>
      <li className={`step ${pid && 'step-primary'}`}>{stepTwo}</li>
    </ul>
  )
}

export default Steps;