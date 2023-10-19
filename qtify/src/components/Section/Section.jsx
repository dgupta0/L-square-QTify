import React from "react";
import { useState } from "react";
import AlbumCard from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";


const Section = ({data, type}) => {
  const [isShowAll, setIsShowAll]  = useState(false);
    return (
        data && (
            <div className={styles.album_container}>
              <div className={styles.album_info}>
                <h3>{type}</h3>
                <button className={styles.show_all} onClick={() => setIsShowAll(!isShowAll)}>
                  {isShowAll ? "Collapse All" : "Show All"}
                </button>
              </div>
              {isShowAll ? (
                <div className={styles.album_list}>
                  {data.map(el => <AlbumCard key={el.id} data={el} />)}
                </div>
              ) : (
                <Carousel data={data}/>
              )}
            </div>
          )          
    )
  }
  export default Section