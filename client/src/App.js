import Header from "./components/Header.js";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlog from "./pages/UserBlog";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog"
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster/>
      <Header />

      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-blogs" element={<UserBlog/>} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
