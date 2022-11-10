import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adddata } from './ContextProvider';

//this is for the material ui validation
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const gender = ["Male", "Female", "Other"]
const OwnData = ["Raj", "Jatin"]
const SecData = [
  "Accountancy", "Advertising", "Aerospace", "Agriculture", "Apparel", "Automotive", "Banking", "Biotechnology", "Chemicals", "Communications", "Construction", "Consulting", "Design", "Distribution", "Education", "Electronics", "Energy", "Engineering", "Environmental", "Facilities Management", "Finance", "Food & Beverage",
  "Gaming", "Gardening", "Government", "Healthcare", "Hospitality", "Insurance", "IT", "Legal", "Leisure", "Logistics", "Machinery", "Manufacturing", "Marketing", "Media & Entertainment", "Mining", "Not For Profit", "Office Supplies", "Other", "Packaging", "Pharma", "Photography", "Print", "Property", "Publishing", "Recreation",
  "Recruitment", "Research", "Retail", "Service", "Shipping", "Technology", "Telecoms", "Tobacco", "Training", "Transportation", "Travel", "Unknown", "Utilities", "Wholesale"]
const Typdata = ["Analyst", "Competitor", "Consultant", "Customer", "Dead", "Other", "Personal", "Press", "Prospect", "Supplier", "Suspect"]
const AccRegister = () => {

  const [udata, setUdata] = useContext(adddata);

  // const {Acname,Type,Owner,City,Source,Sector,PostCode,Sic,State,Country,Revenue,Phone,Website,Employee, AddressLine} = AccData 

  const Navigate = useNavigate();

  const [inpval, setINP] = useState({
    acname: "", type: "", owner: "", city: "", source: "", sector: "", pstcode: "", sic: "", state: "", country: "", revenue: "", phone: "", websit: "", emplye: "", addline: "", submitted: false
  })
  console.log("UDATA", udata);
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  // const addinpdata = async (e) => {
  //   e.preventDefault();

  //   const {acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline, } = inpval;

  //   const res = await fetch("http://localhost:8800/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline
  //     })


  //   }).catch((error) => console.log("err", error));

  //   console.log("RES",res);
  //   const data = await res.json();
  //   console.log("Data11", data);

  //   if (res.status === 200 && data) {
  //     console.log("data added");
  //     console.log("Datacount", data);
  //     // Navigate("/Account")
  //     setUdata(data)

  //   } else {
  //     // Here I just put the colon first to set path 
  //     console.log("error ");
  //     alert("error");
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });


  };

  const postregister = async (e) => {
    // e.preventDefault();
    // const API_URL = 'http://localhost:8000/';
    const { acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline} = inpval;
    const res = await fetch("http://localhost:8800/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline
      })

    })
    const data = await res.json();
    console.log("DATA", data);
    if (res.status === 400 || !data) {
      // window.alert("Please fill data");
      console.log("Please fill data");
    } else {
      //window.alert("Registration Successful");
      console.log("Registration Successful");
      Navigate("/Account")

    }
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid item container component="main" sx={{ height: '100%', width: '90%' }} sm={12} ml={13.5} mt={5}>
        {/* <CssBaseline /> */}
        {/* <Grid
              item
              xs={true}
              sm={12}
              md={12}
              sx={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            /> */}
        {/* // Here I can Put the font color and the background color */}
        <Grid item component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 4,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
            </Avatar>*/}
            {/* <RLink to="/dashboard/service" variant="body2" sx={{mb:'2'}}>
                    Patient Data
                </RLink>  */}

            <Box>

              <ValidatorForm
                userref="form"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2} >
                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="Account Name"
                      autoComplete="off"
                      onChange={setdata}
                      name="acname"
                      fullWidth
                      type='text'
                      id="acname"
                      autoFocus
                      value={inpval.acname}
                      validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
                      errorMessages={['this field is required', 'Minimum length is 2', 'Maximum length is 20', 'Use Alphabets Only']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inpval.type}
                        name="type"
                        label="type"
                        onChange={setdata}
                      >
                        {Typdata.map((name, index) => (
                          <MenuItem
                            key={index} value={name}>
                            {name}
                          </MenuItem>))}
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                               <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Owner</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inpval.owner}
                        name="owner"
                        label="owner"
                        onChange={setdata}
                      >
                        {OwnData.map((name, index) => (
                          <MenuItem
                            key={index} value={name}>
                            {name}
                          </MenuItem>))}
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                               <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="City"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="city"
                      type="text"
                      id="description"
                      value={inpval.city}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="Source"
                      fullWidth
                      id="source"
                      onChange={setdata}
                      autoComplete="off"
                      type="text  "
                      name="source"
                      value={inpval.source}
                      validators={['required',]}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inpval.sector}
                        name="sector"
                        label="sector"
                        onChange={setdata}
                      >
                        {SecData.map((name, index) => (
                          <MenuItem
                            key={index} value={name}>
                            {name}
                          </MenuItem>))}
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                               <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="Postcode/Zip"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="pstcode"
                      type="Number"
                      id="pstcode"
                      value={inpval.pstcode}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="Sic"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="sic"
                      type="text"
                      id="sic"
                      value={inpval.sic}
                      // Here The function matchPassword is a dynamic function which is created in the node module Validation Rule 
                      // after ceate the function here we call the function and pass the value of the of confirm password tto math the password and confirmpassword.....
                      validators={['required', 'minStringLength:3']}
                      errorMessages={['this field is required', 'Enter minimum 3 character']}
                    />
                  </Grid>



                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="County/State"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="state"
                      type="text"
                      id="state"
                      value={inpval.state}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Country</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="country"
                        value={inpval.country}
                        name="country"
                        label="Country"
                        onChange={setdata}
                      >
                        {gender.map((name, index) => (
                          <MenuItem
                            key={index} value={name}>
                            {name}
                          </MenuItem>))}
                        {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="Revenue"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="revenue"
                      type="number"
                      id="revenue"
                      value={inpval.revenue}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextValidator
                      label="Phone"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="phone"
                      type="mobile"
                      id="phone"
                      value={inpval.phone}
                      validators={['required', 'minNumber:10']}
                      errorMessages={['this field is required', 'Minimum length is 10']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      label="Website"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="websit"
                      type="text"
                      id="websit"
                      value={inpval.websit}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      label="Employee"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="emplye"
                      type="number"
                      id="emplye"
                      value={inpval.emplye}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      label="Address Line"
                      fullWidth
                      onChange={setdata}
                      autoComplete="off"
                      name="addline"
                      type="text"
                      id="addline"
                      value={inpval.addline}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={postregister}
                  sx={{ mt: 3, mb: 2 }}
                  disabled={inpval.submitted}
                >
                  {
                    (inpval.submitted && 'Your form is submitted!')
                    || (!inpval.submitted && 'Submit')
                  }
                </Button>
              </ValidatorForm>

              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
export default AccRegister;