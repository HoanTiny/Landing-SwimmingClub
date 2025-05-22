// components/Header.js
'use client';
import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PoolIcon from '@mui/icons-material/Pool';
import WavesIcon from '@mui/icons-material/Waves';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
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
  Tooltip,
  // useTheme,
  // useMediaQuery,
  Typography,
  ListItemIcon,
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = React.useMemo(
    () => [
      { label: 'Trang chủ', href: '#home', id: 'home', icon: <HomeIcon /> },
      {
        label: 'Về chúng tôi',
        href: '#about',
        id: 'about',
        icon: <InfoIcon />,
      },
      {
        label: 'Lớp học',
        href: '#classes',
        id: 'classes',
        icon: <SchoolIcon />,
      },
      {
        label: 'Dịch vụ',
        href: '#services',
        id: 'services',
        icon: <PoolIcon />,
      },
      {
        label: 'Quyền lợi',
        href: '#benefits',
        id: 'benefits',
        icon: <StarIcon />,
      },
      {
        label: 'Đội ngũ',
        href: '#trainers',
        id: 'trainers',
        icon: <PeopleIcon />,
      },
      {
        label: 'Đăng ký',
        href: '#register',
        id: 'register',
        icon: <AppRegistrationIcon />,
      },
      {
        label: 'Lịch hoạt động',
        href: '/schedule',
        id: 'schedule',
        isRoute: true,
        icon: <CalendarMonthIcon />,
      },
    ],
    [],
  );

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollLockRef = useRef(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleMenuItemClick = (item: {
    label: string;
    href: string;
    id: string;
    isRoute?: boolean;
  }) => {
    setActiveSection(item.id);
    scrollLockRef.current = true; // Khóa scroll update
    setTimeout(() => {
      scrollLockRef.current = false; // Mở lại sau 1s (hoặc 500ms)
    }, 1000);

    if (item.isRoute) {
      router.push(item.href);
    } else {
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
    console.log('activeSection changed:', activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockRef.current) return; // Nếu vừa click menu thì bỏ qua scroll update
      const currentScrollPos = window.pageYOffset;
      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos <= 100 ||
          currentScrollPos >= 400,
      );
      setPrevScrollPos(currentScrollPos);

      const sections = navItems
        .filter((item) => !item.isRoute)
        .map((item) => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        console.log('element:', element);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, navItems]);

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
    >
      <List sx={{ padding: 0 }}>
        <Box className="flex justify-center items-center py-4 bg-gradient-to-r from-blue-600 to-cyan-500">
          <Image
            src="/images/logoCLBboilan.png"
            alt="logo"
            width={120}
            height={120}
            className="drop-shadow-md"
          />
        </Box>
        {navItems.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              onClick={() => handleMenuItemClick(item)}
              className={`transition-all duration-300 ${activeSection === item.id ? 'bg-blue-700/50' : 'hover:bg-blue-600/30'}`}
            >
              <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    className="text-white font-medium"
                  >
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box className="absolute bottom-0 w-full p-4 bg-gradient-to-r from-blue-700 to-cyan-600">
        <Button
          variant="contained"
          fullWidth
          className="bg-white text-blue-600 hover:bg-blue-50 font-bold"
          sx={{
            borderRadius: '30px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            textTransform: 'none',
            py: 1.2,
          }}
          onClick={() =>
            window.open(
              'https://www.facebook.com/profile.php?id=100043515746559',
              '_blank',
            )
          }
          startIcon={<CallIcon />}
        >
          Liên hệ ngay
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className={`transition-all duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        elevation={4}
        sx={{
          background: 'linear-gradient(90deg, #0099ff 0%, #0073e6 100%)',
          height: '70px',
          boxShadow: '0 2px 10px rgba(0,105,225,0.2)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: 'space-between', height: '70px' }}
          >
            <Box className="flex items-center">
              <Box
                className="relative group cursor-pointer"
                onClick={() => handleMenuItemClick(navItems[0])}
              >
                <Image
                  src="/images/logoCLBboilan.png"
                  alt="logo"
                  width={120}
                  height={120}
                  className="transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
                />
                <WavesIcon
                  sx={{
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 18,
                    animation: 'wave 2s ease-in-out infinite',
                  }}
                />
                <style jsx global>{`
                  @keyframes wave {
                    0%,
                    100% {
                      transform: translateX(-50%) translateY(0);
                    }
                    50% {
                      transform: translateX(-50%) translateY(-5px);
                    }
                  }
                `}</style>
              </Box>
            </Box>

            {/* Nav items: hidden on screens <=1020px */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                '@media (max-width:1120px)': { display: 'none' },
              }}
            >
              {navItems.map((item, idx) => (
                <Tooltip key={idx} title={item.label} arrow placement="bottom">
                  <Button
                    onClick={() => handleMenuItemClick(item)}
                    className={`
                      px-3 mx-1 transition-all duration-300
                      ${
                        activeSection === item.id
                          ? 'bg-white/15 text-white font-medium scale-105'
                          : 'text-white/90 hover:bg-white/10'
                      }
                    `}
                    sx={{
                      color: '#fff',
                      textTransform: 'none',
                      borderRadius: '8px',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after':
                        activeSection === item.id
                          ? {
                              content: '""',
                              position: 'absolute',
                              bottom: 0,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '60%',
                              height: '3px',
                              backgroundColor: '#ffffff',
                              borderRadius: '3px 3px 0 0',
                            }
                          : {},
                    }}
                  >
                    {item.label}
                  </Button>
                </Tooltip>
              ))}
            </Box>

            <Box className="flex items-center">
              <Button
                variant="contained"
                className="hidden md:flex"
                sx={{
                  ml: { xs: 0, md: 2 },
                  backgroundColor: '#ffffff',
                  color: '#0073e6',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '30px',
                  px: 3,
                  py: 1,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  '&:hover': {
                    backgroundColor: '#f0f8ff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                  },
                  transition: 'all 0.3s ease',
                  '@media (max-width:1120px)': { display: 'none' },
                }}
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/profile.php?id=100043515746559',
                    '_blank',
                  )
                }
                startIcon={<CallIcon />}
              >
                Liên hệ ngay
              </Button>

              <IconButton
                sx={{
                  color: '#fff',
                  width: 45,
                  height: 45,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  marginLeft: 2,
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  },
                  display: { xs: 'inline-flex', md: 'none' },
                  '@media (max-width:1100px)': { display: 'inline-flex' },
                  '@media (min-width:1101px)': { display: 'none' },
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '@media (max-width:1020px)': { display: 'block' },
          '@media (min-width:1021px)': { display: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            boxShadow: '-5px 0 20px rgba(0,0,0,0.15)',
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Placeholder to prevent content from hiding under the fixed AppBar */}
      <Box sx={{ height: '70px' }} />

      {/* Floating action button for quick swimming registration - visible on scroll */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 999,
          opacity: !visible ? 1 : 0,
          transform: !visible ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.3s ease',
          pointerEvents: !visible ? 'auto' : 'none',
        }}
      >
        <Tooltip title="Đăng ký học bơi ngay!" placement="left" arrow>
          <Button
            variant="contained"
            onClick={() =>
              handleMenuItemClick(navItems.find((i) => i.id === 'register')!)
            }
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#0099ff',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0,120,255,0.5)',
              '&:hover': {
                backgroundColor: '#0084ff',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 16px rgba(0,120,255,0.6)',
              },
            }}
          >
            <PoolIcon fontSize="large" />
          </Button>
        </Tooltip>
      </Box>
    </>
  );
}
