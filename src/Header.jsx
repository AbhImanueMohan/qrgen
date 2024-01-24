import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className={'mobile-menu'}>
      <Link to='/'>
      Home

      </Link>
      <a href='#news'>News</a>
      <a href='#contact'>Contact</a>
      <a href='#about'>About</a>
      <a href='#privacy'>Privacy Policy</a>
    </div>
  );
};

function Header() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className='topnav'>
        {/* Your Logo/Brand here */}
        <div className='logo'>
          KINDA<span>CODE</span>
        </div>

        {/* Desktop Menu, which only appears on large screens */}
        <div className='menu'>
        <Link to='/'>
      Home

      </Link>
          <a href='#news'>News</a>
          <a href='#contact'>Contact</a>
          <a href='#about'>About</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
}

export default Header;