'use client'; // Chỉ thêm nếu bạn dùng Next.js 13 (app router)

import Image from 'next/image';

// MUI
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import StarIcon from '../Icons/StarIcon';
import CountUp from 'react-countup';
import SlideInWhenVisible from '../slideInWhenVisible';
// import CountUp from 'react-countup';

export default function WhyChooseUs() {
  const features = [
    { id: 1, text: 'Phương pháp hiện đại' },
    { id: 2, text: '15 năm trên thị trường' },
    { id: 3, text: 'Thanh toán trả góp' },
    { id: 4, text: 'Phát triển cá nhân' },
    { id: 5, text: 'Trang thiết bị hiện đại' },
    { id: 6, text: 'Buổi học thử' },
  ];

  const statistics = [
    { id: 1, count: 2000, label: 'Khách Hàng Hài Lòng' },
    { id: 2, count: 2300, label: 'Tổng Số Học Viên' },
    { id: 3, count: 100, label: 'Giải Thưởng Xuất Sắc' },
  ];

  return (
    <Box className="w-full bg-white py-12 text-[black]" id="services">
      <Container maxWidth="xl" className="w-full ">
        <Grid container spacing={4} className="items-center">
          {/* Left side with images */}
          <Grid item xs={12} md={6}>
            <SlideInWhenVisible direction="left">
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={4}
              >
                <Stack>
                  {/* Top left image */}
                  <Box className="mb-4">
                    <Image
                      src="/images/hcb.jpg"
                      alt="Children swimming with kickboards"
                      width={300}
                      height={300}
                      className="h-[250px] w-[250px] rounded-[12px] object-cover"
                    />
                  </Box>

                  {/* Bottom left image */}
                  <Box>
                    <Image
                      src="/images/sx.jpg"
                      alt="Child at swimming lesson"
                      width={400}
                      height={300}
                      className="lg:h-[350px] md:h-[250px] h-[250px] w-[250px] rounded-[12px] object-cover"
                    />
                  </Box>
                </Stack>

                {/* Star background element */}
                <Stack gap={3}>
                  <Box className="">
                    <div className="w-32 h-32 text-blue-100">
                      <StarIcon className="" />
                    </div>
                  </Box>

                  <Box>
                    <Image
                      src="/images/hcv.jpg"
                      alt="Child at swimming lesson"
                      width={400}
                      height={300}
                      className="lg:h-[350px] md:h-[250px] h-[250px] w-[250px] rounded-[12px] object-cover"
                    />
                  </Box>
                </Stack>
              </Stack>
            </SlideInWhenVisible>
          </Grid>

          {/* Right side with content */}
          <Grid item xs={12} md={6} className="pl-4 md:pl-8">
            <SlideInWhenVisible direction="right">
              <Box className="mb-8">
                <Typography
                  variant="subtitle1"
                  className="text-blue-500 font-medium flex items-center mb-2"
                >
                  <span className="w-6 h-0.5 bg-blue-500 mr-2"></span>
                  Tại Sao Chọn Chúng Tôi
                </Typography>

                <Typography
                  variant="h2"
                  className="text-4xl md:text-5xl font-bold text-navy-900 mb-4"
                >
                  Nơi Hội Tụ
                  <br />
                  Sự Xuất Sắc Trong Giáo Dục Bơi Lội
                </Typography>

                <Typography variant="body1" className="text-gray-600 mb-6">
                  Chúng tôi tự hào mang đến một môi trường học bơi hiện đại và
                  chuyên nghiệp, nơi mọi chi tiết đều được chăm chút kỹ lưỡng.
                  Từ phương pháp giảng dạy tiên tiến đến hệ thống vệ sinh và xử
                  lý nước đạt chuẩn, chúng tôi cam kết mang lại trải nghiệm học
                  tập an toàn và hiệu quả nhất cho học viên.
                </Typography>

                {/* Features Grid */}
                <Grid container spacing={2} className="mb-8">
                  {features.map((feature) => (
                    <Grid item xs={12} sm={6} key={feature.id}>
                      <Box className="flex items-center">
                        <CheckCircleIcon className="text-blue-500 mr-2" />
                        <Typography variant="body1">{feature.text}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Statistics - showing only the last 2 stats since the first one is overlaid on image */}
                <Box className="flex flex-wrap justify-start mt-8 bg-slate-50 shadow-2xl p-2 pt-4 rounded-[6px]">
                  {statistics.slice(1).map((stat) => (
                    <Box key={stat.id} className="mr-12 mb-4">
                      <Typography
                        variant="h3"
                        className="text-4xl font-bold text-navy-900"
                      >
                        {stat.count !== undefined && (
                          <CountUp
                            start={0}
                            end={stat.count}
                            prefix="+"
                            duration={2}
                            enableScrollSpy
                          />
                        )}
                      </Typography>
                      <Typography variant="body2" className="text-gray-500">
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </SlideInWhenVisible>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
