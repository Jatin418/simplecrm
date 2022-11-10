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
      data: [26, 166, 24, 28, 36, 40, 27],
      backgroundColor: ["#ff8e03", "#60bd68", "#5da5da", "#994c99", "#cf5b8e", "#decf3f", "#db2a2a"],
      hoverBackgroundColor: ["#fda840", "#7dff88", "#71b2e1", "#c171c1", "#ff86bb", "#f7e21a", "#f14d4d"],
      borderWidth: 1
    }
  ]
};
const Piecharttwo = () => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <>
      <Grid position={'relative'} container  display={"flex"} flexDirection={"column"}  sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'}>
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography mb={1} mt={2} fontSize={'15px'} fontWeight={'bold'} >ACCOUNTS PIECHART - SOURCE</Typography>
          {/* <Typography>12 hours ago  </Typography> */}
        </Grid>
        <Divider variant="middle"  />
        <Doughnut style={{ maxHeight: "300px", maxWidth: "300px", marginTop:"10px" }} data={data} onClick={(e) => onClick(e)} />
      </Grid>
    </>
  )
}

export default Piecharttwo;
