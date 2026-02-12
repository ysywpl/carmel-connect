import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `text-sm font-medium tracking-wide uppercase transition-colors ${
      isActive ? "text-white opacity-100 font-bold" : "text-white opacity-80 hover:opacity-100"
    }`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header - Matching Carmel.sg style */}
      <header className="sticky top-0 z-50 bg-carmel-red shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo area */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <svg className="w-10 h-10 text-white mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V1" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 2h4" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-white text-xl md:text-2xl leading-none tracking-tight">MOUNT CARMEL</span>
                    <span className="font-sans text-[10px] md:text-xs text-white tracking-widest uppercase mt-0.5">Bible-Presbyterian Church</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <Link to="/" className={navLinkClass('/')}>Home</Link>
                <Link to="/groups" className={navLinkClass('/groups')}>Care Groups</Link>
                <Link to="/discipleship" className={navLinkClass('/discipleship')}>Discipleship</Link>
                
                {/* Resources Dropdown Trigger */}
                <div className="relative group cursor-pointer">
                  <span className="text-sm font-medium tracking-wide uppercase text-white opacity-80 group-hover:opacity-100 flex items-center">
                    Resources
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                  <div className="absolute right-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                     <div className="bg-white rounded shadow-xl py-2 border-t-4 border-carmel-red">
                      <Link to="/discussion-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-carmel-red">Sermon Discussion Guide</Link>
                      <Link to="/facilitator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-carmel-red">Facilitator Guide</Link>
                      <Link to="/member-log" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-carmel-red">Member Progress Log</Link>
                     </div>
                  </div>
                </div>
              </nav>

              {/* CTA Button */}
              <Link to="/groups" className="bg-white text-carmel-red hover:bg-gray-100 font-bold py-2 px-5 rounded text-sm tracking-wide transition-colors uppercase">
                I'm New
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-carmel-darkRed border-t border-red-900">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-900">Home</Link>
              <Link to="/groups" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-900">Care Groups</Link>
              <Link to="/discipleship" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-900">Discipleship</Link>
              <Link to="/discussion-guide" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-900">Sermon Discussion</Link>
              <Link to="/facilitator" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-900">Facilitator Guide</Link>
              <Link to="/member-log" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-900">Member Progress Log</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                 <span className="font-sans font-bold text-white text-xl tracking-tight">MOUNT CARMEL</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                We are a community of believers who love God and love one another. Our mission is to glorify God by making disciples of Jesus Christ.
              </p>
              
              {/* Social Media Placeholder */}
              <div className="flex space-x-4 mt-6">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-carmel-red hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-carmel-red hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-carmel-red hover:text-white transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-200">Connect</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/groups" className="hover:text-white transition-colors">Care Groups</Link></li>
                <li><Link to="/discipleship" className="hover:text-white transition-colors">Discipleship</Link></li>
                <li><Link to="/groups#shepherd" className="hover:text-white transition-colors">Shepherd Login</Link></li>
                <li><Link to="/member-log" className="hover:text-white transition-colors">Member Log</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-200">Visit Us</h3>
              <p className="text-gray-400 text-sm mb-2">123 Carmel Drive, Singapore</p>
              <p className="text-gray-400 text-sm mb-4">Sunday Services: 9am & 11am</p>
              <p className="text-gray-500 text-xs mt-8">
                &copy; {new Date().getFullYear()} Mount Carmel B-P Church.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;