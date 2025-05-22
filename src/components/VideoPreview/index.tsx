'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Section from '../section';

export default function VideoPreview() {
  const [loadVideo, setLoadVideo] = useState(false);
  const { ref, inView } = useInView({
    /* video sẽ load khi cách viewport 200px */
    rootMargin: '200px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setLoadVideo(true);
    }
  }, [inView]);

  const handlePlay = () => {
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    const overlay = document.getElementById('play-overlay');
    if (video && video.paused) {
      video.play();
      if (overlay) {
        overlay.style.display = 'none';
      }
    }
  };

  return (
    <Box className="py-8 bg-gradient-to-r from-cyan-500 to-blue-800 text-white">
      <Container maxWidth="xl">
        <Section>
          <Box
            className="relative overflow-hidden rounded-xl shadow-2xl"
            ref={ref}
          >
            <Box
              className="relative w-full rounded-xl border-4 border-white"
              sx={{
                aspectRatio: '16/9',
                boxShadow: '0 0 15px rgba(0, 195, 255, 0.5)',
              }}
            >
              {loadVideo ? (
                <video
                  id="intro-video"
                  preload="none"
                  poster="/images/banner/Intro.jpg"
                  loop
                  muted
                  controls
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  {/* Thêm cả .webm để tiết kiệm băng thông */}
                  <source src="/videos/intro.webm" type="video/webm" />
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src="/images/banner/Intro.jpg"
                  alt="Video preview"
                  fill
                  className="object-cover rounded-lg"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                  }}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              )}

              {/* Overlay Play Button */}
              <Box
                id="play-overlay"
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-t from-blue-900/80 to-transparent"
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
  );
}
