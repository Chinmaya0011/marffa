import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContexts';
import { AiOutlineArrowLeft } from 'react-icons/ai'; 
import style from "../styles/BlogPage.module.css";

const BlogPage = () => {
  const { id } = useParams(); 
  const { blogs } = useContext(AppContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
  const foundBlog = blogs.find(blog => blog.id === parseInt(id));  
  setBlog(foundBlog);
  }, [id, blogs]); 

  if (!blog) {
 return <p className={style.loadingText}>Loading...</p>;  
  }

  return (
 <div className={style.blogContainer}>
     
  <Link to="/" className={style.backButton}>
   <AiOutlineArrowLeft size={24} /> Back
  </Link>

  <h1 className={style.blogTitle}>{blog.title}</h1>
  <p className={style.blogDescription}>{blog.description}</p>
    <span className={style.blogCategory}>{blog.category}</span>
   <p className={style.blogPublishDate}>{blog.publish_date}</p>
</div>
  );
};

export default BlogPage;
