import React from 'react';
import ReadingLayout from '../../components/ReadingLayout';
import CardsReveal from '../../components/CardsReveal';

const Reading = ({cards}) => {

  return (
    <ReadingLayout>
      <CardsReveal cards={cards}/>
    </ReadingLayout>
  )
}

export default Reading;