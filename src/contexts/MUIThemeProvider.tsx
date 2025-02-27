'use client'; // Nếu bạn đang dùng Client Component

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../configs/muiConfigs';
export default function MUIThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
