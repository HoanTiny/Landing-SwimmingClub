'use client'; // Chỉ cần nếu bạn dùng Next 13 App Router

import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import Section from '../section';

function About() {
  return (
    <Box className="py-12 md:py6  bg-white text-black" id="about">
      <Container maxWidth="xl">
        <Section>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="relative">
                {/* Main image collage */}
                <Box className="relative w-full h-96 md:h-[450px]">
                  {/* Left side image - swimming pool */}
                  <Box className="absolute left-0 top-8 w-2/3 h-4/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/tranning4.jpg"
                      alt="Swimming pool"
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </Box>

                  {/* Top right image - child in pool */}
                  <Box className="absolute right-0 top-0 w-1/2 h-2/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/trainning2.jpg"
                      alt="Child swimming"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Bottom right image - kids having fun */}
                  <Box className="absolute right-0 bottom-0 w-1/2 h-2/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/trainning3.webp"
                      alt="Kids having fun in pool"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Experience badge */}
                  <Paper
                    elevation={4}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full flex flex-col items-center justify-center bg-blue-500 text-white z-10 border-solid bottom-3 border-white"
                    sx={{
                      border: '12px solid #fff',
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="div"
                      className="font-bold"
                    >
                      25
                    </Typography>
                    <Typography
                      variant="caption"
                      className="text-center text-xs"
                    >
                      YEARS
                    </Typography>
                    <Typography
                      variant="caption"
                      className="text-center text-xs"
                    >
                      EXPERIENCE
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="space-y-6 pb-5">
                {/* Badge */}
                <Typography
                  variant="subtitle1"
                  component="div"
                  className="text-blue-500 font-medium flex items-center"
                >
                  <span className="w-6 h-0.5 bg-blue-500 inline-block mr-2"></span>
                  Thông tin về chúng tôi
                </Typography>

                {/* Heading */}
                <Typography
                  variant="h3"
                  component="h2"
                  className="text-4xl md:text-5xl font-bold text-navy-900"
                >
                  Hòa mình vào bơi lặn với các lớp học bơi của chúng tôi
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  className="text-gray-600"
                  sx={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Hoạt động tại chuỗi bể bơi hàng đầu Hà Nội, đảm bảo an toàn
                  sức khỏe của học viên với: Hệ thống bể bơi bốn mùa. Chất lượng
                  đạt chuẩn Bộ Y Tế. Nhiệt độ từ 30-31 độ C vào mùa đông và mát
                  vào mùa hè. Các tiện ích chuyên nghiệp.
                </Typography>

                {/* Features list */}
                <Grid container spacing={2} className="py-4">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box className="flex items-start space-x-2">
                      <CheckCircleIcon className="text-blue-500 mt-0.5" />
                      <Typography variant="body1" className="font-medium">
                        Huấn luyện viên chuyên nghiệp
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box className="flex items-start space-x-2">
                      <CheckCircleIcon className="text-blue-500 mt-0.5" />
                      <Typography variant="body1" className="font-medium">
                        Đội ngũ nhân viên tận tâm
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box className="flex items-start space-x-2">
                      <CheckCircleIcon className="text-blue-500 mt-0.5" />
                      <Typography variant="body1" className="font-medium">
                        Cơ sở vật chất hiện đại
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box className="flex items-start space-x-2">
                      <CheckCircleIcon className="text-blue-500 mt-0.5" />
                      <Typography variant="body1" className="font-medium">
                        Đảm bảo an toàn tuyệt đối
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box className="flex items-start space-x-2">
                      <CheckCircleIcon className="text-blue-500 mt-0.5" />
                      <Typography variant="body1" className="font-medium">
                        Đội ngũ y tế và đội ngũ cứu hộ chuyên nghiệp
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  size="large"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-md shadow-md"
                  href="#register"
                >
                  Đăng ký ngay
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Section>
      </Container>

      {/* Thêm 1 video giới thiệu vê clb */}
      <Box className="py-8 bg-gradient-to-r from-cyan-500 to-blue-800 text-white">
        <Container maxWidth="xl">
          <Section>
            {/* Main Content Container */}
            <Box className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Video Container with Swimming Style Border */}
              <Box
                className="relative w-full rounded-xl border-4 border-white"
                sx={{
                  aspectRatio: '16/9',
                  boxShadow: '0 0 15px rgba(0, 195, 255, 0.5)',
                }}
              >
                <video
                  id="intro-video"
                  src="/videos/intro.mp4"
                  poster="/images/banner/Intro.jpg"
                  autoPlay={false}
                  loop
                  muted
                  controls
                  className="w-full h-full object-cover rounded-lg"
                  playsInline
                >
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay with Wave Animation */}
                <Box
                  id="play-overlay"
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-t from-blue-900/80 to-transparent"
                  onClick={() => {
                    const video = document.getElementById(
                      'intro-video',
                    ) as HTMLVideoElement;
                    const overlay = document.getElementById('play-overlay');
                    if (video.paused) {
                      video.play();
                      if (overlay) {
                        overlay.style.display = 'none';
                      }
                    }
                  }}
                  sx={{
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '15px',
                      background: 'url(/images/wave.svg) repeat-x',
                      backgroundSize: '20px 15px',
                      animation: 'wave 10s linear infinite',
                      opacity: 0.8,
                    },
                    '@keyframes wave': {
                      '0%': { backgroundPosition: '0 bottom' },
                      '100%': { backgroundPosition: '100vw bottom' },
                    },
                  }}
                >
                  {/* Large Play Button */}
                  <Button
                    variant="contained"
                    className="bg-white hover:bg-blue-100 text-blue-600 rounded-full p-2 mb-4 shadow-lg transform transition-transform hover:scale-110"
                    sx={{
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h4" component="span" className="pl-1">
                      ▶
                    </Typography>
                  </Button>

                  {/* Call to Action Text */}
                  <Typography
                    variant="h5"
                    className="font-bold text-white text-center drop-shadow-md mb-2"
                  >
                    Xem video giới thiệu CLB Bơi Thủ Đô
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Section>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
