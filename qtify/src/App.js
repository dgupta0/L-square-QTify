import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import { getTopAlbums } from './api/api';
import AlbumCard from './components/Card/Card';


function App() {
  const [topAlbums, setTopAlbums] = useState(null);

  async function getTopAlbumsData(){
    try {
      const data = await getTopAlbums();
      setTopAlbums(data)
      
    } catch (error) {
      console.log(error)
    }
    return;
   
  }

  useEffect(()=> {
 getTopAlbumsData();
  }, [])

  return (
      <>
      <Navbar/>
      <Hero/>
      <TopAlbums data={topAlbums}/>
      </>
   
  );
}

const TopAlbums = ({data}) => {
  console.log(data)
  return (
    data && (
      <div className='album-container'>
        <div className='album-info'>
          <h3>Top Albums</h3>
          <button>Show All</button>
        </div>
        <div className='album-list'>
          {data.map(el => <AlbumCard key={el.id} data={el} />)}
        </div>
      </div>
    )
  );
}

export default App;


