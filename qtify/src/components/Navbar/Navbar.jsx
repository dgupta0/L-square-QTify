import React from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import styles from "./Navbar.module.css"
import { SearchBar } from '../SearchBar/SearchBar';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <SearchBar/>
      <Button children="Give Feedback"/>
    </nav>
  )
}
