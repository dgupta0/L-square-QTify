 import React from 'react';
 import {Card, CardMedia} from '@mui/material';
 import styles from "./Card.module.css"
 

const AlbumCard = ({data}) => {
  const {image, follows} = data
  return (
     <Card className={styles.card} sx={{width: "160px", height: "205px"}}>
     <CardMedia
     component="img"
     height="82.5%"
     image={image}
     alt="Paella dish"
     />
     <div className={styles.follow}>
     <p>{follows} followers</p>
     </div>
     </Card>
  )
}

export default AlbumCard