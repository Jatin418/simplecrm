import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import InputBase from '@mui/material/InputBase';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Grid, Avatar, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Dashboard from '../Dashboard/Dashboard';
import { fontSize } from '@mui/system';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TaskIcon from '@mui/icons-material/Task';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import ForumIcon from '@mui/icons-material/Forum';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CampaignIcon from '@mui/icons-material/Campaign';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import userImg from "../Images/mario.png"
import AccRegister from '../Account/AccRegister';
 


// This is for the Header

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: "white",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


// THis is for the Drawer

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: "#283D51",
  color: "white"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
  backgroundColor: "#283D51",

});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({

  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: "white",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && { 
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  // This is for the Header

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <SettingsIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )



  // This is for the drawer 
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [sale, setSale] = React.useState(true);
  const [market, setMarket] = React.useState(true);
  const [history, setHistory] = React.useState(true);

  const handleClick = () => {
    setSale(!sale);
  };
  const handleClickmar = () => {
    setMarket(!market);
  };
  const handleClickHis = () => {
    setHistory(!history);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const imglogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJiCtmlVyacWTUQ59OGMdqF623OjKwoTRzDRPxVSDEoZzqv4N-b1sxUPl9XjkI5oC48g&usqp=CAU"
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton

            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <img src={imglogo} alt="logo img" style={{ width: "50px", height: "40px", marginLeft: "-12px" }} />
          </IconButton>

          <Search sx={{ border: "1px solid black", color: "#415A71" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack>
              <Avatar
                alt="Remy Sharp"
                src={userImg}
                sx={{ width: 50, height: 50, marginTop:"7px",border:"1px solid gray" }}
                
              />
            </Stack>
            <IconButton size="large" aria-label="Open Setting">
              <Badge color="error">
                <SettingsIcon sx={{ color: "#415A71" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon sx={{ color: "#415A71" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "#415A71" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="Log Out"
              color="inherit"
            >
              <Badge color="error">
                <LogoutIcon sx={{ color: "#415A71" }} />
              </Badge>
            </IconButton>
            {/* 
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu Id"
              aria-haspopup="true"
              onClick="Show help page"
              color="inherit"
            >
              <AccountCircle sx={{ color: "#415A71" }} />
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="HELP"
              aria-controls="menu Id"
              aria-haspopup="true"
              onClick="Show help page"
            >
              <Grid mr={"-40px"} ml={"30px"} >
                <Typography sx={{ color: "white", backgroundColor: "#39f", padding: "8px", paddingLeft: "35px", paddingRight: "45px" }} borderRadius={6}> {`Help`}</Typography>
              </Grid></IconButton>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem disablePadding sx={{ display: 'block' }}>

            <ListItemButton
              sx={{
                color: "#a3c2e1",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#a3c2e1',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardIcon />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
            to="/Account"
              sx={{
                color: "#a3c2e1",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#a3c2e1',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AccountBalanceIcon />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary="Account" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                color: "#a3c2e1",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#a3c2e1',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Diversity3Icon />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary="Contacts" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                color: "#a3c2e1",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#a3c2e1',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <TaskIcon />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary="Tasks" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                color: "#a3c2e1",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#a3c2e1',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CalendarMonthIcon />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary="Calendar" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                color: "#a3c2e1",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#a3c2e1',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SummarizeIcon />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          {/* This is for Sales */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{ color: "#a3c2e1" }}>
              <TrendingUpTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" sx={{ color: "#9ec7ef" }} />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            {sale ? <Typography sx={{ fontSize: "12px" }}>Hide</Typography> : <Typography sx={{ fontSize: "12px" }}>Show</Typography>}
          </ListItemButton>
          <Collapse in={sale} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton >
                <ListItemIcon sx={{ color: "#a3c2e1" }}>
                  <ForumIcon />
                </ListItemIcon >
                <ListItemText primary="Activities" sx={{ color: "#a3c2e1" }} />
              </ListItemButton>

              <ListItemButton >
                <ListItemIcon sx={{ color: "#a3c2e1" }}>
                  <TipsAndUpdatesTwoToneIcon />
                </ListItemIcon >
                <ListItemText primary="Opportunities" sx={{ color: "#a3c2e1" }} />
              </ListItemButton>

              <ListItemButton >
                <ListItemIcon sx={{ color: "#a3c2e1" }}>
                  <RequestQuoteIcon />
                </ListItemIcon >
                <ListItemText primary="Quotations" sx={{ color: "#a3c2e1" }} />
              </ListItemButton>
            </List>
          </Collapse>
          {/* This is for the MARKETING  */}
          <ListItemButton onClick={handleClickmar}>
            <ListItemIcon sx={{ color: "#a3c2e1" }}>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="Marketing" sx={{ color: "#9ec7ef" }} />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            {market ? <Typography sx={{ fontSize: "12px" }}>Hide</Typography> : <Typography sx={{ fontSize: "12px" }}>Show</Typography>}
          </ListItemButton>
          <Collapse in={market} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton >
                <ListItemIcon sx={{ color: "#a3c2e1" }}>
                  <StarBorder />
                </ListItemIcon >
                <ListItemText primary="Campaigns" sx={{ color: "#a3c2e1" }} />
              </ListItemButton>

              <ListItemButton >
                <ListItemIcon sx={{ color: "#a3c2e1" }}>
                  <FormatListBulletedIcon />
                </ListItemIcon >
                <ListItemText primary="List" sx={{ color: "#a3c2e1" }} />
              </ListItemButton>
            </List>
          </Collapse>

          {/* This is for the hisstory */}
          <ListItemButton onClick={handleClickHis}>
            <ListItemIcon sx={{ color: "#a3c2e1" }}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" sx={{ color: "#9ec7ef" }} />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            {history ? <Typography sx={{ fontSize: "12px" }}>Hide</Typography> : <Typography sx={{ fontSize: "12px" }}>Show</Typography>}
          </ListItemButton>
          <Collapse in={history} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton >
                <ListItemIcon sx={{ color: "#a3c2e1" }}>
                  <StarBorder />
                </ListItemIcon >
                <ListItemText primary=" History" sx={{ color: "#a3c2e1" }} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        {/* <DrawerHeader /> */}
        {/* <Dashboard /> */}
        {/* <AccRegister/> */}
        
      </Box>
    </Box>
  );
}
