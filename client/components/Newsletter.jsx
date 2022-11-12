import React from 'react';

const Newsletter = () => {
  return (
    <>
      <div className="hero min-h-[20vh]" style={{ backgroundImage: `url("https://tarotgyan.com/wp-content/uploads/2018/03/background-for-tarot.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-max flex flex-col items-center gap-10 md:flex-row">
            <div className="flex flex-col items-start">
              <h1 className="mb-5 text-5xl font-bold">Get daily reading to your email</h1>
              <p className="text-xl">Sign up and get daily tarot card sent to your inbox!</p>
            </div>
            <div className="form-control">
              <div className="input-group">
                <input type="email" placeholder="Your Email" className="input input-bordered" />
                <button className="btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter;