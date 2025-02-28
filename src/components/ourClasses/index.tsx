// ClassesCarousel.jsx
'use client';
import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { Swiper as SwiperType } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import about1 from '../../assets/img/Rectangle27.jpg';
import about2 from '../../assets/img/Rectangle28.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import about3 from '../../assets/img/Rectangle27.jpg';

const ClassesCarousel = () => {
  const swiperRef = useRef<SwiperType>();
  const [visibleNavigation, setVisibleNavigation] = useState(false);
  const classes = [
    {
      id: 1,
      title: 'Sea Turtles: 3-4 Years',
      price: '$250.99',
      image: about1,
      description:
        'Water safety is a top priority in our classes. We teach essential water safety skills.',
      lessons: 8,
      enrolled: '60+',
      type: 'Children',
    },
    {
      id: 2,
      title: 'Sea Turtles: 3-4 Years',
      price: '$200.99',
      image: about2,
      description:
        'Sea turtles are fascinating reptiles that inhabit oceans around the from tropics',
      lessons: 8,
      enrolled: '60+',
      type: 'Children',
    },
    {
      id: 3,
      title: 'Sharks: 4-12 Years',
      price: '$220.99',
      image: about1,
      description:
        "Sharks are a diverse group of cartilaginous fish that have inhabited the Earth's oceans",
      lessons: 8,
      enrolled: '60+',
      type: 'Children',
    },
    {
      id: 4,
      title: 'Dolphins: 5-7 Years',
      price: '$230.99',
      image: about2,
      description:
        'Our Dolphins class focuses on intermediate swimming skills and water confidence building.',
      lessons: 10,
      enrolled: '55+',
      type: 'Children',
    },
    {
      id: 5,
      title: 'Adult Beginners',
      price: '$270.99',
      image: about2,

      description:
        "It's never too late to learn! Our adult classes provide a supportive environment for beginners.",
      lessons: 12,
      enrolled: '40+',
      type: 'Adults',
    },
  ];

  return (
    <Box className="py-16 bg-white text-black" id="ourclass">
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
            Our Classes
            <span className="w-6 h-0.5 bg-blue-500 inline-block ml-2"></span>
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            className="text-4xl md:text-5xl font-bold text-navy-900 mt-2"
          >
            Join Our Swimming Classes
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
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            scrollbar={{ draggable: true }}
            className="mySwiper !p-2"
            //
          >
            {classes.map((classItem) => (
              <SwiperSlide
                key={classItem.id}
                style={{
                  border: 'solid',
                  borderRadius: '10px',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  borderColor: 'white',
                }}
              >
                <Card className="h-full shadow-md ">
                  <Box className="relative">
                    <CardMedia
                      component="img"
                      // height="200"
                      image={classItem.image.src}
                      alt={classItem.title}
                      className="h-52 object-cover"
                    />
                    <Box className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <Typography className="text-blue-500 font-semibold">
                        {classItem.price}/ Person
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent className="p-6">
                    <Typography variant="h5" className="font-bold text-xl mb-3">
                      {classItem.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="text-gray-600 mb-4 h-12"
                    >
                      {classItem.description}
                    </Typography>

                    <Box className="pt-4 border-t border-gray-200 mt-4 flex items-center justify-between">
                      <Box className="flex items-center text-blue-500">
                        <BookIcon fontSize="small" className="mr-1" />
                        <Typography variant="body2" className="font-medium">
                          Lesson {classItem.lessons}
                        </Typography>
                      </Box>

                      <Box className="flex items-center text-blue-500">
                        <PersonIcon fontSize="small" className="mr-1" />
                        <Typography variant="body2" className="font-medium">
                          Enrolled {classItem.enrolled}
                        </Typography>
                      </Box>

                      <Box className="flex items-center text-blue-500">
                        <ChildCareIcon fontSize="small" className="mr-1" />
                        <Typography variant="body2" className="font-medium">
                          {classItem.type}
                        </Typography>
                      </Box>
                    </Box>
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

export default ClassesCarousel;
