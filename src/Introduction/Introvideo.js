import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid, Avatar, Stack, Divider } from '@mui/material';
import { theme } from '../theme'
import firstimg from "../Images/imgcrm1.jpg"

const Introvideo = () => {
  return (
    <>
    <Grid  position={'relative'} display={"flex"} flexDirection={"column"} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={"10px"}>
              <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
                <Typography mb={1}  fontSize={'15px'} fontWeight={'bold'} >INTRODUCTION VIDEO</Typography>
                {/* <Typography>12 hours ago  </Typography> */}
              </Grid>
              <Divider variant="middle" />
              <Stack>
                {/* {console.log("DATTTTT",data)} */}

                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src={firstimg}
                  sx={{ width: "100%", height: "100%", }}
                />

              </Stack>

            </Grid>
    </>
  )
}

export default Introvideo