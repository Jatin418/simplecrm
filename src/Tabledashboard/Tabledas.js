import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, Grid, Link, Paper, Typography } from '@mui/material';
import { theme } from "../theme"

const Tabledas = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#80bfff",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, Opportunities, Value, Opport, Unweighted, Weighted) {
    return { name, Opportunities, Value, Opport, Unweighted, Weighted };
  }

  const rows = [
    createData('Frozen yoghurt', 1, `$1,225`, 4, `$5,850`, `$1,800`),
    createData('Total', 1, `$1,225`, 4, `$5,850`, `$1,800`),

  ];
  return (
    <>
      <Grid  position={'relative'}  display={"flex"} flexDirection={"column"} container sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2, borderColor: theme.palette.primary.liveScoreBoxShadowColor, boxShadow: theme.palette.primary.liveScoreBoxShadow }} p={'10px'}>
        <Grid mb={1} mt={2} >
          <Typography ml={2} sx={{ fontWeight: "600" }}><Link sx={{ textDecoration: "none" }}>OPPORTUNITY</Link>  AND <Link sx={{ textDecoration: "none" }}>FORECAST</Link> SUMMARY</Typography>
        </Grid>
        <Divider variant="middle" />
        <TableContainer component={Paper}  >
          <Table sx={{ minWidth: 700, marginTop:"8px" }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f2f6f8" }}>
                <TableCell />
                <TableCell align="center" colSpan={2} sx={{ fontWeight: "bold" }}>
                  Closed this Month
                </TableCell >
                <TableCell />
                <TableCell align="left" colSpan={1} sx={{ fontWeight: "bold" }} >
                  Pipline
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell align="center" >Opportunities</StyledTableCell>
                <StyledTableCell align="center">Value</StyledTableCell>
                <StyledTableCell align="right" >Opportunities</StyledTableCell>
                <StyledTableCell >Un-weighted</StyledTableCell>
                <StyledTableCell >Weighted</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center" >{row.Opportunities}</StyledTableCell>
                  <StyledTableCell align="center" >{row.Value}</StyledTableCell>
                  <StyledTableCell align="center"  >{row.Opport}</StyledTableCell>
                  <StyledTableCell >{row.Unweighted}</StyledTableCell>
                  <StyledTableCell >{row.Weighted}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  )

}

export default Tabledas;


