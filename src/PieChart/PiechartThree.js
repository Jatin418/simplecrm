import React from 'react'
import { Grid, Typography,Divider } from '@mui/material';
import { theme } from "../theme"
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);



const data = {
  labels: ["New Users", "deleted users", "Active users"],
  datasets: [
    {
      data: [46, 66, 24, 28, 36, 40, 47, 20, 31],
      backgroundColor: ["#df2727", "#ff8e03", "#4caf50", "#5da5da", "#994c99", "#cf5b8e", "#decf3f", "#ff8484", "#006100"],
      hoverBackgroundColor: ["#f93e30", "#fda840", "#60bd68", "#71b2e1", "#c171c1", "#ff86bb", "#f7e21a", "#fbabab", "#159515"],
      borderWidth: 1
    }
  ]
};
const PiechartThree = () => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <>
      <Grid position={'relative'} container display={"flex"} flexDirection={"column"}  sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'}>
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography mb={1} mt={2} fontSize={'15px'} fontWeight={'bold'} >ACCOUNTS PIECHART - SECTOR</Typography>
          {/* <Typography>12 hours ago  </Typography> */}
        </Grid>
        <Divider variant="middle"  />
        <Doughnut style={{ maxHeight: "300px", maxWidth: "300px", marginTop:"10px" }} data={data} onClick={(e) => onClick(e)} />
      </Grid>
    </>
  )
}

export default PiechartThree; 
