import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Carrousel.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "./Carrousel.css"

import 'swiper/swiper-bundle.css'; // Añadido para cargar los estilos de Swiper

const Carrousel = ({ images }) => {
    return (
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
        pagination={{
            clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
            </SwiperSlide>
        ))}
        </Swiper>
        
    );
};

export default Carrousel;
