import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './ContextProvider'

//this is for the material ui validation
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'; 
import CssBaseline from '@mui/material/CssBaseline';
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

const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const Navigate = useNavigate("");

    const [inpval, setINP] = useState({
      acname: "", type: "", owner: "", city: "", source: "", sector: "", pstcode: "", sic: "", state: "", country: "", revenue: "", phone: "", websit: "", emplye: "", addline: ""
    })

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


    const { id } = useParams(""); 
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8800/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline} = inpval;

        const res2 = await fetch(`http://localhost:8800/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
              acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            Navigate("/Account")
            setUPdata(data2);
        }

    }
    const theme = createTheme(); 
    return (
        <ThemeProvider theme={theme}>
{/* {console.log("values state", values)} */}
<Grid container component="main" sx={{ height: '100%',width:'80%'}} sm={12} mt={5} ml={10} >
  <CssBaseline />
  {/* <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  /> */}
  <Grid item  component={Paper} elevation={6} square style={{backgroundColor:"#DAEAF1",color:"#ffffff"}}>
      <Box
      sx={{
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        
        <h4 style={{ fontWeight: 400, color:"black" }}>Welcome<strong style={{color:"blue"}}> {inpval.acname}</strong></h4>
      {/*
      <RLink to="/dashboard/service" variant="body2">
         Home2
      </RLink> */}

<Grid item container component="main" sx={{ height: '100%', width: '90%' }} sm={12}  >
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
        <Grid item component={Paper} elevation={6} square style={{ backgroundColor: "#DAEAF1" }}>
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
                // onSubmit={handleSubmit}
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
                  onClick={updateuser}
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
 
   </Box>
   </Grid>
  </Grid>
 </ThemeProvider>
    )
}

export default Edit;

























// This form is by material ui and form validator

{/* <ThemeProvider theme={theme}>
{console.log("values state", values)}
<Grid container component="main" sx={{ height: '100vh' }}>
  <CssBaseline />
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
      </Avatar>
      <RLink to="/dashboard/service" variant="body2">
         Home2
      </RLink>

  <Box   sx={{ mt: 3 }}> 
     */}
     {/* <ValidatorForm
      useref="form"
      onSubmit={handleSubmit}
  > */}
    // <Grid container spacing={2}>
    // <Grid item xs={12} sm={6}>
    //   <TextValidator
    //       label="Name"
    //       autoComplete="given-name"
    //       onChange={setdata}
    //       name="name"
    //       fullWidth
    //       id="name"
    //       autoFocus
    //       value={inpval.name}
        //   validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
        //   errorMessages={['this field is required','Minimum length is 2','Maximum length is 20', 'Use Alphabets Only']}
    //   />
    //   </Grid>
    //   <Grid item xs={12} sm={6}>
    //   <TextValidator
    //       label="Email"
    //       fullWidth
    //       id="email"
    //       onChange={setdata}
    //       name="email"
    //       value={inpval.email}
        //   validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
        //   errorMessages={['this field is required','Minimum length is 2','Maximum length is 20', 'Use Alphabets Only']}
//       />
//         </Grid>
//         <Grid item xs={12}> 
//       <TextValidator
//           label="Age"
//           fullWidth
//           id="age"
//           onChange={setdata}
//           name="age"
//           value={inpval.age}
//         //   validators={['required', 'isEmail']}
//         //   errorMessages={['this field is required', 'email is not valid']}
//       />
// </Grid>
//       <Grid item xs={12}>
//       <TextValidator
//           label="Mobile"
//           fullWidth 
//           onChange={setdata}
//           name="mobile"
//           type="number"
//           id="mobile"
//           value={inpval.mobile}
        //   validators={['required','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
        //   errorMessages={['this field is required','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
    //   />
    //   </Grid>
    //   <Grid item xs={12}>
    //   <TextValidator
    //       label="Work"
    //       fullWidth
    //       onChange={setdata}
    //       name="work"
    //       type="text"
    //       id="work"
    //       value={inpval.work}
        //   validators={['required','isPasswordMatch','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
        //   errorMessages={['this field is required','Password Is MisMatch','use atleast one capital and numeric letter',' maximum 15 character allowed']}
    //   />
    //   </Grid>
    //   <Grid item xs={12}>
    //   <TextValidator
    //       label="Address"
    //       fullWidth 
    //       onChange={setdata}
    //       name="add"
    //       type="text"
    //       id="add"
    //       value={inpval.add}
        //   validators={['required','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
        //   errorMessages={['this field is required','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
    //   />
    //   </Grid>
    //   <Grid item xs={12}>
    //   <TextValidator
    //       label="Description"
    //       fullWidth 
    //       onChange={setdata}
    //       name="desc"
    //       type="text"
    //       id="desc"
    //       value={inpval.desc}
        //   validators={['required','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
        //   errorMessages={['this field is required','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
    //   />
    //   </Grid>
    //   </Grid>

      {/* <Button
      type="submit"
      fullWidth
      variant="contained"
      onClick={postregister}
      sx={{ mt: 3, mb: 2 }}
     
      >
      Sign Up
      </Button> */}
    //   <Button
    //       fullWidth
    //       color="primary"
    //       variant="contained"
    //       type="submit"
    //       onClick={updateuser}
    //       sx={{ mt: 3, mb: 2 }}
    //       disabled={inpval.submitted}
    //   >
    //       {
    //           (inpval.isMatch && 'Your form is Submited!')
    //           || (!inpval.isMatch && 'Submit')
    //       }
          {/* {
              (inpval.submitted && 'Your form is submitted!')
              || (!inpval.submitted && 'SignUp')
          } */}
    //   </Button>
      
    {/* </ValidatorForm> */}
  
      {/* <Copyright sx={{ mt: 5 }} /> */}
//    </Box>
 
//   </Box>
//   </Grid>
//  </Grid>
// </ThemeProvider>






// This is the simple form data

// return (
//     <div className="container">
//         <NavLink to="dashboard/service">home2</NavLink>
//         <form className="mt-4">
//             <div className="row">
//                 <div class="mb-3 col-lg-6 col-md-6 col-12">
//                     <label for="exampleInputEmail1" class="form-label">Name</label>
//                     <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 </div>
//                 <div class="mb-3 col-lg-6 col-md-6 col-12">
//                     <label for="exampleInputPassword1" class="form-label">email</label>
//                     <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3 col-lg-6 col-md-6 col-12">
//                     <label for="exampleInputPassword1" class="form-label">age</label>
//                     <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3 col-lg-6 col-md-6 col-12">
//                     <label for="exampleInputPassword1" class="form-label">Mobile</label>
//                     <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3 col-lg-6 col-md-6 col-12">
//                     <label for="exampleInputPassword1" class="form-label">Work</label>
//                     <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3 col-lg-6 col-md-6 col-12">
//                     <label for="exampleInputPassword1" class="form-label">Address</label>
//                     <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3 col-lg-12 col-md-12 col-12">
//                     <label for="exampleInputPassword1" class="form-label">Description</label>
//                     <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
//                 </div>

//                 <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
//             </div>
//         </form> 
//     </div>
// )
