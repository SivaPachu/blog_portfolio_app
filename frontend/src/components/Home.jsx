import React from 'react';
import Navbar from './common/Navbar';
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer';

function Home() {
    const navigate = useNavigate();

    return (
        // Deep charcoal background with a subtle grid pattern
        <div className="min-h-screen bg-[#0B1120] text-gray-200 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]">
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Hero Section */}
                <div className='flex flex-col-reverse sm:flex-row items-center justify-between py-20 gap-10'>
                    <div className="w-full sm:w-1/2 flex flex-col justify-center">
                        <h2 className='text-3xl md:text-5xl font-bold pb-2 text-gray-100 tracking-tight'>Hi! I Am</h2>
                        {/* Light blue to cyan gradient text */}
                        <h2 className='text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 py-2 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]'>
                            Pachaiyappan S.
                        </h2>
                        <img src={BlogProfileImage} className='w-60 block sm:hidden rounded-2xl shadow-[0_0_30px_rgba(30,58,138,0.5)] my-6' alt="Profile" />
                        <p className='py-4 text-lg text-gray-400 leading-relaxed'>
                            A full-stack web developer specializing in the MERN stack. I build robust, scalable web applications with React, Redux, Express.js, Node.js, and MongoDB, crafting dynamic interfaces and secure backend architectures.
                        </p>
                        <div className="mt-4">
                            <button className='px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300'>
                                Hire Me
                            </button>
                        </div>
                    </div>
                    <div className='justify-center hidden sm:block relative'>
                        {/* Dark blue glowing effect behind the image */}
                        <div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                        <img src={BlogProfileImage} className='w-60 md:w-96 rounded-3xl relative z-10 border border-slate-800 shadow-2xl' alt="Profile" />
                    </div>
                </div>

                {/* Tech Stack Banner */}
                <div className='relative z-10 mx-auto max-w-4xl backdrop-blur-md bg-slate-900/50 border border-slate-800 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)]'>
                    <h3 className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-6">Core Technologies</h3>
                    <div className='flex justify-evenly items-center flex-wrap gap-4'>
                        <img src={HTML} className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" alt="HTML" />
                        <img src={CSS} className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" alt="CSS" />
                        <img src={JS} className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" alt="JavaScript" />
                        <img src={REACTICON} className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" alt="React" />
                        <img src={DB} className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" alt="MongoDB" />
                        <img src={NODE} className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer drop-shadow-md" alt="Node.js" />
                    </div>
                </div>

                {/* Experience & Services Section */}
                <div className='flex flex-col mt-28 items-center justify-between sm:flex-row gap-12'>
                    <div className='flex flex-col gap-6 w-full sm:w-1/3'>
                        {/* Dark glassmorphic stat cards */}
                        <div className='border border-slate-800 bg-slate-900/60 rounded-2xl p-6 flex flex-col items-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-blue-500/50 transition-colors'>
                            <div className='rounded-full p-4 font-bold text-2xl text-white text-center bg-gradient-to-br from-blue-900 to-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] w-16 h-16 flex items-center justify-center mb-3'>
                                15+
                            </div>
                            <p className='text-center font-medium text-slate-300'>Miniature UI Designs</p>
                        </div>
                        <div className='border border-slate-800 bg-slate-900/60 rounded-2xl p-6 flex flex-col items-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-cyan-500/50 transition-colors'>
                            <div className='rounded-full p-4 font-bold text-2xl text-white text-center bg-gradient-to-br from-cyan-900 to-cyan-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] w-16 h-16 flex items-center justify-center mb-3'>
                                100%
                            </div>
                            <p className='text-center font-medium text-slate-300'>Full-Stack Focus</p>
                        </div>
                    </div>

                    <div className='w-full sm:w-2/3 ml-0 sm:ml-8'>
                        <h2 className='text-4xl sm:text-6xl font-bold text-gray-100'>My Featured</h2>
                        <h2 className='text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 my-2'>Projects & Services</h2>
                        <p className='my-6 text-gray-400 text-lg leading-relaxed'>
                            From developing the frontend interface and dynamic styling components for platforms like the 22 Yards Club to deploying full-stack authentication web applications like SPY Creations using MongoDB session persistence.
                        </p>
                        <button className='px-8 py-3 rounded-full border border-blue-500 text-blue-400 font-semibold hover:bg-blue-900/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300'>
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Live Projects Grid */}
                <div className='mt-32'>
                    <h2 className='text-center text-4xl md:text-5xl font-bold mb-16 text-gray-100'>
                        Checkout My Live <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>Deployments</span>
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className="relative group rounded-xl overflow-hidden border border-slate-700 bg-slate-800 p-2">
                            <img src={P1} className='w-full rounded-lg object-cover h-64 grayscale group-hover:grayscale-0 transition-all duration-500' alt="Project 1" />
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300"></div>
                        </div>
                        <div className="relative group rounded-xl overflow-hidden border border-slate-700 bg-slate-800 p-2">
                            <img src={P2} className='w-full rounded-lg object-cover h-64 grayscale group-hover:grayscale-0 transition-all duration-500' alt="Project 2" />
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-xl transition-colors duration-300"></div>
                        </div>
                        <div className="relative group rounded-xl overflow-hidden border border-slate-700 bg-slate-800 p-2">
                            <img src={P3} className='w-full rounded-lg object-cover h-64 grayscale group-hover:grayscale-0 transition-all duration-500' alt="Project 3" />
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>

                {/* Blog CTA Section */}
                <div className='flex flex-col sm:flex-row items-center justify-center my-32 bg-slate-900/40 border border-slate-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden'>
                    {/* Background glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-600 rounded-full blur-[120px] opacity-20"></div>
                    
                    <div className='justify-center hidden sm:block relative z-10'>
                        <img src={BlogImage} className='w-60 md:w-80 rounded-2xl border border-slate-700 shadow-xl' alt="Blog Profile" />
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col justify-center sm:ml-12 relative z-10 mt-8 sm:mt-0">
                        <h2 className='text-3xl md:text-5xl font-bold pb-2 text-gray-100'>I like to write</h2>
                        <h2 className='text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 py-2'>blogs about tech.</h2>
                        <p className='py-4 text-gray-400 text-lg'>
                            Dive into my technical write-ups where I share my expertise on the MERN stack, authentication flows, and development best practices.
                        </p>
                        <div>
                            <button 
                                onClick={() => navigate("/blogs")}
                                className='mt-4 px-8 py-3 rounded-full bg-slate-800 border border-slate-600 text-white font-semibold hover:bg-slate-700 hover:border-blue-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300'
                            >
                                Read My Blogs
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            
            <Footer/>
        </div>
    );
}

export default Home;