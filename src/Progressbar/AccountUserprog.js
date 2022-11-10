import React, { useState } from 'react'
import { Grid, Typography, Divider } from '@mui/material'
import { theme } from "../theme"
import ProgressBar from './Barprog'

const AccountUserprog = () => {

  const testData = [
    { bgcolor: "#39f", completed: 40, label:` of 5000 ` },
    // { bgcolor: "#00695c", completed: 30 },
    // { bgcolor: "#ef6c00", completed: 53 },
  ];
  const userData = [
    { bgcolor: "#39f", completed: 60, label:` of 100 ` },
    // { bgcolor: "#00695c", completed: 30 },
    // { bgcolor: "#ef6c00", completed: 53 },
  ];

  return (
    <>
      <Grid position={'relative'} display={"flex"} flexDirection={"column"} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'}>
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography  mt={2} fontSize={'15px'} fontWeight={'bold'} >NO OF ACCOUNTS</Typography>
          {/* <Typography>12 hours ago  </Typography> */}
        </Grid>
        <Divider variant="middle"/>
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} label={`${item.completed}${item.label}`}/>
      ))}
      </Grid>

      {/* Number of Ussers */}

      <Grid position={'relative'} display={"flex"} flexDirection={"column"} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'} mt={3}>
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography  mt={2} fontSize={'15px'} fontWeight={'bold'} >NO OF USERS</Typography>
          {/* <Typography>12 hours ago  </Typography> */}
        </Grid>
        <Divider variant="middle"/>
        {userData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} label={`${item.completed}${item.label}`}/>
      ))}
      </Grid>
    </>
  )
}

export default AccountUserprog

{/* <Grid position={'relative'} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'}>
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography mb={2} mt={2} fontSize={'15px'} fontWeight={'bold'} >NO OF ACCOUNTS</Typography>
           <Typography>12 hours ago  </Typography> 
        </Grid>
        
      </Grid> */}