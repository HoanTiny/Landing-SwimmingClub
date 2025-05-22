/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { navItems } from 'src/contants';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CallIcon from '@mui/icons-material/Call';

type MenuMobileProps = {
  handleMenuItemClick: (item: any) => void;
  activeSection: string;
  setMobileOpen: (open: boolean) => void;
  setMobileSubmenuOpenId: (id: string | null) => void;
  mobileSubmenuOpenId: string | null;
};

function MenuMobile({
  handleMenuItemClick,
  activeSection,
  setMobileOpen,
  setMobileSubmenuOpenId,
  mobileSubmenuOpenId,
}: MenuMobileProps) {
  return (
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
        {navItems.map((item, idx) =>
          item.children ? (
            <Box key={idx}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() =>
                    setMobileSubmenuOpenId(
                      mobileSubmenuOpenId === item.id ? null : item.id,
                    )
                  }
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-700/50'
                      : 'hover:bg-blue-600/30'
                  }`}
                >
                  <ListItemIcon className="text-white">
                    {item.icon && <item.icon />}
                  </ListItemIcon>
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
                  <ArrowDropDownIcon
                    sx={{
                      color: 'white',
                      transform:
                        mobileSubmenuOpenId === item.id
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {/* Submenu mobile */}
              {mobileSubmenuOpenId === item.id &&
                item.children.map((child) => (
                  <ListItem
                    key={child.id}
                    disablePadding
                    sx={{ pl: 4, background: '#e3f2fd' }}
                  >
                    <ListItemButton
                      onClick={() => {
                        handleMenuItemClick(child);
                        setMobileOpen(false);
                        setMobileSubmenuOpenId(null);
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            className="text-blue-700 font-medium"
                          >
                            {child.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
            </Box>
          ) : (
            <ListItem key={idx} disablePadding>
              <ListItemButton
                onClick={() => handleMenuItemClick(item)}
                className={`transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-700/50'
                    : 'hover:bg-blue-600/30'
                }`}
              >
                <ListItemIcon className="text-white">
                  {item.icon && <item.icon />}
                </ListItemIcon>
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
          ),
        )}
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
}

export default MenuMobile;
