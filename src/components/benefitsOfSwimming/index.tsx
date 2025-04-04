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
              Lợi Ích Của Việc Bơi Lội
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
                    Trang Thiết Bị Bơi Lội
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Các lớp học của chúng tôi đảm bảo học viên có đầy đủ trang
                    thiết bị cần thiết để thành công.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Môi Trường An Toàn &amp; Vui Vẻ
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Chúng tôi cung cấp một không gian học tập an toàn cho mọi
                    cấp độ bơi, đảm bảo một trải nghiệm thú vị.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="text-blue-300 mt-1" />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    Cầu Trượt Nước và Đường Trượt
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    An toàn dưới nước là ưu tiên hàng đầu trong các lớp học của
                    chúng tôi. Chúng tôi dạy các kỹ năng an toàn dưới nước quan
                    trọng, như nổi và kiểm soát hơi thở, có thể cứu sống.
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
