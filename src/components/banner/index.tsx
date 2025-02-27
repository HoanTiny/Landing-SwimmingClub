/* eslint-disable @next/next/no-img-element */
'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../../assets/img/banner/banner1.jpg';
import banner2 from '../../assets/img/banner/banner2.jpg';
import banner3 from '../../assets/img/banner/banner3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
  return (
    <>
      {/* BANNER */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '90vh',
        }}
      >
        {/* Overlay cho tối ảnh (nếu muốn) */}
        <Box
          sx={{
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)', // làm tối ảnh 40%
          }}
        />

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full bg-red"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src={banner1}
                alt="Banner 1"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src={banner2}
                alt="Banner 2"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src={banner3}
                alt="Banner 3"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <Box className="absolute inset-0 flex items-center justify-center z-10 text-[#ccc]">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            {/* Text */}
          </h1>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
