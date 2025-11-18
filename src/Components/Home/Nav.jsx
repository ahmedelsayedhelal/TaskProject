import { useState } from "react";
import { Link } from "react-router";
import { About } from './../../Pages/About';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        
          <Link to="/" className="font-mono text-xl font-bold text-white">
           UNIXSTUDIO
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
           <Link to="cases" className="text-gray-300 hover:text-blue-400">Cases</Link>
           <Link to="ourservice" className="text-gray-300 hover:text-blue-400">Services</Link>
            <Link to="about" className="text-gray-300 hover:text-blue-400">About </Link>
            <Link to="contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
           <Link to="News" className="text-gray-300 hover:text-blue-400">New</Link>

          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >  
      <Link to="cases"  onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">Cases</Link>
        <Link to="ourservice" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">Services</Link>
        <Link to="about" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">About</Link>
        <Link to="News" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">New</Link>
         <Link to="contact" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
};
