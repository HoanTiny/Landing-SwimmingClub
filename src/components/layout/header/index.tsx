// components/Header.js
'use client'; // Only add if you're using Next.js 13 (app router)
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Dịch vụ', href: '#services' },
    { label: 'Lớp học', href: '#classes' },
    { label: 'Đăng ký', href: '#register' },
    { label: 'Đội ngũ', href: '#trainers' },
    { label: 'Về chúng tôi', href: '#about' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos <= 100 ||
          currentScrollPos >= 400,
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Hàm xử lý cuộn mượt khi click menu

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 4, fontWeight: 'bold', color: '#fff' }}
          >
            CLB THỦ ĐÔ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-white font-medium mr-2 hover:bg-white/10 px-2 py-1 rounded"
              >
                {item.label}
              </Link>
            ))}
          </Box>
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
