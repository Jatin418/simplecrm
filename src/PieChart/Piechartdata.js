import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';
import { theme } from "../theme"
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);



const data = {
  labels: ["New Users", "deleted users", "Active users"],
  datasets: [
    {
      data: [26, 166, 24],
      backgroundColor: ["#df4242", "#faa43a", "#60bd68"],
      hoverBackgroundColor: ["#f44336", "#ff9800", "#4caf50"],
      borderWidth: 1
    }
  ]
};
const Piechartdata = () => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <>
      <Grid position={'relative'} display={"flex"} flexDirection={"column"} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'}>
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography mb={1} mt={2} fontSize={'15px'} fontWeight={'bold'} >ACCOUNTS PIECHART - TYPE</Typography>
          {/* <Typography>12 hours ago  </Typography> */}
        </Grid>
        <Divider variant="middle"  />
        <Doughnut style={{ maxHeight: "300px", maxWidth: "300px", marginTop:"10px" }} data={data} onClick={(e) => onClick(e)} />
      </Grid>
    </>
  )
}

export default Piechartdata
