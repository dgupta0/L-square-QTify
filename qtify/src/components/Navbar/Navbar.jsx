import React from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import styles from "./Navbar.module.css"
import { SearchBar } from '../SearchBar/SearchBar';

export const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <Logo/>
      <div className={styles.forDesktop}>
      <SearchBar placeholder="Search a album of your choice"/>
      </div>
      <Button children="Give Feedback"/>
    </nav>
    <div className={styles.forPhone}>
      <SearchBar  placeholder="Search a album of your choice"/>
      </div>
    </>
  )
}
