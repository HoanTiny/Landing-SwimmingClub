/* eslint-disable @next/next/no-img-element */
'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../../assets/img/banner/P1377355.jpg';
import banner2 from '../../assets/img/banner/P1377357.jpg';
import banner3 from '../../assets/img/banner/P1377369.jpg';

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
        }}
        className="lg:h-[90vh] h-[50vh]"
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
                src="/images/banner/Intro.jpg"
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banner/P1377351.jpg"
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banner/P1377364.jpg"
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banner/P1377284.jpg"
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banner.jpg"
                alt="Banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banner2.jpg"
                alt="Banner 1"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>

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
      </Box>
    </>
  );
};

export default Banner;
