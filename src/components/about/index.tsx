'use client'; // Chỉ cần nếu bạn dùng Next 13 App Router

import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';

// Thay bằng ảnh của bạn
import about1 from '../../assets/img/Rectangle27.jpg';
import about2 from '../../assets/img/Rectangle28.jpg';
import about3 from '../../assets/img/Rectangle27.jpg';
function About() {
  return (
    <Box className="py-12 md:py6 bg-white text-black">
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="relative">
              {/* Main image collage */}
              <Box className="relative w-full h-96 md:h-[450px]">
                {/* Left side image - swimming pool */}
                <Box className="absolute left-0 top-8 w-2/3 h-4/5 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={about1}
                    alt="Swimming pool"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>

                {/* Top right image - child in pool */}
                <Box className="absolute right-0 top-0 w-1/2 h-2/5 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={about2}
                    alt="Child swimming"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                {/* Bottom right image - kids having fun */}
                <Box className="absolute right-0 bottom-0 w-1/2 h-2/5 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={about3}
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
                  <Typography variant="caption" className="text-center text-xs">
                    YEARS
                  </Typography>
                  <Typography variant="caption" className="text-center text-xs">
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
                About Us Our Class
              </Typography>

              {/* Heading */}
              <Typography
                variant="h3"
                component="h2"
                className="text-4xl md:text-5xl font-bold text-navy-900"
              >
                Splash into Success with Our Swimming Classes
              </Typography>

              {/* Description */}
              <Typography variant="body1" className="text-gray-600">
                Opening in spring and closing in fall are ideal. However, it
                depends on local climate conditions; a professional service can
                guide you based on your location regular chlorination, proper
                water cleaning.
              </Typography>

              {/* Features list */}
              <Grid container spacing={2} className="py-4">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box className="flex items-start space-x-2">
                    <CheckCircleIcon className="text-blue-500 mt-0.5" />
                    <Typography variant="body1" className="font-medium">
                      Experience Trainer
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box className="flex items-start space-x-2">
                    <CheckCircleIcon className="text-blue-500 mt-0.5" />
                    <Typography variant="body1" className="font-medium">
                      Recommends Our School
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box className="flex items-start space-x-2">
                    <CheckCircleIcon className="text-blue-500 mt-0.5" />
                    <Typography variant="body1" className="font-medium">
                      Competitions Won
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box className="flex items-start space-x-2">
                    <CheckCircleIcon className="text-blue-500 mt-0.5" />
                    <Typography variant="body1" className="font-medium">
                      Successful History
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
                MORE ABOUT US
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
