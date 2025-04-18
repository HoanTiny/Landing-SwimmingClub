'use client'; // Chỉ cần nếu bạn dùng Next 13 App Router

import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import Section from '../section';

function About() {
  return (
    <Box className="py-12 md:py6 bg-white text-black" id="about">
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
                      layout="fill"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </Box>

                  {/* Top right image - child in pool */}
                  <Box className="absolute right-0 top-0 w-1/2 h-2/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/trainning2.jpg"
                      alt="Child swimming"
                      layout="fill"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Bottom right image - kids having fun */}
                  <Box className="absolute right-0 bottom-0 w-1/2 h-2/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/trainning3.webp"
                      alt="Kids having fun in pool"
                      layout="fill"
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
              <Box className="space-y-6">
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
                <Typography variant="body1" className="text-gray-600">
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
                </Grid>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  size="large"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-md shadow-md"
                >
                  Đăng ký ngay
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Section>
      </Container>

      {/* Thêm 1 video giới thiệu vê clb */}
      <Box className="py-12 md:py-6 bg-gray-100 text-black">
        <Container maxWidth="xl">
          <Section>
            <Box
              className="relative w-full overflow-hidden rounded-lg shadow-lg"
              sx={{
                aspectRatio: '16/9',
              }}
            >
              <video
                id="intro-video"
                src="/videos/intro.mp4"
                poster="/images/banner/Intro.jpg" // Thumbnail image
                autoPlay={false}
                loop
                muted
                controls
                className="w-full h-full object-cover"
                playsInline
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Box
                id="play-overlay"
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-50"
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
              >
                <Button
                  variant="contained"
                  className="bg-white hover:bg-gray-200 text-black rounded-full p-4 shadow-lg"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" component="span">
                    ▶
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Section>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
