import React from 'react';
import LearningLayout from '../components/LearningLayout';

const Learn = () => {
  return (
    <div className="bg-blue-300">lorem500</div>
  )
}

export default Learn;

Learn.getLayout = function getLayout(page) {
  return (
    <LearningLayout>
      {page}
    </LearningLayout>
  )
}
