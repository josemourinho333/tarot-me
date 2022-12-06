import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Steps = ({stepOne, stepTwo}) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <ul className="steps steps-vertical w-[70vw] justify-items-center text-neutral-content text-2xl font-bold lg:steps-horizontal lg:justify-items-stretch">
      <li className={`step step-primary`}><Link href="/reading">{stepOne}</Link></li>
      <li className={`step ${pid && 'step-primary'}`}>{stepTwo}</li>
    </ul>
  )
}

export default Steps;