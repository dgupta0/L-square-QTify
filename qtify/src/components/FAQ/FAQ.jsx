import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./FAQ.module.css"

const FAQ = () => {
  return (
    <div className={styles.FAQ_container}>
        <Typography variant='h4' align='center'>FAQ's</Typography>
      <div className={styles.accordion_container}>
      <Accordion  className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: "#34C94B"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails  className={styles.ans}>
          <Typography >
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: "#34C94B"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.ans}>
          <Typography>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
    </div>
  )
}

export default FAQ;



  
