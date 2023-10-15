import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import { getTopAlbums, getNewAlbums } from './api/api';
import Section from './components/Section/Section';


function App() {
  const [topAlbums, setTopAlbums] = useState(null);
  const [newAlbums, setNewAlbums] = useState(null);

  async function getTopAlbumsData(){
    try {
      const data = await getTopAlbums();
      setTopAlbums(data)
      
    } catch (error) {
      console.log(error)
    }
    return;
   
  }
  async function getNewAlbumsData(){
    try {
      const data = await getNewAlbums();
      setNewAlbums(data)
      
    } catch (error) {
      console.log(error)
    }
    return;
   
  }

  useEffect(()=> {
 getTopAlbumsData();
 getNewAlbumsData()
  }, [])

  return (
      <>
      <Navbar/>
      <Hero/>
      <Section data={topAlbums} type="Top Albums"/>
      <Section data={newAlbums} type="New Albums"/>
      </>
   
  );
}



export default App;


