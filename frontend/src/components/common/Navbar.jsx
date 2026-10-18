import React from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

function Navbar({ user }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

  return (
    <div className='py-5 px-8 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-[#0B1120]/80 border-b border-slate-800'>
        <h2 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter'>
            Portfolio.
        </h2>
        <div className='flex items-center gap-8'>
            <Link className='text-slate-300 hover:text-cyan-400 transition-colors font-medium' to={"/home"}>Home</Link>
            <Link className='text-slate-300 hover:text-cyan-400 transition-colors font-medium' to={"/about"}>About</Link>
            <Link className='text-slate-300 hover:text-cyan-400 transition-colors font-medium' to={"/blogs"}>Blogs</Link>
            
            {user ? (
                <button className='button-style hidden md:block' onClick={handleLogout}>Logout</button>
            ) : (
                <button className='button-style hidden md:block' onClick={() => navigate("/login")}>Login</button>
            )}
        </div>
    </div>
  );
}

export default Navbar;