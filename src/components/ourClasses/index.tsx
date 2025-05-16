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
// import BookIcon from '@mui/icons-material/Book';
// import PersonIcon from '@mui/icons-material/Person';
// import ChildCareIcon from '@mui/icons-material/ChildCare';
import { Swiper as SwiperType } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import about1 from '../../assets/img/banner/P1377364.jpg';
import about2 from '../../assets/img/banner/P1377356.jpg';
import about3 from '../../assets/img/banner/P1377371.jpg';
import about4 from '../../assets/img/banner/P1377356.jpg';
import about5 from '../../assets/img/banner/P1377347.jpg';
import about6 from '../../assets/img/banner/P1377369.jpg';
// import about7 from '../../assets/img/banner/P1377356.jpg';
// import about8 from '../../assets/img/banner/P1377368.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Section from '../section';
// import about3 from '../../assets/img/Rectangle27.jpg';

const ClassesCarousel = () => {
  const swiperRef = useRef<SwiperType>();
  const [visibleNavigation, setVisibleNavigation] = useState(false);
  const classes = [
    {
      id: 1,
      title: 'Khóa học bơi mới',
      price: '4.500.000 VNĐ',
      image: about6,
      description:
        'Khóa học bơi kèm 1:1,1:2,1:3, tập trung vào từng học viên để đạt hiệu quả cao nhất',
      lessons: 12,
      enrolled: '15+',
      type: 'Chuyên nghiệp',
    },
    {
      id: 2,
      title: 'Học 1 tháng',
      price: '2.500.000 VNĐ',
      image: about1,
      description:
        'Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4 kiểu bơi: Ếch-sải-bướm-ngửa 1 cách bài bản và đúng kĩ thuật. Con còn được học cải thiện, tăng độ bền dưới nước, học nâng cao kỹ thuật thở dưới nước, bơi đường dài, kỹ thuật xuất phát,  giúp con phát triển thể lực và tự tin hơn trong bất kì môi trường nào.',

      lessons: 8,
      enrolled: '60+',
      type: 'Nhóm',
    },
    {
      id: 3,
      title: 'Học 2 tháng',
      price: '4.000.000 VNĐ',
      image: about2,
      description:
        'Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4 kiểu bơi: Ếch-sải-bướm-ngửa 1 cách bài bản và đúng kĩ thuật. Con còn được học cải thiện, tăng độ bền dưới nước, học nâng cao kỹ thuật thở dưới nước, bơi đường dài, kỹ thuật xuất phát,  giúp con phát triển thể lực và tự tin hơn trong bất kì môi trường nào.',

      lessons: 10,
      enrolled: '20+',
      type: 'Cá nhân',
    },
    {
      id: 4,
      title: 'Khóa 3 tháng',
      price: '4.500.000 VNĐ',
      image: about3,
      description:
        'Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4 kiểu bơi: Ếch-sải-bướm-ngửa 1 cách bài bản và đúng kĩ thuật. Con còn được học cải thiện, tăng độ bền dưới nước, học nâng cao kỹ thuật thở dưới nước, bơi đường dài, kỹ thuật xuất phát,  giúp con phát triển thể lực và tự tin hơn trong bất kì môi trường nào.',

      lessons: 6,
      enrolled: '30+',
      type: 'Cá nhân',
    },
    {
      id: 5,
      title: 'Khóa 6 tháng',
      price: '8.000.000 VNĐ',
      image: about4,
      description:
        'Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4 kiểu bơi: Ếch-sải-bướm-ngửa 1 cách bài bản và đúng kĩ thuật. Con còn được học cải thiện, tăng độ bền dưới nước, học nâng cao kỹ thuật thở dưới nước, bơi đường dài, kỹ thuật xuất phát,  giúp con phát triển thể lực và tự tin hơn trong bất kì môi trường nào.',

      lessons: 5,
      enrolled: '40+',
      type: 'Cá nhân',
    },
    {
      id: 6,
      title: 'Khóa 1 năm',
      price: '12.000.000 VNĐ',
      image: about5,
      description:
        'Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4 kiểu bơi: Ếch-sải-bướm-ngửa 1 cách bài bản và đúng kĩ thuật. Con còn được học cải thiện, tăng độ bền dưới nước, học nâng cao kỹ thuật thở dưới nước, bơi đường dài, kỹ thuật xuất phát,  giúp con phát triển thể lực và tự tin hơn trong bất kì môi trường nào.',

      lessons: 8,
      enrolled: '50+',
      type: 'Trẻ em',
    },
    // {
    //   id: 7,
    //   title: 'Khóa học bơi mới',
    //   price: '4.500.000 VNĐ',
    //   image: about6,
    //   description:
    //     'Khóa huấn luyện bơi thành tích cao, dành cho những học viên muốn tham gia thi đấu chuyên nghiệp.',
    //   lessons: 12,
    //   enrolled: '15+',
    //   type: 'Chuyên nghiệp',
    // },
    // {
    //   id: 7,
    //   title: 'Các buổi ngoại khoá bơi sông hồ biển',
    //   price: '$180.99',
    //   image: about7,
    //   description:
    //     'Các buổi ngoại khoá bơi tại sông, hồ, biển, giúp học viên trải nghiệm thực tế và nâng cao kỹ năng.',
    //   lessons: 4,
    //   enrolled: '70+',
    //   type: 'Ngoại khoá',
    // },
    // {
    //   id: 8,
    //   title: 'Trại hè sinh tồn CLB Thủ Đô',
    //   price: '$500.99',
    //   image: about8,
    //   description:
    //     'Trại hè sinh tồn do CLB Thủ Đô tổ chức, kết hợp học bơi và các kỹ năng sinh tồn trong môi trường nước.',
    //   lessons: 10,
    //   enrolled: '100+',
    //   type: 'Trại hè',
    // },
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

          <Section>
            <Typography
              variant="h2"
              component="h2"
              className="text-4xl md:text-5xl font-bold text-navy-900 mt-2"
            >
              Tham gia các lớp học bơi của chúng tôi
            </Typography>
          </Section>
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
                        {classItem.price} / Người
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent className="p-6 flex-grow">
                    <Typography variant="h5" className="font-bold text-xl mb-3">
                      {classItem.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="text-gray-600 mb-4 min-h-12"
                    >
                      {classItem.description}
                    </Typography>
                  </CardContent>
                  {/* <Box className="pt-4 border-t p-6 border-gray-200 mt-4 flex items-center justify-between">
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
                  </Box> */}
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
