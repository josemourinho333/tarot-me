import React from 'react';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About</a> 
        <a className="link link-hover">Learn</a> 
        <a className="link link-hover">Contact</a> 
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/josemourinho333/tarot-me" target="_blank"><SiGithub className="w-8 h-8"/></a>
        </div>
      </div> 
      <div>
        <p>Created by josemourinho333</p>
      </div>
    </footer>
  )
}

export default Footer;