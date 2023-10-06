import React from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <Button children="Give Feedback"/>
    </nav>
  )
}
