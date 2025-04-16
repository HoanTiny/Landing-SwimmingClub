// components/Header.js
'use client'; // Only add if you're using Next.js 13 (app router)
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { label: 'Trang chủ', href: '#home', id: 'home' },
    { label: 'Về chúng tôi', href: '#about', id: 'about' },

    { label: 'Lớp học', href: '#classes', id: 'classes' },
    { label: 'Dịch vụ', href: '#services', id: 'services' },
    { label: 'Đội ngũ', href: '#trainers', id: 'trainers' },
    { label: 'Đăng ký', href: '#register', id: 'register' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // State để quản lý đóng/mở Drawer trên mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Xử lý sự kiện click menu: cuộn mượt đến phần tương ứng
  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Nếu đang ở mobile, đóng Drawer sau khi click
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  // Drawer hiển thị các menu item
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List sx={{ padding: 0 }}>
        <Box className="bg-blue-600">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 4, fontWeight: 'bold', color: '#fff' }}
            className="text-center p-3"
          >
            CLB THỦ ĐÔ
          </Typography>
        </Box>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className=" border-b border-gray-200"
            onClick={() => handleMenuItemClick(item.id)}
          >
            <ListItemButton>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
    <>
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
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=100043515746559',
                  '_blank',
                )
              }
            >
              Liên hệ
            </Button>
            <IconButton
              sx={{
                ml: 2,
                color: '#fff',
                display: { xs: 'inline-flex', md: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer cho mobile menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Thêm khoảng trống dưới AppBar để không bị che nội dung */}
      <Toolbar />
    </>
  );
}
