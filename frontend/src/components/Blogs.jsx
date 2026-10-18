import React, { useEffect, useState } from 'react';
import axios from "axios";
import Footer from './common/Footer';

function Blogs({ isAdmin }) {
    const [blogs, setBlogs] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [editId, setEditId] = useState(null);

    const fetchBlogs = () => {
        axios.get("http://localhost:5000/api/blogs").then((res) => {
            setBlogs(res.data);
        }).catch(() => {
            console.log("Error fetching data");
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
            if (response.status === 200) fetchBlogs();
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleEditClick = (blog) => {
        setNewTitle(blog.newTitle);
        setNewContent(blog.newContent);
        setEditId(blog._id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (blog_id) => {
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${blog_id}`);
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting the blog post:', error);
        }
    };

    const handleBlogSubmit = async (event) => {
        event.preventDefault();
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

        try {
            if (editId) {
                await axios.put(`http://localhost:5000/api/blogs/${editId}`, { newTitle, date, newContent });
                setEditId(null);
            } else {
                await axios.post("http://localhost:5000/api/blogs", { newTitle, date, newContent, likes: 0 });
            }
            fetchBlogs();
            setNewTitle('');
            setNewContent('');
        } catch (error) {
            console.error("Error submitting blog:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] pt-14">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-14 text-gray-100">
                Latest <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>Dispatches</span> 📚
            </h2>

            {isAdmin && (
                <div className="mb-12 p-8 bg-slate-900/60 border border-slate-700 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-md" style={{ width: "80%", margin: "0 auto 3rem auto" }}>
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-500 rounded-sm inline-block"></span>
                        {editId ? "Edit Transmission" : "New Transmission"} <span className="text-sm font-normal text-slate-500 ml-2">(Admin Root)</span>
                    </h3>
                    <form onSubmit={handleBlogSubmit} className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="Title..."
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-4 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-200 transition-colors"
                            required
                        />
                        <textarea
                            placeholder="Content payload..."
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="p-4 bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-200 transition-colors"
                            rows="5"
                            required
                        />
                        <div className="flex gap-4 mt-2">
                            <button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                                {editId ? "Update Entry" : "Broadcast"}
                            </button>
                            {editId && (
                                <button type="button" onClick={() => { setEditId(null); setNewTitle(''); setNewContent(''); }} className="bg-slate-700 text-white py-3 px-8 rounded-lg hover:bg-slate-600 transition-colors">
                                    Abort Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                {blogs.map((blog) => (
                    <div key={blog._id} className="p-8 bg-slate-900 border border-slate-800 hover:border-slate-600 shadow-xl rounded-2xl transition-all duration-300 group">
                        <p className="text-cyan-500 font-mono text-xs mb-3 uppercase tracking-wider">{blog.date}</p>
                        <h3 className="font-bold text-2xl text-gray-100 mb-4 group-hover:text-blue-400 transition-colors">{blog.newTitle}</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">{blog.newContent}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                            <button onClick={() => handleLike(blog._id)} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                <span className="font-semibold">{blog.likes}</span>
                            </button>

                            {isAdmin && (
                                <div className="flex gap-3">
                                    <button onClick={() => handleEditClick(blog)} className="text-xs font-mono uppercase tracking-widest bg-blue-900/30 text-blue-400 border border-blue-900/50 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-all">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(blog._id)} className="text-xs font-mono uppercase tracking-widest bg-red-900/30 text-red-400 border border-red-900/50 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition-all">
                                        Del
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default Blogs;