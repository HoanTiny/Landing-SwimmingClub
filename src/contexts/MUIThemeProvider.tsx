// 'use client'; // Nếu bạn đang dùng Client Component

// import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../configs/muiConfigs';

// const MUIThemeProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// };

// export default MUIThemeProvider;

'use client'; // Nếu bạn đang dùng Client Component

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../configs/muiConfigs';

const MUIThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
