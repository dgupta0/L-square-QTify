import * as React from 'react';
import { useState } from 'react';
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const FilterSection = ({type,  data, genres}) => {       
  return (
    <div>
        <hr className={styles.hr}></hr>
        <div className={styles.album_container}>
            <div className={`${styles.album_info}${styles.filter}`}>
            <h3>{type}</h3>
            <BasicTabs genres={genres} songs={data}/>
            </div>
        </div>
        <hr className={styles.hr}></hr>       
    </div>
  )
}

  function BasicTabs({genres, songs}) {
    const [value, setValue] = useState(0);
    const [displaySongs, setDisplaySongs] = useState(songs);
  
    const handleChange = (e, newValue) => {
      setValue(newValue);
      if( e.target.textContent === "all"){
        setDisplaySongs(songs)
      }
     else{
        const filteredSongs = songs.filter(song => song.genre.key ===  e.target.textContent)
        setDisplaySongs(filteredSongs)
     }
     
    };
    const tabs = genres?.map((genre, i )=> <Tab key={genre} sx={{color:"white"}} label= {genre} {...a11yProps(i)} /> )
    const panels = genres?.map((genre, i) => (
        <CustomTabPanel key={genre} value={value} index={i}>
          <Carousel data={displaySongs || songs} />
        </CustomTabPanel>
      ));
  
    return (
      <Box sx={{ width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{mt:"1rem"}}>
          {tabs}
          </Tabs>
        </Box>
       {panels}
      </Box>
    );
  }

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default FilterSection

