import React from 'react';
import styles from '../styles/loading.module.scss';

const Loading = () => {

  return (
    <div className={`h-screen w-screen flex flex-col justify-center items-center text-5xl text-neutral-content`}>
      <div className={styles.loading}>Loading</div>
      <div className="text-lg font-thin my-5 italic animate-pulse text-center px-5">On first render, it needs a minute or two due to free database plan</div>
    </div>
  )
}

export default Loading;