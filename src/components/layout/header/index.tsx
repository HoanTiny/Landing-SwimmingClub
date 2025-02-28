// components/Header.js
'use client';
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
import { useEffect, useState } from 'react';

export default function Header() {
  // Các item trên menu
  const navItems = [
    { label: 'Trang chủ', id: 'home' },
    { label: 'Về chúng tôi', id: 'about' },

    { label: 'Dịch vụ', id: 'services' },
    { label: 'Bảng giá', id: 'pricing' },
    { label: 'Lớp học', id: 'ourclass' },
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
            PePex
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
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Nút Search (chỉ hiển thị trên md trở lên) */}
            {/* <IconButton
              sx={{
                color: '#fff',
                display: { xs: 'none', md: 'inline-flex' },
              }}
            >
              <SearchIcon />
            </IconButton> */}

            {/* Nút Request Quote / Liên hệ */}
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
