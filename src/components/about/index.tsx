'use client'; // Chỉ cần nếu bạn dùng Next 13 App Router

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';

// Thay bằng ảnh của bạn
import about1 from '../../assets/img/Rectangle27.jpg';
import about2 from '../../assets/img/Rectangle28.jpg';
import about3 from '../../assets/img/Rectangle27.jpg';
function About() {
  return (
    <Box
      // Sử dụng SX của MUI + lớp Tailwind
      sx={{ py: { xs: 6, md: 8 } }}
      className="bg-white px-4 md:px-8"
      id="about"
    >
      <Grid container spacing={4} alignItems="center">
        {/* Cột trái: Hình ảnh */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="relative w-full h-full flex justify-center items-center">
            {/* Nhóm ảnh chồng nhau */}
            <Box className="relative w-[300px] h-[400px]">
              {/* Ảnh lớn */}
              <Box className="absolute right-[150px] w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={about1}
                  alt="About Image 1"
                  fill
                  className="object-cover"
                />
              </Box>

              {/* Ảnh thứ 2 (nhỏ) */}
              <Box className="absolute top-[-20px] left-[135px] w-[238px] h-[200px] rounded-lg overflow-hidden shadow-xl md:block">
                <Image
                  src={about2}
                  alt="About Image 2"
                  fill
                  className="object-cover"
                />
              </Box>

              {/* Ảnh thứ 3 (nhỏ) */}
              <Box className="absolute bottom-[6px] left-[111px] w-[248px] h-[159px] rounded-lg overflow-hidden shadow-xl md:block">
                <Image
                  src={about3}
                  alt="About Image 3"
                  fill
                  className="object-cover"
                />
              </Box>
            </Box>

            {/* Vòng tròn 25 YEARS EXPERIENCE */}
            <Box className="absolute flex flex-col items-center justify-center bg-blue-600 text-white w-[160px] h-[160px] rounded-full shadow-lg border-solid border-4 p-3">
              <Typography
                variant="h1"
                align="center"
                className="font-bold text-[30px]"
              >
                25
              </Typography>
              <Typography
                variant="body2"
                align="center"
                className="text-[12px]"
              >
                YEARS EXPERIENCE
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Cột phải: Nội dung */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="mb-4">
            <Typography
              variant="body2"
              className="text-blue-600 font-bold uppercase tracking-wider"
            >
              About Us | Our Class
            </Typography>
            <Typography
              variant="h4"
              className="font-bold mt-2"
              sx={{ lineHeight: 1.2 }}
            >
              Splash into Success with Our Swimming Classes
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" className="mb-6">
            Opening in spring and closing in fall is not ideal. However, it
            depends on local climate conditions or a professional service that
            can guide you based on your location—regular chlorination, proper
            water cleanings, and more!
          </Typography>

          {/* Bullet points */}
          <Grid
            className="space-y-2 mb-6"
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid size={6} className="flex items-center space-x-2">
              <CheckCircleIcon className="text-blue-500" />
              <Typography variant="body1">Experience Trainer</Typography>
            </Grid>
            <Grid size={6} className="flex items-center space-x-2">
              <CheckCircleIcon className="text-blue-500" />
              <Typography variant="body1">Competitions Won</Typography>
            </Grid>
            <Grid size={6} className="flex items-center space-x-2">
              <CheckCircleIcon className="text-blue-500" />
              <Typography variant="body1">Recommend Our School</Typography>
            </Grid>
            <Grid size={6} className="flex items-center space-x-2">
              <CheckCircleIcon className="text-blue-500" />
              <Typography variant="body1">Successful History</Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            className="text-white font-semibold px-6 py-2"
          >
            More About Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
