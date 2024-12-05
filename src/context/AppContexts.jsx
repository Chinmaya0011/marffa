import React,{createContext, useState,useCallback,useEffect} from "react";
import data from "../data/blogs.js"
export const AppContext=createContext();

export const AppContextProvider=({children})=>{
const[blogs,setBlogs]=useState(data);
const[categories,setCategories]=useState([]);

useEffect(() => {
  const uniqueCategories = [...new Set(data.map((blog) => blog.category))];
setCategories(uniqueCategories);
  }, []);

const searchBlog = useCallback((title) => {
    if (!title) {
   setBlogs(data); 
  return;
    }

    const foundBlogs = data.filter(blog =>
   blog.title.toLowerCase().includes(title.toLowerCase())
    );
setBlogs(foundBlogs);
  }, []);
  
 const filterByCategory = (category) => {
    if (!category) {
  setBlogs(data); 
    return;
    }

  const filteredBlogs = data.filter((blog) => blog.category === category);
  setBlogs(filteredBlogs);
  };


return(
    <AppContext.Provider
    value={{
        blogs,
        categories,
        searchBlog,
        filterByCategory,
        
    }}
    >
        {children}
    </AppContext.Provider>
)

}