 import React from 'react';
 import {Card, CardMedia} from '@mui/material';
 import styles from "./Card.module.css"
 

const AlbumCard = ({data}) => {
  const {image, follows, title, likes} = data
  return (
    <div>
     <Card className={styles.card} sx={{width: "160px", height: "205px"}}>
     <CardMedia
     component="img"
     height="82.5%"
     image={image}
     alt="album pic"
     />
     <div className={styles.follow}>
     {follows? <p>{follows} followers</p> : <p>{`${likes} Likes`}</p>  }
     </div>
     </Card>
     <p className={styles.title}>{title}</p>
     </div>
  )
}

export default AlbumCard