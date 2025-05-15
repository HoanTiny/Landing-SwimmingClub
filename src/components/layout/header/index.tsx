// components/Header.js
'use client';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: 'Trang chủ', href: '#home', id: 'home' },
    { label: 'Về chúng tôi', href: '#about', id: 'about' },
    { label: 'Lớp học', href: '#classes', id: 'classes' },
    { label: 'Dịch vụ', href: '#services', id: 'services' },
    { label: 'Đội ngũ', href: '#trainers', id: 'trainers' },
    { label: 'Đăng ký', href: '#register', id: 'register' },
    {
      label: 'Thời khóa biểu',
      href: '/schedule',
      id: 'schedule',
      isRoute: true,
    },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleMenuItemClick = (item: {
    label: string;
    href: string;
    id: string;
    isRoute?: boolean;
  }) => {
    if (item.isRoute) {
      // Điều hướng tới route riêng
      router.push(item.href);
    } else {
      // Nếu không ở trang chủ, chuyển về trang chủ với hash
      if (pathname !== '/') {
        router.push(`/${item.href}`);
      } else {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (mobileOpen) setMobileOpen(false);
  };

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

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List sx={{ padding: 0 }}>
        <Box className="bg-blue-600">
          <Image
            src="/images/logoCLBboilan.png"
            alt="logo"
            width={75}
            height={75}
          />
        </Box>
        {navItems.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton onClick={() => handleMenuItemClick(item)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className={`transition-transform duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        elevation={0}
        sx={{
          background: 'linear-gradient(90deg, #4d9aff 0%, #0060c0 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image
              src="/images/logoCLBboilan.png"
              alt="logo"
              width={75}
              height={75}
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item, idx) =>
                item.isRoute ? (
                  <Button
                    key={idx}
                    onClick={() => handleMenuItemClick(item)}
                    sx={{ color: '#fff', textTransform: 'none', mr: 2 }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={idx}
                    onClick={() => handleMenuItemClick(item)}
                    sx={{
                      color: '#fff',
                      textTransform: 'none',
                      mr: 2,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    {item.label}
                  </Button>
                ),
              )}
            </Box>
            <Button
              variant="contained"
              sx={{
                ml: { xs: 0, md: 2 },
                backgroundColor: '#1E90FF',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#187bcd' },
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
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
}
