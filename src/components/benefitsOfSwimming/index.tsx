'use client'; // Nếu bạn dùng Next.js 13 (app router), cần cho phép render client

import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import PoolIcon from '@mui/icons-material/Pool';
import WaterIcon from '@mui/icons-material/Water';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import Section from '../section';

export default function BenefitsOfSwimming() {
  return (
    <Box
      className="relative w-full min-h-[650px] overflow-hidden"
      id="benefits"
    >
      {/* Lớp nền gradient thay vì nền đen đơn giản */}
      <Box className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#0A0A0A]" />

      {/* Hiệu ứng sóng nước */}
      <Box
        className="absolute bottom-0 left-0 w-full h-16 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff'/%3E%3C/svg%3E\")",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          animation: 'wave 8s linear infinite',
        }}
      />

      {/* Phần shape xanh đẹp hơn với gradient */}
      <Box
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background:
            'linear-gradient(135deg, #4F46E5 0%, #3B82F6 50%, #60A5FA 100%)',
          clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 30% 100%, 0 50%, 30% 0)',
          opacity: 0.9,
        }}
      />

      {/* Hiệu ứng bong bóng nước */}
      <Box className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </Box>

      <Container
        maxWidth="xl"
        className="relative z-10 mx-auto px-4 py-20 text-white"
      >
        <Grid container spacing={8} alignItems="center">
          {/* Cột trái: Tiêu đề, bullet points */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="relative">
              {/* Button kêu gọi hành động */}

              {/* Tiêu đề quyền lợi */}
              <Typography
                variant="h5"
                className="font-bold mt-8 mb-4 text-blue-100 bg-blue-900/30 inline-block py-2 px-4 rounded-lg"
              >
                <WaterIcon className="mr-2" /> QUYỀN LỢI KHI THAM GIA CLB
              </Typography>

              {/* Bullet points với animation khi hover */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-blue-900/30 transition-all">
                  <CheckCircleIcon className="text-blue-300 mt-1 text-2xl group-hover:scale-110 transition-all" />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-lg text-blue-100"
                    >
                      Đào Tạo 4 Kiểu Bơi Bài Bản
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      Con được học nâng cao các kiểu bơi đã có và hoàn thiện 4
                      kiểu bơi: Ếch - Sải - Bướm - Ngửa một cách bài bản và đúng
                      kỹ thuật.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-blue-900/30 transition-all">
                  <SecurityIcon className="text-blue-300 mt-1 text-2xl group-hover:scale-110 transition-all" />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-lg text-blue-100"
                    >
                      Phát Triển Thể Lực & Sự Tự Tin
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      Con được học cải thiện, tăng độ bền dưới nước giúp phát
                      triển thể lực và tự tin hơn trong bất kỳ môi trường nào.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-blue-900/30 transition-all">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5M0MzRUQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiA4aDEydjhhMiAyIDAgMCAxLTIgMkg4YTIgMiAwIDAgMS0yLTJWOHoiLz48cGF0aCBkPSJNMTIgMnY2Ii8+PHBhdGggZD0iTTkgMTNoNiIvPjwvc3ZnPg=="
                    alt="Milk"
                    className="w-6 h-6 mt-1 text-blue-300 group-hover:scale-110 transition-all"
                  />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-lg text-blue-100"
                    >
                      Dinh Dưỡng Sau Mỗi Buổi Học
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      Có sữa Dalat Milk uống sau mỗi buổi học bổ sung dinh dưỡng
                      giúp con phục hồi năng lượng.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-blue-900/30 transition-all">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5M0MzRUQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxNiIgeTE9IjIiIHgyPSIxNiIgeTI9IjYiLz48bGluZSB4MT0iOCIgeTE9IjIiIHgyPSI4IiB5Mj0iNiIvPjxsaW5lIHgxPSIzIiB5MT0iMTAiIHgyPSIyMSIgeTI9IjEwIi8+PC9zdmc+"
                    alt="Party"
                    className="w-6 h-6 mt-1 text-blue-300 group-hover:scale-110 transition-all"
                  />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-lg text-blue-100"
                    >
                      Tiệc Sinh Nhật Hàng Tháng
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      CLB sẽ tổ chức sinh nhật hàng tháng cho các con, tạo không
                      khí vui vẻ và gắn kết.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-blue-900/30 transition-all">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5M0MzRUQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik0xNiAydjIiLz48cGF0aCBkPSJNOCAydjIiLz48cGF0aCBkPSJNMyAxMGgxOCIvPjxwYXRoIGQ9Ik04IDE0aDIiLz48cGF0aCBkPSJNMTQgMTRoMiIvPjxwYXRoIGQ9Ik04IDE4aDIiLz48cGF0aCBkPSJNMTQgMThoMiIvPjwvc3ZnPg=="
                    alt="Events"
                    className="w-6 h-6 mt-1 text-blue-300 group-hover:scale-110 transition-all"
                  />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-lg text-blue-100"
                    >
                      Sự Kiện Đặc Biệt Quanh Năm
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      Các con được tham gia các Gala-Sự kiện thú vị do CLB tổ
                      chức: 20/10, 8/3, 1/6, Trung thu,... để kết nối bạn bè và
                      thỏa sức vui chơi.
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-blue-900/30 transition-all">
                  <PoolIcon className="text-blue-300 mt-1 text-2xl group-hover:scale-110 transition-all" />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-lg text-blue-100"
                    >
                      Trải Nghiệm Đa Dạng Môi Trường Nước
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      Ngoài ra các con được tham gia trải nghiệm bơi sông - hồ -
                      biển do CLB tổ chức, giúp áp dụng kỹ năng vào thực tế.
                    </Typography>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>

          {/* Cột phải: 2 ảnh demo với animation */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Section>
              <Stack direction={'row'} gap={3} className="relative">
                <Box className="relative w-full h-72 lg:h-[450px] rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-lg">
                  <Box className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10" />
                  <Image
                    src="/images/spring-b.jpg"
                    alt="Người bơi đang vui vẻ"
                    fill
                    className="object-cover"
                  />
                  <Box className="absolute bottom-4 left-4 z-20">
                    <Typography
                      variant="h6"
                      className="font-bold text-white drop-shadow-md"
                    >
                      Lớp Bơi Cho Người Mới Bắt Đầu
                    </Typography>
                  </Box>
                </Box>

                <Box
                  className="relative w-full h-72 lg:h-[450px] rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  style={{ marginTop: '2.5rem' }}
                >
                  <Box className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10" />
                  <Image
                    src="/images/12.webp"
                    alt="Trẻ em học bơi"
                    fill
                    className="object-cover"
                  />
                  <Box className="absolute bottom-4 left-4 z-20">
                    <Typography
                      variant="h6"
                      className="font-bold text-white drop-shadow-md"
                    >
                      Lớp Bơi Cho Trẻ Em
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Section>

            {/* Thêm badge đăng ký giảm giá */}
            <Box className="absolute -right-2 top-10 bg-yellow-500 text-blue-900 py-2 px-4 rounded-l-lg font-bold transform rotate-0 shadow-lg z-30">
              <Typography variant="body2" className="font-bold">
                Giảm 30% Khi Đăng Ký Hôm Nay!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* CSS để thêm animation */}
      <style jsx global>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-100px) scale(1.1);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-200px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
}
