import React from 'react';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import { theme } from '../theme'

import Funnel, {
  Title,
  Margin,
  Export,
  Tooltip,
  Item,
  Border,
  Label,
} from 'devextreme-react/funnel';
import { dataSource } from "./Datasource";
import "./style.css"

const Chartfunnel = () => {
  return (
    <>
      <Grid position={'relative'} display={"flex"} flexDirection={"column"} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} >
        <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
          <Typography mb={1} mt={1.5} fontSize={'15px'} fontWeight={'500'} >SALES FUNNEL</Typography>
          {/* <Typography>12 hours ago  </Typography> */}
        </Grid>
        <Divider variant="middle"/>
        <Grid mb={1.7} mt={1} container justifyContent="center">
          <Funnel
            id='funnel'
            dataSource={dataSource}
            palette="Soft Pastel"
            argumentField="argument"
            valueField="value"
          >

            <Label
              visible={true}
              position="inside"
              backgroundColor="none"
              customizeText={formatLabel}
            />
          </Funnel>
        </Grid>




      </Grid>

    </>
  )
  function formatLabel(arg) {
    return `${arg.item.argument}`;
    // return `<span class="label">${arg.percentText}</span><br/>${arg.item.argument}`;
  }
}

export default Chartfunnel



{/* <Grid overflow={'hidden'} position={'relative'} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} >
              <Grid ml={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} color={'#415a71'}>
                <Typography mb={1} mt={1.5} fontSize={'15px'} fontWeight={'500'} >SALES FUNNEL</Typography>
                
              </Grid>
              <Grid mb={2} mt={1} ml={.5} > 
                <Funnel
                  id='funnel'
                  dataSource={dataSource}
                  palette="Soft Pastel"
                  argumentField="argument"
                  valueField="value"
                >
                  
                  <Label
                    visible={true}
                    position="inside"
                    backgroundColor="none"
                   customizeText={formatLabel}
                  />
                </Funnel>
              </Grid>
              



            </Grid> */}