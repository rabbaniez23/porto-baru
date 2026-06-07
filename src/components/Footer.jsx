import React, { useState } from 'react';
import TextSplitter from './TextSplitter';
import LazyVideo from './LazyVideo';

export const Footer = ({ activeLang }) => {
  const [email, setEmail] = useState('');

  const footerTranslations = {
    EN: {
      headline: 'Beyond interfaces',
      subheadline: 'building solutions that scale',
      anons: 'Let’s collaborate on your next technical project or event presentation.',
      emailPlaceholder: 'enter your email address',
      subscribeBtn: 'subscribe',
      about: 'About',
      projects: 'Projects',
      biography: 'Biography',
      experience: 'Experience',
      rights: '© 2026 MONECRUZ / Naufal Rizki Rabbani. All Rights Reserved.',
      privacy: 'Privacy Policy',
      designed: 'Designed & Developed by',
    },
    ID: {
      headline: 'Bukan sekadar antarmuka',
      subheadline: 'solusi digital yang siap berkembang',
      anons: 'Dapatkan info terbaru mengenai proyek, artikel, dan pembaruan open-source saya.',
      emailPlaceholder: 'masukkan email Anda',
      subscribeBtn: 'berlangganan',
      about: 'Tentang Saya',
      projects: 'Proyek Saya',
      biography: 'Biografi',
      experience: 'Pengalaman',
      rights: '© 2026 MONECRUZ / Naufal Rizki Rabbani. Hak Cipta Dilindungi.',
      privacy: 'Kebijakan Privasi',
      designed: 'Dirancang & Dibuat oleh',
    }
  };

  const t = footerTranslations[activeLang] || footerTranslations.EN;

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(activeLang === 'ID' ? 'Terima kasih telah berlangganan newsletter saya!' : 'Thank you for subscribing to my newsletter!');
    setEmail('');
  };

  return (
    <footer className="footer select-none overflow-hidden" id="contacts">
      <div className="container-fluid mx-auto px-6 md:px-12">
        
        {/* Footer Top Subscription Block */}
        <div className="footer-form text-center">
          <h2 className="font-bounded text-gold">
            <TextSplitter text={t.headline} />
          </h2>
          <h3 className="font-bounded text-gold">
            <TextSplitter text={t.subheadline} />
          </h3>
          <div className="anons anim-text">
            <TextSplitter text={t.anons} />
          </div>
          
          <div className="subscribe-form op mx-auto">
            <form onSubmit={handleSubscribe} className="wpcf7-form">
              <div className="input-container">
                <input 
                  type="email" 
                  placeholder={t.emailPlaceholder} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input" 
                  required 
                />
                <input type="submit" value={t.subscribeBtn} className="submit cursor-pointer" />
              </div>
            </form>
          </div>
        </div>

        {/* Footer Middle Navigation & Coordinates Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-16 pb-16">
          
          {/* Footer Left - Logo & Nav */}
          <div className="footer-left op">
            <a href="#hero" className="logo mb-8 block font-bounded text-gold text-lg md:text-xl tracking-widest uppercase hover:text-white transition-colors">
              MONECRUZ
            </a>
            <div className="footer-nav op">
              <a href="#intro" className="hover:text-gold transition-colors">{t.about}</a>
              <a href="#cases" className="hover:text-gold transition-colors">{t.projects}</a>
              <a href="#about-author" className="hover:text-gold transition-colors">{t.biography}</a>
              <a href="#events" className="hover:text-gold transition-colors">{t.experience}</a>
            </div>
          </div>

          {/* Footer Right - Phone, Address & Socials */}
          <div className="footer-right op">
            
            {/* Email */}
            <a href="mailto:naufalrabbaniez23@gmail.com" className="phone op">
              <div className="icon">
                <span className="ic font-icomoon">&#xe902;</span>
              </div>
              <span className="value font-bounded text-gold">naufalrabbaniez23@gmail.com</span>
            </a>

            {/* Address */}
            <div className="adres op">
              <div className="icon">
                <span className="ic font-icomoon">&#xe901;</span>
              </div>
              <span className="value font-haval uppercase text-xs tracking-wider text-gray-400">
                Bandung, Indonesia
              </span>
            </div>

            {/* Social connections */}
            <div className="socials op">
              <a href="https://instagram.com/naufal_rbbni" className="item hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/rabbaniez23" className="item hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/naufal-rizki-rabbani" className="item hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

          </div>

        </div>

        {/* Footer Bottom copyright & dev credits */}
        <div className="footer-bottom border-t border-gold/10 pt-8 pb-16 uppercase">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-[10px] font-bounded text-gold/40 tracking-wider gap-4">
            
            <div className="copy">
              {t.rights}
            </div>
            
            <div className="links text-center">
              <a href="#contacts" className="hover:text-gold transition-colors">{t.privacy}</a>
            </div>
            
            <div className="dev">
              <span className="data">{t.designed} </span>
              <a rel="nofollow" href="https://github.com/rabbaniez23" className="value hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">MONECRUZ</a>
            </div>

          </div>
        </div>

      </div>

      {/* Centerpiece Mechanical Loop Video lens at the very bottom */}
      <div className="footer-bg">
        <img src="/images/footer2.webp" alt="" className="mx-auto block" loading="lazy" />
        <div className="footer-video">
          <LazyVideo src="/videos/video2.webm" type="video/webm" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
