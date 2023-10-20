 import React from 'react';
 import {Card, CardMedia} from '@mui/material';
 import styles from "./Card.module.css";
 import Tooltip from '@mui/material/Tooltip';
 

const AlbumCard = ({data}) => {
  const {image, follows, title, likes, songs} = data;
  return (
    <Tooltip title={ songs? `${songs.length}` : ``}>
     <Card className={styles.card} sx={{width: "160px", height: "205px"}}>
     <CardMedia title={songs}
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
     </Tooltip>
  )
}

export default AlbumCard