import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import album1 from "../../assets/liveSetsimg/album1.jpeg"
import album2 from "../../assets/liveSetsimg/album2.jpeg"
import album3 from "../../assets/liveSetsimg/album3.jpeg"
import album4 from "../../assets/liveSetsimg/album4.jpeg"
import album5 from "../../assets/liveSetsimg/album5.jpeg"
import album6 from "../../assets/liveSetsimg/album6.jpeg"

import './LiveSets.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function LiveSets() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img href="" src={album1} />
        </SwiperSlide>
        <SwiperSlide>
          <img href="" src={album2} />
        </SwiperSlide>
        <SwiperSlide>
          <img href="" src={album3} />
        </SwiperSlide>
        <SwiperSlide>
          <img href="" src={album4} />
        </SwiperSlide>
        <SwiperSlide>
          <img href="https://soundcloud.com/isaenes/sets/techno-breaks-mixes" src={album5} />
        </SwiperSlide>
        <SwiperSlide>
          <img href="" src={album6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
