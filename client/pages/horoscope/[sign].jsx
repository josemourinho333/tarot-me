import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const Horoscope = () => {
  const router = useRouter();
  const { sign } = router.query;
  const [message, setMessage] = useState({
    message: 'Please wait for your daily horoscope...',
    date: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/horoscope', {
      params: {
        sign,
      }
     })
     .then((res) => {
        setMessage({
          message: res.data.horoscope,
          date: res.data.date
        })
     })
     .catch((err) => {
        console.log('err', err);
        setError(err.message);
     });
  }, []);

  return (
    <div className="bg-base-100 flex flex-col justify-center items-center min-h-[65vh] gap-5 p-5 w-full md:w-2/3 m-auto">
      <div className="bg-neutral p-10 rounded-2xl flex flex-col text-center items-center gap-5">
        <h2 className="text-5xl font-semibold capitalize">Daily {sign}</h2>
        <div className="divider"></div> 
        <p className="italics text-xl font-light">{message.date}</p>
        <p>
          {message.message}
        </p>
        <div className="flex">
          <Link href="/horoscope" className="btn btn-secondary btn-md md:btn-lg text-lg">Enter a different date of birth</Link>
        </div>
      </div>
    </div>
  )
};

export default Horoscope;