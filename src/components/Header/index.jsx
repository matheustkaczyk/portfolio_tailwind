import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

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
    <header className={`fixed mx-auto h-auto w-screen p-5 border-b-2 bg-yellow-400 top-0 left-0 transition-all duration-500 ease-in-out z-50 ${isSticky ? 'h-12' : 'h-16'}`}>
      <div className='flex flex-row justify-between items-center'>
        <h1 className="font-mono font-thin text-2xl">Tkaczyk</h1>
        <GiHamburgerMenu className='text-2xl' />
      </div>
    </header>
  )
}

export default Header