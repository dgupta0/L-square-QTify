import React from 'react'
import styles from "./Hero.module.css"
import { ReactComponent as HeroImg } from "../../assets/hero.svg"


export const Hero = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
    </div>
    <HeroImg/>
    </div>
  )
}
