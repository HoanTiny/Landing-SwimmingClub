/* eslint-disable @next/next/no-img-element */
'use client';
import { Box, Button, Typography, Container } from '@mui/material';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

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

        {/* Wave decorations - bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            zIndex: 10,
            pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40px',
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23FFFFFF'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%2300B4D8'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%230077B6'/%3E%3C/svg%3E\")",
              backgroundSize: '100% 100%',
            },
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
                className="object-cover"
              />
              {/* Content overlay for first slide */}
              <Box className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center z-10">
                <Container maxWidth="lg">
                  <Box className="max-w-xl pl-4 md:pl-8 animate-fadeIn">
                    <Typography
                      variant="h5"
                      component="div"
                      className="font-bold text-yellow-300 mb-2 text-base md:text-2xl"
                    >
                      CLB BƠI THỦ ĐÔ
                    </Typography>
                    <Typography
                      variant="h2"
                      component="h1"
                      className="text-white font-bold mb-6 text-lg md:text-6xl drop-shadow-lg"
                    >
                      Khóa học bơi chuyên nghiệp
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-8 text-sm md:text-lg max-w-md"
                    >
                      Tuyển sinh tham gia khóa mùa hè 2025 với đội ngũ huấn
                      luyện viên hàng đầu và cơ sở vật chất hiện đại
                    </Typography>
                    <Box className="flex flex-wrap gap-4">
                      <Button
                        variant="contained"
                        size="large"
                        href="#register"
                        className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-full shadow-xl text-sm md:text-base"
                      >
                        ĐĂNG KÝ NGAY
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        component={Link}
                        href="#classes"
                        className="border-white text-white hover:bg-white/20 rounded-full text-sm md:text-base"
                      >
                        XEM KHÓA HỌC
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for second slide */}
              <Box className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/70 flex items-end pb-16 z-10">
                <Container maxWidth="lg">
                  <Box className="text-center animate-slideUp">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Học bơi cùng các chuyên gia
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 max-w-xl mx-auto text-sm md:text-lg"
                    >
                      Đội ngũ huấn luyện viên giàu kinh nghiệm, tận tâm hướng
                      dẫn
                    </Typography>
                    <Button
                      variant="contained"
                      href="#trainers"
                      className="bg-white hover:bg-blue-50 text-blue-800 font-medium rounded-full text-sm md:text-base"
                    >
                      GẶP GỠ HUẤN LUYỆN VIÊN
                    </Button>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for third slide */}
              <Box className="absolute inset-0 bg-gradient-to-tl from-transparent to-blue-900/70 flex items-center z-10">
                <Container maxWidth="lg">
                  <Box className="ml-auto max-w-lg pr-4 md:pr-8 text-right animate-fadeInRight">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Bể bơi tiêu chuẩn
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 text-sm md:text-lg"
                    >
                      Cơ sở vật chất hiện đại, đảm bảo an toàn tuyệt đối cho mọi
                      học viên
                    </Typography>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for fourth slide */}
              <Box className="absolute inset-0 bg-blue-900/30 flex items-center justify-center text-center z-10">
                <Container maxWidth="md">
                  <Box className="py-8 px-6  rounded-xl animate-zoomIn">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Dành cho mọi lứa tuổi
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 text-sm md:text-lg"
                    >
                      Từ trẻ em đến người lớn, chúng tôi có lộ trình phù hợp cho
                      tất cả
                    </Typography>
                    <Button
                      variant="contained"
                      href="#services"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm md:text-base"
                    >
                      KHÁM PHÁ CHƯƠNG TRÌNH
                    </Button>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for fifth slide */}
              <Box className="absolute inset-0 bg-gradient-to-r from-blue-800/60 to-cyan-500/40 flex items-center z-10">
                <Container maxWidth="lg">
                  <Box className="max-w-xl pl-4 md:pl-8 animate-fadeIn">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Học bơi an toàn
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 text-sm md:text-lg"
                    >
                      An toàn là ưu tiên hàng đầu trong mọi bài giảng của chúng
                      tôi
                    </Typography>
                    <Box className="flex gap-4">
                      <Button
                        variant="contained"
                        href="https://www.facebook.com/profile.php?id=100043515746559"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm md:text-base"
                      >
                        LIÊN HỆ NGAY
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for sixth slide */}
              <Box className="absolute inset-0 bg-gradient-to-b from-blue-800/50 to-transparent flex items-start pt-16 z-10">
                <Container maxWidth="lg">
                  <Box className="max-w-xl mx-auto text-center animate-slideDown">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Trở thành vận động viên bơi lội
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 text-sm md:text-lg"
                    >
                      Đào tạo vận động viên bơi chuyên nghiệp, tham gia các giải
                      đấu
                    </Typography>
                    <Button
                      variant="contained"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm md:text-base"
                    >
                      CHƯƠNG TRÌNH VĐV
                    </Button>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for seventh slide */}
              <Box className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/60 flex items-center justify-end z-10">
                <Container maxWidth="lg">
                  <Box className="max-w-xl mr-4 md:mr-8 text-right animate-fadeInLeft">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Phương pháp giảng dạy hiện đại
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 text-sm md:text-lg"
                    >
                      Áp dụng các phương pháp giảng dạy tiên tiến từ các chuyên
                      gia hàng đầu
                    </Typography>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for eighth slide */}
              <Box className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end pb-16 z-10">
                <Container maxWidth="lg">
                  <Box className="text-center animate-slideUp">
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Lợi ích của bơi lội
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 max-w-xl mx-auto text-sm md:text-lg"
                    >
                      Tăng cường sức khỏe, phát triển thể chất toàn diện và rèn
                      luyện ý chí
                    </Typography>
                    <Button
                      variant="contained"
                      href="#benefits"
                      className="bg-white hover:bg-blue-50 text-blue-800 font-medium rounded-full text-sm md:text-base"
                    >
                      LỢI ÍCH CỦA BƠI LỘI
                    </Button>
                  </Box>
                </Container>
              </Box>
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
              {/* Content overlay for ninth slide */}
              <Box className="absolute inset-0 bg-blue-900/40 flex items-center justify-center text-center z-10">
                <Container maxWidth="md">
                  <Box className="py-8 px-6 bg-white/10 backdrop-blur-sm rounded-xl animate-zoomIn">
                    <Typography
                      variant="h5"
                      component="div"
                      className="font-bold text-yellow-300 mb-2 text-base md:text-2xl"
                    >
                      ƯU ĐÃI ĐẶC BIỆT
                    </Typography>
                    <Typography
                      variant="h3"
                      component="h2"
                      className="text-white font-bold mb-4 text-lg md:text-4xl"
                    >
                      Giảm 15% học phí khi đăng ký nhóm
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white mb-6 text-sm md:text-lg"
                    >
                      Đăng ký ngay hôm nay để nhận ưu đãi hấp dẫn
                    </Typography>
                    <Button
                      variant="contained"
                      href="#register"
                      className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-full text-sm md:text-base"
                    >
                      ĐĂNG KÝ NHÓM NGAY
                    </Button>
                  </Box>
                </Container>
              </Box>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Banner;
