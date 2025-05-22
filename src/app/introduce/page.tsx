/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Chip,
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  LinearProgress,
  Fade,
  Slide,
  Zoom,
} from '@mui/material';
import {
  EmojiEvents,
  School,
  Groups,
  Pool,
  Star,
  CheckCircle,
  Waves,
  Timer,
  Security,
  Favorite,
  People,
  AutoAwesome,
} from '@mui/icons-material';
import PoolIcon from '@mui/icons-material/Pool';
import {
  Users,
  Phone as PhoneIcon,
  ArrowRight as ArrowRightIcon,
} from 'lucide-react';

const SwimmingClubPage = () => {
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setStatsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      text: 'Hơn 10.000 học viên đã tốt nghiệp trong 8 mùa hè liên tiếp',
      icon: <People className="text-blue-500" />,
      count: 10000,
    },
    {
      text: 'Hơn 15.000 học viên hoàn thành chương trình đầu biết bơi',
      icon: <CheckCircle className="text-green-500" />,
      count: 15000,
    },
    {
      text: 'Đào tạo học sinh đạt giải cấp Quận, Thành phố và Toàn quốc',
      icon: <EmojiEvents className="text-yellow-500" />,
      count: 100,
    },
    {
      text: 'Được nhiều phụ huynh tin tưởng trong suốt 8 năm',
      icon: <Favorite className="text-red-500" />,
      count: 8,
    },
    {
      text: 'CLB đầu tiên tổ chức trải nghiệm bơi sông - hồ - biển',
      icon: <AutoAwesome className="text-purple-500" />,
      count: 1,
    },
  ];

  const facilities = [
    {
      text: 'Hệ thống bể bơi bốn mùa',
      icon: <PoolIcon className="text-blue-500" />,
    },
    {
      text: 'Chất lượng đạt chuẩn Bộ Y Tế',
      icon: <Security className="text-green-500" />,
    },
    {
      text: 'Nhiệt độ từ 30-31°C vào mùa đông',
      icon: <Timer className="text-orange-500" />,
    },
    {
      text: 'Các tiện ích chuyên nghiệp',
      icon: <Star className="text-yellow-500" />,
    },
  ];

  const stats = [
    {
      label: 'Học viên đã tốt nghiệp',
      value: 10000,
      suffix: '+',
      color: 'blue',
    },
    { label: 'Năm kinh nghiệm', value: 8, suffix: '+', color: 'green' },
    { label: 'Huy chương đạt được', value: 500, suffix: '+', color: 'yellow' },
    { label: 'Huấn luyện viên', value: 20, suffix: '+', color: 'purple' },
  ];

  const CountUp = ({
    end,
    duration = 2000,
    suffix = '',
  }: {
    end: number;
    duration?: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsVisible) return;

      let startTime: number | undefined;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, statsVisible]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  const FloatingElement = ({
    children,
    delay = 0,
  }: {
    children: React.ReactNode;
    delay?: number;
  }) => (
    <div
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite',
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-cyan-50 overflow-hidden">
      {/* Floating Water Drops Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-ping`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>

      {/* Hero Section với Wave Animation */}
      <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C300,120 600,0 900,50 C1050,80 1200,50 1200,50 L1200,120 L0,120 Z"
              fill="rgba(255,255,255,0.1)"
              className="animate-pulse"
            />
          </svg>
          <svg
            className="absolute bottom-0 w-full h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C400,100 800,20 1200,60 L1200,120 L0,120 Z"
              fill="rgba(255,255,255,0.05)"
              style={{
                animation: 'wave 6s ease-in-out infinite alternate',
              }}
            />
          </svg>
        </div>

        <Container maxWidth="lg" className="relative z-10">
          <Fade in={visible} timeout={1000}>
            <div className="text-center">
              <Slide direction="down" in={visible} timeout={800}>
                <Typography
                  variant="h2"
                  className="font-bold mb-4 animate-pulse"
                >
                  🏊‍♂️ CLB Bơi Lặn Thủ Đô 🏊‍♀️
                </Typography>
              </Slide>
              <Slide direction="up" in={visible} timeout={1000}>
                <Typography variant="h5" className="mb-6 opacity-90">
                  Nơi khởi nguồn đam mê bơi lội - Phát triển toàn diện &quot;Tâm
                  - Trí - Thể - Lực&quot;
                </Typography>
              </Slide>
              <Zoom in={visible} timeout={1200}>
                <div className="mt-8">
                  <Button
                    variant="contained"
                    size="large"
                    className="bg-main-gradient hover:bg-blue-900 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
                    startIcon={<Pool />}
                    href="https://forms.gle/AErv2dcfnJhaDaAs9"
                  >
                    🌊 Đăng Ký Ngay 🌊
                  </Button>
                </div>
              </Zoom>
            </div>
          </Fade>
        </Container>
      </div>

      {/* Stats Counter Section */}
      <Container maxWidth="lg" className="relative z-10 -mt-10 ">
        <Slide direction="up" in={statsVisible} timeout={800}>
          <Paper className="p-6 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-sm">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:scale-105 transition-transform duration-300">
                    <Typography
                      variant="h3"
                      className={`font-bold text-${stat.color}-600 mb-2`}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 font-medium"
                    >
                      {stat.label}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Slide>
      </Container>

      <Container maxWidth="lg" className="py-12 relative z-10">
        {/* Director Section với Animation */}
        <Fade in={visible} timeout={1500}>
          <Card className="mb-12 shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
              <Typography
                variant="h4"
                className="text-white font-bold text-center relative z-10"
              >
                🏆 Thông Tin Chủ Nhiệm CLB 🏆
              </Typography>
            </div>
            <CardContent className="p-8">
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Zoom in={visible} timeout={1500}>
                    <div className="text-center">
                      <div className="relative">
                        <Avatar
                          src="/images/trainners/hlv.jpg"
                          alt="Chủ nhiệm CLB"
                          className="!w-48 !h-48 mx-auto mb-4 shadow-2xl ring-4 ring-blue-200 hover:ring-blue-400 transition-all duration-300"
                        />
                        <div className="absolute -top-2 -right-2">
                          <FloatingElement delay={0}>
                            <EmojiEvents className="text-yellow-500 text-3xl" />
                          </FloatingElement>
                        </div>
                      </div>
                      <div className="flex justify-center gap-2 flex-wrap">
                        <Chip
                          label="🥇 Cựu VĐV Quốc Gia"
                          color="primary"
                          icon={<EmojiEvents />}
                          className="font-semibold animate-pulse"
                        />
                        <Chip
                          label="📚 Huấn Luyện Viên"
                          color="success"
                          icon={<School />}
                          className="font-semibold animate-pulse"
                        />
                      </div>
                    </div>
                  </Zoom>
                </Grid>
                <Grid item xs={12} md={8}>
                  <List className="space-y-3">
                    {[
                      {
                        icon: <EmojiEvents className="text-yellow-500" />,
                        primary: '🏅 Cựu vận động viên đội tuyển Quốc gia',
                        secondary:
                          'Sở hữu nhiều huy chương các loại trong sự nghiệp thi đấu',
                        bg: 'bg-yellow-50',
                      },
                      {
                        icon: <School className="text-green-500" />,
                        primary:
                          '🎓 Bằng kiện tướng bơi lội cấp Quốc gia, Quốc tế',
                        secondary:
                          'Chứng chỉ trọng tài quốc tế do Liên đoàn, Tổng cục TDTT cấp',
                        bg: 'bg-green-50',
                      },
                      {
                        icon: <Groups className="text-purple-500" />,
                        primary: '👥 Đào tạo hơn 1.200 học sinh mỗi năm',
                        secondary:
                          'Trên toàn địa bàn Hà Nội với nhiều học viên đạt huy chương các cấp',
                        bg: 'bg-purple-50',
                      },
                      {
                        icon: <Waves className="text-cyan-500" />,
                        primary: '🌊 Tiên phong tổ chức bơi ngoại khóa',
                        secondary:
                          'Tại sông, hồ, biển giúp nâng cao kỹ năng phòng tránh đuối nước',
                        bg: 'bg-cyan-50',
                      },
                    ].map((item, index) => (
                      <Slide
                        direction="right"
                        in={visible}
                        timeout={1000 + index * 200}
                        key={index}
                      >
                        <ListItem
                          className={`${item.bg} rounded-lg hover:scale-102 transition-all duration-300 hover:shadow-md`}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText
                            primary={item.primary}
                            secondary={item.secondary}
                            primaryTypographyProps={{ fontWeight: 'bold' }}
                          />
                        </ListItem>
                      </Slide>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Fade>

        {/* Club Introduction với Parallax Effect */}
        <Fade in={visible} timeout={2000}>
          <Card className="mb-12 shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-600 p-6">
              <Typography
                variant="h4"
                className="text-white font-bold text-center"
              >
                🏊‍♂️ Giới Thiệu CLB Bơi Lặn Thủ Đô 🏊‍♀️
              </Typography>
            </div>
            <CardContent className="p-8">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Zoom in={visible} timeout={2000}>
                    <div className="relative group">
                      <img
                        src="/images/banner/P1377347.jpg"
                        alt="CLB Bơi Lặn Thủ Đô"
                        className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <Typography variant="h6" className="font-bold">
                          🏊‍♀️ Bể bơi hiện đại
                        </Typography>
                      </div>
                    </div>
                  </Zoom>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Slide direction="left" in={visible} timeout={2200}>
                    <div>
                      <Typography
                        variant="h6"
                        className="mb-4 text-gray-800 leading-relaxed"
                      >
                        🌟 CLB Bơi Lặn Thủ Đô là một môi trường học tập và rèn
                        luyện chuyên nghiệp dành cho trẻ em và thanh thiếu niên
                        yêu thích bộ môn bơi lội.
                      </Typography>
                      <Typography
                        variant="body1"
                        className="mb-4 text-gray-700 leading-relaxed"
                      >
                        💪 Với định hướng{' '}
                        <strong>&quot;Tâm - Trí - Thể - Lực&quot;</strong>, CLB
                        không chỉ dạy bơi an toàn mà còn chú trọng phát triển
                        thể lực, tinh thần kỷ luật và sự tự tin cho mỗi học
                        viên.
                      </Typography>
                      <Typography
                        variant="body1"
                        className="text-gray-700 leading-relaxed"
                      >
                        🏅 Hoạt động tại chuỗi bể bơi hàng đầu Hà Nội, đảm bảo
                        an toàn sức khỏe của học viên với đội ngũ huấn luyện
                        viên có chuyên môn cao, giàu kinh nghiệm.
                      </Typography>
                    </div>
                  </Slide>
                </Grid>
              </Grid>

              <Divider className="my-8" />

              <Slide direction="up" in={visible} timeout={2500}>
                <div>
                  <Typography
                    variant="h5"
                    className="mb-6 text-center font-bold text-gray-800"
                  >
                    🏊‍♂️ Tiện Ích Chuyên Nghiệp 🏊‍♀️
                  </Typography>
                  <Grid container spacing={3}>
                    {facilities.map((facility, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Zoom in={visible} timeout={2500 + index * 100}>
                          <Paper className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <div className="flex items-center">
                              <div className="mr-3 animate-pulse">
                                {facility.icon}
                              </div>
                              <Typography
                                variant="body1"
                                className="font-medium"
                              >
                                {facility.text}
                              </Typography>
                            </div>
                          </Paper>
                        </Zoom>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </Slide>
            </CardContent>
          </Card>
        </Fade>

        {/* Achievements Section với Stagger Animation */}
        <Fade in={visible} timeout={3000}>
          <Card className="shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 p-6">
              <Typography
                variant="h4"
                className="text-white font-bold text-center"
              >
                ⭐ Điểm Nổi Bật ⭐
              </Typography>
            </div>
            <CardContent className="p-8">
              <Grid container spacing={4}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Slide
                      direction={index % 2 === 0 ? 'right' : 'left'}
                      in={visible}
                      timeout={3000 + index * 200}
                    >
                      <Paper className="p-6 h-full bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 flex-shrink-0 group-hover:animate-spin">
                            {achievement.icon}
                          </div>
                          <Typography
                            variant="body1"
                            className="font-medium text-gray-800 leading-relaxed group-hover:text-blue-600 transition-colors duration-300"
                          >
                            {achievement.text}
                          </Typography>
                        </div>
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          className="mt-3 rounded-full"
                          sx={{
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: '#f97316',
                            },
                          }}
                        />
                      </Paper>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Fade>

        {/* Call to Action với Floating Animation */}
        <Fade in={visible} timeout={3500}>
          <div className="text-center mt-12">
            <Paper className="p-8 !bg-gradient-to-r from-blue-700 to-blue-900 !rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Floating Bubbles */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-white/20 rounded-full animate-ping"
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${20 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '3s',
                    }}
                  />
                ))}
              </div>

              <div className="p-8 md:p-10 text-center">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Đăng Ký Học Thử Miễn Phí Ngay Hôm Nay!
                  </h3>
                  <p className="text-blue-100 mb-8">
                    Cho con trải nghiệm ngay buổi học đầu tiên cùng đội ngũ HLV
                    chuyên nghiệp tại CLB Bơi Thủ Đô
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfd6QDKqJPiWCN_rg1WE3GMbBIAvYTgYKJRIWAfia4s_SAY6Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <span className="mr-2">ĐĂNG KÝ HỌC THỬ NGAY</span>
                      <ArrowRightIcon size={20} />
                    </a>

                    <a
                      href="tel:0368123456"
                      className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-800 font-medium py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                    >
                      <PhoneIcon size={18} className="mr-2" />
                      <span>Hotline: 0968 156 663</span>
                    </a>
                  </div>

                  <div className="mt-8 flex items-center justify-center">
                    <Users size={18} className="text-blue-300 mr-2" />
                    <span className="text-blue-100 text-sm">
                      Đã có hơn 15,000 học viên đăng ký thành công
                    </span>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </Fade>
      </Container>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(100px);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default SwimmingClubPage;
