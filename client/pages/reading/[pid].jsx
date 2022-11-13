import { useRouter } from 'next/router';
import ReadingLayout from '../../components/ReadingLayout';

import React from 'react'

const Reading = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <ReadingLayout>
      reading type: { pid }
    </ReadingLayout>
  )
}

export default Reading;