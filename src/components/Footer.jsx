import React from 'react';
import LogoTitle from '../shared/LogoTitle';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-slate-900 text-neutral-content p-10">
  <aside>
    <LogoTitle></LogoTitle>
    <p className='text-base font-medium'>
      Providing reliable answers to the users and solving their problems
    </p>
    <p className='text-base font-medium'>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <h3 className='text-xl mb-2'>Follow us on</h3>
    <div className="grid grid-flow-col gap-5">
      <a href='https://www.facebook.com' target='_blank'>
        <FaFacebook size={25}></FaFacebook>
      </a>
      <a href='https://www.youtube.com' target='_blank'>
        <FaYoutube size={25}></FaYoutube>
      </a>
      <a href='https://www.instagram.com' target='_blank'>
        <FaInstagram size={25}></FaInstagram>
      </a>
      <a href='https://www.x.com' target='_blank'>
        <FaTwitter size={25}></FaTwitter>
      </a>
    </div>
  </nav>
</footer>
  );
};

export default Footer;