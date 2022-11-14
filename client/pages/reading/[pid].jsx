import { useState, useEffect } from 'react';
import ReadingLayout from '../../components/ReadingLayout';
import { GridLoader } from 'react-spinners';
import CardsReveal from '../../components/CardsReveal';

import React from 'react'

const Reading = () => {
  const [cueAnimation, setCueAnimation] = useState(false);

  useEffect(() => {
    setCueAnimation(true);
    setTimeout(() => {
      setCueAnimation(false);
    }, 3000)
  }, [])

  return (
    <ReadingLayout>
      {cueAnimation && <GridLoader color="#ffffff" size={20} margin={40}/>}
      {!cueAnimation && <CardsReveal test='test prop'/>}
    </ReadingLayout>
  )
}

export default Reading;