import React, { useContext } from 'react';
import { AppContext } from '../context/AppContexts';
import { FiSearch } from 'react-icons/fi'; 
import style from "../styles/Header.module.css";

const Header = () => {
  const { searchBlog, categories, filterByCategory } = useContext(AppContext);

  const handleSearchBlog = (event) => {
   searchBlog(event.target.value);
  };

  const handleCategoryChange = (event) => {
   filterByCategory(event.target.value);
  };

  return (
<div className={style.header}>

    <div className={style.searchAndFilterContainer}>
  <div className={style.searchContainer}>
        <input
    type="text"
           onChange={handleSearchBlog}
         placeholder="Revolutionizing Global..."
         className={style.searchBlogInput}
       />
     <FiSearch className={style.searchIcon} />
    </div>

      <div className={style.filterContainer}>
      <select
       onChange={handleCategoryChange}
       className={style.categorySelect}
       >
         <option value="" className={style.option}>All</option>
         {categories.map((category, index) => (
          <option key={index} value={category} className={style.option}>
        {category}
    </option>
    ))}
    </select>
  </div>
</div>
</div>
  );
};

export default Header;
