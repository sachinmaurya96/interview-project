import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import SliderCard from "./SliderCard";

const FullSLider = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
      <div className="btn">
        <button>Contact us</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  min-width:300px;
  .btn{
    display: flex;
    align-items: center;
    margin-top: 30px;
    button {
        font-size: 16px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
        /* border-radius: 8px; */
        height: 40px;
        border: none;
        background-color: #488aec;
        color: white;
        padding: 25px;
        box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
          0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
          0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
          0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
          0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
          0 30px 30px -3.75px #0000000d;
        font-weight: 400;
        font-family: Montserrat;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: 150ms ease-in-out;

        &:hover{
          background-color: #5c96ec;
        }
      }

      button:active {
        scale: 0.95;
        background: #fff;
        color: black;
        box-shadow: rgba(0, 0, 0, 0.26) 0px 0.637473px 1.14745px -1.125px,
          rgba(0, 0, 0, 0.24) 0px 1.93094px 3.4757px -2.25px,
          rgba(0, 0, 0, 0.192) 0px 5.10423px 9.18761px -3.375px,
          rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px;
      }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
   

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default FullSLider;
