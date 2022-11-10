import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

// This is for material ui
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Details() {

  const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const Navigate = useNavigate();


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
      setUserdata(data)
      console.log("get data");
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  // const deleteuser = async (id) => {

  //   const res2 = await fetch(`https:crudappreactjs.herokuapp.com/deleteuser/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });

  //   const deletedata = await res2.json();
  //   console.log(deletedata);

  //   if (res2.status === 422 || !deletedata) {
  //     console.log("error");
  //   } else {
  //     console.log("user deleted");
  //     Navigate("deshboard/service");
  //   }

  // }

  // acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline

  return (
    <Card sx={{ maxWidth: 400, backgroundColor:"#daeaf1" ,color: "black", marginLeft:"500px" }} >
      {/* <CardHeader sx={{textAlign:"center", margin:1}}
        title={<h2>Pathology Lab</h2>}
        subheader={<h3 style={{color:'#ffffff'}} >"{getuserdata.name}"</h3>}
      /> */}
      <CardHeader sx={{ textAlign: "center" } }
        title={<h2>"{getuserdata.acname}"</h2>}
      />
      <CardContent variant="contained" >
        <Typography variant="body2" color="text.#ffffff"  textAlign={"center"}>
          <h3> <AccountCircleTwoToneIcon style={{ color: '#ffffff',float:"left" }} /> ID  :- {id}</h3>
          <h3> <AccountCircleTwoToneIcon style={{ color: '#ffffff',float:"left" }} /> Acount Name  :- {getuserdata.acname}</h3>

          <h3 style={{float:"center"}}>  <DraftsTwoToneIcon style={{ color: '#ffffff',float:"left" }} /> Type:- {getuserdata.type}</h3>

          <h3> <PersonOutlineTwoToneIcon style={{ color: '#ffffff',float:"left" }} /> Owner   :- {getuserdata.owner}</h3>

          <h3><WorkTwoToneIcon style={{ color: '#ffffff',float:"left" }} /> City  :- {getuserdata.city}</h3>

          <h3> <PhoneIphoneTwoToneIcon style={{ color: '#ffffff',float:"left" }} />Source :- {getuserdata.source}</h3>

          <h3> <CottageTwoToneIcon style={{ color: '#ffffff',float:"left" }} /> Sector     :- {getuserdata.sector}</h3>

          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Postcode :- {getuserdata.pstcode}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Sic :- {getuserdata.sic}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  County/State :- {getuserdata.state}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Country :- {getuserdata.country}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Revenue :- {getuserdata.revenue}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Phone :- {getuserdata.phone}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Website :- {getuserdata.websit}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Employee :- {getuserdata.emplye}</h3>
          <h3><DescriptionTwoToneIcon style={{ color: '#ffffff',float:"left" }} />  Address Line :- {getuserdata.addline}</h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      </CardActions>

    </Card>
  );
}











// this is simple form of data



// const Details = () => {

//     const [getuserdata, setUserdata] = useState([]);
//     // console.log(getuserdata);

//     const { id } = useParams("");
//     console.log(id);

//     const Navigate = useNavigate();


//     const getdata = async () => {

//         const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");

//         } else {
//             setUserdata(data)
//             console.log("get data");
//         }
//     }

//     useEffect(() => {
//         getdata();
//     }, [])

//     const deleteuser = async (id) => {

//         const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const deletedata = await res2.json();
//         console.log(deletedata);

//         if (res2.status === 422 || !deletedata) {
//             console.log("error");
//         } else {
//             console.log("user deleted");
//             Navigate("deshboard/service");
//         }

//     }

//     return (
//         <div className="container mt-5">
//             <h4 style={{ fontWeight: 300 }}>Welcome <strong> {getuserdata.name}</strong></h4>

//             <Card sx={{ maxWidth: 600 }}>
//                 <CardContent>
//                     {/* <div className="add_btn">
//                         <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
//                         <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
//                     </div> */}
//                     <div className="row">
//                         <div className="left_view col-lg-6 col-md-6 col-12">
//                             {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
//                             <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
//                             <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3>
//                             <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
//                             <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p>
//                         </div>
//                         <div className="right_view  col-lg-6 col-md-6 col-12">

//                             <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {getuserdata.mobile}</span></p>
//                             <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.add}</span></p>
//                             <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
//                         </div>
//                     </div>

//                 </CardContent>
//             </Card>
//         </div>
//     )
// }

// export default Details