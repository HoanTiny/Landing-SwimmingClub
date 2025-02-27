// components/Header.js
import React from 'react';
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

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4f1fff' }}>
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
            {navItems.map((item) => (
              <Button
                key={item}
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
