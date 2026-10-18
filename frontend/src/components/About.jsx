import React, { useEffect } from 'react';
import Footer from './common/Footer';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0B1120] text-gray-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Code</span></h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Visual Element */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-800 rounded w-full"></div>
                                <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                                <div className="py-6 my-4 border-y border-slate-700/50">
                                    <p className="text-cyan-400 font-mono text-sm">const developer = {"{"}</p>
                                    <p className="text-blue-300 font-mono text-sm ml-4">name: "Pachaiyappan S.",</p>
                                    <p className="text-blue-300 font-mono text-sm ml-4">stack: ["React", "Express", "Node", "MongoDB"],</p>
                                    <p className="text-blue-300 font-mono text-sm ml-4">passion: "Building immersive digital spaces"</p>
                                    <p className="text-cyan-400 font-mono text-sm">{"}"};</p>
                                </div>
                                <div className="h-4 bg-slate-800 rounded w-full"></div>
                                <div className="h-4 bg-slate-800 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text Narrative */}
                    <div className="flex flex-col gap-6 text-lg text-slate-300 leading-relaxed">
                        <p>
                            I am a full-stack web developer with a deep focus on the MERN stack. My engineering philosophy revolves around building seamless, scalable web applications that bridge the gap between heavy data architectures and sleek, responsive user interfaces.
                        </p>
                        <p>
                            Recently, my focus has been on architecting complete authentication flows and database session persistence, culminating in deployments like SPY Creations—a highly thematic full-stack application—and constructing dynamic, sports-centric interfaces for the 22 Yards Club.
                        </p>
                        <p>
                            Beyond writing server routes and React components, I have a profound appreciation for meticulous, tactile design. Whether I am handcrafting precise physical miniature displays, optimizing dynamic aura edits in video, or fine-tuning the UI layout of a web dashboard, I believe that high-quality user experiences are built on an obsession with the smallest details.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;