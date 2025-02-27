// components/Header.js
'use client';
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';

export default function Header() {
  // Các item trên menu
  const navItems = ['Trang chủ', 'Dịch vụ', 'Lớp học', 'Dịch vụ', 'Đăng ký'];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Xử lý hiệu ứng scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos <= 100 ||
          currentScrollPos >= 400,
      );

      // console.log('object scroll', currentScrollPos, visible, prevScrollPos);
      setPrevScrollPos(() => currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <AppBar
      position="fixed"
      className={`transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      elevation={0}
      sx={{ backgroundColor: '#4f1fff' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo / Thương hiệu */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 4, fontWeight: 'bold', color: '#fff' }}
          >
            PePex
          </Typography>

          {/* Menu item (Hiển thị trên màn hình md trở lên) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 500,
                  mr: 2,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Nút Search */}
          <IconButton
            sx={{ color: '#fff', display: { xs: 'none', md: 'inline-flex' } }}
          >
            <SearchIcon />
          </IconButton>

          {/* Nút Request Quote */}
          <Button
            variant="contained"
            sx={{
              ml: { xs: 0, md: 2 },
              backgroundColor: '#1E90FF',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#187bcd',
              },
            }}
          >
            Liên hệ
          </Button>

          {/* Menu icon (dành cho mobile) */}
          <IconButton
            sx={{
              ml: 2,
              color: '#fff',
              display: { xs: 'inline-flex', md: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
