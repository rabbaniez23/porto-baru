import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Header = ({ lenisInstance }) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Instantiate background audio element
    const audio = new Audio('/sound.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    if (isSoundPlaying) {
      audioRef.current.pause();
      setIsSoundPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsSoundPlaying(true))
        .catch(err => console.log('Audio playback blocked:', err));
    }
  };

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    if (newState) {
      document.body.classList.add('menu-open');
      lenisInstance?.stop();
    } else {
      document.body.classList.remove('menu-open');
      lenisInstance?.start();
    }
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (isMenuOpen) {
      toggleMenu();
    }

    const target = document.querySelector(hash);
    if (target && lenisInstance) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 88;
      lenisInstance.scrollTo(target, { offset: -headerHeight });
    }
  };

  return (
    <header className="header select-none">
      <div className="container flex items-center justify-between mx-auto px-4 h-full relative z-20">
        
        {/* Logo */}
        <a href="#hero" className="logo flex items-center" onClick={(e) => handleNavClick(e, '#hero')}>
          <img src="https://paralleluniverse.com.ua/wp-content/uploads/2025/06/logo.svg" alt="Parallel Universe" className="h-10 w-auto hover:opacity-80 transition-opacity" />
        </a>

        {/* Desktop Navigation & Mobile Slide-Out Overlay Menu */}
        <nav className="header-menu">
          <ul className="nav flex items-center gap-8 justify-between w-full">
            <li>
              <a href="#intro" className="nav-link font-haval uppercase text-sm tracking-wider" onClick={(e) => handleNavClick(e, '#intro')}>
                About the universe
              </a>
            </li>
            <li>
              <a href="#cases" className="nav-link font-haval uppercase text-sm tracking-wider" onClick={(e) => handleNavClick(e, '#cases')}>
                Author's works
              </a>
            </li>
            <li>
              <a href="#about-author" className="nav-link font-haval uppercase text-sm tracking-wider" onClick={(e) => handleNavClick(e, '#about-author')}>
                About the author
              </a>
            </li>
            <li>
              <a href="#events" className="nav-link font-haval uppercase text-sm tracking-wider" onClick={(e) => handleNavClick(e, '#events')}>
                Events
              </a>
            </li>
          </ul>

          {/* Styled Contacts button visible only inside mobile menu */}
          <a 
            href="#contacts" 
            className="header-link block xl:hidden mt-8 max-w-[200px] mx-auto text-center" 
            onClick={(e) => handleNavClick(e, '#contacts')}
          >
            Contacts
          </a>

          {/* Mobile-only contact details & socials inside the slide-out menu */}
          <div className="menu-contacts block xl:hidden">
            <a href="tel:+380970008848" className="phone flex items-center justify-center">
              <div className="icon flex items-center justify-center">
                <span className="ic font-icomoon">&#xe902;</span>
              </div>
              <span className="value">+38(097) 000 88 48</span>
            </a>
            <div className="adres inline-flex items-center">
              <div className="icon flex items-center justify-center">
                <span className="ic font-icomoon">&#xe901;</span>
              </div>
              <span className="value">
                Mini Art Gallery <br />
                Lviv, Teatralna St. 12
              </span>
            </div>
            <div className="socials flex justify-center gap-6 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="item">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="item">Facebook</a>
            </div>
          </div>
        </nav>

        {/* Header Right Controls */}
        <div className="header-right flex items-center gap-6">
          
          {/* Contacts Pill Button (Desktop only) */}
          <a 
            href="#contacts" 
            className="header-link hidden xl:block"
            onClick={(e) => handleNavClick(e, '#contacts')}
          >
            Contacts
          </a>

          {/* Language Switcher */}
          <div className={`header-langs relative ${isLangOpen ? 'open' : ''}`}>
            <button 
              className="lng-button font-bounded text-[12px] tracking-widest text-gold uppercase flex items-center justify-center cursor-pointer"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <span>{activeLang}</span>
            </button>
            <div className="lng-dropdown absolute right-0 top-full mt-2 bg-black border border-gold rounded px-3 py-2 flex flex-col gap-2 z-30 transition-all duration-300">
              <a 
                href="#en" 
                className={`text-[12px] uppercase ${activeLang === 'EN' ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
                onClick={(e) => { e.preventDefault(); setActiveLang('EN'); setIsLangOpen(false); }}
              >
                EN
              </a>
              <a 
                href="#uk" 
                className={`text-[12px] uppercase ${activeLang === 'UK' ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
                onClick={(e) => { e.preventDefault(); setActiveLang('UK'); setIsLangOpen(false); }}
              >
                UK
              </a>
            </div>
          </div>

          {/* Sound Switcher */}
          <button 
            type="button"
            className={`sound-switcher flex items-center justify-center cursor-pointer ${isSoundPlaying ? 'is-play' : ''}`}
            onClick={toggleSound}
          >
            <div className="icon flex items-center justify-center w-full h-full">
              <span className="ic font-icomoon text-[12px]">{isSoundPlaying ? '\ue903' : '\ue904'}</span>
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="menu-button xl:hidden flex items-center justify-center cursor-pointer z-30"
            onClick={toggleMenu}
          >
            <div className="button-icon flex items-center justify-center w-10 h-1.5 relative">
              <span className={`but-icon ${isMenuOpen ? 'is-active' : ''}`}></span>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
