const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

// Updated CORS to accept requests from any origin for live deployment
app.use(cors({
    origin: "*", 
    credentials: true
}));

// Middleware
app.use(bodyParser.json());

// MongoDB Cloud Connection
const MONGO_URI = 'mongodb+srv://pachaiyappan:Password123@cluster0.vsnstqz.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connection Successful")
}).catch((err) => console.log("MongoDB connection error:", err));

// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: { type: Number, default: 0 } 
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes

// 1. View all blogs (Public Access)
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    console.log(blogs)
    res.send(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Like a blog (Public Access)
app.patch('/api/blogs/like/:id', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Increment the likes of the blog post
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        { $inc: { likes: 1 } },
        { new: true } 
      );
  
      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// 3. Add a new blog (Admin Access)
app.post('/api/blogs', async (req, res) => {
  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes || 0
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. Edit an existing blog (Admin Access)
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        newTitle: req.body.newTitle,
        newContent: req.body.newContent,
        date: req.body.date
      },
      { new: true }
    );
    
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. Delete a blog (Admin Access)
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server (Using process.env.PORT for Render)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));