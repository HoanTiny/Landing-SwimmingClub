'use client'; // Nếu bạn dùng Next.js 13 (app router), cần cho phép render client

import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import Section from '../section';

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
              Quyền lợi nhận được khi con tham gia CLB
            </Typography>

            <Typography variant="h4" className="font-bold mb-4 leading-tight">
              Từ Nỗi Sợ Hãi Đến Sự Tự Tin
              <br />
              Cùng Chúng Tôi Làm Chủ Kỹ Năng Bơi Lội
            </Typography>

            <Typography variant="body1" className="text-gray-300 mb-8">
              Chương trình học của chúng tôi được thiết kế để phát triển kỹ năng
              bơi lội một cách tuần tự, bắt đầu từ an toàn dưới nước cơ bản.
              Chúng tôi cung cấp nhiều lớp học phù hợp với các nhóm tuổi và
              trình độ khác nhau, đảm bảo một trải nghiệm thú vị cho tất cả mọi
              người.
            </Typography>

            {/* Bullet points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Kỹ Năng Bơi Lội Cơ Bản
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4
                    kiểu bơi: Ếch-sải-bướm-ngửa 1 cách bài bản và đúng kĩ thuật.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Kỹ Năng Bơi Lội Nâng Cao
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Con còn được học cải thiện, tăng độ bền dưới nước giúp con
                    phát triển thể lực và tự tin hơn trong bất kì môi trường
                    nào.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Bổ Sung Dinh Dưỡng Sau Mỗi Buổi Học
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Có sữa Dalat Milk uống sau mỗi buổi học bổ sung dinh dưỡng
                  </Typography>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Tổ Chức Sinh Nhật Hàng Tháng
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    CLB sẽ tổ chức sinh nhật hàng tháng cho các con.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Tổ Chức Gala-Sự Kiện
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Các con được tham gia các Gala-Sự kiện thú vị do CLB tổ
                    chức: 20/10, 8/3, 1/6 , Trung thu,.... để kết nối bạn bè và
                    thỏa sức vui chơi vào các dịp, ngày lễ đặc biệt
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>

          {/* Cột phải: 2 ảnh demo */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Section>
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
            </Section>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
