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
      title: 'Khóa cơ bản cho trẻ em: 2-3 tuổi',
      price: '$150.99',
      image: about1,
      description:
        'Khóa học bơi dành cho trẻ em từ 2-3 tuổi, giúp trẻ làm quen với nước và phát triển kỹ năng bơi lội.',
      lessons: 8,
      enrolled: '60+',
      type: 'Trẻ em',
    },
    {
      id: 2,
      title: 'Khóa học bơi nâng cao cho trẻ em: 3-4 tuổi',
      price: '$200.99',
      image: about2,
      description:
        'Khóa học bơi nâng cao dành cho trẻ em từ 3-4 tuổi, giúp trẻ phát triển kỹ năng bơi lội và tự tin trong nước.',
      lessons: 8,
      enrolled: '60+',
      type: 'Trẻ em',
    },
    {
      id: 3,
      title: 'Lớp học bơi cho trẻ em: 4-5 tuổi',
      price: '$220.99',
      image: about1,
      description:
        'Khóa học bơi dành cho trẻ em từ 4-5 tuổi, giúp trẻ phát triển kỹ năng bơi lội và tự tin trong nước.',
      lessons: 8,
      enrolled: '60+',
      type: 'Trẻ em',
    },
    {
      id: 4,
      title: 'Lớp học bơi cho trẻ em: 5-6 tuổi',
      price: '$230.99',
      image: about2,
      description:
        'Khóa học bơi dành cho trẻ em từ 5-6 tuổi, giúp trẻ phát triển kỹ năng bơi lội và tự tin trong nước.',
      lessons: 10,
      enrolled: '55+',
      type: 'Trẻ em',
    },
    {
      id: 5,
      title: 'Khóa học bơi cho người lớn',
      price: '$270.99',
      image: about2,

      description:
        'Khóa học bơi dành cho người lớn, giúp người học tự tin và thành thạo kỹ năng bơi lội.',
      lessons: 12,
      enrolled: '40+',
      type: 'Người lớn',
    },
  ];

  return (
    <Box className="py-16 bg-white text-black" id="classes">
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
            Tham gia các lớp học bơi của chúng tôi
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
            className="mySwiper !p-2 !flex"
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
                  height: 'auto',
                }}
              >
                <Card className="h-full flex flex-col shadow-md">
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

                  <CardContent className="p-6 flex-grow">
                    <Typography variant="h5" className="font-bold text-xl mb-3">
                      {classItem.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="text-gray-600 mb-4 h-12"
                    >
                      {classItem.description}
                    </Typography>
                  </CardContent>
                  <Box className="pt-4 border-t p-6 border-gray-200 mt-4 flex items-center justify-between">
                    <Box className="flex items-center text-blue-500">
                      <BookIcon fontSize="small" className="mr-1" />
                      <Typography variant="body2" className="font-medium">
                        Bài học: {classItem.lessons}
                      </Typography>
                    </Box>

                    <Box className="flex items-center text-blue-500">
                      <PersonIcon fontSize="small" className="mr-1" />
                      <Typography variant="body2" className="font-medium">
                        Đã đăng ký {classItem.enrolled}
                      </Typography>
                    </Box>

                    <Box className="flex items-center text-blue-500">
                      <ChildCareIcon fontSize="small" className="mr-1" />
                      <Typography variant="body2" className="font-medium">
                        {classItem.type}
                      </Typography>
                    </Box>
                  </Box>
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
