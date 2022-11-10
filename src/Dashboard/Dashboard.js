import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Mytask from '../MyTask/Mytask';
import Chartfunnel from '../FunnelChart/Chartfunnel';
import Introvideo from '../Introduction/Introvideo';
import Tabledas from '../Tabledashboard/Tabledas';
import Piechartdata from '../PieChart/Piechartdata';
import Piecharttwo from '../PieChart/Piecharttwo';
import PiechartThree from '../PieChart/PiechartThree';
import AccountUserprog from '../Progressbar/AccountUserprog';

const Dashboard = () => {
  const [spacing, setSpacing] = React.useState(0.5);
  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={4} mt={2}>
            <Introvideo/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} mt={2}>
            <Chartfunnel/>
          </Grid>
          
          <Grid item xs={12} sm={8} md={4} mt={2}>
            <Mytask/>
          </Grid>

        </Grid>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={8} md={8} mt={2}>
           <Tabledas/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} mt={2}>
           <AccountUserprog/>
          </Grid>

        </Grid>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={4} md={4} mt={2}>
           <Piechartdata/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} mt={2}>
           <Piecharttwo/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} mt={2}>
           <PiechartThree/>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default Dashboard;