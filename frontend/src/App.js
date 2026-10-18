import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About"; // <-- Imported the About component
import Navbar from "./components/common/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Ensure this matches the email you used to register your admin account
  const ADMIN_EMAIL = "pachupy512@gmail.com"; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  return (
   // Updated the wrapper div to match the new deep charcoal background
   <div className="bg-[#0B1120] min-h-screen">
    <BrowserRouter>
    <Navbar user={user} />
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route> {/* <-- Added the About Route */}
      <Route path="/blogs" element={<Blogs isAdmin={isAdmin} />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>

    </BrowserRouter>
   </div>
  );
}

export default App;