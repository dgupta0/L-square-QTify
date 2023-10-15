import React from 'react';
import {ReactComponent as SearchIcon} from "../../assets/searchIcon.svg"
import styles from "./SearchBar.module.css";

export const SearchBar = ({placeholder}) => {
  return (
    <form className={styles.searchContainer}>
   <input className={styles.textBox} 
   type='text'
   placeholder={placeholder} />
   <button className= {styles.searchBtn}>
    <SearchIcon/>
    </button>
   </form>
  )
}
