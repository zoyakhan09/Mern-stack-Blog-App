/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
const Blogs=()=>{//eslint-disable-next-line
    const[blogs,setblogs]=useState([])
    //get blogs
    const getAllBlogs=async()=>{
        try{
            const{data}=await axios.get('/api/v1/blog/all-blog')
            if(data?.success){
                setblogs(data?.blogs);
            }

        }catch(error){
            console.log(error);

        }
    };
    useEffect(() => {
        getAllBlogs();
      }, []);
    return(
        <div>
            {blogs &&
        blogs.map((blog) => (
          <BlogCard
          id={blog?._id}
          isUser={localStorage.getItem("userId") === blog?.user?._id}
          title={blog?.title}
          description={blog?.description}
          image={blog?.image}
          username={blog?.user?.username}
          time={blog.createdAt}/>
        ))}
        
          
        
      
        
        </div>
    )
};
export default Blogs;