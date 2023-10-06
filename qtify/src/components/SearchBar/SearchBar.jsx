import React from 'react'
import searchIcon from "../../assets/searchIcon.svg"
import styles from "./SearchBar.module.css"

export const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
   <input className={styles.textBox} 
   type='text'
   placeholder='Search a album of your choice' />
   <img className= {styles.searchPic} src={searchIcon} alt="search icon"/>
   </div>
  )
}
