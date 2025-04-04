'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
} from '@mui/material';
import Section from '../section';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: 'cs1',
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const locations = [
    {
      id: 'cs1',
      label: 'Cơ sở 1',
      address: '234 Hoàng Quốc Việt, Cầu Giấy, Hà Nội',
    },
    {
      id: 'cs2',
      label: 'Cơ sở 2',
      address: '109 Nguyễn Tuân, Thanh Xuân, Hà Nội',
    },
    {
      id: 'cs3',
      label: 'Cơ sở 3',
      address: '83 Vũ Trọng Phụng, Thanh Xuân, Hà Nội',
    },
    {
      id: 'cs4',
      label: 'Cơ sở 4',
      address: '33 Mạc Thái Tổ, Yên Hòa, Cầu Giấy, Hà Nội',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Đã xảy ra lỗi');
      }

      // Clear form after successful submission
      setFormData({
        name: '',
        phone: '',
        service: '',
        location: 'cs1',
      });

      setSnackbar({
        open: true,
        message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.',
        severity: 'success',
      });
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({
        open: true,
        message:
          error instanceof Error ? error.message : 'Đã xảy ra lỗi khi đăng ký',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
      id="register"
    >
      <Section>
        <Card className="w-full max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg">
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="text-blue-800 font-bold"
            >
              Đăng ký nhận ngay ưu đãi!
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              className="mt-4 space-y-4"
            >
              {/* Chọn cơ sở */}
              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  name="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                >
                  {locations.map((loc) => (
                    <FormControlLabel
                      key={loc.id}
                      value={loc.id}
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography
                            variant="subtitle1"
                            component="span"
                            className="font-bold"
                          >
                            {loc.label}:
                          </Typography>{' '}
                          <Typography
                            variant="body2"
                            component="span"
                            className="font-light"
                          >
                            {loc.address}
                          </Typography>
                        </Box>
                      }
                      className="p-2 hover:bg-blue-800 hover:text-white rounded-lg"
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* Nhập thông tin */}
              <TextField
                label="Tên người đăng ký"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Số điện thoại"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <TextField
                label="Chọn dịch vụ bạn muốn sử dụng"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                name="service"
                value={formData.service}
                onChange={handleChange}
              />

              {/* Nút đăng ký */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 font-bold py-3 rounded-lg"
              >
                {loading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ NGAY'}
              </Button>
            </Box>

            {/* Mạng xã hội */}
            <Box className="mt-6 flex justify-center gap-4">
              <Typography
                component="a"
                href="#"
                className="flex items-center gap-2 text-blue-800 hover:text-blue-600"
              >
                📞 Hotline: 0968156663
              </Typography>
              <Typography
                component="a"
                href="https://www.facebook.com/profile.php?id=100043515746559"
                target="_blank"
                className="text-blue-800 hover:text-blue-600"
              >
                🔵 Facebook
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Section>

      {/* Success/Error notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterForm;
