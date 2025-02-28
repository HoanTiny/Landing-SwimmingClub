'use client'; // Nếu bạn dùng Next.js 13 (app router), cần cho phép render client

import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';

export default function BenefitsOfSwimming() {
  return (
    <Box className="relative w-full min-h-[600px] overflow-hidden" id="pricing">
      {/* Lớp nền đen (bao phủ toàn bộ) */}
      <Box className="absolute inset-0 bg-[#0A0A0A]" />

      <Box
        className="absolute top-0 right-0 w-1/2 h-full bg-blue-500"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 50%, 20% 0)',
        }}
      />

      <Container
        maxWidth="xl"
        className="relative z-10  mx-auto px-4 py-16 text-white"
      >
        <Grid container spacing={8} alignItems="center">
          {/* Cột trái: Tiêu đề, bullet points */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              className="text-blue-400 font-semibold mb-2"
            >
              Benefits Of Swimming
            </Typography>

            <Typography variant="h4" className="font-bold mb-4 leading-tight">
              Turning Fear into Fins
              <br />
              Learn to Swim with Us
            </Typography>

            <Typography variant="body1" className="text-gray-300 mb-8">
              Our curriculum is structured to progressively build swimming
              skills, starting from basic water safety. We offer a variety of
              classes tailored to different age groups and skill levels,
              ensuring an enjoyable experience for everyone.
            </Typography>

            {/* Bullet points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Swimming Equipment&apos;s
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Our classes ensure participants have access to proper
                    equipment needed to succeed.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Safe &amp; Fun Environments
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    We provide a safe learning space for swimmers of all levels,
                    ensuring an enjoyable experience.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Water Slides and Flumes
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Water safety is a top priority in our classes. We teach
                    essential water safety skills, such as floating and breath
                    control, that can save lives.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>

          {/* Cột phải: 2 ảnh demo */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction={'row'} gap={4}>
              <Box className="relative w-full h-72 lg:h-[400px] md:h-40">
                <Image
                  src="/images/spring-b.jpg"
                  alt="Swimmer 5"
                  fill
                  className="object-cover rounded-lg"
                />
              </Box>

              <Box className="relative w-full h-74  lg:h-[400px] md:h-40">
                <Image
                  src="/images/12.webp"
                  alt="Swimmer 6"
                  fill
                  className="object-cover rounded-lg"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
