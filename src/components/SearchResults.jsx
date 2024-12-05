import React, { useContext } from 'react';
import { AppContext } from '../context/AppContexts';
import { Link } from 'react-router-dom';
import style from "../styles/SearchResults.module.css";

const SearchResults = () => {
  const { blogs } = useContext(AppContext);

  const truncateDescription = (description, blogId) => {
  const words = description.split(' ');
    if (words.length > 20) {
   const truncated = words.slice(0, 20).join(' ') + '...';
   return (
      <span>
     {truncated} 
      <Link to={`/blog/${blogId}`} className={style.readMoreLink}>Read More</Link>
     </span>
      );
    }
  return description;
  };

  if (blogs.length === 0) {
    return (
    <h1 className={style.noResults}>No Blogs Available</h1>
    );
  }

  return (
    <div className={style.resultsContainer}>
      {
     blogs.map((blog, index) => (
     <div key={index} className={style.blogItem}>
      <h1 className={style.blogTitle}>{blog.title}</h1>
      <p className={style.blogDescription}>
       {truncateDescription(blog.description, blog.id)} 
     </p>
       <span className={style.blogCategory}>{blog.category}</span>
      <p className={style.blogDate}>{blog.publish_date}</p>
     </div>
        ))
      }
    </div>
  );
};

export default SearchResults;
