import React from 'react'
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
const TestimonialSlider = () => {
  return (
    <Wrapper>
        <Swiper
         breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            858: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    
`
export default TestimonialSlider
