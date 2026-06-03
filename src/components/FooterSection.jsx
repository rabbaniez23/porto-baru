import React, { useState } from 'react';
import TextSplitter from './TextSplitter';

export const FooterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to the alternate realities!');
    setEmail('');
  };

  return (
    <footer className="footer select-none" id="contacts">
      <div className="container-fluid mx-auto px-6 md:px-12">
        
        {/* Footer Top Subscription Block */}
        <div className="footer-form text-center">
          <h2 className="font-bounded text-gold">
            <TextSplitter text="These are not just sculptures" />
          </h2>
          <h3 className="font-bounded text-gold">
            <TextSplitter text="these are portals to alternate realities" />
          </h3>
          <div className="anons anim-text">
            <TextSplitter text="Stay up to date with the latest news and upcoming exhibitions" />
          </div>
          
          <div className="subscribe-form op mx-auto">
            <form onSubmit={handleSubscribe} className="wpcf7-form">
              <div className="input-container">
                <input 
                  type="email" 
                  placeholder="enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input" 
                  required 
                />
                <input type="submit" value="subscribe" className="submit cursor-pointer" />
              </div>
            </form>
          </div>
        </div>

        {/* Footer Middle Navigation & Coordinates Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-16 pb-16">
          
          {/* Footer Left - Logo & Nav */}
          <div className="footer-left op flex flex-col items-start w-full lg:w-1/2">
            <a href="/en/" className="logo mb-8 block">
              <img src="/images/logo.svg" alt="Parallel Universe" />
            </a>
            <div className="footer-nav op">
              <ul className="nav flex flex-col gap-4 text-left p-0 m-0 list-none font-haval uppercase text-xs tracking-wider">
                <li>
                  <a href="#about-universe" className="hover:text-gold transition-colors">Author's works</a>
                </li>
                <li>
                  <a href="#about-author" className="hover:text-gold transition-colors">About the author</a>
                </li>
                <li>
                  <a href="#events" className="hover:text-gold transition-colors">Events</a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-gold transition-colors">Contacts</a>
                </li>
                <li>
                  <a href="#merch" className="hover:text-gold transition-colors">Merch</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Right - Phone, Address & Socials */}
          <div className="footer-right flex flex-col items-start lg:items-end text-left lg:text-right w-full lg:w-1/2 gap-8">
            
            {/* Phone */}
            <a href="tel:380970008848" className="phone op flex items-center gap-3">
              <div className="icon flex items-center justify-center">
                <span className="ic font-icomoon text-xs">&#xe902;</span>
              </div>
              <span className="value font-bounded text-gold">+38(097) 000 88 48</span>
            </a>

            {/* Address */}
            <div className="adres inline-flex items-start lg:items-center gap-3 op">
              <div className="icon flex items-center justify-center">
                <span className="ic font-icomoon text-xs">&#xe901;</span>
              </div>
              <span className="value font-haval uppercase text-xs tracking-wider text-gray-400 text-left">
                Mini Art Gallery <br />Lviv, Teatralna St. 12
              </span>
            </div>

            {/* Social connections */}
            <div className="socials op flex gap-6 font-haval uppercase text-xs tracking-wider mt-4">
              <a href="https://www.instagram.com/parallel.art.universe?igsh=MTh4enVhanN4NmsyZg%3D%3D&utm_source=qr" className="item hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/share/1AjUjf9v1Y/?mibextid=wwXIfr" className="item hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">facebook</a>
            </div>

          </div>

        </div>

        {/* Footer Bottom copyright & dev credits */}
        <div className="footer-bottom border-t border-gold/10 pt-8 pb-16 uppercase">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-[10px] font-bounded text-gold/40 tracking-wider gap-4">
            
            <div className="copy">
              © 2026 parallel universe by ihor yaskevych
            </div>
            
            <div className="links text-center">
              <a href="/en/privacy-policy/" className="hover:text-gold transition-colors">Privacy Policy</a>
            </div>
            
            <div className="dev">
              <span className="data">Website by </span>
              <a rel="nofollow" href="https://esfirum.com" className="value hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">esfirum agency</a>
            </div>

          </div>
        </div>

      </div>

      {/* Centerpiece Mechanical Loop Video lens at the very bottom */}
      <div className="footer-bg">
        <img src="/images/footer2.png" alt="" className="mx-auto block" />
        <div className="footer-video">
          <video autoPlay loop muted playsInline>
            <source src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/video2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </footer>
  );
};

export default FooterSection;
