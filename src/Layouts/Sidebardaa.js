// import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Paper from "@mui/material/Paper"
// import ListItem from '@mui/material/ListItem';
// // import Box from '@mui/material/Box';
// // import Link from '@mui/material/Link';


// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import TaskIcon from '@mui/icons-material/Task';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import SummarizeIcon from '@mui/icons-material/Summarize';

// const MainListItems = ({ props }) => {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleClickBc = (event) => {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }

//   const ListButton = {

//     color: "#a3c2e1",
//     minHeight: 48,
//     justifyContent: open ? 'initial' : 'center',
//     px: 2.5,

//   }
//   const ItemIcon = {
//     color: '#a3c2e1',
//     minWidth: 0,
//     mr: open ? 3 : 'auto',
//     justifyContent: 'center',
//   }


//   return (

//     <Paper  >
//       {/* <div  role="presentation" onClick={handleClickBc} > */}
//       {/* <Breadcrumbs maxItems={2} aria-label="breadcrumb"> */}
//       <List >
//         <ListItem disablePadding sx={{ display: 'block' }}>
//           {/* <Link to="" style={Mystyle} > */}
//           <ListItemButton
//             style={ListButton}
//           >
//             <ListItemIcon style={ItemIcon}>
//               <DashboardIcon />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard"  />
//           </ListItemButton>
//           {/* </Link> */}
//           {/* <Link to="" style={Mystyle} > */}
//           <ListItemButton
//             style={ListButton}
//           >
//             <ListItemIcon style={ItemIcon}>
//               <AccountBalanceIcon />
//             </ListItemIcon>
//             <ListItemText primary="Account" />
//           </ListItemButton>
//           {/* </Link> */}
//           {/* <Link to="" style={Mystyle} > */}
//           <ListItemButton
//             style={ListButton}
//           >
//             <ListItemIcon style={ItemIcon}>
//               <ContactsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Contact" />
//           </ListItemButton>
//           {/* </Link> */}
//           {/* <Link to="" style={Mystyle} > */}
//           <ListItemButton
//             style={ListButton}
//           >
//             <ListItemIcon style={ItemIcon}>
//               <TaskIcon />
//             </ListItemIcon>
//             <ListItemText primary="Task" />
//           </ListItemButton>
//           {/* </Link> */}
//           {/* <Link to="" style={Mystyle} > */}
//           <ListItemButton
//             style={ListButton}
//           >
//             <ListItemIcon style={ItemIcon}>
//               <CalendarMonthIcon />
//             </ListItemIcon>
//             <ListItemText primary="Calendar" />
//           </ListItemButton>
//           {/* </Link> */}
//           {/* <Link to="" style={Mystyle} > */}
//           <ListItemButton
//             style={ListButton}
//           >
//             <ListItemIcon style={ItemIcon}>
//               <SummarizeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Reports" />
//           </ListItemButton>
//           {/* </Link> */}



//           {/* <ListItemButton onClick={handleClick}>
//           <ListItemIcon>
//             <ManageAccountsTwoToneIcon style={Mylogo} />
//           </ListItemIcon>
//           <ListItemText primary="Management" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton> * /}

// {/* <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <Link to="bedallot" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <StarBorder style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Bed Allotment" />
//               </ListItemButton>
//             </Link>
//             <Link to="bloodbnk" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <BloodtypeTwoToneIcon style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Blood Bank" />
//               </ListItemButton>
//             </Link>
//             <Link to="operation" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <AirlineSeatIndividualSuiteTwoToneIcon style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Operation Details" />
//               </ListItemButton>
//             </Link>
//             <Link to="birth" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <PregnantWomanTwoToneIcon style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Birth Details" />
//               </ListItemButton>
//             </Link>
//             <Link to="death" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <AccountCircleTwoToneIcon style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Death Details" />
//               </ListItemButton>
//             </Link>
//           </List>
//         </Collapse> */}


//           {/* <ListItemButton onClick={handleClick}>
//           <ListItemIcon>
//             <PaymentTwoToneIcon style={Mylogo} />
//           </ListItemIcon>
//           <ListItemText primary="Payment" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton> */}

//           {/* <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <Link to="Team" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <DescriptionTwoToneIcon style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Create Payroll" />
//               </ListItemButton>
//             </Link>
//             <Link to="Team" style={Mystyle}>
//               <ListItemButton sx={{ pl: 2 }}>
//                 <ListItemIcon>
//                   <CreditCardTwoToneIcon style={Mylogo} />
//                 </ListItemIcon>
//                 <ListItemText primary="Payroll" />
//               </ListItemButton>
//             </Link>
//           </List>
//         </Collapse> */}
//         </ListItem>
//       </List >
//       {/* </Breadcrumbs> */}
//       {/* </div> */}
//     </Paper >

//   );
// }

// export default MainListItems;


















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
import Typography from '@mui/material/Typography';
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

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContactsIcon from '@mui/icons-material/Contacts';
import TaskIcon from '@mui/icons-material/Task';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SummarizeIcon from '@mui/icons-material/Summarize';







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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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



const Sidebardaa = (open) => {


  const theme = useTheme();
   const [opend, setOpened] = React.useState(false);
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
    setOpened(true);
  };

  const handleDrawerClose = () => {
    setOpened(false);
  };

  const ListIcon = {
    color: '#a3c2e1',
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
  }

  const ListButt = {
    color: "#a3c2e1",
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
  }

  return (
    <>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem disablePadding sx={{ display: 'block' }}>

            <ListItemButton style={ListButt}>
              <ListItemIcon style={ListIcon}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton style={ListButt}>
              <ListItemIcon style={ListIcon}>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Account" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton style={ListButt}>
              <ListItemIcon style={ListIcon}>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton style={ListButt}>
              <ListItemIcon style={ListIcon}>
                <TaskIcon />
              </ListItemIcon>
              <ListItemText primary="Task" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton style={ListButt}>
              <ListItemIcon style={ListIcon}>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calender" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton style={ListButt}>
              <ListItemIcon style={ListIcon}>
                <SummarizeIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            {/* This is for Sales */}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon sx={{ color: "#a3c2e1" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" sx={{ color: "#9ec7ef" }} />
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
              {sale ? <Typography sx={{ fontSize: "12px" }}>Hide</Typography> : <Typography sx={{ fontSize: "12px" }}>Show</Typography>}
            </ListItemButton>
            <Collapse in={sale} timeout="auto" unmountOnExit>

              <List component="div" disablePadding>
                <ListItemButton >
                  <ListItemIcon sx={{ color: "#a3c2e1" }}>
                    <StarBorder />
                  </ListItemIcon >
                  <ListItemText primary="Activities" sx={{ color: "#a3c2e1" }} />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon sx={{ color: "#a3c2e1" }}>
                    <StarBorder />
                  </ListItemIcon >
                  <ListItemText primary="Opportunities" sx={{ color: "#a3c2e1" }} />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon sx={{ color: "#a3c2e1" }}>
                    <StarBorder />
                  </ListItemIcon >
                  <ListItemText primary="Quotations" sx={{ color: "#a3c2e1" }} />
                </ListItemButton>
                
              </List>


            </Collapse>
            {/* This is for the MARKETING  */}
            <ListItemButton onClick={handleClickmar}>
              <ListItemIcon sx={{ color: "#a3c2e1" }}>
                <InboxIcon />
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
                    <ListItemText primary="Campaign" sx={{ color: "#a3c2e1" }} />
                  </ListItemButton>
                  <ListItemButton >
                    <ListItemIcon sx={{ color: "#a3c2e1" }}>
                      <StarBorder />
                    </ListItemIcon >
                    <ListItemText primary="Lists" sx={{ color: "#a3c2e1" }} />
                  </ListItemButton>
                </List>

            </Collapse>

            {/* This is for the hisstory */}
            <ListItemButton onClick={handleClickHis}>
              <ListItemIcon sx={{ color: "#a3c2e1" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="History" sx={{ color: "#9ec7ef" }} />
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
              {history ? <Typography sx={{ fontSize: "12px" }}>Hide</Typography> : <Typography sx={{ fontSize: "12px" }}>Show</Typography>}
            </ListItemButton>
            <Collapse in={history} timeout="auto" unmountOnExit>
              {['Campaigns', "ind"].map((text, ind) => (
                <List component="div" disablePadding>
                  <ListItemButton >
                    <ListItemIcon sx={{ color: "#a3c2e1" }}>
                      <StarBorder />
                    </ListItemIcon >
                    <ListItemText primary={text} sx={{ color: "#a3c2e1" }} />
                  </ListItemButton>
                </List>
              ))}

            </Collapse>
          </ListItem>
        </List>
      </Drawer>s
    </>
  )
}

export default Sidebardaa



