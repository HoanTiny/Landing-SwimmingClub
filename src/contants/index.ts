import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import PoolIcon from '@mui/icons-material/Pool';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const navItems = [
  { label: 'Trang chủ', href: '#home', id: 'home', icon: HomeIcon },
  {
    label: 'Về chúng tôi',
    href: '#about',
    id: 'about',
    icon: InfoIcon,
    children: [
      {
        label: 'Giới thiệu CLB',
        href: '/introduce',
        id: 'introduce',
        isRoute: true,
      },
      {
        label: 'Chương trình học',
        href: '/curriculum',
        id: 'curriculum',
        isRoute: true,
      },
      {
        label: 'Lịch hoạt động',
        href: '/schedule',
        id: 'schedule',
        isRoute: true,
        icon: CalendarMonthIcon,
      },
    ],
  },
  {
    label: 'Lớp học',
    href: '#classes',
    id: 'classes',
    icon: SchoolIcon,
    isRoute: false,
  },
  {
    label: 'Dịch vụ',
    href: '#services',
    id: 'services',
    icon: PoolIcon,
    isRoute: false,
  },
  {
    label: 'Quyền lợi',
    href: '#benefits',
    id: 'benefits',
    icon: StarIcon,
    isRoute: false,
  },
  {
    label: 'Đội ngũ',
    href: '#trainers',
    id: 'trainers',
    icon: PeopleIcon,
    isRoute: false,
  },
  {
    label: 'Cơ sở',
    href: '#register',
    id: 'register',
    icon: AppRegistrationIcon,
    isRoute: false,
  },
  // {
  //   label: 'Lịch hoạt động',
  //   href: '/schedule',
  //   id: 'schedule',
  //   isRoute: true,
  //   icon: CalendarMonthIcon,
  // },
];
