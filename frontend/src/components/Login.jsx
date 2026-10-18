import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-[#0B1120]">
            <form onSubmit={handleLogin} className="p-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.15)] w-full max-w-md mx-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <h2 className="text-3xl font-bold mb-8 text-gray-100 tracking-tight">Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Terminal</span></h2>
                
                {error && <p className="text-red-400 bg-red-950/30 border border-red-900/50 p-3 rounded mb-4 text-sm">{error}</p>}
                
                <div className="mb-5">
                    <label className="block text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wide">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-200 transition-colors" />
                </div>
                
                <div className="mb-8">
                    <label className="block text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wide">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-200 transition-colors" />
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all mb-6">
                    Initialize Session
                </button>
                
                <p className='text-slate-400 text-center text-sm'>
                    New entity? <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">Establish connection here.</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;