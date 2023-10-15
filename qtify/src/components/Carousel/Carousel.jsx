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
    breakpoints={{
        340: {
            slidesPerView: 2,
            spaceBetween: 5,
           
          },
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          }
      }}
    modules={[Navigation]} 
  >
    {data.map(el => <SwiperSlide><AlbumCard key={el.id} data={el} /></SwiperSlide>)}
    </Swiper>
  )
}



export default Carousel