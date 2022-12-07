import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PickDoB = () => {
  const [sign, setSign] = useState('');
  const [dob, setDob] = useState({
    month: '',
    day: '',
  });
  const [months, setMonths] = useState([
    {name: 'January'},
    {name: 'February'},
    {name: 'March'},
    {name: 'April'},
    {name: 'May'},
    {name: 'June'},
    {name: 'July'},
    {name: 'August'},
    {name: 'September'},
    {name: 'October'},
    {name: 'November'},
    {name: 'December'},
  ]);
  const [days, setDays] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

  // useEffect(() => {
  //   localStorage.setItem('dob', JSON.stringify(dob));
  // }, [dob]);

  useEffect(() => {
    if ((dob.month === 'March' && dob.day >= 21) || (dob.month === 'April' && dob.day <= 19)) {
      setSign('aries');
    };

    if ((dob.month === 'April' && dob.day >= 20) || (dob.month === 'May' && dob.day <= 20)) {
      setSign('taurus');
    };

    if ((dob.month === 'May' && dob.day >= 21) || (dob.month === 'June' && dob.day <= 20)) {
      setSign('gemini');
    };

    if ((dob.month === 'June' && dob.day >= 21) || (dob.month === 'July' && dob.day <= 22)) {
      setSign('cancer');
    };

    if ((dob.month === 'July' && dob.day >= 23) || (dob.month === 'August' && dob.day <= 22)) {
      setSign('leo');
    };

    if ((dob.month === 'August' && dob.day >= 23) || (dob.month === 'September' && dob.day <= 22)) {
      setSign('virgo');
    };

    if ((dob.month === 'September' && dob.day >= 23) || (dob.month === 'October' && dob.day <= 22)) {
      setSign('libra');
    };

    if ((dob.month === 'October' && dob.day >= 23) || (dob.month === 'November' && dob.day <= 21)) {
      setSign('scorpio');
    };

    if ((dob.month === 'November' && dob.day >= 22) || (dob.month === 'December' && dob.day <= 21)) {
      setSign('sagittarius');
    };

    if ((dob.month === 'December' && dob.day >= 22) || (dob.month === 'January' && dob.day <= 19)) {
      setSign('capricorn');
    };

    if ((dob.month === 'January' && dob.day >= 20) || (dob.month === 'February' && dob.day <= 18)) {
      setSign('aquarius');
    };

    if ((dob.month === 'February' && dob.day >= 19) || (dob.month === 'March' && dob.day <= 20)) {
      setSign('pisces');
    };
  }, [dob])

  const mappedMonths = months?.map((month) => {
    return (
      <option value={month.name}>{month.name}</option>
    )
  });

  const mappedDays = days?.map((day, index) => {
    // if (!dob.month) {
    //   return (
    //     <option disabled selected>Pick your day</option>
    //   )
    // };

    // if (dob.month === 'January') {
    //   if (index === 0) {
    //     return (
    //       <option selected>{day}</option>
    //     )
    //   };

    //   return (
    //     <option>{day}</option>
    //   )
    // };

    // if (dob.month === 'February') {

    // };

    // if (dob.month === 'March') {

    // };

    // if (dob.month === 'April') {

    // };

    // if (dob.month === 'May') {

    // };

    // if (dob.month === 'June') {

    // };

    // if (dob.month === 'July') {

    // };

    // if (dob.month === 'August') {

    // };

    // if (dob.month === 'September') {

    // };

    // if (dob.month === 'October') {

    // };

    // if (dob.month === 'November') {

    // };

    // if (dob.month === 'December') {

    // };
    return (
      <option value={day}>{day}</option>
    )
  });

  const monthHandler = (e) => {
    setDob(prev => ({
      ...prev,
      month: e.target.value
    }))
  };

  const dayHandler = (e) => {
    setDob(prev => ({
      ...prev,
      day: e.target.value
    }))
  };

  return (
    <>
    <div className="bg-base-100 min-h-[65vh] flex flex-col gap-5 justify-center items-center">
      <div className="bg-neutral p-10 rounded-2xl flex flex-col text-center items-center gap-5">

        <h2 className="text-5xl font-semibold">Enter your date of birth</h2>
        <p>{dob.month} {dob.day}</p>
        <div className="form-control w-full max-w-xs">
          <select className="select select-bordered" defaultValue={''} value={dob.month} onChange={monthHandler}>
            <option disabled value={''}>Pick your month</option>
            {mappedMonths}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <select className="select select-bordered" defaultValue={''} value={dob.day} onChange={dayHandler}>
            <option disabled value={''}>Pick your day</option>
            {mappedDays}
          </select>
        </div>

        <div>
          <Link href={`/horoscope/${sign}`} className={`btn btn-secondary btn-md md:btn-lg ${dob.month && dob.day ? '' : 'disabled'}`}>Get your Daily Horoscope</Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default PickDoB;