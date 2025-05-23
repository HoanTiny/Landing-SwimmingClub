'use client'; // Nếu dùng Next.js 13 (app router)

import { LocationOn, Phone } from '@mui/icons-material';
import { Box, Grid, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box className="!text-white pt-10 pb-6 bg-gradient-to-r from-blue-700 to-blue-900">
      {/* Phần nội dung chính của footer */}
      <Box className="max-w-6xl mx-auto px-4">
        <Grid container spacing={4}>
          {/* Cột 1: Logo + mô tả */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className="font-bold mb-3">
              CLB THỦ ĐÔ
            </Typography>
            <Typography variant="body2" className=" leading-relaxed">
              Chúng tôi cung cấp dịch vụ dạy bơi chuyên nghiệp với đội ngũ huấn
              luyện viên giàu kinh nghiệm và nhiệt huyết. Hãy đến với chúng tôi
              để trải nghiệm những bài học bơi an toàn và hiệu quả nhất!
            </Typography>
          </Grid>

          {/* Cột 2: Quick Link (có hiệu ứng hover) */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-3">
              Liên kết nhanh
            </Typography>
            <ul className="list-none space-y-2 !text-white">
              <li>
                <Link
                  href="#home"
                  className="!text-gray-300 hover:text-blue-400 transition-colors"
                  underline="none"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="!text-gray-300 hover:text-blue-400 transition-colors"
                  underline="none"
                >
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="#classes"
                  className="!text-gray-300 hover:text-blue-400 transition-colors"
                  underline="none"
                >
                  Lớp học
                </Link>
              </li>
              <li>
                <Link
                  href="#register"
                  className="!text-gray-300 hover:text-blue-400 transition-colors"
                  underline="none"
                >
                  Đăng ký
                </Link>
              </li>
              <li>
                <Link
                  href="#trainers"
                  className="!text-gray-300 hover:text-blue-400 transition-colors"
                  underline="none"
                >
                  Đội ngũ
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Cột 3: Popular Services (có hiệu ứng hover) */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-3">
              Về chúng tôi
            </Typography>
            <ul className="list-none space-y-2 !text-white">
              <li>
                <Link
                  href="/introduce"
                  className="!text-gray-300 hover:text-blue-400 transition-colors link-hover"
                  underline="none"
                  target="_blank"
                >
                  Giới thiệu câu lạc bộ
                </Link>
              </li>
              <li>
                <Link
                  href="/curriculum"
                  className="!text-gray-300 hover:text-blue-400 transition-colors link-hover"
                  underline="none"
                  target="_blank"
                >
                  Chương trình học
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="!text-gray-300 hover:text-blue-400 transition-colors link-hover"
                  underline="none"
                  target="_blank"
                >
                  Lịch hoạt động
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Cột 4: Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-3">
              Liên hệ chúng tôi
            </Typography>
            <Box className="flex items-start space-x-2 mb-2">
              <LocationOn fontSize="small" className="text-blue-400 mt-1" />
              <Typography variant="body2" className="!text-gray-300">
                33 Mạc Thái Tổ, Yên Hòa, Cầu Giấy, Hà Nội
              </Typography>
            </Box>
            <Box className="flex items-center space-x-2 mb-2">
              <Phone fontSize="small" className="text-blue-400" />
              <Link
                href="tel:+84968156663"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                underline="none"
              >
                +84 968 156 663
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Dòng bản quyền */}
      <Box className="max-w-6xl mx-auto mt-8 px-4 border-t border-gray-700 pt-4">
        <Typography variant="body2" className="text-center">
          Copyright © 2025
        </Typography>
      </Box>
    </Box>
  );
}
