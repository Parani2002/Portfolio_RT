import  { useState } from 'react';
import { Link } from 'react-scroll';



const Header = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <header className="bg-gray-700 text-white w-full top-0 mb-8">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="text-3xl font-bold pl-4">
          <a href="#home">MyPortfolio</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-4 absolute md:static top-14 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent text-center md:text-left`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block py-2 px-4 md:py-0 hover:text-gray-400 cursor-pointer text-3xl"
          >
            About
          </Link>
        
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block py-2 px-4 md:py-0 hover:text-gray-400 cursor-pointer text-3xl"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block py-2 px-4 md:py-0 hover:text-gray-400 cursor-pointer text-3xl"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
    
  );
};

export default Header;
