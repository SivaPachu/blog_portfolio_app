import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 text-slate-300 py-12 mt-20">
        {/* Changed grid-cols-3 to grid-cols-4 for better weight distribution */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand Section - Now spans 2 columns to fill the empty gap */}
            <div className="flex flex-col gap-4 md:col-span-2 md:pr-12">
                <h2 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>
                    Pachaiyappan S.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                    A full-stack web developer engineering robust, scalable applications with React, Express.js, Node.js, and MongoDB.
                </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold mb-2">Navigation</h3>
                <Link to="/home" className="text-sm hover:text-cyan-400 transition-colors">Home</Link>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors">About</Link>
                <Link to="/blogs" className="text-sm hover:text-cyan-400 transition-colors">Blogs</Link>
            </div>

            {/* Tech Stack & Contact */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold mb-2">Specialties</h3>
                <p className="text-sm">Frontend: React, Redux, Tailwind</p>
                <p className="text-sm">Backend: Node.js, Express.js</p>
                <p className="text-sm">Database: MongoDB, Firebase</p>
                <a href="mailto:pachupy512@gmail.com" className="text-sm text-blue-400 hover:text-cyan-300 mt-2 transition-colors">
                    Get in touch &rarr;
                </a>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2026 Pachaiyappan S. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Designed & Built with the MERN Stack.</p>
        </div>
    </footer>
  );
}

export default Footer;