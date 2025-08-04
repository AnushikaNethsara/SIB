'use client';
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import logoIcon from '../../public/logo.png';
import homeIcon from '../../public/home.png';
import profileIcon from '../../public/profile.png';
import documentIcon from '../../public/document.png';
import deliveryIcon from '../../public/delivery.png';
import packageIcon from '../../public/package.png';
import storeIcon from '../../public/store.png';
import graphIcon from '../../public/graph.png';
import settingsIcon from '../../public/settings.png';
import suppportIcon from '../../public/suppport.png';
import logoutIcon from '../../public/logout.png';
import profileSettingsIcon from '../../public/profile-settings.png';
import profilePicIcon from '../../public/profile-pic.png';

import NavBar from './components/navbar';
import HorizontalLinearStepper from './components/steps';
import ProfileCard from './components/profileCard';
import InfoCard from './components/InfoCard';
import CostSummaryCard from './components/CostSummaryCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Grid, TextField, Typography } from '@mui/material';
import ShippingCard from './components/shippingCard';

const drawerWidth = 240;

const menuItems = [
  { label: 'Home', icon: homeIcon },
  { label: 'Users', icon: profileIcon },
  { label: 'Documents', icon: documentIcon },
  { label: 'Packages', icon: packageIcon },
  { label: 'Delivery', icon: deliveryIcon },
  { label: 'Store', icon: storeIcon },
  { label: 'Graphs', icon: graphIcon },
  { label: 'Delivery Settings', icon: settingsIcon },
  { label: 'Support', icon: suppportIcon },
];

const bottomMenuItems = [
  {
    label: 'Profile',
    icon: profilePicIcon,
  },
  {
    label: 'settings',
    icon: profileSettingsIcon,
  },
  {
    label: 'Logout',
    icon: logoutIcon,
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#0057B8',
            borderRight: 'none',
            boxShadow: 'none',
          },
        }}
      >
        <DrawerHeader
          sx={{ bgcolor: '#fff' }}
        >
          {!open ? (
            <IconButton onClick={handleDrawerOpen}>
              {/* <MenuIcon /> */}
              <Image
                alt='logo'
                src={logoIcon}
                width={28}
                height={28}
              />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ label, icon }, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  <Image
                    src={icon}
                    alt={label}
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                        color: '#fff',
                      }
                      : {
                        opacity: 0,
                        color: '#fff',
                      },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            bgcolor: '#0057B8', // match drawer bg
          }}
        >
          <List>
            {bottomMenuItems.map(({ label, icon }, index) => (
              <ListItem key={label} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      color: '#fff',
                    },
                    open
                      ? { justifyContent: 'initial' }
                      : { justifyContent: 'center' },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        color: '#fff',
                      },
                      open
                        ? { mr: 3 }
                        : { mr: 'auto' },
                    ]}
                  >
                    <Image
                      src={icon}
                      alt={label}
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={[
                      open
                        ? { opacity: 1 }
                        : { opacity: 0 },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#E5E5E5', width: '100%' }}>
        <NavBar />
        <Box component="main" sx={{ padding: 5, width: '100%' }}>
          <HorizontalLinearStepper />
          <ProfileCard />
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Shipping Method
            </Typography>
          </Box>

          {/* Info Cards Full Width */}
          <Box sx={{ width: '100%', my: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InfoCard />
              </Grid>
              <Grid item xs={12} md={6}>
                <ShippingCard />
              </Grid>
            </Grid>
          </Box>

          {/* TextArea & CostSummaryCard Side by Side */}
          <Box sx={{ width: '100%', display: 'flex', my: 5 }}>
            {/* Left Side - TextArea (60%) */}
            <Box sx={{ flex: 4 }}>
              <TextField
                label="Add Details"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: 'white', borderRadius: '8px', }}
              />
            </Box>

            {/* Right Side - CostSummaryCard (40%) */}
            <Box sx={{ flex: 6 }}>
              <CostSummaryCard />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{ borderRadius: '100px' }}
            >
              Back
            </Button>
            <Button variant="contained" color="secondary" sx={{ borderRadius: '100px', backgroundColor: '#0057B8' }}>Save for Later</Button>
            <Button variant="outlined" sx={{ borderRadius: '100px' }}>Create Shipment</Button>
          </Box>
        </Box>
      </Box>


    </Box>
  );
}
