"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import style from './Navbar.module.css';

const Navbar = ({selectedLink}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuLinksVisible, setMenuLinksVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setMenuLinksVisible(true);
      }, 100);
    } else {
      setMenuLinksVisible(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`bg-yellow-500 p-4`}>
        <div className={`flex items-center justify-between`}>
          <div className={`flex items-center justify-center flex-shrink-0`}>
            <Link href={'/'} className={`flex-row items-center`}>
              <img className={`h-16 w-auto`} src="/Assets/LogoImage/logo.png" alt="Logo" />
            </Link>
          </div>

          <div className={`hidden sm:flex flex-grow items-center justify-center space-x-4`}>
            <Link href="/" className={`lg:text-2xl ${selectedLink === 'home'?'bg-orange-700':'text-white-300 hover:bg-orange-50 hover:text-orange-700'}  text-white rounded-md px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 ${style.link}`} aria-current="page">Home</Link>
            <Link href="/menu" className={`lg:text-2xl ${selectedLink === 'menu'?'bg-orange-700':'text-white-300 hover:bg-orange-50 hover:text-orange-700'} text-white-300 hover:bg-orange-50 hover:text-orange-700 rounded-md px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 ${style.link}`}>Menu</Link>
            <Link href="/about" className={`lg:text-2xl ${selectedLink === 'about'?'bg-orange-700':'text-white-300 hover:bg-orange-50 hover:text-orange-700'} text-white-300 hover:bg-orange-50 hover:text-orange-700 rounded-md px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 ${style.link}`}>About</Link>
            <Link href="/contact" className={`lg:text-2xl ${selectedLink === 'contact'?'bg-orange-700':'text-white-300 hover:bg-orange-50 hover:text-orange-700'} text-white-300 hover:bg-orange-50 hover:text-orange-700 rounded-md px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 ${style.link}`}>Contact</Link>
          </div>

       
          <div className={`flex items-center`}>
         
            <img className={`hidden sm:flex h-12 w-12 rounded-full cursor-pointer mr-4`} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />

            <div className={`sm:hidden`}>
              <button onClick={toggleMenu} className={`text-white`}>
                <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`sm:hidden mt-4 bg-yellow-50`}>
          <div className={`flex flex-col items-center`}>
            <Link href="/" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-orange-500 w-full ${style.link} text-center mt-4 transition-opacity duration-500 ease-in-out transform`}>Home</Link>
            <Link href="/about" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-orange-500 ${style.link} mt-4 transition-opacity duration-500 ease-in-out transform`}>About</Link>
            <Link href="/menu" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-orange-500 ${style.link} mt-4 transition-opacity duration-500 ease-in-out transform`}>Items</Link>
            <Link href="/contact" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-orange-500 ${style.link} my-4 transition-opacity duration-500 ease-in-out transform`}>Contact</Link>
          </div>
        </div>
        
        )}
      </nav>
    </>
  );
};

export default Navbar;
