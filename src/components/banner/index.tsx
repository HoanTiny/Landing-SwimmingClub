/* eslint-disable @next/next/no-img-element */
'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Link from 'next/link';

// Import from local assets
import banner1 from '../../assets/img/banner/P1377355.jpg';
import banner2 from '../../assets/img/banner/P1377357.jpg';
import banner3 from '../../assets/img/banner/P1377369.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './banner.css'; // Custom styles for Swiper

const Banner = () => {
  return (
    <>
      {/* BANNER */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
        className="lg:h-[90vh] h-[60vh]"
      >
        {/* Wave decorations - top */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            zIndex: 10,
            pointerEvents: 'none',
            opacity: 0.6,
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          }}
        />

        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          effect={'fade'}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/banner/Intro.jpg"
                alt="banner"
                fill
                priority
                className="object-cover ascept-[2197/945] lg:ascept-[1920/1080] md:ascept-[1920/1080]"
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
