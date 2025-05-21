'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import Section from '../section';

function VideoPreview() {
  return (
    <>
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
    </>
  );
}

export default VideoPreview;
