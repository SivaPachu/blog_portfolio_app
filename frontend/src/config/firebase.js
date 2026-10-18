import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm7feSJT2HBshdhrJ3zZ4Ube_juXidsg0",
  authDomain: "blog-portfolio-ecd03.firebaseapp.com",
  projectId: "blog-portfolio-ecd03",
  storageBucket: "blog-portfolio-ecd03.firebasestorage.app",
  messagingSenderId: "283123197641",
  appId: "1:283123197641:web:0cf5e34863c64e89878f18",
  measurementId: "G-5KHZS9ZVZD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);