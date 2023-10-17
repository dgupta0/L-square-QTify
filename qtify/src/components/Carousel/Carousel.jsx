import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import "./Carousel.module.css";
import AlbumCard from '../Card/Card';

const Carousel = ({data}) => {
  return (
    <Swiper
    navigation={true}
    slidesPerView={1}
    spaceBetween={2}
    breakpoints={{
        300: {
            slidesPerView: 2,
           
           
          },
        550: {
            slidesPerView: 3,
          
          },
          820: {
            slidesPerView: 4,
           
          },
          1024: {
            slidesPerView: 6,
           
          }
      }}
    modules={[Navigation]} 
  >
    {data.map(el => <SwiperSlide key={el.id}><AlbumCard key={el.id} data={el} /></SwiperSlide>)}
    </Swiper>
  )
}



export default Carousel