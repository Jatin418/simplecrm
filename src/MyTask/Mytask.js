import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid, Paper, Link, Divider } from '@mui/material';
import { theme } from '../theme'


const Mytask = () => {
  const [spacing, setSpacing] = React.useState(0.5);
  return (
    <>
     <Grid display={"flex"} flexDirection={"column"}  position={'relative'} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={"10px"}>
              <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
                <Typography mb={1} fontSize={'15px'} fontWeight={'500'} >MY TASKS</Typography>
                {/* <Typography>12 hours ago  </Typography> */}
              </Grid>
              <Divider variant="middle" />
              <Grid sx={{ flexGrow: 1 }} container mt={1.5}>

                <Grid container justifyContent="center" spacing={1} >

                  <Grid item>
                    <Paper
                      sx={{
                        height: 140,
                        width: 120,
                        backgroundColor: "#f15854"
                      }}
                    >
                      <Grid>
                        <Typography>OVERDUE</Typography>
                        <Typography>1</Typography>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper
                      sx={{
                        height: 140,
                        width: 120,
                        backgroundColor: "#f0ad4e"
                      }}
                    >
                      <Grid>
                        <Typography>PRIORITY</Typography>
                        <Typography>0</Typography>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper
                      sx={{
                        height: 140,
                        width: 120,
                        backgroundColor: "#5da5da"
                      }}
                    >
                      <Grid>
                        <Typography>TODAY</Typography>
                        <Typography>0</Typography>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
                <Link
                  component="button"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", color: "#f15854", marginTop: "15px", marginBottom: "25px", fontSize: "17px" }}
                >
                  View all tasks
                </Link>

              </Grid>



            </Grid>
    </>
  )
}

export default Mytask