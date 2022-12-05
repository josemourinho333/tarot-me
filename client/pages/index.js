import React from 'react';
import Reading from "./reading";
import Hero from '../components/Hero';

export default function Home() {

  return (
    <div className="p-5 gap-5 bg-base-100 flex flex-col md:flex-row">
      <Hero title="Get a reading" oneLiner="See what the message is for you today." path="/reading" cta="Get a reading" bgImg="https://images.hdqwalls.com/download/gradient-colorful-blur-minimalist-v6-2932x2932.jpg"/>
      <Hero title="Learn" oneLiner="Read up on all the tarot cards in a deck." path="/learn" cta="Learn" bgImg="https://t4.ftcdn.net/jpg/01/98/24/71/360_F_198247162_JwrVkhqowZb4NJC24156nV6QYRhsV8Qf.jpg"/>

      {/* <Reading /> */}
    </div>
  )
};
