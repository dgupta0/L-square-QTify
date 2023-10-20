import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import { getTopAlbums, getNewAlbums, getSongs, getGenres } from './api/api';
import Section from './components/Section/Section';
import FAQ from './components/FAQ/FAQ';
import FilterSection from './components/Section/FilterSection';


function App() {
  const [topAlbums, setTopAlbums] = useState(null);
  const [newAlbums, setNewAlbums] = useState(null);
  const [songs, setSongs] = useState(null);
  const [genres, setGenres] = useState(null);

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
  async function getSongsData(){
    try {
      const data = await getSongs();
      setSongs(data)
      
    } catch (error) {
      console.log(error)
    }
    return;
   
  }
  async function getGenresData(){
    try {
      const res = await getGenres();
       const data = res.data;
       let dataArr = ["all"];
       data.forEach(element => {
          dataArr.push(element.key)
       });
      setGenres(dataArr)
      
    } catch (error) {
      console.log(error)
    }
    return;
   
  }

  useEffect(()=> {
    getTopAlbumsData();
    getNewAlbumsData();
    getSongsData();
    getGenresData();
  }, [])

console.log(topAlbums)
console.log(genres)
  return (
      <>
      <Navbar/>
      <Hero/>
      <Section data={topAlbums} type="Top Albums"/>
      <Section data={newAlbums} type="New Albums"/>
      <FilterSection data={songs} genres={genres} type="Songs"></FilterSection>
      <FAQ/>
      </>
   
  );
}



export default App;


