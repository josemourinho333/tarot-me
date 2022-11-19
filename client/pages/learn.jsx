import React from 'react';
import LearningLayout from '../components/LearningLayout';

const Learn = () => {
  return (
    <LearningLayout>
      <div>learn</div>
    </LearningLayout>
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
