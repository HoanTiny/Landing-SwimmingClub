// ClassesCarousel.jsx
'use client';
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
// Icon Mạng Xã Hội
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
// Dữ liệu demo về các trainer
const trainersData = [
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv1.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv2.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv3.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv4.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv5.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv6.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv7.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv8.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv9.jpg',
  },
  {
    name: 'Huấn luyện viên',
    title: 'Swimming Trainer',
    image: '/images/trainners/hlv10.jpg',
  },
];

const ProfessionalTrainers = () => {
  const swiperRef = useRef<SwiperType>();
  const [visibleNavigation, setVisibleNavigation] = useState(false);

  return (
    <Box className="py-16 bg-white text-black" id="trainers">
      <Container
        maxWidth="xl"
        onMouseEnter={() => setVisibleNavigation(true)}
        onMouseLeave={() => setVisibleNavigation(false)}
      >
        {/* Section Header */}
        <Box className="text-center mb-12">
          <Typography
            variant="subtitle1"
            className="text-blue-500 font-medium flex items-center justify-center"
          >
            <span className="w-6 h-0.5 bg-blue-500 inline-block mr-2"></span>
            <span className="text-lg">Đội ngũ huấn luyện viên</span>
            <span className="w-6 h-0.5 bg-blue-500 inline-block ml-2"></span>
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            className="text-4xl md:text-5xl font-bold text-navy-900 mt-2"
            sx={{ fontFamily: 'Poetsen One, sans-serif' }}
          >
            Với những huấn luyện viên chuyên nghiệp
          </Typography>
        </Box>

        {/* Swiper Carousel */}
        <Box className="relative">
          <>
            <div
              className={`absolute top-1/2 left-0 -translate-y-1/2 z-10 transition-transform duration-300 ${
                visibleNavigation
                  ? 'lg:translate-x-[-100%] opacity-1 translate-x-0'
                  : '-translate-x-[300%] opacity-0'
              }`}
            >
              <IconButton
                className="custom_prev bg-[#1a2adb] text-white p2 shadow mr-2 rounded-full"
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </IconButton>
            </div>

            <div
              className={`absolute top-1/2 right-0 -translate-y-1/2 z-10 transition-transform duration-300 ${
                visibleNavigation
                  ? 'lg:translate-x-[100%] opacity-1 translate-x-0'
                  : 'translate-x-[300%] opacity-0'
              }`}
            >
              <IconButton
                className="custom_next bg-[#1a2adb] text-white p2 shadow ml-2 rounded-full"
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FontAwesomeIcon icon={faArrowRight} />

                {/* <ArrowForwardIosIcon /> */}
              </IconButton>
            </div>
          </>

          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={4}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            scrollbar={{ draggable: true }}
            className="mySwiper !p-2"
            //
          >
            {trainersData.map((trainer, index) => (
              <SwiperSlide key={index}>
                <Card className="shadow-lg rounded-lg overflow-hidden group">
                  {/* Vùng chứa ảnh + icon */}
                  <div className="relative w-full overflow-hidden h-[300px] rounded-[12px]">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="
                    object-cover
                    transform
                    transition-transform
                    duration-500
                    ease-in-out
                    group-hover:scale-110
                  "
                      sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                    />

                    {/* Icon mạng xã hội: ẩn mặc định, hover mới hiện dần */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {/* Facebook */}
                      <IconButton
                        className="
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                          ease-in-out
                          delay-100
                        bg-white
                        text-black
                        "
                        size="medium"
                      >
                        <FacebookIcon fontSize="small" />
                      </IconButton>

                      {/* LinkedIn */}
                      <IconButton
                        className="
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      ease-in-out
                      delay-300
                      bg-white
                      text-black
                    "
                        size="medium"
                      >
                        <LinkedInIcon fontSize="small" />
                      </IconButton>

                      {/* Twitter */}
                      <IconButton
                        className="
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      ease-in-out
                      delay-500
                      bg-white
                      text-black

                    "
                        size="medium"
                      >
                        <TwitterIcon fontSize="small" />
                      </IconButton>

                      {/* YouTube */}
                      <IconButton
                        className="
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      ease-in-out
                      delay-700
                      bg-white
                                           text-black

                    "
                        size="medium"
                      >
                        <YouTubeIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>

                  {/* Nội dung tên và chức danh */}
                  <CardContent className="text-center">
                    <Typography
                      variant="h6"
                      className="font-semibold text-gray-800 mb-1"
                    >
                      {trainer.name}
                    </Typography>
                    <Typography variant="body2" className="text-blue-500">
                      {trainer.title}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalTrainers;
