import { useState, useEffect } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky w-full top-0 left-0 transition-all duration-500 bg-opacity-5 bg-gray-400 ease-in-out z-50 ${isSticky ? 'h-12' : 'h-16'}`}>
      <div className="max-w-7xl mx-auto p-5 text-white">
        <div className='flex flex-row justify-between items-center h-auto'>
          <h1 className="font-mono font-thin text-2xl">Tkaczyk</h1>
          <ul>
            <li className='inline-block mx-2 hover:text-orange-100'>
              <a href="#home" className="font-mono font-thin text-xl">Home</a>
            </li>
            <li className='inline-block mx-2 hover:text-orange-100'>
              <a href="#services" className="font-mono font-thin text-xl">Services</a>
            </li>
            <li className='inline-block mx-2 hover:text-orange-100'>
              <a href="#projects" className="font-mono font-thin text-xl">Projects</a>
            </li>
            <li className='inline-block mx-2 hover:text-orange-100'>
              <a href="#contact" className="font-mono font-thin text-xl">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
